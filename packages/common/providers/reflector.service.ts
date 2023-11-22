/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '../decorators'
import { Type } from '../interfaces/type.interface'

@Injectable()
export class Reflector {
  public get<TResult = any, TKey = any>(
    metadataKey: TKey,
    target: Type<any> | Function,
    func?: Function
  ): TResult {
    const _args: any = [
      metadataKey,
      target,
      func?.name?.replace(/^bound /, '')
    ].filter(Boolean)
    return Reflect.getMetadata.apply(null, _args)
  }
}
