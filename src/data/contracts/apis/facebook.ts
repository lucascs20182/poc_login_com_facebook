export interface LoadFacebookUserFromApi {
  loadUser: (params: LoadFacebookUserFromApi.Params) => Promise<LoadFacebookUserFromApi.Result>;
}

export namespace LoadFacebookUserFromApi {
  export type Params = { token: string }

  export type Result = undefined;
}
