// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $aquos_index from "./routes/aquos/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $ArrowControl from "./islands/ArrowControl.tsx";
import * as $ArrowPad from "./islands/ArrowPad.tsx";
import * as $Channel from "./islands/Channel.tsx";
import * as $Sleep from "./islands/Sleep.tsx";
import * as $ThirdParty from "./islands/ThirdParty.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/aquos/index.tsx": $aquos_index,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/ArrowControl.tsx": $ArrowControl,
    "./islands/ArrowPad.tsx": $ArrowPad,
    "./islands/Channel.tsx": $Channel,
    "./islands/Sleep.tsx": $Sleep,
    "./islands/ThirdParty.tsx": $ThirdParty,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
