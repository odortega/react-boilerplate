// Environment variable for API base URL
const BASE_URL = process.env.REACT_APP_API;

/**
 * Generic fetch wrapper function to handle requests and responses uniformly.
 * @param {string} endpoint - The endpoint URL to make the request to.
 * @param {object} options - The options for the fetch request.
 * @returns {Promise<any>} - The JSON response body or an error.
 */
async function fetchAPI(endpoint, options = {}) {
  // Construct the full URL
  const url = `${BASE_URL}${endpoint}`;

  // Default headers
  const headers = {
    "Content-Type": "application/json",
    // Add any default headers here. For example, Authorization header if needed.
    // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
  };

  try {
    const response = await fetch(url, {
      headers,
      ...options,
    });

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      // Convert non-2xx HTTP responses into errors
      const error = new Error("Network response was not ok");
      error.response = response;
      throw error;
    }

    // Assuming the server response is JSON
    return response.json();
  } catch (error) {
    // Handle fetch errors (network issues, etc.)
    // Log error or handle it according to your needs
    console.error("Fetch error:", error);
    throw error;
  }
}

export default fetchAPI;
