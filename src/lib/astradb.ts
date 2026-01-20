import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";
import { OpenAIEmbeddings } from "@langchain/openai";
import { AstraDB } from "@datastax/astra-db-ts";

function getAstraDBConfig() {
  const endpoint = process.env.ASTRA_DB_ENDPOINT || "";
  const token = process.env.ASTRA_DB_APPLICATION_TOKEN || "";
  const collection = process.env.ASTRA_DB_COLLECTION || "";

  // Don't throw during build - only throw at runtime when actually needed
  if (!token || !endpoint || !collection) {
    // During build, env vars might not be available, so return empty strings
    // The error will be caught at runtime when the API is actually called
    return { endpoint, token, collection };
  }

  return { endpoint, token, collection };
}

export async function getVectorStore() {
  const { endpoint, token, collection } = getAstraDBConfig();
  return AstraDBVectorStore.fromExistingIndex(
    new OpenAIEmbeddings({ 
      modelName: "text-embedding-3-small",
      dimensions: 1024, // Match the existing collection dimension
    }),
    {
      token,
      endpoint,
      collection,
      collectionOptions: {
        vector: {
          dimension: 1024, // Match the existing collection dimension
          metric: "cosine",
        },
      },
    },
  );
}

export async function getEmbeddingsCollection() {
  const { endpoint, token, collection } = getAstraDBConfig();
  return new AstraDB(token, endpoint).collection(collection);
}
