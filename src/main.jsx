import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import {RouteLanding} from "./routes/RouteLanding.jsx";
import { AppProvider } from './context/AppProvider.jsx';
import "./styles/tokens.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AppProvider>
      <BrowserRouter basename="/landing">
          <RouteLanding />
        </BrowserRouter>
     </AppProvider>
      
  </StrictMode>
)
