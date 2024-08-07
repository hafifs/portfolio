import { skills } from "./icons/SkillsIcon";
const Skills = () => {
  return (
    <section
      id="skills"
      className="container px-4 py-10 mx-auto sm:px-6 lg:px-8"
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          My Skills
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center gap-2">
            <div className="w-10 h-10">{skill.icon}</div>
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Wrap = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <ReactIcon />
      <span className="text-sm font-medium">React</span>
    </div>
  );
};

export default Skills;
