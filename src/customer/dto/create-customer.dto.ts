import { IsInt, IsString } from 'class-validator';

export class createCustomerDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  name!: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsInt()
  age!: number;
}
