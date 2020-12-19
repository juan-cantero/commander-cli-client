import Command from "@oclif/command";
import inquirer = require("inquirer");
import CommanderApi from "../api/commander";

export default class Login extends Command {
  static description: "Login";

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
      .then(async (responses) => {
        const data = await CommanderApi.login(responses);
        console.log(data);
      });
  }
}
