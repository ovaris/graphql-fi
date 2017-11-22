export const facilityModel = (connector) => ({
  facilityUtilization: (facilityId) =>
    connector.facilityUtilization(facilityId),
});
