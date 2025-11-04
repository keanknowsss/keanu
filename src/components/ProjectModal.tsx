import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { FaXmark } from "react-icons/fa6";
import type { ProjectType } from "../assets/projects";

import "swiper/swiper-bundle.css";
import { useEffect, useRef } from "react";

function ProjectModal({
  isModalOpen,
  closeModal,
  selectedProject,
}: {
  isModalOpen: boolean;
  closeModal: any;
  selectedProject: ProjectType | null;
}) {
  const swiperRef = useRef<any>(null);

  // Global keyboard navigation
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!swiperRef.current) return;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          swiperRef.current.slidePrev();
          break;
        case "ArrowRight":
          e.preventDefault();
          swiperRef.current.slideNext();
          break;
        case "Escape":
          e.preventDefault();
          closeModal();
          break;
      }
    };

    // Add event listener to document
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, closeModal]);

  return (
    <Dialog open={isModalOpen} onClose={closeModal} className="relative z-50">
      {/* Backdrop */}
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/30 duration-300 ease-out data-closed:opacity-0"
      />

      {/* Container */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel
          transition
          className="w-full max-w-6xl h-[80vh] bg-white rounded-lg shadow-xl duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 overflow-hidden flex"
        >
          {selectedProject && (
            <>
              {/* CAROUSEL */}
              <div className="w-1/2 bg-gray-50 flex flex-col relative overflow-hidden">
                <div className="flex-1 relative h-full">
                  <Swiper
                    modules={[Navigation, Pagination, Keyboard]}
                    navigation={true}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: false
                    }}
                    autoHeight={false}
                    allowTouchMove={true}
                    className="project-carousel"
                    style={{
                      height: "100%",
                      maxHeight: "100%",
                    }}
                  >
                    {selectedProject?.carouselImages.map((image, index) => (
                      <SwiperSlide>
                        <div className="h-full w-full bg-gray-100 flex items-center justify-center">
                          <img
                            src={image}
                            className="max-h-full max-w-full object-contain"
                            alt={`${selectedProject?.title} ${index + 1}`}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              {/* RIGHT SECTION - Header + Content */}
              <div className="w-1/2 flex flex-col">
                {/* MODAL HEADER */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 shrink-0">
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    <DialogTitle className="text-2xl font-bold text-gray-900 truncate">
                      {selectedProject.title}
                    </DialogTitle>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium shrink-0 ${
                        selectedProject.status === "DONE"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {selectedProject.status}
                    </span>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer flex-shrink-0 ml-4"
                  >
                    <FaXmark />
                  </button>
                </div>

                {/* SCROLLABLE MODAL CONTENT */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        About This Project
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Technologies Used
                      </h3>
                      <ul className="tags mt-0!">
                        {selectedProject?.tags.map((tag, index) => (
                          <li key={index} className={tag.type}>
                            {tag.name}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProject?.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
export default ProjectModal;
