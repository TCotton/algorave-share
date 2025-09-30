import { Effect, Console, pipe } from "effect";
import { HttpRouter, HttpServer, HttpServerRequest, HttpServerResponse } from "@effect/platform";
import { NodeHttpServer, NodeRuntime } from "@effect/platform-node";
import * as Http from "node:http";

// Define API routes
const router = pipe(
  HttpRouter.empty,
  HttpRouter.get("/health",
    HttpServerResponse.json({ status: "healthy", service: "algorave-share-backend" })
  ),
  HttpRouter.get("/api/shares",
    HttpServerResponse.json({ 
      shares: [],
      message: "No shares yet - coming soon!"
    })
  ),
  HttpRouter.get("/",
    HttpServerResponse.json({ message: "Algorave Share API" })
  )
);

// Create HTTP server with middleware
const app = router.pipe(HttpServer.serve());

// Main program
const program = pipe(
  Console.log("Starting Algorave Share Backend..."),
  Effect.flatMap(() => Console.log("Server running on http://localhost:3001")),
  Effect.flatMap(() => Effect.never),
  Effect.provide(app),
  Effect.provide(NodeHttpServer.layer(() => Http.createServer(), { port: 3001 }))
);

// Run the program
NodeRuntime.runMain(program);
