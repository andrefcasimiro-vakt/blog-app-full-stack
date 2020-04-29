import { SetMetadata } from '@nestjs/common';

export interface Resource {
  resource: string,
  action: string,
}

export const AuthorizeAgainst = (resource: Resource) => SetMetadata('resource', resource)

