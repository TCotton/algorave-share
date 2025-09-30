# Getting Started with Algorave Share

This guide will help you get the Algorave Share application up and running on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.x or higher
- **npm** 10.x or higher
- **Terraform** 1.0 or higher (for infrastructure deployment)
- **AWS CLI** configured with credentials (for infrastructure deployment)

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/TCotton/algorave-share.git
cd algorave-share
```

### 2. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at http://localhost:3000

### 3. Start the Backend (in a new terminal)

```bash
cd backend
npm install
npm run dev
```

The backend API will be available at http://localhost:3001

## Development Workflow

### Frontend Development

The frontend is built with Next.js 15 and uses the App Router. Key directories:

- `app/` - Pages and routes
- `lib/services/` - Effect-based services for API communication
- `public/` - Static assets

**Available Scripts:**

```bash
npm run dev     # Start development server
npm run build   # Create production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

### Backend Development

The backend uses Effect for functional programming and composability.

**Available Scripts:**

```bash
npm run dev     # Start development server with hot reload
npm run build   # Compile TypeScript to JavaScript
npm run start   # Start production server
```

### API Endpoints

The backend provides the following endpoints:

- `GET /health` - Health check endpoint
- `GET /api/shares` - List all shares
- `POST /api/shares` - Create a new share (coming soon)
- `GET /api/shares/:id` - Get a specific share (coming soon)

## Infrastructure Deployment

### 1. Configure AWS Credentials

Ensure your AWS credentials are configured:

```bash
aws configure
```

### 2. Initialize Terraform

```bash
cd infrastructure
terraform init
```

### 3. Review the Plan

```bash
terraform plan
```

### 4. Apply Infrastructure

```bash
terraform apply
```

This will create:
- S3 bucket for audio storage
- S3 bucket for code storage
- Versioning and security configurations

### 5. Get Outputs

After applying, get the bucket names:

```bash
terraform output
```

## Project Structure

```
algorave-share/
├── frontend/              # Next.js frontend application
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Home page
│   │   ├── share/        # Share code page
│   │   └── browse/       # Browse shares page
│   ├── lib/              # Shared utilities
│   │   └── services/     # Effect-based API services
│   └── public/           # Static assets
│
├── backend/              # Backend API with Effect
│   └── src/
│       └── index.ts      # Main server file
│
└── infrastructure/       # Terraform configuration
    ├── main.tf          # Main infrastructure
    ├── variables.tf     # Configuration variables
    └── outputs.tf       # Infrastructure outputs
```

## Environment Variables

### Frontend

Create a `.env.local` file in the `frontend` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Backend

Create a `.env` file in the `backend` directory:

```env
PORT=3001
AWS_REGION=us-east-1
```

## Troubleshooting

### Port Already in Use

If you get an error that port 3000 or 3001 is already in use:

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

### Terraform State Issues

If you need to reset Terraform state:

```bash
cd infrastructure
rm -rf .terraform
rm terraform.tfstate*
terraform init
```

### Build Errors

If you encounter build errors:

```bash
# Clear Next.js cache
cd frontend
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

- Implement file upload functionality
- Add database for storing share metadata
- Implement authentication
- Add tests
- Deploy to production

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Effect Documentation](https://effect.website/)
- [Terraform Documentation](https://www.terraform.io/docs)
- [Strudel](https://strudel.cc/)
- [TidalCycles](https://tidalcycles.org/)
