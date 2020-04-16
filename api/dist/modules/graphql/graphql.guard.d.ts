import { ExecutionContext } from '@nestjs/common';
import { JwtGuard } from 'src/modules/jwt/jwt.guard';
export declare class GqlAuthGuard extends JwtGuard {
    getRequest(context: ExecutionContext): any;
}
