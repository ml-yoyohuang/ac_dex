export type UserType = {
  name: string;
  age: number;
}

export type SuperUserType = UserType & {
  permission: string;
}

export type ApiResponseType<T> = {
  status: 'ok' | 'error';
  data: T;
}
