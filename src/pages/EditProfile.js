import { useEffect, useState } from "react";
import skillsData from "../assets/Skills.json";
import { useAuth } from "../context/Authcontext";
export default function EditProfile() {
  const { loggedUser } = useAuth();
  function onNameChangeHandler(e) {
    setName(e.target.value);
  }

  function onEmailChangeHandler(e) {
    setEmail(e.target.value);
  }
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("inside effect", loggedUser);
    if (loggedUser.id) {
      setEmail(loggedUser["email"] || "");
      setName(loggedUser["name"] || "");
      setSelectedSkills(loggedUser["skills"] || []);
    }
  }, [loggedUser]);
  const handleSkillChange = (e) => {
    const skill = e.target.value;
    setSelectedSkills(
      (prev) =>
        prev.includes(skill)
          ? prev.filter((s) => s !== skill) // Remove if already selected
          : [...prev, skill] // Add if not selected
    );
  };
  async function onSubmitHandler(e) {
    let token = localStorage.getItem("jwtToken");
    e.preventDefault();
    let body = {
      id: loggedUser.id,
      email,
      name,
      selectedSkills,
    };
    try {
      const res = await fetch("http://localhost:8080/updateUser", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      console.log("res = ", res);
      if (!res.ok) {
        throw new Error("Something went");
      }
      const resjson = await res.text();
      console.log("res = ", resjson);
      alert("Changes Successful!");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Edit Profile
        </h2>
        <form className="space-y-4" onSubmit={onSubmitHandler}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              onChange={onNameChangeHandler}
              value={name}
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              onChange={onEmailChangeHandler}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Your Skills
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
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
