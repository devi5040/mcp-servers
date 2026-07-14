# Resume MCP Server

A simple Model Context Protocol (MCP) server that exposes a PDF resume as an MCP resource.

This project demonstrates how to share static resources with AI clients using the MCP Resource API.

## Features

- 📄 Exposes a resume PDF as an MCP resource
- 📂 Built with TypeScript
- 🔌 Uses the official MCP SDK
- 🚀 Simple starter project for learning MCP resources

## Prerequisites

- Node.js 20 or later
- npm

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd resume-mcp-server
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

No environment variables are required.

Place your resume PDF inside the `resources` directory.

Example:

```text
resources/
└── resume.pdf
```

## MCP Client Configuration

Example configuration:

```json
{
  "mcpServers": {
    "resume": {
      "command": "node",
      "args": ["dist/index.js"]
    }
  }
}
```

## Available Resource

### `resume://latest`

Provides access to the latest version of the resume PDF.

#### Resource Information

| Property    | Value                       |
| ----------- | --------------------------- |
| URI         | `resume://latest`           |
| MIME Type   | `application/pdf`           |
| Description | Latest resume in PDF format |

## Example Usage

An AI client can request the resource:

```text
Read the resource: resume://latest
```

The MCP server responds with the contents of `resume.pdf`.

## Project Structure

```text
.
├── resources/
│   └── resume.pdf
├── src/
│   ├── resources/
│   │   └── resume.ts
│   ├── server.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```
