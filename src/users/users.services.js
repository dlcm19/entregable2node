const {createUsers, returnALLUsers,returnUsersId} = require('./users.controllers');

const getUsers = (req,res) => {
    const obj = returnALLUsers()
    res.status(200).json(obj)
}

const createNewUsers = (req,res) => {
    const {first_name,last_name,email,password,birthday} = req.body
    
    if (first_name && last_name && email && password && birthday) {
        const obj = createUsers(first_name,last_name,email,password,birthday)
        res.status(201).json(obj)
    } else {
       res.status(400).json({message:'!User not created¡, fill in all fields'})
    }
}
const getId = (req,res) => {
    const id = req.params.id
    const obj = returnUsersId(id)
    if (obj) {
        res.status(200).json(obj)  
    } else {
        res.status(404).json({message:'User does not exist'})
    }
}


module.exports = {
    getUsers, getId, createNewUsers

}