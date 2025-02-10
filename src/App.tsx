import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router";

import NotFoundError from "./container/NotFoundError";
import AppRoutes from "./route";

const App = () => {
  return (
    <Router>
      <Routes>
        {AppRoutes.map(route => (
          <Route path={route.route} element={<route.component />} />
        ))}
        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </Router>
  )
}

export default App;
