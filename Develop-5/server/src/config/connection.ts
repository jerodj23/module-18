import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || '';

const db = async (): Promise<typeof mongoose.connection> => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Database connected');
        return mongoose.connection;
    } catch (error) {
        console.log('Error connecting to database', error);
        throw new Error('Error connecting to database');
    }
};

// export default mongoose.connection; // This was the previous code.
export default db;
