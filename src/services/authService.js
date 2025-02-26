const API_AUTH = "http://localhost:8080/api/v1/auth";

// LOGIN
export const login = async (data) => {
  try {
    const response = await fetch(`${API_AUTH}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();

    if (!response.ok) {
      throw new Error("Error to create review");
    }

    console.log(resData)

    alert(`Welcome: ${resData.username}!`);
    return resData;

  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// REGISTER
export const createUser = async (data) => {
  try {
    const response = await fetch(`${API_AUTH}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });

    const message = await response.json();
    console.log(message);

    alert(`Welcome: ${message.username}!`);

    if (!response.ok) {
      throw new Error("Error to create user");
    }
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};
