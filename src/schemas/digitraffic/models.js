export const cameraData = (connector) => ({
  cameraData: (lastUpdated, cameraId) =>
    connector.cameraData(lastUpdated, cameraId),
});
