import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState, type FormEvent } from "react";
import { FaCircleCheck, FaPaperPlane, FaXmark } from "react-icons/fa6";
import toast from "react-hot-toast";
import { getContactEndpoint } from "../config/api";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  email: string;
  message: string;
}

interface FormErrors {
  email?: string;
  message?: string;
  submit?: string;
}

function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Email validation regex
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear Errors
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const cancelSubmission = () => {
    setShowConfirmation(false);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setShowConfirmation(true);
  };

  const confirmSubmission = async () => {
    setIsSubmitting(true);
    setErrors({});

    const submitPromise = fetch(getContactEndpoint(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    try {
      const response = await toast.promise(
        submitPromise,
        {
          loading: "Sending message...",
          success: "Message sent successfully! I'll get back to you soon.",
          error: (err) => {
            if (err?.status === 429) {
              return "Failed to send message. You can only send 3 messages per hour. Please try again later.";
            } else if (err?.status === 422) {
              return "Please check your message content and try again.";
            } else {
              return "Failed to send message. Please try again.";
            }
          },
        },
        {
          style: {
            minWidth: "250px",
          },
          success: {
            duration: 4000,
            iconTheme: {
              primary: "#10B981",
              secondary: "#FFFFFF",
            },
            // icon: <FaCircleCheck className="text-green-500" />
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: "#EF4444",
              secondary: "#FFFFFF",
            },
            // icon: <FaXmark className="text-red-500" />
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw {
          status: response.status,
          statusText: response.statusText,
          data: errorData,
        };
      }

      // Success - reset form and close modal
      setFormData({ email: "", message: "" });
      setShowConfirmation(false);
      onClose();

      //   Confirmation Toast
      //   alert("Message sent successfully! I'll get back to you soon.");
    } catch (error) {
      setErrors({ submit: "Failed to send message. Please try again." });
      setShowConfirmation(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        email: "",
        message: "",
      });
      setErrors({});
      setShowConfirmation(false);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/30 duration-300 ease-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel
          transition
          className="w-full max-w-md bg-white rounded-lg shadow-xl duration-300 ease-out data-closed:scale-95 data-[closed]:opacity-0"
        >
          {!showConfirmation ? (
            <>
              {/* HEADER */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <DialogTitle className="text-xl font-semibold text-gray-900">
                  Get in Touch
                </DialogTitle>
                <button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                >
                  <FaXmark className="w-4 h-4" />
                </button>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                    }`}
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none ${
                      errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                    }`}
                    placeholder="Tell me about your project or just say hello..."
                    disabled={isSubmitting}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                {/* Submit Error */}
                {errors.submit && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">{errors.submit}</p>
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane className="w-4 h-4" />
                    Send Message
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <DialogTitle className="text-xl font-semibold text-gray-900">
                  Confirm Message
                </DialogTitle>
                <button
                  onClick={cancelSubmission}
                  disabled={isSubmitting}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                >
                  <FaXmark className="w-4 h-4" />
                </button>
              </div>

              {/* Confirmation Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <FaCircleCheck className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="text-gray-700 mb-4">
                      Are you sure you want to send this message?
                    </p>

                    {/* Message Preview */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-500">To:</span>
                        <p className="text-sm text-gray-900">solomonkeanudwight@gmail.com</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">From:</span>
                        <p className="text-sm text-gray-900">{formData.email}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Message:</span>
                        <p className="text-sm text-gray-900 whitespace-pre-wrap">
                          {formData.message.length > 100
                            ? `${formData.message.substring(0, 100)}...`
                            : formData.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Confirmation Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={cancelSubmission}
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                  >
                    Back to Edit
                  </button>
                  <button
                    onClick={confirmSubmission}
                    disabled={isSubmitting}
                    className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4" />
                        Send Now
                      </>
                    )}
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
export default ContactModal;
