const hslParkAndRideSchema = `
  type Utilization {
      # The facility
      facilityId: Float
      # The capacity type
      capacityType: String
      # The usage
      usage: String
      # When this information was last updated
      timestamp: String
      # Number of available parking spaces for this facility, capacity type and usage combination
      spacesAvailable: Float
      # Number of parking spaces (both reserved and available) for this facility, capacity type and usage combination
      capacity: Float
      # Boolean, true if facility is currently open for given capacityType and usage
      openNow: Boolean
  }
  type HSLParkAndRide {
    # Liityntäpysäköinti utilization
    facilityUtilization(
      # Id of the facility, see: https://p.hsl.fi/#/hubs
      facilityId: ID
    ): Utilization
  }
`;

export const resolvers = {
  HSLParkAndRide: {
    facilityUtilization(root, { facilityId }, context) {
      return context.hslParkAndRide.facility.facilityUtilization(facilityId);
    },
  },
};

export const schema = () => [hslParkAndRideSchema];
