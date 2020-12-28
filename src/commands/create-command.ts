import Command, { flags } from "@oclif/command";
import CommandApi from "../api/CommandApi";
import AuthenticationService from "../authentication/authentication.service";
import inquirer = require("inquirer");
import { CommandInputDto } from "../types/CommandInputDto";
import { validateOrReject } from "class-validator";
import chalk = require("chalk");

const execa = require("execa");

export default class CreateCommand extends Command {
  private authService = new AuthenticationService();

  static description = "create command";

  async run() {
    let token: string | undefined;
    let userId: string;
    try {
      token = await this.authService.getToken();
      userId = (await this.authService.getUserId()) as string;
      if (!token || !userId) {
        throw new Error("you need to login first");
      }
    } catch (error) {
      console.log(error);
    }
    inquirer
      .prompt([
        {
          type: "input",
          message: "enter your command name:",
          name: "command",
        },
        {
          type: "input",
          message: "enter a description",
          name: "description",
        },
        {
          type: "input",
          message: "enter platform",
          name: "platform",
        },
      ])
      .then(async (data) => {
        const commandInput = new CommandInputDto();
        commandInput.user = userId as string;
        commandInput.command = data.command;
        commandInput.description = data.description;
        commandInput.platform = data.platform;

        try {
          await validateOrReject(commandInput);
          const command = await CommandApi.createCommand(token, commandInput);
          if (command) {
            console.log(chalk.green("command created successfully"));
          }
        } catch (error) {
          console.log(chalk.magenta(error.response.data.message));
        }
      });
  }
}
