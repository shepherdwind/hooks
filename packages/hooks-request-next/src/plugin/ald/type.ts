import { BaseHttpRequest } from '../../core/type'
export interface AldRequest extends BaseHttpRequest {
  backupKey: string
  debug: boolean
}

export interface AldLambdaParam extends AldRequest {
  meta: {
    functionName?: string
    functionGroup?: string
    gateway?: string
  }
}
