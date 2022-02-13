import mongoose from 'mongoose';


const MessageSchema = mongoose.Schema({
    sender: {
        type: String,
        required: true,
    },
    conversationId: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    }
},{
    timestamps: true,
})

export default mongoose.model('Message', MessageSchema);