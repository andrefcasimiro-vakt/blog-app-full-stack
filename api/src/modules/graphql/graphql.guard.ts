import { ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtGuard } from 'src/modules/jwt/jwt.guard';

@Injectable()
export class GqlAuthGuard extends JwtGuard {

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);

    return ctx.getContext().req;
  }

}
