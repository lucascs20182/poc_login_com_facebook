import { type FacebookAuthentication } from '@/domain/features';

class FacebookAuthenticationService {
  constructor (
    private readonly loadFacebookUserFromApi: LoadFacebookUserFromApi
  ) {}

  async authenticate (params: FacebookAuthentication.Params): Promise<void> {
    await this.loadFacebookUserFromApi.loadUser(params);
  }
}

interface LoadFacebookUserFromApi {
  loadUser: (params: LoadFacebookUserFromApi.Params) => Promise<void>;
}

namespace LoadFacebookUserFromApi {
  export type Params = { token: string }
}

class LoadFacebookUserFromApiSpy implements LoadFacebookUserFromApi {
  token?: string;

  async loadUser (params: LoadFacebookUserFromApi.Params): Promise<void> {
    this.token = params.token;
  }
}

describe('FacebookAuthenticationService', () => {
  it('should call LoadFacebookUserFromApi with correct params', async () => {
    const loadFacebookUserFromApi = new LoadFacebookUserFromApiSpy();
    const service = new FacebookAuthenticationService(loadFacebookUserFromApi);

    await service.authenticate({ token: 'any_token' });

    expect(loadFacebookUserFromApi.token).toBe('any_token');
  });
});
