import Command, { flags } from "@oclif/command";
import CommandApi from "../api/CommandApi";
import cli from "cli-ux";
import CommandDtoMapper from "../services/command-dto-mapper";
import { ICommand } from "../types/command.types";
import CommandsTable from "../services/commands-table";
import AuthenticationService from "../authentication/authentication.service";
import { CommandSearch } from "../types/CommandSearch";
import { platform } from "os";
import chalk = require("chalk");

const execa = require("execa");

export default class DeleteCommand extends Command {
  private commandDtoMapper: CommandDtoMapper = new CommandDtoMapper();
  private table: CommandsTable = new CommandsTable();
  private authService = new AuthenticationService();

  static description = "Get all the commands";
  static flags = {
    name: flags.string({
      char: "n",
      required: true,
      description: "name of the command",
    }),
    platform: flags.string({
      char: "p",
      required: true,
      description: "platform",
    }),
  };
  async run() {
    const { flags } = this.parse(DeleteCommand);
    const name = flags.name as string;
    const platform = flags.platform as string;

    try {
      cli.action.start("fetching list of commands", "initializing", {
        stdout: true,
      });
      let token = await this.authService.getToken();
      let commandId = await CommandApi.getCommandIdByNameAndPlatform(
        token,
        name,
        platform
      );
      const response = await CommandApi.deleteCommand(token, commandId);
      console.log(chalk.magenta(response.message));
    } catch (error) {
      console.log(chalk.bgRedBright(error.response.data.message));
    }
  }
}
