require('dotenv').config()

const mockJobs = require('./mockJobs.json')
const Job = require('./models/Job');
const connectDB = require('./db/connect')
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
  
      await Job.create(mockJobs);
      console.log('Success!!!');
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  start();