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

export class UserCreateDto {
  name!: String;
  email!: String;
  password!: String;
}

export interface UserCredentials {
  email: string;
  password: string;
}
