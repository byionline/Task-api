import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateTaskDto {
@ApiProperty({ example: 'Bug Found' })
 @IsString()
 @IsNotEmpty()
 title: string;

 @ApiPropertyOptional({ example: 'Error on line 358 due to which application crashes frequently.', description: 'Optional description of the task' })
 @IsOptional()
 @IsString()
 description: string;

 @ApiProperty({ example: 'High', description: 'Set priority based of task importance' })
 @IsString()
 @IsNotEmpty()
 priority: string;
}
