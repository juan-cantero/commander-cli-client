import Axios from "axios";
import { CommandInputDto } from "../types/CommandInputDto";
import { CommandSearch } from "../types/CommandSearch";
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

  static async searchCommands(token: any, search: CommandSearch) {
    const formatedToken = token.trim();
    const formattedDescription = search.description
      .toLowerCase()
      .slice(0, search.description.length)
      .trim();
    const platformQuery = `platform=${search.platform}` ?? "";
    const descriptionQuery = `description=${formattedDescription}` ?? "";

    const { data } = await this.axios.get(
      `/search?${descriptionQuery}&${platformQuery}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${formatedToken}`,
        },
      }
    );
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

  static async getCommandIdByNameAndPlatform(
    token: any,
    command: string,
    platform: string
  ) {
    const formatedToken = token.trim();
    const { data } = await this.axios.get(`/${command}/${platform}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${formatedToken}`,
      },
    });
    return data;
  }

  static async deleteCommand(token: any, id: string) {
    const formatedToken = token.trim();
    const { data } = await this.axios.delete(`/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${formatedToken}`,
      },
    });
    return data;
  }
}
