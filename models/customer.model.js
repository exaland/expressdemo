let mongoose = require('mongoose');

const server = 'ds049496.mlab.com:49496';
const user= 'exaland';
const database = 'drivervtc';
const password  = 'SHENZHEN93J4';

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);