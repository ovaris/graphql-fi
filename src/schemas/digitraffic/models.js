export const cameraData = connector => ({
  getData: (lastUpdated = false) => connector.cameraData(lastUpdated),
});
