import axios from 'axios';
import {
  type UserType,
  type ApiResponseType,
} from '@/types';

export function fetchData():Promise<UserType[]> {
  return axios.get('/api/data').then(({ data }) => data);
}


export type PostFormDataType = {
  name: string;
  email: string;
  country: string;
  gender: string;
  skill: string[]
}

export function postFormData(postData:PostFormDataType):Promise<ApiResponseType> {
  return axios.post('/api/formData', {
    data: postData,
  }).then(({ data }) => data);
}
