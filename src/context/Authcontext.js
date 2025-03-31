import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setloggedUser] = useState({});
  const setUser = (e) => setloggedUser(e);
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
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
        console.log("res from authcontext: ", res);
        console.log("something aint right");
        return { msg: "Failed Something went Wrong" };
      }
      const user = await res.json();
      login();
      setloggedUser(user);
    } catch (err) {
      console.log("err", err);
    }
  }
  useEffect(() => {
    let token = localStorage.getItem("jwtToken");
    if (token) {
      const parts = token.split(".");
      const payload = parts[1];
      let user_details = JSON.parse(atob(payload));
      find_user_by_mail(user_details.sub, token);
      console.log(user_details);
    } else {
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, setUser, loggedUser, setloggedUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
