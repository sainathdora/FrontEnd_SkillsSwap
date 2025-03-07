import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

export default function Login() {
  const [email, setEmail] = useState("");
  const { isLoggedIn, login, setUser } = useAuth();
  const nav = useNavigate();
  const [password, setPassword] = useState("");
  async function LogInHandler(e) {
    e.preventDefault();
    setEmail(e.target[0].value);
    setPassword(e.target[1].value);
    const res = await fetch("https://json-server-pt0c.onrender.com/users");
    const data = await res.json();
    console.log(data);
    const user = data.filter((obj) => {
      return obj.email === email && obj.password === password;
    });
    if (user.length > 0) {
      nav("/");
      login();
      setUser(user);
      return;
    } else {
      alert("Wrong password or email");
    }
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
          <form onSubmit={LogInHandler}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
