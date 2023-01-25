import { User } from '@src/models/User';
import { saveUserPrimaryColor, userStream } from '@src/services/ThemeService';
import { useState } from 'react';
import useAsyncEffect from 'use-async-effect';

export default function useUser() {
  const [user, setUser] = useState<User>(userStream.value);

  const setPrimaryColor = async(value: string) => {
    await saveUserPrimaryColor(user.email, value);
  };

  useAsyncEffect(
    () => {
      return userStream.subscribe({
        next: (user) => {
          setUser(user);
        },
        error: console.error,
      });
    },
    (stream) => stream.unsubscribe(),
    [],
  );

  return { user, setPrimaryColor };
}
