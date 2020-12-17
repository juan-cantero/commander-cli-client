import { ICommand } from "../types/command.types";
import Table from "./table";

class CommandsTable extends Table {
  config(commands: ICommand[]) {
    const commandsTable = [];
    const commandsTableHeader = ["name", "description", "platform"];
    commandsTable.push(commandsTableHeader);

    commands.forEach((command) => {
      commandsTable.push([command.name, command.description, command.platform]);
    });
    return super.config(commandsTable);
  }
}

export default CommandsTable;
