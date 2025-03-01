import { useAuth } from "../context/Authcontext";

export default function LoggedHero() {
  const { loggedUser } = useAuth();
  console.log(loggedUser);
  const { name, email, id } = loggedUser[0];
  console.log(name, email, id);
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
    </>
  );
}
