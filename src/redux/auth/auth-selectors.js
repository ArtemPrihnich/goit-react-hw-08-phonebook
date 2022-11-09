export const getUserName = state => state.auth.user.name

export const getIsLogIn = state => state.auth.isLogginIn

export const getIsLoading = state => state.auth.isLoading

export const getLoadingUserStatus = state => state.auth.isUserLoading;

export const getError = state => state.auth.error