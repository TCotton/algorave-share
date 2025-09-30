# Algorave Share Backend

Backend API for Algorave Share, built with Effect for functional programming and composability.

## Features

- ✨ Built with [Effect](https://effect.website/) for type-safe, composable code
- 🚀 HTTP server using @effect/platform
- 📦 TypeScript with ES modules
- 🔄 Hot reload in development mode

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Run the server with hot reload:

```bash
npm run dev
```

The server will start on http://localhost:3001

### Production

Build and run:

```bash
npm run build
npm start
```

## API Endpoints

### Health Check

```
GET /health
```

Response:
```json
{
  "status": "healthy",
  "service": "algorave-share-backend"
}
```

### List Shares

```
GET /api/shares
```

Response:
```json
{
  "shares": [],
  "message": "No shares yet - coming soon!"
}
```

## Project Structure

```
backend/
├── src/
│   ├── index.ts        # Main server entry point
│   ├── api/           # API route handlers (future)
│   └── services/      # Business logic services (future)
├── dist/              # Compiled JavaScript (generated)
├── package.json
└── tsconfig.json
```

## Effect Architecture

This backend uses Effect throughout for:

- **Type Safety**: Compile-time guarantees about success and error cases
- **Composability**: Build complex logic from simple, reusable pieces
- **Resource Management**: Automatic cleanup of resources
- **Error Handling**: Explicit error types in function signatures

### Example Effect Pattern

```typescript
import { Effect, Console } from "effect";
import { HttpRouter, HttpServerResponse } from "@effect/platform";

const router = pipe(
  HttpRouter.empty,
  HttpRouter.get("/hello",
    HttpServerResponse.json({ message: "Hello, Effect!" })
  )
);
```

## Environment Variables

Create a `.env` file:

```env
PORT=3001
AWS_REGION=us-east-1
```

## Development

### Code Style

- Use functional programming patterns
- Leverage Effect for all side effects
- Write pure functions where possible
- Use `pipe` for function composition

### Adding New Routes

1. Add route to the router in `src/index.ts`
2. Use Effect patterns for composability
3. Return proper HTTP responses

Example:

```typescript
HttpRouter.get("/api/new-route",
  HttpServerResponse.json({ data: "example" })
)
```

## Testing

```bash
npm test
```

## Deployment

The backend can be deployed to:
- AWS Lambda with API Gateway
- Traditional Node.js hosting
- Container platforms (Docker/K8s)

See the main README for deployment instructions.

## Dependencies

- **effect**: Core Effect library
- **@effect/platform**: Platform-agnostic HTTP server
- **@effect/platform-node**: Node.js-specific implementations
- **tsx**: TypeScript execution for development
- **typescript**: TypeScript compiler

## Learn More

- [Effect Documentation](https://effect.website/)
- [Effect Platform Guide](https://effect.website/docs/guides/platform)
- [Effect Examples](https://github.com/Effect-TS/effect/tree/main/packages/examples)
