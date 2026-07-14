# Weather MCP Server

A simple Model Context Protocol (MCP) server that exposes a tool for fetching the current weather for a given city.

This project serves as a starter template for building MCP servers with TypeScript and can be easily extended with additional weather-related tools.

## Features

- 🌤️ Fetch current weather for a city
- 🛠️ Built with TypeScript
- 🔌 Uses the official MCP SDK
- 📦 Simple and easy to extend

## Prerequisites

- Node.js 20 or later
- npm

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd weather-mcp-server
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

Start the MCP server:

```bash
npm start
```

For development:

```bash
npm run dev
```

## Configuration

Create a `.env` file in the project root.

```env
WEATHER_API_KEY=your_api_key
```

Replace `your_api_key` with your weather provider's API key.

## MCP Client Configuration

Example configuration:

```json
{
  "mcpServers": {
    "weather": {
      "command": "node",
      "args": ["dist/index.js"],
      "env": {
        "WEATHER_API_KEY": "your_api_key"
      }
    }
  }
}
```

## Available Tool

### `get_weather`

Returns the current weather for the specified city.

#### Input

```json
{
  "city": "London"
}
```

#### Example Response

```json
{
  "city": "London",
  "temperature": 18,
  "condition": "Cloudy",
  "humidity": 72,
  "windSpeed": 12
}
```

## Project Structure

```text
.
├── src/
│   ├── tools/
│   │   └── get-weather.ts
│   ├── server.ts
│   └── index.ts
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```
