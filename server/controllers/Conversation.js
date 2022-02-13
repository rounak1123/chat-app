
import Conversation from "../model/conversation.js";

export const newConversation = async (request, response) =>{
try{
const senderId = request.body.senderId;
const recieverId = request.body.recieverId;

Conversation.findOne({members: {$all : [senderId, recieverId]}},(err,res)=>{

    if(res) return response.status(200).json({message: "conversation already exists."})
    const addConversation = new Conversation({
        members: [senderId,recieverId],
        });
        addConversation.save();
       return response.status(200).json({
            message: 'conversation added successfully.',
        })
})


}catch (err) {
    response.status(500).json(err);
}
}

export const getConversation = async (request, response) =>{
    try{
    const senderId = request.body.senderId;
    const recieverId = request.body.recieverId;
    
    Conversation.findOne({members: {$all : [senderId, recieverId]}},(err,conversation)=>{
    
        if(conversation) return response.status(200).json({conversation});
        else {
            return response.status(404).json({
                message: 'conversation not found.',
            }) 
        }
   
    })
    
    
    }catch (err) {
        response.status(500).json(err);
    }
    }