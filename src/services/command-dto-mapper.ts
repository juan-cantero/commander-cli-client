import { CommandInputDto, ICommand } from "../types/command.types";

class CommandDtoMapper {
  mapCommand(command: CommandInputDto): ICommand {
    return {
      name: command.command,
      description: command.description,
      platform: command.platform.platform,
    };
  }

  mapListOfCommands(commands: CommandInputDto[]): ICommand[] {
    return commands.map((command) => {
      return this.mapCommand(command);
    });
  }
}

export default CommandDtoMapper;
