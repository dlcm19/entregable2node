

const uuid = require('uuid')
const usersDB = [{
	id: "" , //'91ac225b-386b-429b-8984-097ca4ae722e',
	first_name: "",
	last_name: "",
	email:"" ,
	password:"" ,
	birthday: ""
}];

const returnALLUsers = () =>{
    return usersDB
}

 

const createUsers = (first_name,last_name,email,password,birthday) => {
  
      newUser = {
        id:uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday
      }
      if (newUser.first_name.trim() === "" || newUser.last_name.trim() === "" || newUser.email.trim() === "" || newUser.password.trim() === "" || newUser.birthday.trim() === "") {
        console.log('! Debe de ingresar todos los datos ¡');
    } else {
      usersDB.push(newUser)
      return newUser
      }
    
}

// console.log(createUsers('d','c','ddd@gmail.com','qwe','12-12-12'));
// console.log(createUsers('91ac225b-386b-429b-8984-097ca4ae722e'));

const returnUsersId = (id) => {
    const user = usersDB.find(users => users.id === id)
   return user
} 
    

module.exports = {
    returnALLUsers,
    createUsers,
    returnUsersId 
}
