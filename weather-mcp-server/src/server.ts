import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export const server = new McpServer({
  name: "weather_mcp_server",
  version: "v1.0.0",
});
