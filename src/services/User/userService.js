const API_USER = "http://localhost:8080/api/v1/user";

// get user by id

export const getUser = async (id, token) => {
  try {
    const response = await fetch(`${API_USER}/getUser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.error("Error to get user with id: ", id);
    }

    const data = await response.json();
    console.log(data)

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
