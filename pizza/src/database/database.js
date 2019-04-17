import mongoose from 'mongoose';

export default class Database {

    constructor(uri) {
        this.connect(uri);
    }

    connect(uri) {
        mongoose.connect(uri, { useNewUrlParser: true });

        mongoose.connection.on('connected', () => {
            console.log('connection OK');
        });

        mongoose.connection.on('error', (err) => {
            console.log('Database Connection Failed' + err);
        });

        mongoose.connection.on('disconnected', (err) => {
            console.log('Database Connection Failed' + err);
        });
    }


}