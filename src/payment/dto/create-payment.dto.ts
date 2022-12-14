import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {
  @ApiProperty({
    example: 'cjld2cjxh0000qzrmn831i7rn',
    description:
      'CUID (collision resistant id) that identifies the user ' +
      'session. Use https://github.com/paralleldrive/cuid to generate them. ' +
      'This is used as an idempotency key for the payment intent creation. ' +
      'Thus, they should be unique foreach payment intent creation but ' +
      'remain constant between retries.',
  })
  readonly cuid: string;
}
