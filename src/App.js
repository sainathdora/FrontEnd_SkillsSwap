import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./layouts/layout";
import Register from "./pages/Register";
import EditProfile from "./pages/EditProfile";
import { useAuth } from "./context/Authcontext";
import { useEffect } from "react";

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
  const { setloggedUser, login } = useAuth();
  async function find_user_by_mail(email, token) {
    console.log("token = ", token);
    try {
      const res = await fetch(`http://localhost:8080/users/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        console.log("something aint right");
      }
      const user = await res.json();
      login();
      setloggedUser(user);
    } catch (err) {
      console.log("err", err);
    }
  }
  useEffect(() => {
    if (localStorage.getItem("jwtToken")) {
      let token = localStorage.getItem("jwtToken");
      const parts = token.split(".");
      const payload = parts[1]; // Extract the second part
      let user_details = JSON.parse(atob(payload));
      find_user_by_mail(user_details.sub, token);
    }
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
