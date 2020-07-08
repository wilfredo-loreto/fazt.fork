import {Schema, model} from 'mongoose';

const NewsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

export default model("New", NewsSchema);