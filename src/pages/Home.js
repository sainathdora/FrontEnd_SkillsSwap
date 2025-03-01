import Hero from "../component/Hero";
import LoggedHero from "../component/LoggedHero";
import NavBar from "../component/NavBar";
import { useAuth } from "../context/Authcontext";
export default function Home({ navref }) {
  const {isLoggedIn} = useAuth();
  return (
    <>
      {!isLoggedIn && <Hero />}
      {isLoggedIn && <LoggedHero />}

    </>
  );
}
