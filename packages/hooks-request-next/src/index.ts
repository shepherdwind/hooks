import { LambdaParam } from './core/type'
import { AldImpl } from './plugin/ald'
import { AldRequest } from './plugin/ald/type'
import { HttpImpl } from './plugin/http'
import { HttpRequest } from './plugin/http/type'

/**
 *  全局配置
 */
export const defaults = {
  params: null,
  type: 'http',
  request: function (params: LambdaParam) {
    const { url, method, data, meta } = params
    switch (this.type) {
      case 'http':
        const httpImpl = new HttpImpl()
        httpImpl.request(Object.assign({ url, method, data }, this.config, this.params))
        break
      case 'ald':
        const aldImpl = new AldImpl()
        aldImpl.request(Object.assign({ meta }, this.config, this.params))
        break
    }
  },
  config: {},
}

export const withHttp = function (httpPromise: Function, httpParams: HttpRequest) {
  defaults.params = httpParams
  defaults.type = 'http'
  const task = httpPromise()
  defaults.params = null
  defaults.type = null
  return task
}

export const withAld = function (httpPromise: Function, aldParams: AldRequest) {}
