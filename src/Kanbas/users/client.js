import axios from "axios";

//export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const BASE_API = "http://localhost:4000";
export const USERS_API = `${BASE_API}/api/users`;

// let lastId = 130;

export const signin = async (credentials) => {
    const response = await axios.post(`${USERS_API}/signin`, credentials);
    if(response.data) {
        console.log("signed in with data: ", JSON.stringify(response.data))
    }
    return response.data;
};

export const account = async () => {
    const response = await axios.post(`${USERS_API}/account`);
    return response.data;
};

export const updateUser = async (user) => {
    console.log("updateUser: ", JSON.stringify(user))
    const response = await axios.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};

export const findAllUsers = async () => {
    const response = await axios.get(`${USERS_API}`);
    return response.data;
  };

  export const createUser = async (user) => {
    // if(! user._id) {
    //     user._id = ++lastId;
    // }

    const response = await axios.post(`${USERS_API}`, user);
    return response.data;
  };

  export const findUserById = async (id) => {
    const response = await axios.get(`${USERS_API}/${id}`);
    return response.data;
  };

  export const deleteUser = async (user) => {
    const response = await axios.delete(
      `${USERS_API}/${user._id}`);
    return response.data;
  };

  export const signup = async (credentials) => {
    credentials._id = Date.now();

    const response = await axios.post(
      `${USERS_API}/signup`, credentials);
    return response.data;
  };

  export const signout = async () => {
    const response = await axios.post(`${USERS_API}/signout`);
    return response.data;
  };
  
  
  
  
  

