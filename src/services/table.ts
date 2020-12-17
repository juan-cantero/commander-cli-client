import { getBorderCharacters, table } from "table";
import chalk = require("chalk");

class Table {
  protected output: string = "";

  public config(tableData: any[]): void {
    const config = {
      border: getBorderCharacters(`norc`),
    };
    this.output = table(tableData, config);
  }

  public print(backgroundColor: string, contentColor: string): void {
    console.log(chalk[backgroundColor][contentColor](this.output));
  }
}

export default Table;
