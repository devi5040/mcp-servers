import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { server } from "./server.js";
import "./resource.js";

const main = async () => {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("The server started");
};

main().catch((err) => {
  console.error(`Error while starting server: ${err}`);
});
