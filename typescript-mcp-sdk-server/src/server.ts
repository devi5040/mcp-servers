import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "hello-world",
  version: "1.0.0",
});

server.registerTool(
  "hello_world",
  {
    description: "It says hello world",
    title: "Hello World",
  },
  async () => {
    return {
      content: [
        {
          type: "text",
          text: "Hello world",
        },
      ],
    };
  },
);

const main = async () => {
  console.error("Starting server...");
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("The server is connected");
};

main().catch((err) => {
  console.error(`Some error occured: ${err}`);
});
