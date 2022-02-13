import {Server} from 'socket.io';

const PORT = 9000;

const io = new Server( PORT, {
    cors: {
        origin: 'http://localhost:3000',
    }
});


let users = [];
const addUser = (userId,socketId)  =>{
    console.log(users);
    !users.some(user=> user.userId==userId) && users.push({userId,socketId});
    // console.log(users);
}

const getUser = (userId) => {
    console.log(users,userId);
      return users.find(user=> user.userId === userId);
}

const removeUser = (id)=>{
    users.filter(user=> user.sockedId!=id)
}
//connect
io.on('connection', (socket) =>{
    console.log('User connection successful.');

    socket.on('addUser',(userId)=>{
        console.log('inside adduser');
        addUser(userId,socket.id);
        
        io.emit('getUsers',users);
    });

    //send message
    socket.on('sendMessage', ({senderId , recieverId, text})=> {
       
        const user = getUser(recieverId);
        console.log(text,user);
        user  &&
        io.to(user.socketId).emit('getMessage',{
            senderId,text
        })
    });

    //disconnect
    socket.on('disconnect',()=>{
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers',users);
    })
})