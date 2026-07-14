import { server } from "./server.js";

server.registerPrompt(
  "code-review",
  {
    title: "Code review for cpp",
    description: "This will review given code for a leetcode problem",
  },
  ({ code }) => ({
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `You are an ai assistant who will review the provided leetcode code in cpp language. You will understand the problem name by looking at the function name and will look at the structure of the code and it's working and provide the feedback on the provided code. The code is: ${code}`,
        },
      },
    ],
  }),
);
