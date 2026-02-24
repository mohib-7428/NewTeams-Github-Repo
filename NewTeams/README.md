# NewTeams

A Microsoft Teams-based application for enhanced collaboration and productivity.

## Features

- **Bot Integration**: Interactive bot with commands and adaptive cards
- **Custom Tabs**: Personal and configurable team tabs
- **Teams SDK Integration**: Full Microsoft Teams JavaScript SDK support
- **Responsive Design**: Works across all Teams clients (web, desktop, mobile)
- **Theme Support**: Automatic theme adaptation (default, dark, high contrast)

## Prerequisites

- Node.js (v14 or higher)
- Microsoft Teams account
- Azure Bot Service registration (for production)
- ngrok or similar tunneling tool (for local development)

## Setup

1. **Install dependencies**:
   ```bash
   cd NewTeams
   npm install
   ```

2. **Configure environment variables**:
   Edit `.env` file with your Microsoft App credentials:
   ```
   MICROSOFT_APP_ID=your-app-id
   MICROSOFT_APP_PASSWORD=your-app-password
   MICROSOFT_APP_TENANT_ID=your-tenant-id
   ```

3. **Update manifest.json**:
   - Replace the placeholder IDs with your actual App ID
   - Update the `validDomains` with your actual domain

4. **Start the application**:
   ```bash
   npm start
   ```

## Development

Run in development mode with auto-restart:
```bash
npm run dev
```

## Deployment

1. **Create an Azure Bot Service**:
   - Go to Azure Portal
   - Create a new "Azure Bot" resource
   - Note the App ID and generate a password

2. **Update configuration**:
   - Add the credentials to `.env`
   - Update `manifest.json` with your bot ID and domain

3. **Package the app**:
   - Zip the `manifest.json` and icon files
   - Upload to Teams via App Studio or Teams Admin Center

## Project Structure

```
NewTeams/
├── src/
│   ├── server.js          # Express server and routing
│   └── bot.js             # Teams bot logic
├── public/
│   ├── tab.html           # Personal tab UI
│   └── config.html        # Configuration page
├── config/                # Additional configuration files
├── manifest.json          # Teams app manifest
├── package.json           # Node.js dependencies
└── .env                   # Environment variables
```

## Available Bot Commands

- `help` - Display available commands
- `welcome` - Show welcome message

## Customization

### Adding New Bot Commands

Edit `src/bot.js` and add new cases in the switch statement:

```javascript
case 'your-command':
    await context.sendActivity('Your response');
    break;
```

### Customizing the Tab

Edit `public/tab.html` to modify the personal tab interface.

### Adding New Features

- Messaging extensions: Add to `manifest.json` under `composeExtensions`
- Task modules: Implement in bot or tab code
- Connectors: Add webhook configurations

## License

MIT

## Support

For issues and questions, please open an issue on the repository.
