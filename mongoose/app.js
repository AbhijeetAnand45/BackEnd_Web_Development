const mongoose = require("mongoose");
// connect to data base
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true, useUnifiedTopology: true})

// create a schema type of database
const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
    name : "Apple",
    rating: 7,
    review: "Pretty solid as fruit."
});
fruit.save();


// const insertDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('fruits');
//     // Insert some documents
//     collection.insertMany([
//       {
//           name: "apple",
//           score: 8,
//           review:"Tasty fruit"
//       }, 
//       {
//           name: "orange",
//           score: 6,
//           review: "good"
//       },
//       {
//           name: "banana",
//           score: 7,
//           review: "good for pet"
//       }
      
//     ], function(err, result) {
//       assert.equal(err, null);
//       assert.equal(3, result.result.n);
//       assert.equal(3, result.ops.length);
//       console.log("Inserted 3 documents into the collection");
//       callback(result);
//     });
//   };

const findDocuments = function(db,callback){
    // get document collection
    const collection = db.collection('fruits');

    collection.find({}).toArray(function(err,fruits){
        assert.equal(err,null);
        console.log("Fount the following records");
        console.log(fruits);
        callback(fruits); 
    })
}