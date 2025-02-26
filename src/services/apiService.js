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

