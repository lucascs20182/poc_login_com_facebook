import { type LoadFacebookUserFromApi } from '@/data/contracts/apis';
import { AuthenticationError } from '@/domain/errors';
import { type FacebookAuthentication } from '@/domain/features';

export class FacebookAuthenticationService {
  constructor (
    private readonly loadFacebookUserFromApi: LoadFacebookUserFromApi
  ) { }

  async authenticate (params: FacebookAuthentication.Params): Promise<AuthenticationError> {
    await this.loadFacebookUserFromApi.loadUser(params);
    return new AuthenticationError();
  }
}
