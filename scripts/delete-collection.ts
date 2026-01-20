// Script to delete the Astra DB collection
// Run with: npx ts-node scripts/delete-collection.ts

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { AstraDB } from "@datastax/astra-db-ts";

async function deleteCollection() {
  const endpoint = process.env.ASTRA_DB_ENDPOINT || "";
  const token = process.env.ASTRA_DB_APPLICATION_TOKEN || "";
  const collection = process.env.ASTRA_DB_COLLECTION || "portfolio_embeddings";

  if (!token || !endpoint) {
    console.error("❌ Missing ASTRA_DB_ENDPOINT or ASTRA_DB_APPLICATION_TOKEN in .env.local");
    process.exit(1);
  }

  try {
    const db = new AstraDB(token, endpoint);
    console.log(`🗑️  Deleting collection: ${collection}...`);
    
    await db.collection(collection).delete();
    
    console.log(`✅ Collection "${collection}" deleted successfully!`);
    console.log(`\n📝 Next steps:`);
    console.log(`   1. Run: npm run generate`);
    console.log(`   2. This will create the collection with the correct dimension (1536)`);
  } catch (error: any) {
    if (error.message?.includes("not found") || error.message?.includes("does not exist")) {
      console.log(`ℹ️  Collection "${collection}" doesn't exist (that's okay!)`);
      console.log(`\n📝 You can proceed to run: npm run generate`);
    } else {
      console.error("❌ Error deleting collection:", error.message);
      process.exit(1);
    }
  }
}

deleteCollection();
