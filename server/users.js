const users = [];


const addUser = ({id,name,room}) => {
name=name.trim().toLowerCase()
room=room.trim().toLowerCase()

const existingUser=users.find((user)=>user.name==name && user.room==room)
if(existingUser){
    return{error:'Username is already taken'}
}

const user={id:id,name:name,room:room};
users.push(user)
return {user};

}

const getUser = (id) => {
const user=users.find((user)=>user.id==id)
return user;
}

const removeUser = (id) => {
const index=users.findIndex((user)=>user.id==id)

if(index!=-1){
    return users.splice(index,1)[0];
}

}

const getUsersInRoom = (room) => {
users.filter((user)=>user.room===room)
}


module.exports={addUser,getUser,removeUser,getUsersInRoom}