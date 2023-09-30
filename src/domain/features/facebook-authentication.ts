import { type AccessToken } from '@/domain/models';
import { type AuthenticationError } from '@/domain/errors';

export interface FacebookAuthentication {
  authenticate: (params: FacebookAuthentication.Params) => Promise<FacebookAuthentication.Result>
}

namespace FacebookAuthentication {
  export type Params = {
    token: string
  }

  export type Result = AccessToken | AuthenticationError
}