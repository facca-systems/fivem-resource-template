import { HashRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '@views/layout';

export function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />} path="/" />
      </Routes>
    </HashRouter>
  );
}
