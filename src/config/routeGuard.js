import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '@/components/atoms/loaders/loading';
import authService from '@/controllers/login/authService';

function RouteGuard({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    authCheck(router.asPath);
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);
    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function authCheck(url) {
    const isAuthorized = await authService.checkIfAuthorized();
    const publicPaths = ['/login'];
    const path = url.split('?')[0];

    if (!isAuthorized && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/login',
        // query: { returnUrl: router.asPath }
      });
    } else {
      setAuthorized(true);
    }

    setCheckingAuth(false); // Mark the authentication check as complete
  }

  // Show a loading indicator or placeholder while checking the authentication status
  if (checkingAuth) {
    return <Loading/>;
  }

  return authorized && children;
}

export { RouteGuard };
