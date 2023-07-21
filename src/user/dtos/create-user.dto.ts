export class CreateUserDto {
  readonly UserId: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly password: string;
  readonly mobile: number;
  readonly email: string;
  readonly description: string;
}
