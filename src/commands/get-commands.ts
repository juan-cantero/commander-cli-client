import Command, { flags } from "@oclif/command";
import CommandApi from "../api/CommandApi";
import cli from "cli-ux";
import CommandDtoMapper from "../services/command-dto-mapper";
import { ICommand } from "../types/command.types";
import CommandsTable from "../services/commands-table";
import AuthenticationService from "../authentication/authentication.service";
import { CommandSearch } from "../types/CommandSearch";

const execa = require("execa");

export default class GetCommands extends Command {
  private commandDtoMapper: CommandDtoMapper = new CommandDtoMapper();
  private table: CommandsTable = new CommandsTable();
  private authService = new AuthenticationService();

  static description = "Get all the commands";
  static flags = {
    description: flags.string({
      char: "d",
      description: "command description",
    }),
    platform: flags.string({
      char: "p",
      description: "platform",
    }),
    bgcolor: flags.string({
      char: "b",
      description: "background color for table",
    }),
    color: flags.string({
      char: "c",
      description: "color",
    }),
  };
  async run() {
    const { flags } = this.parse(GetCommands);
    const backgroundColor: string = flags.bgcolor ?? "bgRedBright";
    const color: string = flags.color ?? "white";
    const description: string | null = flags.description ?? null;
    const platform: string = flags.platform ?? "";
    let commands: any[];

    try {
      cli.action.start("fetching list of commands", "initializing", {
        stdout: true,
      });
      let token = await this.authService.getToken();
      let userId = (await this.authService.getUserId()) as string;
      if (description || platform) {
        const search = new CommandSearch(description ?? "", platform);
        commands = await CommandApi.searchCommands(token, search);
      } else {
        commands = await CommandApi.getAllCommands(token, userId);
      }

      if (commands?.length) {
        const mappedCommands: ICommand[] = this.commandDtoMapper.mapListOfCommands(
          commands
        );

        this.table.config(mappedCommands);
        this.table.print(backgroundColor, color);
      } else {
        console.log("you do not have any command yet");
      }

      cli.action.stop("done");
    } catch (error) {
      console.log(error);
    }
  }
}
