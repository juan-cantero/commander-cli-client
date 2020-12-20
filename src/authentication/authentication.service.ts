import * as os from "os";
import { promises as fs } from "fs";
import LoginData from "../types/logindata.types";
import CommanderApi from "../api/commander";

class AuthenticationService {
  async login(loginData: LoginData) {
    return await CommanderApi.login(loginData);
  }

  async saveToken(token: string): Promise<void> {
    try {
      await fs.writeFile(`${os.homedir()}/.token`, token);
      console.log("logged successfully");
    } catch (error) {
      console.log(error);
    }
  }

  async getToken(): Promise<string | undefined> {
    try {
      return await fs.readFile(`${os.homedir()}/.token`, "utf8");
    } catch (error) {
      console.log(error);
    }
  }
}

export default AuthenticationService;
