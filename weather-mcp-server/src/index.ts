import "./tools.js";

import { server } from "./server.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

async function main() {
  const transport = new StdioServerTransport();

  await server.connect(transport);

  console.error("Server connected");
}

main().catch((error) => {
  console.error(`Error starting server: ${error}`);
});
