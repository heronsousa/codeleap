import {
  createContext,
  useContext,
  useState,
  type ReactNode
} from "react";

interface UserContextType {
  username: string;
  setUsername: (name: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsernameState] = useState(() => localStorage.getItem("username") || "");

  const setUsername = (name: string) => {
    setUsernameState(name);
    localStorage.setItem("username", name);
  };

  const logout = () => {
    setUsernameState("");
    localStorage.removeItem("username");
  };

  return (
    <UserContext.Provider value={{ username, setUsername, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
};