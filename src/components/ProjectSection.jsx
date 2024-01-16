import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div
      data-testid="ProjectSectionID"
      id="project"
      className="pt-20 flex flex-wrap bg-stone-50 flex-col pb-32 gap-10"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-500">PROJECTS</h1>
        <p className="text-2xl font-bold mt-3">
          Each project is a unique piece of development 🧩
        </p>
      </div>
      <ProjectCard />
    </div>
  );
};

export default ProjectSection;
