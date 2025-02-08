import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Home />} />
      <Route path="auth/:type" element={<Auth />} />
      <Route path="tasks" element={<Tasks />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  )
);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
