import { useNavigate } from "react-router-dom";
import { ReactComponent as Herobanner } from "../assets/Blob_Image.svg";
import Button from "./Button";
export default function Hero() {
  const navigate = useNavigate();
  function buttonHandler(e) {
    navigate("/login");
  }
  return (
    <>
      <header className="grid grid-cols-2">
        <aside className="flex flex-col justify-center">
          <div className="p-6">
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-wide">
              SkillSwap – Exchange Skills, Empower Growth
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Trade your expertise, learn new skills, and grow together—no money
              needed, just knowledge and collaboration.
            </p>
          </div>
          <Button className="self-center" onClick={buttonHandler}>
            Get Started
          </Button>
        </aside>
        <Herobanner className="md:w-full md:p-4" />
      </header>
    </>
  );
}
