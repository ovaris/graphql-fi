export const cameraModel = (connector) => ({
  cameraData: (lastUpdated, cameraId) =>
    connector.cameraData(lastUpdated, cameraId),
  cameraStationMetaData: (id) =>
    connector.cameraStationMetaData(id),
});

export const fluencyModel = (connector) => ({
  current: (lastUpdated, linkId) =>
    connector.fluencyCurrent(lastUpdated, linkId),
});
