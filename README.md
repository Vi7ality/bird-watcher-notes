# Observation App

A web application to manage bird observation records. Users can add, edit, view, and delete observations. This project is built with React, Material-UI (MUI), and uses Vite for fast development and bundling.

## Features

- **Add New Observation:** Allows users to add new bird observation records.
- **Edit Observation:** Users can edit details of existing observations, including bird species, location, date, and time.
- **Delete Observation:** Users can delete observations with a confirmation modal.
- **View Observation List:** Displays a list of all observations with details including bird name, location, date, and time.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Material-UI (MUI):** A popular React UI framework for building beautiful and responsive UIs.
- **Vite:** A modern build tool that provides a fast development experience and optimized bundling for production.
- **React Router:** For routing between different pages (Add, Edit, List, etc.).
- **Local Storage:** Data is stored locally in the browser for persistence across sessions.

## Setup

To get started with the project, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/observation-app.git
   cd observation-app
   ```

2. Install dependencies using `npm` or `yarn`:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open your browser and go to `http://localhost:5173` to see the application running.

- **/components:** Contains reusable UI components like `ObservationList`, `EditObservation`, `AddObservation`, and `ConfirmDeleteDialog`.
- **/pages:** Contains the main pages for the app (`Edit`, `Add`, and `Home`).
- **/hooks:** Custom hooks (if any) used in the app.
- **/utils:** Utility functions (e.g., for local storage operations).
- **/styles:** Global styles or theme configuration (if applicable).

## Development

Vite offers a fast development environment with hot module replacement (HMR), making it ideal for React development. During development, you can quickly see your changes in the browser without needing to refresh.

### Available Scripts

- **npm run dev:** Starts the development server.
- **npm run build:** Bundles the app for production using Vite.
- **npm run preview:** Serves the production build locally for testing.

## Production Build

When you're ready to deploy, you can build the app for production using:

```bash
npm run build
# or
yarn build
```

This will create an optimized production build in the `/dist` directory.
