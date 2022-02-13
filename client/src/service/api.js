import axios from 'axios';

// const URL = process.env.REACT_APP_URL_SERVER_PROD;
const URL = process.env.REACT_APP_URL_SERVER_DEV;
// const URL = 'http://localhost:8000';
// console.log(process.env);

export const addUser = async(data)=>{
try{
  return  await axios.post(`${URL}/add`,data);

}catch(err){
    console.log('Error Occured while adding user to Database');
}
}

export const getUser = async()=>{
  try{
    let response =  await axios.get(`${URL}/users`);
    return response;
  
  }catch(err){
      console.log('Error Occured while adding user to Database');
  }
  }

  export const setConversation = async(obj)=>{
    try{
      return  await axios.post(`${URL}/conversation/add`,obj);
    
    }catch(err){
        console.log('Error Occured while setting the conversation to Database');
    }
    }

    export const getConversation = async (obj) =>{
      try{
         const response =  await axios.post(`${URL}/conversation/get`,obj);
         return response.data;
      
      }catch(err){
          console.log('Error Occured while fetching the conversation to Database');
      }
    }

    export const newMessage = async (obj) =>{
      try{
         const response =  await axios.post(`${URL}/message/add`,obj);
         return response.data;
      
      }catch(err){
          console.log('Error Occured while adding new messages to Database');
      }
    }

    export const getMessages = async (conversationId) =>{
      try{
        const response =  await axios.get(`${URL}/message/get/${conversationId}`);
        return response.data;
     
     }catch(err){
         console.log('Error Occured while fetching the messages to Database');
     }
    }