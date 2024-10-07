// Code  for mongoose config in backend
// Filename - backend/index.js


//const { GetObjectCommand, S3Client } = require('@aws-sdk/client-s3');
var aws = require('aws-sdk');


aws.config.setPromisesDependency(); //use so you can promisify to get the actual images
            aws.config.update({
                accessKeyId: "",
                secretAccessKey: "",
                region: ''
            });



// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'yourDB-name',
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
  .then((res) => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });
 
// Schema for users of app
const MemorialTreeSchema = new mongoose.Schema({
    tree_ID: {
        type: String,
        required: true,
        unique: true,
    },
    dedicated_to: {
        type: String,
        required: true,
    },
    dedicated_by: {
        type: String,
        required: true,
        default: "Elmira Lions Club"
    },
    date_added: {
        type: Date,
        default: Date.now,
    },
    approximate_lattitude: {
        type: String,   //float is not supported by Number, so just make it string
        required: true,
    },
    approximate_longitude: {
        type: String,
        required: true,
    },
    tree_image: {
        type: String,   //for now, this will be a local image path
        required: true,
    }

});
const Tree = mongoose.model('memorial_trees', MemorialTreeSchema);
Tree.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
    
    // If you see App is working means
    // backend working properly
});

app.post("/register_new_memorial_tree", async (req, resp) => {
    try {
        //approximateLongitude, approximateLattitude, image
        console.log(req.body);
        const new_tree = new Tree({
            tree_ID: req.body.treeId,
            dedicated_to: req.body.dedicatedTo,
            dedicated_by: req.body.dedicatedBy,
            //date added has a good default, so no real need to pass it here
            approximate_lattitude: req.body.approximateLongitude,
            approximate_longitude: req.body.approximateLattitude,
            tree_image: req.body.image,
        });
        let result = await new_tree.save();
        result = result.toObject();
        if (result) {
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("Tree already registered");
        }

    } catch (e) {
        resp.send("Something Went Wrong");
    }
});


app.get('/get_tree_image/:imageName', async (req, res) => {

    const s3 = new aws.S3();

    var params = {Bucket: '', Key: req.params.imageName};
    var promise = s3.getSignedUrlPromise('getObject', params);
    promise.then(function(url) {
        res.send(url)
    }, function(err) { console.log(err) });
});





app.listen(5000);
