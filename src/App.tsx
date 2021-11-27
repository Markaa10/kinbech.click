import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "pages/auth";
import SalesmanDashboardPage from "pages/salesman/dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SalesmanDashboardPage />} path="/" />
        <Route element={<AuthPage />} path="/auth" />
        <Route element={<SalesmanDashboardPage />} path="/dashboard" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
