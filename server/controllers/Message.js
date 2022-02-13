import conversation from "../model/conversation.js";
import Message from "../model/message.js";



export const  newMessage = async (request, response) =>{
    
        try{
        const message = new Message(request.body);
        await message.save();
        await conversation.findByIdAndUpdate(request.body.conversationId,{message: request.body.text});
        return response.status(200).json({message});
        
        
        }catch (err) {
            response.status(500).json(err);
        }
        
}


export const getMessages = async (request, response) =>{
    
    try{
    const {conversationId} =  request.params;
    Message.find({conversationId},(err,res)=>{
        if(res){
            return response.status(200).json({
                message: 'Messages fetched successfully',
                data: res,
            })
        }else {
            return response.status(404).json({
                message: 'no message found',
            })
        }
    })
    
    
    }catch (err) {
        response.status(500).json(err);
    }
    
}