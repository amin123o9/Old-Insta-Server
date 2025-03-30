const mongoose = require('mongoose');

module.exports = async function connectDB() {
    try {
        const mongoURI = 'mongodb+srv://athri:abcd1234@cluster0.7jrtr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connected to MongoDB successfully!");

    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1); // Exit process on failure
    }
};
