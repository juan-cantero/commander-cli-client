import Command from "@oclif/command";
import inquirer = require("inquirer");
import AuthenticationService from "../authentication/authentication.service";
import LoginData from "../types/logindata.types";

export default class Login extends Command {
  static description: "Login";
  private authService = new AuthenticationService();

  async run() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "enter your email:",
          name: "email",
        },
        {
          type: "password",
          message: "enter your password:",
          name: "password",
          mask: "*",
        },
      ])
      .then(async (loginData: LoginData) => {
        const data = await this.authService.login(loginData);
        const token = data.token;
        const id = data._id;

        await this.authService.saveLoginInfo(token, id);
      });
  }
}
