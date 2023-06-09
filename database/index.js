// module imports
const mongoose = require('mongoose');
const config = require('../config');

// Connect to the Mongodb URI
mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle Connection Error
db.on('error', err => {
    console.error.bind(console, 'connection error:');
    console.error(
        'There was an error while connecting to the database : ' + err
    );
});
// When successfully connected
db.on('connected', () => {
    console.log('Database successfully connected to: ' + config.MONGODB_URI);
});

// When connection is open
db.once('open', () => {
    console.log('Database connection is now open');
})
    .on('error', err => {
        console.log('Connection Error: ' + err);
    });

// When disconnected
db.on('disconnected', () => {
    console.log('Database disconnected');
});

// Models

module.exports = {
    db, 
}