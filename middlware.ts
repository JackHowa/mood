import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  // like the base route to allow on
  publicRoutes: ['/'],
});

// don't have to worry about logic within the auth middleware for clerk
// this config filters out so that clerk doesn't have to do expensive checks
export const config = {
  // what we do and don't want the middleware to run on
  // via https://clerk.com/docs/references/nextjs/auth-middleware
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
