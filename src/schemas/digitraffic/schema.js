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
    cameraData: CameraData
  }
`;

export const resolvers = {
  Digitraffic: {
    cameraData(root, args, context) {
      return context.digitraffic.camera.getData();
    },
  },
};

export const schema = () => [digitrafficSchema];
