const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  endpoints: {
    contact: import.meta.env.VITE_API_CONTACT_ENDPOINT,
  }
};

// Helper function to build full URL
export const buildApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.baseURL}${endpoint}`;
};

// Specific endpoint helpers
export const getContactEndpoint = (): string => {
  return buildApiUrl(API_CONFIG.endpoints.contact);
};

export default API_CONFIG;