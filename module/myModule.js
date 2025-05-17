const myWebAdress = "https://desarrolladorhansluyo.com/";
const user = {
    name: 'Pepe',
    lastname: "Guerra"
};

const group = {
    myWebAdress: myWebAdress,
    user: user
};

/* CommonJS modules */
//module.exports = group; 

/*  Export individuales */
module.exports.user = user;
module.exports.myWebAdress = myWebAdress;

console.log(module);