import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./layouts/layout";
import Register from "./pages/Register";
import EditProfile from "./pages/EditProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "Login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "EditProfile", element: <EditProfile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
