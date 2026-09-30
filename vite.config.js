// Import the defineConfig helper function from Vite.
// It provides better code completion and validates your configuration.
import { defineConfig } from "vite";

// Import the React plugin for Vite.
// This plugin allows Vite to understand React code (JSX)
// and enables features like Fast Refresh when you save changes.
import react from "@vitejs/plugin-react";

// Import the Tailwind CSS plugin for Vite.
// This plugin integrates Tailwind CSS with Vite
// so your utility classes are processed automatically.
import tailwindcss from "@tailwindcss/vite";

// Export the Vite configuration.
// "export default" makes this configuration available
// whenever Vite starts the development server or builds the project.
export default defineConfig({

  // The plugins array tells Vite which plugins to use.
  plugins: [

    // Enable React support.
    react(),

    // Enable Tailwind CSS support.
    tailwindcss(),

  ],
});