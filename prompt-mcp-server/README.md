# LeetCode Review MCP Server

A simple Model Context Protocol (MCP) server that exposes a reusable prompt for reviewing LeetCode solutions.

This project demonstrates how to provide predefined prompts through the MCP Prompt API, allowing AI clients to consistently analyze code quality, correctness, and optimization opportunities.

## Features

- 💡 Exposes a reusable LeetCode code review prompt
- 📝 Reviews correctness, complexity, and coding style
- ⚡ Built with TypeScript
- 🔌 Uses the official MCP SDK

## Prerequisites

- Node.js 20 or later
- npm

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd leetcode-review-mcp-server
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

## MCP Client Configuration

Example configuration:

```json
{
  "mcpServers": {
    "leetcode-review": {
      "command": "node",
      "args": ["dist/index.js"]
    }
  }
}
```

## Available Prompt

### `review_leetcode_solution`

Reviews a submitted LeetCode solution and provides detailed feedback.

#### Arguments

| Name       | Type   | Description                            |
| ---------- | ------ | -------------------------------------- |
| `problem`  | string | Name or number of the LeetCode problem |
| `language` | string | Programming language used              |
| `code`     | string | Solution to review                     |

#### Example Input

```json
{
  "problem": "1. Two Sum",
  "language": "C++",
  "code": "class Solution { ... }"
}
```

#### Example Output

The prompt guides the AI to review the solution by covering:

- ✅ Correctness
- ⚡ Time Complexity
- 💾 Space Complexity
- ✨ Code Readability
- 🔍 Edge Cases
- 🚀 Possible Optimizations
- 📚 Alternative Approaches

## Project Structure

```text
.
├── src/
│   ├── prompts/
│   │   └── review-leetcode.ts
│   ├── server.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```
