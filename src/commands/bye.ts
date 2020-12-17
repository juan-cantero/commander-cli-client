import Command, { flags } from "@oclif/command";

export default class Bye extends Command {
  static description = "this command is for saying bye";

  static args = [{ name: "name" }];
  static flags = {
    name: flags.string({
      char: "n",
      //options definen de que tipo puede ser n en este
      //options: ["red", "blue"],
      default: "john doe",
      description: "name to print",
    }),
  };
  async run() {
    const { args, flags } = this.parse(Bye);
    const name = flags.name;
    this.log(`bye ${name}`);
  }
}
