import mcp = require("@modelcontextprotocol/sdk/server/mcp.js");

export const server = new mcp.McpServer({
  name: "prompt-server",
  version: "1.0.0",
});
