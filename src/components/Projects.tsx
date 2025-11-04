import Project from "./Project";
import projects from "../assets/projects";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <section id="projects">
      <div className="projects-content">
        <h2 className="description">
          <span className="text-secondary-dark">From Concept to Code</span>
          <br />a few highlights of my work so far.
        </h2>
        <ul className="projects-list">
          {projects.map((project) => (
            <li key={project.id}>
              <Project
                project={project}
                setIsModalOpen={setIsModalOpen}
                setSelectedProject={setSelectedProject}
              />
            </li>
          ))}
        </ul>
        <ProjectModal isModalOpen={isModalOpen} closeModal={closeModal} selectedProject={selectedProject} />
      </div>
    </section>
  );
};
export default Projects;
