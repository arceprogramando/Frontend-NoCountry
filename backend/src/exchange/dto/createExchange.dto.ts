import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import {
    IsEmail,
    IsNotEmpty,
    IsString,
    IsOptional,
    MaxLength,
    MinLength,
    ValidateNested,
    IsArray,
    IsEnum,
    IsDate,
} from 'class-validator';


export enum ExchangeStatus {
    Pending = 'pending',
    Completed = 'completed',
    Cancelled = 'cancelled',
}

export class CreateExchangeDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    bookId: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    requesterId: string

    @ApiProperty({
        description: 'Status of the book exchange',
        enum: ExchangeStatus,
    })
    @IsEnum(ExchangeStatus, { message: 'Status must be one of: pending, canceled, completed' })
    status: ExchangeStatus;

    @ApiProperty()
    @IsDate()
    request_date: Date
}