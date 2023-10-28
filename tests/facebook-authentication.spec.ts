import { FacebookAuthenticationService } from '@/data/services';
import { AuthenticationError } from '@/domain/errors';

describe('FacebookAuthenticationService', () => {
  it('should call LoadFacebookUserFromApi with correct params', async () => {
    const loadFacebookUserFromApi = {
      loadUser: jest.fn()
    };

    const service = new FacebookAuthenticationService(loadFacebookUserFromApi);

    await service.authenticate({ token: 'any_token' });

    expect(loadFacebookUserFromApi.loadUser).toHaveBeenCalledWith({ token: 'any_token' });
    expect(loadFacebookUserFromApi.loadUser).toHaveBeenCalledTimes(1);
  });

  it('should returns AuthenticationError when LoadFacebookUserFromApi returns undefined', async () => {
    const loadFacebookUserFromApi = {
      loadUser: jest.fn()
    };

    loadFacebookUserFromApi.loadUser.mockResolvedValueOnce(undefined);
    const service = new FacebookAuthenticationService(loadFacebookUserFromApi);

    const authResult = await service.authenticate({ token: 'any_token' });

    expect(authResult).toEqual(new AuthenticationError());
  });
});
