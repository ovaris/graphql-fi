import axios from "axios";

const request = axios.create({
  baseURL: "https://tie.digitraffic.fi/api/v1",
});

export default {
  cameraData: async () => {
    const response = await request.get("/data/camera-data?lastUpdated=false");
    return response.data;
  },
};
