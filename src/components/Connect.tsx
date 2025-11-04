import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaStrava } from "react-icons/fa6";

const Connect = () => {
  return (
    <section id="connect">
      <div className="connect-content">
        <div>
          <h2 className="description">Let's Connect!</h2>
          <h3 className="subtitle">I'm always open to new opportunities and collaboration.</h3>
        </div>
        <ul className="links">
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaGithub />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaStrava />
          </li>
        </ul>
        <div className="contacts">
          <p>
            <span className="icon">
              <FaEnvelope />
            </span>
            solomonkeanudwight@gmail.com
          </p>
          <p>
            <span className="icon">
              <FaPhone />
            </span>
            0927 141 8624
          </p>
        </div>
      </div>
    </section>
  );
};
export default Connect;
