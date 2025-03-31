import { useState, useEffect } from "react";
import skillsData from "../assets/Skills.json";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";
export default function MyNeeds() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const { loggedUser } = useAuth();
  useEffect(() => {
    console.log("inside effect", loggedUser);
    if (loggedUser.id) {
      setSelectedSkills(loggedUser["needs"] || []);
    }
  }, [loggedUser]);
  const nav = useNavigate();
  const handleSkillChange = (e) => {
    const skill = e.target.value;
    setSelectedSkills(
      (prev) =>
        prev.includes(skill)
          ? prev.filter((s) => s !== skill) // Remove if already selected
          : [...prev, skill] // Add if not selected
    );
  };
  async function submitHandler(e) {
    let token = localStorage.getItem("jwtToken");
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/addNeeds", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          needs: selectedSkills,
          id: loggedUser.id,
        }),
      });
      const resjson = await res.text();
      if (resjson == "Success") {
        alert("Success");
        nav("/");
      }
    } catch (err) {
      alert("Failed to post your needs");
    }
  }
  return (
    <>
      <h1 className="text-3xl p-4 text-center">Post Your Needs </h1>
      <form className="w-1/2 m-auto" onSubmit={submitHandler}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            What Do You Need?
          </label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {skillsData.Skills.map((skill, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={skill}
                  checked={selectedSkills.includes(skill)}
                  onChange={handleSkillChange}
                  className="h-4 w-4 text-blue-600"
                />
                <span>{skill}</span>
              </label>
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-all m-1"
          >
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
}
