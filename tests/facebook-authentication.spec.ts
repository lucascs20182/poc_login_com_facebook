import { type LoadFacebookUserFromApi } from '@/data/contracts/apis';
import { FacebookAuthenticationService } from '@/data/services';
import { AuthenticationError } from '@/domain/errors';

class LoadFacebookUserFromApiSpy implements LoadFacebookUserFromApi {
  token?: string;
  result = undefined;

  async loadUser (params: LoadFacebookUserFromApi.Params): Promise<LoadFacebookUserFromApi.Result> {
    this.token = params.token;

    return this.result;
  }
}

describe('FacebookAuthenticationService', () => {
  it('should call LoadFacebookUserFromApi with correct params', async () => {
    const loadFacebookUserFromApi = new LoadFacebookUserFromApiSpy();
    const service = new FacebookAuthenticationService(loadFacebookUserFromApi);

    await service.authenticate({ token: 'any_token' });

    expect(loadFacebookUserFromApi.token).toBe('any_token');
  });

  it('should returns AuthenticationError when LoadFacebookUserFromApi returns undefined', async () => {
    const loadFacebookUserFromApi = new LoadFacebookUserFromApiSpy();
    loadFacebookUserFromApi.result = undefined;
    const service = new FacebookAuthenticationService(loadFacebookUserFromApi);

    const authResult = await service.authenticate({ token: 'any_token' });

    expect(authResult).toEqual(new AuthenticationError());
  });
});
