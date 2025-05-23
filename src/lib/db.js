import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI);
		console.log(`MongoDB conectado: ${conn.connection.host}`);
	} catch (error) {
		console.log(`Erro na conexão do MongoDB: ${error}`);
	}
};
