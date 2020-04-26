import { SetMetadata } from '@nestjs/common';

import { UserRole } from '../user/user.enum';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);
