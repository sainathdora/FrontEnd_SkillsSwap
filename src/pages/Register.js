import { useNavigate } from "react-router-dom";
import { useState } from "react";
import skillsData from "../assets/Skills.json";

export default function Register() {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const handleSkillChange = (e) => {
    const skill = e.target.value;
    setSelectedSkills(
      (prev) =>
        prev.includes(skill)
          ? prev.filter((s) => s !== skill) // Remove if already selected
          : [...prev, skill] // Add if not selected
    );
  };

  async function RegisterHandler(e) {
    e.preventDefault();

    let name = e.target[0].value;
    let email = e.target[1].value;
    let password = e.target[2].value;

    let body = {
      name: name,
      email: email,
      password: password,
      skills: selectedSkills, // Include selected skills
    };

    try {
      const resjson = await fetch("http://localhost:3000/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const res = await resjson.json();
      console.log(res);
      navigate("/login");
    } catch (err) {
      return (
        <>
          <h1 className="text-4xl">Something Went Wrong</h1>
        </>
      );
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form className="space-y-4" onSubmit={RegisterHandler}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Skills Selection */}
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

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Register
          </button>

          {/* Already Have an Account */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
