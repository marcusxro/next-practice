import { MongoClient } from 'mongodb';

if (!process.env.MONGO_URL) {
  throw new Error('Please define the MONGO_URL environment variable inside .env.local');
}

const uri = process.env.MONGO_URL;
let client;
let clientPromise: any;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to preserve value across module reloads
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // In production, create a new MongoClient instance
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
