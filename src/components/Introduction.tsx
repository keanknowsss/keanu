import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ContactModal from "./ContactModal";
import toast from "react-hot-toast";

function Introduction() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const handleDownloadCV = async () => {
    if (isDownloading) return;

    setIsDownloading(true);

    // Loading Toast
    const downloadToast = toast.loading("Downloading CV... Please wait.", {
      duration: 0,
    });

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Path to CV in public folder
      const cvUrl = "/Keanu_Dwight_CV.pdf";
      const fileName = "Keanu_Dwight_CV.pdf";

      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = fileName;
      link.target = "_blank";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success("Download successful! Check your downloads folder.", {
        id: downloadToast,
        duration: 4000,
      });
    } catch (error) {
      console.error("Download Failed: ", error);
      toast.error("Download failed. Please try again.", {
        id: downloadToast,
        duration: 4000,
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
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
              <button className="email-btn" onClick={openContactModal}>
                <FontAwesomeIcon icon={faEnvelope} />
                Get in Touch
              </button>
            </div>
            <div>
              <button
                className="download-cv-btn"
                onClick={handleDownloadCV}
                disabled={isDownloading}
              >
                <FontAwesomeIcon
                  icon={faCloudArrowDown}
                  className={isDownloading ? "animate-bounce" : ""}
                />
                {isDownloading ? "Preparing..." : "Download CV"}
              </button>
            </div>
          </div>
        </div>
        <div className="header-picture">
          <div>
            <img src="/goat.png" alt="Keanu Dwight Solomon" />
          </div>
        </div>
      </header>

      {/* CONTACT MODAL */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}
export default Introduction;
