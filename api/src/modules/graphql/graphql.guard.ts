import { Injectable, ExecutionContext } from '@nestjs/common'
import { JwtGuard } from 'src/modules/jwt/jwt.guard';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GqlAuthGuard extends JwtGuard {

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);

    return ctx.getContext().req;
  }

}
  