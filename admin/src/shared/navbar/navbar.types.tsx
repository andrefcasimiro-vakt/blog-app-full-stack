import { Layout } from "./navbar.layout";

export interface NavbarProps {
  /** Handles how the modal is drawn */
  layout?: Layout,

  navbarTitle?: string,

  userAvatarConfiguration?: UserAvatarConfiguration,
}

export interface UserAvatarConfiguration {
  options: UserAvatarMenuOption[],
}

export interface UserAvatarMenuOption {
  icon?: React.FC,
  displayName: string,
  onClick?: Function,
}
