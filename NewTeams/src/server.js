const restify = require('restify');
const path = require('path');
require('dotenv').config();

const { BotFrameworkAdapter } = require('botbuilder');
const { TeamsBot } = require('./bot');

// Create HTTP server
const server = restify.createServer();
server.use(restify.plugins.bodyParser());

const PORT = process.env.PORT || 3978;

// Create adapter
const adapter = new BotFrameworkAdapter({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Error handler
adapter.onTurnError = async (context, error) => {
    console.error(`\n [onTurnError] unhandled error: ${error}`);
    await context.sendActivity('The bot encountered an error or bug.');
};

// Create the bot
const bot = new TeamsBot();

// Listen for incoming requests
server.post('/api/messages', async (req, res) => {
    await adapter.processActivity(req, res, async (context) => {
        await bot.run(context);
    });
});

// Serve static files
server.get('/tab', restify.plugins.serveStatic({
    directory: path.join(__dirname, '../public'),
    file: 'tab.html'
}));

server.get('/config', restify.plugins.serveStatic({
    directory: path.join(__dirname, '../public'),
    file: 'config.html'
}));

server.get('/scripts/*', restify.plugins.serveStatic({
    directory: path.join(__dirname, '../public')
}));

// Start server
server.listen(PORT, () => {
    console.log(`\n${server.name} listening on ${server.url}`);
    console.log(`\nNewTeams app is ready!`);
    console.log(`\nBot endpoint: ${server.url}/api/messages`);
});
