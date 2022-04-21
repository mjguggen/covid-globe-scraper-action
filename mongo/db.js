import mongoose from 'mongoose'
import * as core from '@actions/core'

const connectDB = async () => {
	try {
		await mongoose.connect(core.getInput('mongo_uri'));

		console.log('MongoDB Connected...')
	} catch (err) {
		console.error(err.message)
        process.exit(1)
	}
};

export default connectDB