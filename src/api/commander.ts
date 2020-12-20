import Axios from "axios";
import LoginData from "../types/logindata.types";

export default class CommanderApi {
  static axios = Axios.create({
    baseURL: "http://localhost:5000/api",
  });

  static async getAllCommands(token: any) {
    const formatedToken = token.trim();
    const { data } = await this.axios.get("/commands", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${formatedToken}`,
      },
    });
    return data;
  }

  static async login(loginData: LoginData) {
    const { data } = await this.axios.post("/users/login", loginData);
    return data;
  }
}
