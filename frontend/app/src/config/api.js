const configuredApiOrigin = import.meta.env.VITE_API_ORIGIN?.replace(/\/+$/, "");

const resolveDefaultApiOrigin = () => {
  if (typeof window === "undefined" || !window.location?.origin) {
    return "";
  }

  return window.location.origin.replace(/\/+$/, "");
};

export const API_ORIGIN = configuredApiOrigin || resolveDefaultApiOrigin();

export const API_BASE_URL = API_ORIGIN ? `${API_ORIGIN}/api` : "/api";

export const buildApiUrl = (path = "") => {
  const normalizedPath = String(path).replace(/^\/+/, "");
  return normalizedPath ? `${API_BASE_URL}/${normalizedPath}` : API_BASE_URL;
};
