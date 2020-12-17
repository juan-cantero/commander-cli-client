import Axios from "axios";

export default class CommanderApi {
  static axios = Axios.create({
    baseURL: "http://localhost:5000/api/commands",
  });

  static async getAllCommands() {
    const { data } = await this.axios.get("/");
    return data;
  }
}
