import { UserRole } from "./user.enums";

export interface User {
  id: string,
  username: string,
  role: UserRole,
}

