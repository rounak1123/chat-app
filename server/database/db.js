import mongoose from 'mongoose';
import dotenv from 'dotenv';


const Connection = async( username,password )=>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.wjtz7.mongodb.net/CHATAPP?retryWrites=true&w=majority`;
   try{
   await mongoose.connect(URL,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log('connected to mongoDB successfully.')
   } catch(err){
    console.log('Error while connecting to Database',err);
   }
}

export default Connection;
