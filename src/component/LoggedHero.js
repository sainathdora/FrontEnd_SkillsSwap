import { useAuth } from "../context/Authcontext";
import NeedYou from "./HeroNeeds/NeedYou";
export default function LoggedHero() {
  const { loggedUser } = useAuth();
  console.log(loggedUser);
  const { name, email, id } = loggedUser[0];
  return (
    <>
      <header>
        <div className="flex items-center justify-center m-2">
          <h1 className="text-4xl font-bold">
            Welcome Back,
            <span className="text-red-500 font-extrabold">{" " + name}</span>!
          </h1>
        </div>
      </header>
      <section>
        <NeedYou />
      </section>
    </>
  );
}
