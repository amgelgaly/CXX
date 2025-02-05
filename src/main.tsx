import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider

// Check if the problematic extension script is present
if (document.querySelector('script[src^="chrome-extension://egjidjbpglichdcondbcbdnbeeppgdph/"]')) {
  console.warn('Problematic Chrome extension detected. Halting application to prevent errors.');
  // Optionally, render a message to the user in the root element
  const container = document.getElementById('root');
  if (container) {
    container.innerHTML = '<div style="font-family: sans-serif; padding: 20px; color: red;"><h1>Preview Blocked</h1><p>A Chrome extension is interfering with the application preview. Please disable extensions, or specifically the "GPT Engineer" extension, to view the preview correctly.</p></div>';
  }
} else {
  const container = document.getElementById('root');

  if (!container) {
    console.error("Root element with id 'root' not found!");
    // Fallback mechanism - render a simple error message in the body
    document.body.innerHTML = '<div><h1>Root element not found</h1><p>Please ensure your index.html has a div with id="root".</p></div>';
  } else {
    const root = createRoot(container);

    root.render(
      <StrictMode>
        <AuthProvider>
          <App />
        </AuthProvider>
      </StrictMode>
    );
  }
}
