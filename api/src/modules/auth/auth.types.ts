import { User } from "../user/user.model";

export type AuthResponse = {
  user: User,
  accessToken: string,
  refreshToken: string,
}
