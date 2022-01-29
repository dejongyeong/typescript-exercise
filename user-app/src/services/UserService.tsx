import axios from "axios";
import IUser from "../types/Users";

const api = axios.create({
  // node + express backend port
  baseURL: "http://localhost:3001",
  headers: {
    "Content-type": "application/json",
  },
});

const getUsers = async (): Promise<IUser[]> => {
  const response = await api.get<IUser[]>("/users");
  return response.data;
};

const getUserById = async (id: string | undefined): Promise<IUser[]> => {
  const response = await api.get<IUser[]>(`/users/${id}`);
  return response.data;
};

const UserService = { getUsers, getUserById };

export default UserService;

// Reference: https://www.carlrippon.com/getting-started-with-react-query-and-typescript/
