import { server } from "./server.js";
import fs from "node:fs/promises";
import { PDFParse } from "pdf-parse";

server.registerResource(
  "pdf-reader",
  "file:///D:/MCP/resource-mcp-server/src/orila-document.pdf",
  {
    title: "PDF Documents",
    description: "Read PDF files",
    mimeType: "text/plain",
  },
  async (uri: any) => {
    const buffer = await fs.readFile(
      "D://mcp/resource-mcp-server/src/oprila-document.pdf",
    );
    const uint8 = new Uint8Array(buffer);
    const data = new PDFParse(uint8);

    return {
      contents: [
        {
          uri: uri.href,
          mimeType: "text/plain",
          text: (await data.getText()).text,
        },
      ],
    };
  },
);
