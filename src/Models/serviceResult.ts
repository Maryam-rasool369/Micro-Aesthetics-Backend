import mongoose from "mongoose";
const serviceResultSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true,
        trim: true,

    },
    images: [{
        type: String,
        required: true,
        trim: true,
    }]
},{timestamps: true});

export default mongoose.model("ServiceResult", serviceResultSchema);