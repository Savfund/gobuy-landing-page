export const RoutePaths = {
  DEFAULT: "/",
  LOCAL_APP_URI: "http://localhost:3000",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_OF_SERVICE: "/terms-of-service",
  SETTINGS: "/settings",
  SERVICES: "/services",
  NOTIFICATIONS: "/notifications",
  PROD_APP_URI: `https://app.subnownow.com`,
  get LOGIN() {
    return `${this.PROD_APP_URI}/login`;
  },
  get REGISTER() {
    return `${this.PROD_APP_URI}/register`;
  },
};
