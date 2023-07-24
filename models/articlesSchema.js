import { Schema, model } from "mongoose";

const article = new Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    }
});

export default model("article", article);