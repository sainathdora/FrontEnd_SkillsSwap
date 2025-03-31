import ProfileCardNeeds from "./ProfileCardNeeds";
import dummydata from "../../assets/dummydata.json";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/Authcontext";
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
        const users = resjson.filter((p) => {
          return p.id !== loggedUser.id;
        });
        setPeople(users);
      }
    }
    GetUsers();
  }, []);
  console.log("people = ", people);
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-3xl p-4">People who might need your Services </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {people.length > 0
            ? people.map(function (p, i) {
                return <ProfileCardNeeds name={p.name} key={p.id} />;
              })
            : "Loading..."}
        </section>
      </div>
    </>
  );
}
