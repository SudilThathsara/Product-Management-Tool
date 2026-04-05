# Product Management Application

A fully functional, responsive Product Management application built with Next.js, React, and Tailwind CSS. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on a list of products. Data is persisted on the client-side using `localStorage` via Zustand, ensuring a seamless experience without the need for a backend service.

## Features

- **Product CRUD**: Create, read, update, and delete product items.
- **Client-Side Persistence**: Data is preserved across sessions using `localStorage`.
- **Search & Filtering**: Quickly find products using search functionality and applied filters.
- **Responsive Layout**: A modern grid layout that adapts to various screen sizes.
- **Dark Mode Support**: Built-in light and dark themes using `next-themes`.
- **Form Validation**: Robust client-side validation using React Hook Form and Zod.
- **Toast Notifications**: Interactive user feedback via `sonner`.

## Tech Stack Used

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) (with `persist` middleware for `localStorage`)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Setup Instructions

To get the project running locally, follow these steps:

1. **Clone the repository** (if applicable) or download the source code.

2. **Navigate into the project directory**:
   ```bash
   cd "Product Management"
   ```

3. **Install dependencies**:
   Using `npm`:
   ```bash
   npm install
   ```
   *(Or alternatively, `yarn install` or `pnpm install`)*

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Assumptions or Improvements

### Assumptions

- **Client-Side Data**: It's assumed that this application is intended to run fully on the client for demonstration or single-user purposes, hence the choice of `localStorage` (via Zustand persist) instead of an actual backend database.
- **Modern Browsers**: Assumes the user is running a modern browser that fully supports `localStorage` and modern CSS features (like Grid and Flexbox).
- **Development Environment**: Assumes Node.js is installed on the machine running the project.

### Potential Improvements

- **Backend Integration**: Transitioning from `localStorage` to a real database (e.g., PostgreSQL, MongoDB) using Next.js API routes or a separate backend server. This would allow for multi-user support, authentication, and data synchronization across devices.
- **Authentication**: Implementing user authentication and authorization using tools like NextAuth (Auth.js) or Clerk so users can manage their own distinct product catalogs securely.
- **Pagination / Infinite Scroll**: Adding pagination or infinite scrolling for the product grid to improve performance and user experience if the product list grows to hundreds or thousands of items.
- **Image Upload Integration**: Connecting the app to a storage bucket (like AWS S3, Cloudinary, or Supabase Storage) to allow users to securely upload and host real image files instead of relying on external URLs.
- **Automated Testing**: Implementing End-to-End (E2E) testing with Cypress or Playwright, along with comprehensive unit tests using Jest or Vitest, to ensure the application remains stable and bug-free as new features are introduced.
- **Advanced Filtering**: Adding capabilities to filter by price range, multiple categories, rating, or stock status.
