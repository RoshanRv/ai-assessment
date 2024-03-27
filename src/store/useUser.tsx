import { create } from "zustand";

type UserType = {
  userName: string;
  email: string;
  _id: string;
};

interface RoleType {
  role: null | "staff" | "student";
  setRole: (role: null | "staff" | "student") => void;
  user: UserType | null;
  setUser: (user: UserType | null) => void;
}

const useUser = create<RoleType>()((set) => ({
  role: null,
  setRole: (role) => set({ role }),
  user: null,
  setUser: (user) => set({ user }),
}));

export default useUser;
