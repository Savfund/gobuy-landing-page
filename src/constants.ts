export const RoutePaths = {
  DEFAULT: "/",
  APP_URI: "http://localhost:3001/",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_OF_SERVICE: "/terms-of-service",
  SETTINGS: "/settings",
  SERVICES: "/services",
  NOTIFICATIONS: "/notifications",
  get LOGIN() {
    return `${this.APP_URI}/login`;
  },
  get REGISTER() {
    return `${this.APP_URI}/register`;
  },
};
