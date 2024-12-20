export interface RegisterUploadResponse {
    value: {
      uploadMechanism: {
        [key: string]: {
          uploadUrl: string;
        };
      };
      mediaArtifact: string; // Include mediaArtifact if needed
      asset: string; // Include asset as well
    };
  }