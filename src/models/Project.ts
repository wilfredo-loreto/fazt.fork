import { Schema, model } from 'mongoose';

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: { // active, deleted, canceled, deprecated
        type: String,
        default: 'active'
    },
    tags: [{
        type: String
    }]
}, {
    timestamps: true
});

export default model('Project', projectSchema)