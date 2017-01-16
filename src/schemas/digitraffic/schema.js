const digitrafficSchema = `
  type CameraPreset {
    id: ID!
    presentationName: String
    imageUrl: String
    measuredTime: String
  }
  type CameraStation {
    id: ID!
    roadStationId: Int
    nearestWeatherStationId: Int
    cameraPresets: [CameraPreset]
  }
  type CameraData {
    dataUpdatedTime: String
    cameraStations: [CameraStation]
  }
  type Digitraffic {
    # Current data of camera(s)
    cameraData(
      # If parameter is given result will only contain update status. Default false.
      lastUpdated: Boolean = false,
      # Optional Id of camera
      cameraId: ID
    ): CameraData
  }
`;

export const resolvers = {
  Digitraffic: {
    cameraData(root, { lastUpdated, cameraId }, context) {
      return context.digitraffic.camera.cameraData(lastUpdated, cameraId);
    },
  },
};

export const schema = () => [digitrafficSchema];
