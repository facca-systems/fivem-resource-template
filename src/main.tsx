import React from 'react';
import ReactDOM from 'react-dom/client';

import '@views/styles/index.css';

import { VisibilityProvider } from '@app/contexts/VisibilityContext';
import { Router } from '@app/router/router';
import { isEnvBrowser } from '@app/utils/misc';
import { ToastifyContainer } from '@views/components/Toastify/container';

if (isEnvBrowser()) {
  const body = document.getElementById('root');

  body!.style.backgroundImage = "url('https://files.catbox.moe/4lban5.png')";
  body!.style.backgroundSize = '100%';
  body!.style.backgroundRepeat = 'no-repeat';
  body!.style.backgroundPosition = 'center';
  body!.style.height = '100vh';
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <Router />
      <ToastifyContainer />
    </VisibilityProvider>
  </React.StrictMode>,
);
