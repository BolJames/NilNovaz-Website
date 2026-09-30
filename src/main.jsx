// Import React's StrictMode component.
// StrictMode helps detect potential problems in your React app during development.
// It only affects development mode and does NOT appear in the production build.
import { StrictMode } from 'react'

// Import the createRoot() function from React DOM.
// This function creates the root where the React application will be rendered.
import { createRoot } from 'react-dom/client'

// Import the global CSS file.
// Any styles written in index.css will be available throughout the entire application.
import './index.css'

import { AuthProvider } from './context/AuthContext.jsx'

// Import the main App component.
// App.jsx is the root component that contains the rest of your website.
import App from './App.jsx'

// Find the HTML element with id="root" in index.html.
// This is where the entire React application will be displayed.
createRoot(document.getElementById('root')).render(

  // Wrap the App component in StrictMode.
  // This checks for common mistakes and gives helpful warnings while developing.
  <StrictMode>
    <AuthProvider>
      {/* Render the App component inside the root element. */}
      <App />
    </AuthProvider>
  </StrictMode>
)