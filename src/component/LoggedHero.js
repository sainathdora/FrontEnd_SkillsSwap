import { useState } from "react";
import { useAuth } from "../context/Authcontext";
import NeedYou from "./HeroNeeds/NeedYou";
export default function LoggedHero() {
  const { loggedUser } = useAuth();
  const { name, email, id } = loggedUser;
  return (
    <>
      <header>
        <div className="flex items-center justify-center m-2">
          <h1 className="text-4xl font-bold">
            Welcome Back,
            <span className="text-red-500 font-extrabold">
              {" " + name.split(" ")[0]}
            </span>
            !
          </h1>
        </div>
      </header>
      <section>
        <NeedYou />
      </section>
    </>
  );
}
