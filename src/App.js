import NavBar from "./component/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./layouts/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "Login", element: <Login /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
