import axios from "axios";

export const createUser = async (userData) => {
    const {userFirstName, userLastName, userEmail, userPassword} = userData;
    const newUser = {
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        password: userPassword
    };

    const response = await axios.post("http://localhost:3000/server/users/create_account.php", newUser);
    console.log(response.data);
};

export const validateUser = async (userData) => {
    const {userEmail, userPassword} = userData;
    const pendingUser = {
        email: userEmail,
        password: userPassword
    };

    try{
        const response = await axios.post("http://localhost:3000/server/users/validate_account.php", pendingUser)
        console.log(response.data);
    }catch(err){
        console.log(err.message);
    }
};