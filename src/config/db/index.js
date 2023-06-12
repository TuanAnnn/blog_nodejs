const mongoose = require('mongoose')


async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/datatest_dev');
        console.log('Successfully!!!')
    } catch (error) {
        console.log('error')
    }
}

module.exports = { connect }