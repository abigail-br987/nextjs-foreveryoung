import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "pu4k1mhe",
  dataset: "{{PROJECT_DATASET_0}}",
  apiVersion: "2024-01-01",
  useCdn: false,
});
