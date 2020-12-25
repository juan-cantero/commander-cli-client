import * as os from "os";
import { promises as fs } from "fs";
import * as fse from "fs-extra";
import LoginData from "../types/logindata.types";
import UserApi from "../api/UserApi";
import chalk = require("chalk");

class AuthenticationService {
  async login(loginData: LoginData) {
    return await UserApi.login(loginData);
  }

  async saveLoginInfo(token: string, id: string): Promise<void> {
    try {
      await fse.ensureDir(`${os.homedir()}/.commander`);
      await fs.writeFile(`${os.homedir()}/.commander/.token`, token);
      await fs.writeFile(`${os.homedir()}/.commander/.id`, id);

      console.log(chalk.green("logged successfully"));
    } catch (error) {
      console.log(chalk.red(error));
    }
  }

  async getToken(): Promise<string | undefined> {
    try {
      return await fs.readFile(`${os.homedir()}/.commander/.token`, "utf8");
    } catch (error) {
      console.log(error);
    }
  }

  async getUserId(): Promise<string | undefined> {
    try {
      return await fs.readFile(`${os.homedir()}/.commander/.id`, "utf8");
    } catch (error) {
      console.log(error);
    }
  }
}

export default AuthenticationService;
