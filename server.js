const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require("./app");


dotenv.config({path:'./config.env'})

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log("MONGODB Connected can't believe it!!!!!!"))

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    }
})

const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
    name: 'The park camper',
    rating: 5.7,
    price: 397
})

testTour.save().then(doc => {
    console.log(doc)
}).catch(err => {
    console.log(err)
})





const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Running on port : ${port}`);
});
