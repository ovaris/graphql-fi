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
    cameraData(lastUpdated: Boolean = false): CameraData
  }
`;

export const resolvers = {
  Digitraffic: {
    cameraData(root, { lastUpdated }, context) {
      return context.digitraffic.camera.getData(lastUpdated);
    },
  },
};

export const schema = () => [digitrafficSchema];
