import axios from "axios";

const request = axios.create({
  baseURL: "https://p.hsl.fi/api/v1",
});

export default {
  facilityUtilization: async (facilityId) => {
    const url = `/facilities/${facilityId}/utilization`;
    const response = await request.get(url);
    return response.data[0];
  },
};
