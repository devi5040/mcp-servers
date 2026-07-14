# Hello World MCP Server

A minimal Model Context Protocol (MCP) server built with TypeScript. This project is intended as a starting point for building custom MCP servers.

## Features

- Simple Hello World tool
- Built with TypeScript
- Uses the official MCP SDK
- Easy to extend with additional tools and resources

## Prerequisites

- Node.js 20 or later
- npm

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd hello-world-mcp
```

Install dependencies:

```bash
npm install
```

## Build

```bash
npm run build
```

## Run

```bash
npm start
```

Or, during development:

```bash
npm run dev
```

## Configuration

No environment variables are required for this project.

## Using with an MCP Client

Example configuration:

```json
{
  "mcpServers": {
    "hello-world": {
      "command": "node",
      "args": ["dist/index.js"]
    }
  }
}
```

> Adjust the command and path as needed for your MCP client.

## Available Tool

### `hello_world`

Returns a simple greeting.

#### Input

No input is required.

#### Example Response

```json
{
  "message": "Hello, World!"
}
```

## Project Structure

```
.
├── src/
│   ├── tools/
│   ├── index.ts
│   └── server.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Next Steps

You can extend this starter project by adding:

- Additional tools
- Resources
- Prompts
- External API integrations
- Authentication
- Logging and error handling
