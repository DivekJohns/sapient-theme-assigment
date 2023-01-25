import { AxiosResponse } from 'axios';
import { BehaviorSubject } from 'rxjs';

import { UpdateUser, User } from '@src/models/User';

import apiClient from './ApiClientService';

export const userStream = new BehaviorSubject<User>({
  email: undefined,
  id: undefined,
  primaryTheme: undefined,
});

export async function getUserPrimaryColor(email: string) {
  try {
    const { data } = await apiClient.get<User>(`primary-color/${email}`);
    userStream.next(data);
  } catch (error) {
    console.error('[ThemeService] getUserPrimaryColor API Failed');
  }
}

export async function saveUserPrimaryColor(
  email: string,
  primaryTheme: string,
) {
  try {
    const { data } = await apiClient.put<
      UpdateUser,
      AxiosResponse<User>,
      UpdateUser
    >(`primary-color/${email}`, { primaryTheme });
    userStream.next(data);
  } catch (error) {
    console.error('[ThemeService] saveUserPrimaryColor API Failed');
    throw error;
  }
}
