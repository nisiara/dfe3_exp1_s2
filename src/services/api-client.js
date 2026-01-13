const BASE_URL = "https://reqres.in/api";

export const apiClient = async (endpoint) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

 
  if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/register";
    return;
  }

  return response;
};
