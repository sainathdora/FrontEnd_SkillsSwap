import ProfileCardNeeds from "./ProfileCardNeeds";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/Authcontext";
import { setIntersection } from "../../utils/Users";

export default function NeedYou() {
  const [people, setPeople] = useState([]);
  const { loggedUser } = useAuth();

  useEffect(() => {
    async function GetUsers() {
      let token = localStorage.getItem("jwtToken");
      if (token) {
        const res = await fetch("http://localhost:8080/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const resjson = await res.json();
        console.log("logged user ", loggedUser);

        const users = resjson.filter((p) => p.id !== loggedUser?.id);
        setPeople(users);
      }
    }
    GetUsers();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-3xl p-4">People who might need your Services</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {people.length > 0
            ? people.map((p) => {
                if (
                  p.needs &&
                  loggedUser?.skills &&
                  setIntersection(p.needs, loggedUser.skills).length > 0
                ) {
                  return (
                    <ProfileCardNeeds
                      name={p.name}
                      key={p.id}
                      needs={p.needs}
                    />
                  );
                }
                return null;
              })
            : "Loading..."}
        </section>
      </div>
    </>
  );
}
