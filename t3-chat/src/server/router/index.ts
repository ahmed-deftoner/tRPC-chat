// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { RoomRouter } from "./room";
import { authRouter } from "./auth";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("room.", RoomRouter)
  .merge("auth.", authRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
