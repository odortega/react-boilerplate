import fetchAPI from "../../../services/api/api";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe("fetchAPI", () => {
  it("calls the API with the correct URL", async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));
    const response = await fetchAPI("/test");

    expect(fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API}/test`, {
      headers: {
        "Content-Type": "application/json",
        // Add any default headers you expect to be sent with every request here
        // 'Authorization': `Bearer tokenValue`,
      },
    });
    expect(response.data).toBe("12345");
  });

  it("handles network errors gracefully", async () => {
    fetch.mockReject(new Error("Network error"));

    await expect(fetchAPI("/test")).rejects.toThrow("Network error");
  });

  it("throws an error when the response status is not ok", async () => {
    fetch.mockResponseOnce("", { status: 404 });

    await expect(fetchAPI("/not-found")).rejects.toThrow(
      "Network response was not ok"
    );
  });
});
