# Setting up a Typescript MCP Sdk with claude desktop as MCP Host

## Steps to create a simple MCP server

**Step 1: Create a Project Folder and Open the folder**

```bash
mkdir new-mcp-server
cd new-mcp-server
```

**Step 2: Initialize npm**

```bash
npm init -y
```

**Step 3: Install Dependencies**

```bash
npm install @modelcontextprotocol/sdk zod
```

**Step 4: Install typescript specific dev dependencies and initialize typescript**

```bash
npm install -d typescript @types/node tsx

npx tsc --init
```

## Project Structure is

```
new-mcp-server/
|
├── src/
│   |
│   └── server.js
├── node_modules/
├── package.json
└── tsconfig.json
```

## Running mcp inspector

```bash
npx @modelcontextprotocol/inspector@latest node dist/server.js
```

## Connecting mcp server to claude desktop locally

### Option 1:

Step 1: Locate the claude desktop config file. Normally located in below path

```bash
%APPDATA%\Claude\claude_desktop_config.json
```

Step 2: Add your mcp server there

```json
{
  "mcpServers": {
    "my-server": {
      "command": "node",
      "args": ["C:\\Users\\YourName\\Projects\\my-mcp-server\\dist\\index.js"],
      "env": {
        "OPENAI_API_KEY": "your-key"
      }
    }
  }
}
```

### Option 2

install mcpb

```bash
npm install -g @anthropic-ai/mcpb
```

Anthropic now recommends packaging local MCP servers as Desktop Extensions.
Step1: Create a manifest.json
Step 2: Package the server into a .dxt (or newer .mcpb) package
Step 3: Open settings -> extensions
Step 4: Click install extension
Step 5: Select your package
