

//mongoose.connect('mongodb+srv://'+process.env.mongo_username+':'+process.env.mongo_password+'@your-cluster-url.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
//  .then(() => console.log('Connected to MongoDB'))
 // .catch((err) => console.log(err));

import app from "./server.js"
import mongodb from "mongodb"
//import ReviewsDAO from "./dao/reviewsDAO.js"

//const MongoClient = mongodb.MongoClient
const mongo_username = process.env.mongo_username
const mongo_password = process.env.mongo_password
//new 

import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://Wael:7744@cluster0.a8bjrmd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

//new
//const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.a8bjrmd.mongodb.net/?retryWrites=true&w=majority`
const port = 8000

MongoClient.connect(
    uri, {
        maxPoolSize: 50, 
        wtimeoutMS: 2500,
        useNewUrlParser: true
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })