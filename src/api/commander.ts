import Axios from "axios";
import LoginData from "../types/logindata.types";

export default class CommanderApi {
  static axios = Axios.create({
    baseURL: "http://localhost:5000/api",
  });

  static async getAllCommands() {
    const { data } = await this.axios.get("/commands");
    return data;
  }

  static async login(loginData: LoginData) {
    const { data } = await this.axios.post("/users/login", loginData);
    return data;
  }
}
