import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

function Introduction() {
  return (
    <header>
      <div className="header-details">
        <div>
          <h1 className="name">Keanu Dwight</h1>
          <ul className="roles">
            <li>Developer</li>
            <li>Engineer</li>
            <li>Cyclist</li>
            <li>Runner</li>
          </ul>
        </div>
        <div className="flex flex-col gap-10 ms-2">
          <p className="description">
            <span>Every project is an adventure—</span>
            <br />
            <br />
            <span>
              Balancing problem-solving at my desk with long rides on the road. Between cycling
              routes and new ideas, I love creating things that make life more enjoyable.
            </span>
          </p>
          <p className="quote">I like my coffee, like how I like my IDE, Dark.</p>
        </div>
        <div className="flex gap-4 mt-4">
          <div>
            <button className="email-btn"><FontAwesomeIcon icon={faEnvelope} />Let's talk</button>
          </div>
          <div>
            <button className="download-cv-btn"><FontAwesomeIcon icon={faCloudArrowDown} />Download CV</button>
          </div>
        </div>
      </div>
      <div className="header-picture">
        <div>
          <img src="./src/assets/goat.png" alt="Keanu Dwight Solomon" />
        </div>
      </div>
    </header>
  );
}
export default Introduction;
