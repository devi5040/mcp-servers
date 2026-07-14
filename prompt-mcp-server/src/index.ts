import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { server } from "./server.js";
import "./prompt.js";

const main = async () => {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Server connected successfully");
};

main().catch((error) => {
  console.error(`The server terminated with error: ${error}`);
});
