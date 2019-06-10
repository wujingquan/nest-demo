import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';
import { ApiErrorCode } from '../../common/enums/api-error-code.enum';
import { User } from '../interfaces/user.interface';

export class CreateUserDto implements User {
  @Type(() => Number)
  @Min(1, {
    message: '用户ID必须大于等于1',
    context: { errorCode: ApiErrorCode.USER_ID_INVALID },
  })
  @IsInt({
    message: '用户ID必须是整数',
    context: { errorCode: ApiErrorCode.USER_ID_INVALID },
  })
  readonly id: number;

  @IsString({
    message: '用户姓名必须是字符串',
    context: { errorCode: ApiErrorCode.USER_NAME_INVALID },
  })
  @IsNotEmpty({
    message: '用户姓名是必不可少的',
    context: { errorCode: ApiErrorCode.USER_NAME_INVALID },
  })
  readonly name: string;

  @Type(() => Number)
  @Min(1, {
    message: '用户年龄必须大于1',
    context: { errorCode: ApiErrorCode.USER_AGE_INVALID },
  })
  @Max(200, {
    message: '用户年龄必须小于200',
    context: { errorCode: ApiErrorCode.USER_AGE_INVALID },
  })
  @IsInt({
    message: '用户年龄必须是整数',
    context: { errorCode: ApiErrorCode.USER_AGE_INVALID },
  })
  readonly age: number;
}
