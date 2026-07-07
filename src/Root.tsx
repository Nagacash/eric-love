import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import App from './App';
import PrivacyPolicy from './pages/PrivacyPolicy';

function isPrivacyPath(pathname: string): boolean {
  return pathname === '/privacy' || pathname === '/privacy/';
}

export default function Root() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  if (isPrivacyPath(pathname)) {
    return (
      <>
        <PrivacyPolicy />
        <Analytics />
      </>
    );
  }

  return (
    <>
      <App />
      <Analytics />
    </>
  );
}
