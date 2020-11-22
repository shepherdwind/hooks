// ALD Plugin
import { fetch } from '@ali/fixed-res-fetch'
import { AldRequest } from './type'
import { BaseHttpRequestImpl } from '../../core'

export class AldImpl extends BaseHttpRequestImpl implements AldRequest {
  backupKey = null
  debug = true

  request(aldParams: AldRequest) {
    // TODO: ald请求
    fetch()
  }
}
