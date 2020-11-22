// MTOP Plugin

interface Mtop extends BaseHttpRequest {
  backupKey: string
  debug: boolean
}

class MtopImpl extends BaseHttpRequestImpl implements Mtop {
  backupKey = null
  debug = true
  constructor(params: Mtop) {
    super()
  }
}
