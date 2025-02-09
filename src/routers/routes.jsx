import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Auth from "../pages/Auth";
import Tasks from "../pages/Tasks";
import Settings from "../pages/Settings";
import App from "../App";
import Register from "../pages/Register";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<App />} />
      <Route path="auth/register" element={<Register />} />
      <Route path="tasks" element={<Tasks />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  )
);
