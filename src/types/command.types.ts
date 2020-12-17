export interface ICommand {
  name: string;
  description: string;
  platform: string;
}

export interface CommandInputDto {
  command: string;
  description: string;
  platform: {
    platform: string;
  };
}
