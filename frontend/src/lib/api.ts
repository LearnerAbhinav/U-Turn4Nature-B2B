const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  let token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("b2b_token") || "";
  }

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Something went wrong");
  }

  return response.json();
}

export const api = {
  // Auth
  register: (data: any) =>
    fetchWithAuth("/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  login: (data: any) =>
    fetchWithAuth("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  getMe: () => fetchWithAuth("/auth/me"),

  // Inquiries
  submitInquiry: (data: any) =>
    fetchWithAuth("/inquiries", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  getInquiries: async () => {
    return fetchWithAuth("/inquiries");
  },

  // --- Admin API ---
  getAdminUsers: async () => {
    return fetchWithAuth("/admin/users");
  },
  updateUserStatus: async (id: string, status: "pending" | "approved" | "rejected") => {
    return fetchWithAuth(`/admin/users/${id}/status`, {
      method: "PUT",
      body: JSON.stringify({ status }),
    });
  },
  getAdminInquiries: async () => {
    return fetchWithAuth("/admin/inquiries");
  },
};
