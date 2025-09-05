# Morocco Cultural Association Website

## Overview

This is a full-stack web application for a Morocco Cultural Association that connects international students with Moroccan cultural experiences. The application serves as a platform to showcase destinations, activities, events, and facilitate community engagement through a contact system and photo gallery.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, built using Vite
- **Routing**: Client-side routing with Wouter for single-page application navigation
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **State Management**: TanStack Query for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Design System**: Custom color scheme with warm earth tones reflecting Moroccan aesthetics

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API architecture with structured error handling
- **Development Setup**: Hot module replacement with Vite integration
- **Request Logging**: Custom middleware for API request/response logging
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Development Storage**: In-memory storage implementation for development/testing
- **Data Models**: Five main entities - destinations, activities, events, gallery images, and contact messages

### Component Architecture
- **Component Structure**: Modular section-based components (Hero, Navigation, Featured Destinations, etc.)
- **UI Components**: Reusable UI components following atomic design principles
- **Responsive Design**: Mobile-first approach with comprehensive breakpoint coverage
- **Accessibility**: Built-in accessibility features through Radix UI primitives

### Type Safety
- **Shared Types**: Common TypeScript types shared between client and server
- **Schema Validation**: Zod schemas for runtime validation and type generation
- **Database Types**: Type-safe database operations with Drizzle ORM
- **API Types**: Consistent typing across API endpoints

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Connection**: Uses DATABASE_URL environment variable for connection string

### Frontend Libraries
- **Radix UI**: Comprehensive set of low-level UI primitives for building design systems
- **TanStack Query**: Powerful data synchronization for React applications
- **Tailwind CSS**: Utility-first CSS framework
- **React Hook Form**: Performant forms library with easy validation
- **Zod**: TypeScript-first schema validation library
- **Date-fns**: Modern JavaScript date utility library
- **Lucide React**: Icon library with React components

### Development Tools
- **Vite**: Fast build tool and development server
- **Drizzle Kit**: Database toolkit for schema management and migrations
- **ESBuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Static type checking and enhanced developer experience

### Fonts and Assets
- **Google Fonts**: Inter for sans-serif, Playfair Display for serif typography
- **Unsplash/Pixabay**: External image hosting for destination and gallery photos

### UI Components
The application uses a comprehensive design system with over 30 reusable components including forms, navigation, data display, and interactive elements, all built with accessibility and responsive design in mind.