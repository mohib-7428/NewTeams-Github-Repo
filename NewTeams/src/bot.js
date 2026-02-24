const { TeamsActivityHandler, CardFactory } = require('botbuilder');

class TeamsBot extends TeamsActivityHandler {
    constructor() {
        super();

        // Handle message activities
        this.onMessage(async (context, next) => {
            const text = context.activity.text.trim().toLowerCase();
            
            switch (text) {
                case 'help':
                    await this.sendHelpCard(context);
                    break;
                case 'welcome':
                    await this.sendWelcomeCard(context);
                    break;
                default:
                    await context.sendActivity(`You said: ${context.activity.text}`);
                    await context.sendActivity('Type "help" to see available commands.');
            }

            await next();
        });

        // Handle member added events
        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            for (let member of membersAdded) {
                if (member.id !== context.activity.recipient.id) {
                    await this.sendWelcomeCard(context);
                }
            }
            await next();
        });
    }

    async sendWelcomeCard(context) {
        const card = CardFactory.heroCard(
            'Welcome to NewTeams!',
            'Your new Microsoft Teams application is ready to use.',
            ['https://via.placeholder.com/400x200?text=NewTeams'],
            [
                {
                    type: 'imBack',
                    title: 'Get Started',
                    value: 'help'
                }
            ]
        );

        await context.sendActivity({ attachments: [card] });
    }

    async sendHelpCard(context) {
        const card = CardFactory.adaptiveCard({
            type: 'AdaptiveCard',
            version: '1.4',
            body: [
                {
                    type: 'TextBlock',
                    size: 'Large',
                    weight: 'Bolder',
                    text: 'NewTeams Help'
                },
                {
                    type: 'TextBlock',
                    text: 'Available commands:',
                    wrap: true
                },
                {
                    type: 'FactSet',
                    facts: [
                        {
                            title: 'help',
                            value: 'Show this help message'
                        },
                        {
                            title: 'welcome',
                            value: 'Show welcome message'
                        }
                    ]
                }
            ]
        });

        await context.sendActivity({ attachments: [card] });
    }
}

module.exports.TeamsBot = TeamsBot;
