import { useEffect, useState } from "react";
import skillsData from "../assets/Skills.json";
import { useAuth } from "../context/Authcontext";
export default function EditProfile() {
  const { loggedUser } = useAuth();
  console.log(loggedUser[0]);
  function onNameChangeHandler(e) {
    setName(e.target.value);
  }
  function onPasswordChangeHandler(e) {
    setPassword(e.target.value);
  }
  function onEmailChangeHandler(e) {
    setEmail(e.target.value);
  }
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (loggedUser && loggedUser.length > 0) {
      setEmail(loggedUser[0]["email"] || "");
      setName(loggedUser[0]["name"] || "");
      setPassword(loggedUser[0]["password"] || "");
      setSelectedSkills(loggedUser[0]["skills"] || []);
    }
  }, []);
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
    e.preventDefault();
    let body = {
      email,
      name,
      password,
      selectedSkills,
    };
    try {
      const res = await fetch(
        `https://json-server-pt0c.onrender.com/users/${loggedUser[0].id}`,
        {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const resjson = await res.json();
      alert("Changes Successful!");
      console.log(resjson);
    } catch (e) {}
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
              required
              value={email}
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              onChange={onPasswordChangeHandler}
              value={password}
              type="password"
              required
              placeholder="Enter new password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <span className="font-light">{password}</span>
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
