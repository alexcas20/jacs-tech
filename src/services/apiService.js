const API_URL = "http://localhost:8080/api/v1/user";

// Post review product
export const createReviewProduct = async (data) => {
  try {
    const response = await fetch(`${API_URL}/productReviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyUHJ1ZWJhMSIsImlhdCI6MTc0MDQ1NjkxOCwiZXhwIjoxNzQwNDYyMzE4fQ.WW3chKNVT3CWKFPVx-y_SrNKhvukHWojAafqYyL7RsA`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error to create review");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// AUTH
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

      const message = await response.json();
      console.log(message)
  
      alert(`Welcome: ${data.username}!`);
  
      if (!response.ok) {
        throw new Error("Error to create review");
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };


// CREATE USER
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
    console.log(message)

    alert(`Welcome: ${message.username}!`);

    if (!response.ok) {
      throw new Error("Error to create user");
    }
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};
