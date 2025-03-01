import { useState } from "react";
export default function DropDownSkills() {
  const [selectedSkill, setSelectedSkill] = useState("");
  const skills = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "TypeScript",
    "CSS",
    "HTML",
    "SQL",
    "Java",
    "C++",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <label className="text-lg font-semibold mb-2">Select a Skill:</label>
      <select
        className="w-64 p-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
        value={selectedSkill}
        onChange={(e) => setSelectedSkill(e.target.value)}
      >
        <option value="">-- Choose a Skill --</option>
        {skills.map((skill, index) => (
          <option key={index} value={skill}>
            {skill}
          </option>
        ))}
      </select>

      {selectedSkill && (
        <p className="mt-4 text-lg font-medium text-blue-600">
          You selected: {selectedSkill}
        </p>
      )}
    </div>
  );
}
