import Axios from "axios";
import { CommandInputDto } from "../types/CommandInputDto";
import LoginData from "../types/logindata.types";

export default class CommandApi {
  static axios = Axios.create({
    baseURL: "http://localhost:5000/api/commands",
  });

  static async getAllCommands(token: any, userId: string) {
    const formatedToken = token.trim();
    const id = userId.trim();

    const { data } = await this.axios.get(`/user/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${formatedToken}`,
      },
    });
    return data;
  }

  static async createCommand(token: any, commandInfo: CommandInputDto) {
    const formatedToken = token.trim();

    const { data } = await this.axios.post(`/`, commandInfo, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${formatedToken}`,
      },
    });
    return data;
  }
}
