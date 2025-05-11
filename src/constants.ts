export const RoutePaths = {
  DEFAULT: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  VERIFY_ACCOUNT: "/verify-account",
  FORGOT_PASSWORD: "/forgot-password",
  CHANGE_PASSWORD: "/change-password",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_OF_SERVICE: "/terms-of-service",
  SETTINGS: "/settings",
  SERVICES: "/services",
  NOTIFICATIONS: "/notifications",
  get PROFILE() {
    return `${this.SETTINGS}/profile`;
  },
};
