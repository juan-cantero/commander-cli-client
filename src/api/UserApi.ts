import axios from "axios";
import { UserCreateDto, UserCredentials } from "../types/command.types";
import * as dotenv from "dotenv";
dotenv.config();

const SERVER_URL = process.env.SERVER_URL;

const userApiCall = axios.create({
  baseURL: `${SERVER_URL}/api/users`,
});

class UserApi {
  static async login(userCredentials: UserCredentials) {
    const { data } = await userApiCall.post("/login", userCredentials);
    return data;
  }

  static async createUser(userInfo: UserCreateDto, token: string) {
    const formatedToken = token.trim();

    return await userApiCall.post("/", userInfo, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${formatedToken}`,
      },
    });
  }

  static async deleteUserById(id: string, token: string) {
    const formatedToken = token.trim();
    return await userApiCall.delete(`/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${formatedToken}`,
      },
    });
  }
}

export default UserApi;
