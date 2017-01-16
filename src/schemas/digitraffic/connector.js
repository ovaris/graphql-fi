import axios from "axios";

const request = axios.create({
  baseURL: "https://tie.digitraffic.fi/api/v1",
});

export default {
  cameraData: async (lastUpdated, cameraId) => {
    const base = "/data/camera-data";
    const url = cameraId ?
      `${base}/${cameraId}` : base;
    const response = await request.get(url, {
      params: {
        lastUpdated,
      },
    });
    return response.data;
  },
};
