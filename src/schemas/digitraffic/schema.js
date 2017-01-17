const digitrafficSchema = `
  type Geometry {
    type: String
    coordinates: [Float]
  }
  type CameraStationMetaData {
    type: String
    id: ID!
    geometry: Geometry
  }
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
    metaData: CameraStationMetaData
    cameraPresets: [CameraPreset]
  }
  type CameraData {
    dataUpdatedTime: String
    cameraStations: [CameraStation]
  }
  type FluencyClass {
    code: String
    nameEn: String
  }
  type MedianData {
    medianSpeed: Float
    medianJourneyTime: Int
    nobs: Int
    fluencyClass: FluencyClass
    measuredTime: String
    id: ID!
  }
  type FluencyData {
    dataUpdatedTime: String
    latestMedians: [MedianData]
  }
  type Digitraffic {
    # Current data of camera(s)
    cameraData(
      # If parameter is given result will only contain update status. Default false.
      lastUpdated: Boolean = false
      # Optional Id of camera
      cameraId: ID
    ): CameraData
    # Current fluency data of link(s) including journey times
    fluencyCurrent(
      # If parameter is given result will only contain update status. Default false.
      lastUpdated: Boolean = false
      # Optional Id of link
      linkId: ID
    ): FluencyData
  }
`;

export const resolvers = {
  Digitraffic: {
    cameraData(root, { lastUpdated, cameraId }, context) {
      return context.digitraffic.camera.cameraData(lastUpdated, cameraId);
    },
    fluencyCurrent(root, { lastUpdated, linkId }, context) {
      return context.digitraffic.fluency.current(lastUpdated, linkId);
    },
  },
  CameraStation: {
    metaData(cameraStation, args, context) {
      return context.digitraffic.camera.cameraStationMetaData(cameraStation.id);
    },
  },
  Geometry: {
    coordinates(geometry) {
      return (geometry.coordinates && geometry.coordinates.length === 3) ?
        [geometry.coordinates[0], geometry.coordinates[1]] : null;
    },
  },
};

export const schema = () => [digitrafficSchema];
