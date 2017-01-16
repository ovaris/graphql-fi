import axios from "axios";

const request = axios.create({
  baseURL: "https://tie.digitraffic.fi/api/v1",
});

export default {
  cameraData: async(lastUpdated) => {
    const response = await request.get("/data/camera-data", {
      params: {
        lastUpdated
      }
    });
    return response.data;
  },
};
