import mongoose from "mongoose";

const RandomDataSchema = mongoose.Schema({});

const data = mongoose.models.Data || mongoose.model("Data", RandomDataSchema);
export default data;
