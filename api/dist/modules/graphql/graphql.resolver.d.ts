import { Type } from "@nestjs/common";
declare function BaseResolver<T extends Type<unknown>>(classRef: T): any;
export default BaseResolver;
