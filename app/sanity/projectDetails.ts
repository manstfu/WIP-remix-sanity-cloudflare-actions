declare global {
  interface Window {
    ENV: {
      SANITY_PROJECT_ID: string
      SANITY_DATASET: string
      SANITY_API_VERSION: string
    }
  }
}

type ProjectDetails = {
  projectId: string
  dataset: string
  apiVersion: string
}

export const projectDetails = (): ProjectDetails => {
  // const {SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_VERSION} =
  //   typeof document === 'undefined' ? process.env : window.ENV
  const {SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_VERSION} = window.ENV

  return {
    projectId: SANITY_PROJECT_ID ?? `618ye1pb`,
    dataset: SANITY_DATASET ?? `production`,
    apiVersion: SANITY_API_VERSION ?? `2023-10-09`,
  }
}
