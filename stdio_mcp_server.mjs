#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "tokenjobs",
  boardId: "tokenjobs-official",
  domain: "tokenjobs.io",
  npmName: "zc-tokenjobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
