import { BaseHttpRequest, LambdaParam } from '../../core/type'
import { BaseHttpRequestImpl } from '../../core'
import { HttpRequest } from './type'
// HTTP Plugin

export class HttpImpl extends BaseHttpRequestImpl implements HttpRequest {
  baseURL = ''

  request(httpParams: HttpRequest) {}
}
