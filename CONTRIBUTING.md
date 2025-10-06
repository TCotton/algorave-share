# Contributing to Algorave Share

Thank you for your interest in contributing to Algorave Share! This document provides guidelines for contributing to the project.

## Code of Conduct

Please be respectful and constructive in all interactions. We're building a welcoming community for algorave enthusiasts and developers.

## How to Contribute

### Reporting Bugs

If you find a bug:

1. Check if it's already reported in the [Issues](https://github.com/TCotton/algorave-share/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your environment (OS, Node version, etc.)

### Suggesting Enhancements

We welcome feature suggestions! Please:

1. Check existing issues first
2. Create an issue describing:
   - The problem you're trying to solve
   - Your proposed solution
   - Any alternatives you've considered

### Pull Requests

1. **Fork the repository** and create a branch from `main`
2. **Make your changes** following the coding standards below
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Commit your changes** with clear, descriptive messages
6. **Submit a pull request** with a description of your changes

## Development Setup

See [GETTING_STARTED.md](GETTING_STARTED.md) for detailed setup instructions.

Quick start:

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/algorave-share.git
cd algorave-share

# Frontend
cd frontend
npm install
npm run dev

# Backend (new terminal)
cd backend
npm install
npm run dev
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Prefer functional programming patterns
- Use Effect for composable, type-safe code

### Code Style

- Follow the existing code style
- Use 2 spaces for indentation
- Run ESLint before committing:
  ```bash
  npm run lint
  ```

### Naming Conventions

- **Files**: Use kebab-case for file names (`user-service.ts`)
- **Components**: Use PascalCase for React components (`ShareCard.tsx`)
- **Functions**: Use camelCase for functions (`getUserShares`)
- **Constants**: Use UPPER_SNAKE_CASE for constants (`API_BASE_URL`)

### Effect Patterns

When using Effect:

- Use `Effect.gen` for sequential operations
- Use `pipe` for function composition
- Properly handle errors with Effect's error channel
- Use Context for dependency injection

Example:

```typescript
import { Effect, Context } from "effect";

const getUserEffect = (id: string) =>
  Effect.gen(function* () {
    const service = yield* ApiService;
    const user = yield* service.getUser(id);
    return user;
  });
```

## Testing

### Frontend Tests

```bash
cd frontend
npm test
```

### Backend Tests

```bash
cd backend
npm test
```

## Commit Messages

Write clear, descriptive commit messages:

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Start with a capital letter
- Keep first line under 72 characters
- Add detailed description if needed

Good examples:
```
Add audio upload functionality
Fix routing issue in share page
Update README with deployment instructions
```

## Project Structure

```
frontend/         # Next.js frontend
  app/           # App Router pages
  lib/           # Shared utilities and services
  
backend/         # Effect-based backend
  src/           # Source code
    api/         # API routes
    services/    # Business logic
    
infrastructure/ # Terraform config
```

## Pull Request Process

1. Update README.md with details of significant changes
2. Update documentation for new features
3. Ensure all tests pass
4. Get review approval from maintainers
5. Squash commits if requested

## Questions?

Feel free to:
- Open an issue for discussion
- Join our community discussions
- Reach out to maintainers

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
