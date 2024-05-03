// const MongoClient = require('mongodb').MongoClient;
// const fs = require('fs');

// // Connection URI
// const uri = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'imgx';

// // Create a new MongoClient
// const client = new MongoClient(uri);

// async function storeFile(filePath) {
//     try {
//         // Connect to the MongoDB server
//         await client.connect();

//         // Select a database
//         const db = client.db(dbName);

//         // Read the file from disk
//         const fileData = fs.readFileSync(filePath);

//         // Insert the file into MongoDB
//         const result = await db.collection('files').insertOne({ data: fileData });

//         console.log(`File stored with _id: ${result.insertedId}`);
//     } finally {
//         // Close the connection
//         await client.close();
//     }
// }

// module.exports = storeFile;