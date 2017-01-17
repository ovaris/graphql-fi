import axios from "axios";

const request = axios.create({
  baseURL: "https://tie.digitraffic.fi/api/v1",
});

let metaData;

const loadMetaData = async () => {
  try {
    metaData =
      (await request.get("https://tie.digitraffic.fi/api/v1/metadata/camera-stations")).data;
    console.log("Loaded digitraffic camera meta data!");
  } catch (error) {
    console.error("Error loading camera metadata", error);
  }
};

loadMetaData();

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
  cameraStationMetaData: (id) => {
    return metaData.features
    .find((feature) => feature.properties.id === id);
  },
  fluencyCurrent: async (lastUpdated, linkId) => {
    const base = "/data/fluency-current";
    const url = linkId ?
      `${base}/${linkId}` : base;
    const response = await request.get(url, {
      params: {
        lastUpdated,
      },
    });
    return response.data;
  },
};
