import mongoose from 'mongoose';

export default class Database {

    /**
     * Initialize database and connection
     * @constructor
     * @param {String} uri database connection name
     */
    constructor(uri) {
        this.connect(uri);
    }

    /**
     * Connect to the database
     * @param {String} uri database connection name
     */
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