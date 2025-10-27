#  🔐 NextAuth.js Authentication System

A comprehensive, production-ready authentication system built with Next.js 14, NextAuth.js v5, and Prisma. This project demonstrates modern authentication patterns with role-based access control, two-factor authentication, and social OAuth integration.

##   Problem Being Solved

This project addresses the common challenge of implementing secure, scalable authentication in modern web applications. It provides:

- **Secure user authentication** with multiple providers
- **Role-based access control** (Admin/User roles)
- **Two-factor authentication** for enhanced security
- **Email verification** and password reset flows
- **Multi-provider OAuth** integration (Google, GitHub)
- **Protected routes** with middleware-based authorization
- **Server and client component** integration patterns

##  ️ Architecture Overview

### Project Structure
```
├── app/                    # Next.js 14 App Router
│   ├── (protected)/        # Protected routes
│   ├── auth/                 # Authentication pages
│    └── api/                  # API routes
├── components/              # Reusable UI components
│   ├── auth/               # Authentication-specific components
│    └── ui/                   # Base UI components (shadcn/ui)
├── data/                    # Database access layer
├── lib/                     # Utility libraries
├── actions/                 # Server actions
├── schemas/                 # Zod validation schemas
└── prisma/                 # Database schema and migrations
```

##  ️ Tech Stack

### Core Technologies
- **Next.js 14** - React framework with App Router
- **NextAuth.js v5** - Authentication library
- **Prisma** - Database ORM with PostgreSQL
- **Tailwind CSS** - Styling framework
- **shadcn/ui** - Component library
- **Zod** - Schema validation
- **React Hook Form** - Form management
- **Resend** - Email service provider

### Authentication Providers
- **Credentials** - Email/password authentication
- **Google OAuth** - Social authentication
- **GitHub OAuth** - Social authentication

##  🔐 Key Features

### 1. Multi-Provider Authentication
- Email/password with bcrypt hashing
- Google OAuth integration
- GitHub OAuth integration

### 2. Security Features
- **Two-Factor Authentication (2FA)** - Enhanced security for user accounts
- **Email Verification** - Required for new accounts
- **Password Reset** - Secure token-based reset flow

### 3. Role-Based Access Control
- **User roles**: ADMIN, USER
- **Role gates** - Component-level permission control
- **Protected routes** - Automatic redirect for unauthenticated users

### 4. Database Schema
Comprehensive Prisma schema with:
- User accounts with roles
- OAuth account linking
- Verification tokens
- Password reset tokens
- Two-factor authentication tokens

### 5. Email Services
- **Verification emails** for new account activation
- **Password reset emails** with secure tokens
- **Two-factor authentication emails** with time-based codes

##  📁 Core Components

### Authentication Components
- [`LoginForm`](components/auth/login-form.js:28) - Handles user login with 2FA support
- [`RegisterForm`](components/auth/register-form.js:25) - User registration with email verification
- [`RoleGate`](components/auth/role-gate.js:7) - Controls access based on user roles
- [`CardWrapper`](components/auth/card-wrapper.js) - Authentication card layout
- [`Social`](components/auth/social.js) - OAuth provider buttons

### UI Components (shadcn/ui)
- [`Button`](components/ui/button.jsx) - Reusable button component
- [`Card`](components/ui/card.jsx) - Card layout component
- [`Form`](components/ui/form.jsx) - Form handling with validation

##  🔄 Authentication Flows

### 1. User Registration
1. User fills registration form
2. System creates user with hashed password
3. Verification email sent with secure token
4. User clicks verification link to activate account

### 2. User Login
1. User enters credentials
2. System validates email verification status
3. If 2FA enabled, sends code via email
4. User enters 2FA code for final authentication

### 3. Password Reset
1. User requests password reset
2. System generates secure reset token
3. Reset email sent with tokenized link
4. User sets new password

##  ️ Database Models

### User Model
- **id** - Unique identifier
- **email** - User's email address
- **emailVerified** - Email verification timestamp
- **role** - User role (ADMIN/USER)
- **isTwoFactorEnabled** - 2FA status
- **password** - Hashed password (nullable for OAuth users)
- **accounts** - Linked OAuth accounts
- **twoFactorConfirmation** - 2FA verification record

### Token Models
- **VerificationToken** - Email verification tokens
- **PasswordResetToken** - Password reset tokens
- **TwoFactorToken** - Two-factor authentication tokens

##   Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- OAuth app credentials (Google, GitHub)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
4. Configure database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

### Environment Variables
```env
# Database
DATABASE_URL="postgresql://..."

# OAuth Providers
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."

GITHUB_CLIENT_ID="..."
GITHUB_CLIENT_SECRET="..."

# Email Service
RESEND_API_KEY="..."

# NextAuth
NEXTAUTH_SECRET="..."
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Running the Application
```bash
# Development server
npm run dev

# Production build
npm run build
npm start
```

##  🔒 Security Implementation

### Middleware Protection
- [`middleware.js`](middleware.js:12) - Protects routes and handles authentication state

##  📊 API Routes

### Authentication API
- [`/api/auth/[...nextauth]`](app/api/auth/[...nextauth]/route.js:1) - NextAuth.js API route handler

##   UI/UX Features

- **Responsive design** with Tailwind CSS
- **Dark/light theme** support with next-themes
- **Form validation** with Zod schemas
- **Toast notifications** with Sonner
- **Loading states** and error handling

##  ️ Role-Based Access

### Admin Features
- Access to admin dashboard
- Server action testing
- API route testing

##  📧 Email Templates

### Professional Email Templates
- **Verification emails** - Account activation
- **Password reset emails** - Secure password recovery
- **Two-factor authentication** - Time-based verification codes

##  🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start** - Run production server
- `npm run lint` - Run ESLint

##  📈 Production Ready Features

- **Database optimization** with Prisma
- **Token expiration** - Security token management
- **Error handling** - Comprehensive error management
- **Logging** - Development and production logging

##  🤝 Contributing

This project serves as a reference implementation for modern authentication patterns using Next.js and NextAuth.js.

##  📄 License

MIT License - feel free to use this as a starting point for your authentication needs.

---

**Built with  ❤️ by MH**
