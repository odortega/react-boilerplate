import * as api from "../../../services/api/projects-api";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe("Projects API", () => {
  describe("fetchProjects", () => {
    it("fetches projects successfully", async () => {
      const mockProjects = [
        { id: "1", title: "Project 1", description: "Description 1" },
      ];
      fetch.mockResponseOnce(JSON.stringify(mockProjects));

      const projects = await api.fetchProjects();

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.REACT_APP_API}/books?_quantity=100`,
        {
          headers: {
            "Content-Type": "application/json",
            // Include any additional expected headers here
          },
        }
      );
      expect(projects).toEqual(mockProjects);
    });

    it("handles fetch error", async () => {
      fetch.mockReject(new Error("Fetch error"));

      await expect(api.fetchProjects()).rejects.toThrow("Fetch error");
    });
  });

  describe("fetchProjectById", () => {
    it("fetches a project by ID successfully", async () => {
      const mockProject = {
        id: "1",
        title: "Project 1",
        description: "Description 1",
      };
      fetch.mockResponseOnce(JSON.stringify(mockProject));

      const project = await api.fetchProjectById("1");

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.REACT_APP_API}/books/1`,
        {
          headers: {
            "Content-Type": "application/json",
            // Include any additional expected headers here
          },
        }
      );
      expect(project).toEqual(mockProject);
    });

    it("handles fetch error when project ID is not found", async () => {
      fetch.mockReject(new Error("Project not found"));

      await expect(api.fetchProjectById("999")).rejects.toThrow(
        "Project not found"
      );
    });
  });
});
