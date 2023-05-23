import { Core } from 'http-typedi'
import RequestService from '../../../common/providers/request.service'

export default class HelplerService extends RequestService {
  public helper(configure: Core.RequestConfig) {
    return this.request(configure)
  }
}