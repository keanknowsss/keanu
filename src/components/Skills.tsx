import { BiCodeBlock, BiData, BiGitBranch, BiPalette } from "react-icons/bi";
import { MdDevices, MdWeb } from "react-icons/md";

function Skills() {
  return (
    <section id="skills">
      <div className="skills-content">
        <h2 className="description">
          A <span className="text-secondary-dark">Full-Stack Developer</span> that has the following
          set of skills 💪🏼
        </h2>
        <ul className="skills-list">
          <li>
            <p className="icon">
              <MdWeb />
            </p>
            <h3>Front-end Development</h3>
            <p className="skill-description">
              Proficient in HTML, CSS, JavaScript, and jQuery, with experience in Flutter for mobile
              development. Familiar with React and AlpineJS.
            </p>
          </li>
          <li>
            <p className="icon">
              <BiCodeBlock />
            </p>
            <h3>Back-end Development</h3>
            <p className="skill-description">
              Experienced in Laravel and Livewire, with working knowledge of Node.js and Express.js.
            </p>
          </li>
          <li>
            <p className="icon">
              <BiData />
            </p>
            <h3>Database Management</h3>
            <p className="skill-description">
              Strong understanding of MySQL, PostgreSQL, and Oracle, including query optimization
              and data structuring.
            </p>
          </li>
          <li>
            <p className="icon">
              <BiGitBranch />
            </p>
            <h3>Version Control</h3>
            <p className="skill-description">
              Proficient in using Git and collaborating through platforms like GitHub for clean and
              efficient team workflows.
            </p>
          </li>
          <li>
            <p className="icon">
              <MdDevices />
            </p>
            <h3>Responsive Design</h3>
            <p className="skill-description">
              Builds applications optimized for accessibility and performance across all devices and
              screen sizes.
            </p>
          </li>
          <li>
            <p className="icon">
              <BiPalette />
            </p>
            <h3>UI / UX Design</h3>
            <p className="skill-description">
              Applies user-centered design principles to create intuitive, visually appealing
              interfaces aligned with project goals.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Skills;
