import axios from "axios";

const USER_API_URL = "http://localhost:8080/api/users";

class UserService {
    getUserById(id) {
        return axios.get(`${USER_API_URL}/id/${id}`);
    }
    getUsers() {
        return axios.get(`${USER_API_URL}`);
    }
    createUser(user) {
        return axios.post(`${USER_API_URL}`, user);
    }
}

export default new UserService();