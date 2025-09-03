import 'dotenv/config';

export default ({ config }) => ({
  ...config,
  extra: {
    convexUrl: process.env.EXPO_PUBLIC_CONVEX_URL,
    convexDeployment: process.env.CONVEX_DEPLOYMENT,
  },
});
