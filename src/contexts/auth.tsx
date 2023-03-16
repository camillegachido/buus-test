import { createContext, useState } from "react";

interface IAuthContext {
  username: string
  updateUsername: (value: string) => void
}

interface IAuthProviderProps {
  children: any
}

export const AuthContext = createContext<IAuthContext>({
  username: '',
  updateUsername: () => { }
});

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [username, setUsername] = useState('');

  const updateUsername = (value: string) => {
    setUsername(value)
  }

  return (
    <AuthContext.Provider value={{ username, updateUsername }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;