import mongoose from "mongoose";

export const connectDb = async (): Promise<void> => {
  const DB_URI = <string>process.env.MONGODB_URI;

  mongoose
    .connect(DB_URI)
    .then(() => {
      console.log("Conectado a MongoDB");
    })
    .catch((err) => {
      console.log("Error al conectar a MongoDB:", err);
    });
};
