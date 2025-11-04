import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import type { ProjectType } from "../assets/projects";

function Project({
  project,
  setIsModalOpen,
  setSelectedProject,
}: {
  project: ProjectType;
  setIsModalOpen: any;
  setSelectedProject: any;
}) {
  function openModal() {
    setIsModalOpen(true);
    setSelectedProject(project);
  }

  return (
    <>
      <div>
        <div className="img-container">
          <img src={project.image} className="w-full h-full" alt={project.title} />
        </div>
        <div className="mt-3 flex flex-col gap-2 ps-0.5">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.shortDescription}</p>
        </div>
        <ul className="tags">
          {project.tags.map((tag, index) => (
            <li className={tag.type} key={index}>
              {tag.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="view-btn-container">
        <label htmlFor={`view-project-${project.id}`}>View Details</label>
        <button id={`view-project-${project.id}`} onClick={() => openModal()}>
          <FaArrowUpRightFromSquare />
        </button>
      </div>
    </>
  );
}
export default Project;
