import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";
import { GqlExecutionContext } from "@nestjs/graphql/dist/services/gql-execution-context";

import { JwtGuard } from "../jwt/jwt.guard";
import { UserRole } from "../user/user.enum";
import { User } from "../user/user.model";

@Injectable()
export class RolesGuard extends JwtGuard {
  constructor(private readonly _reflector: Reflector) {
    super()
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlCtx = GqlExecutionContext.create(context);
    const req = gqlCtx.getContext().req

    await super.canActivate(new ExecutionContextHost([req]));

    const roles = this._reflector.get<UserRole[]>('roles', context.getHandler())

    if (!roles) {
      return true
    }

    const user: User = req.user
    const canAccess = roles.includes(user.role)

    return canAccess
  }
}
