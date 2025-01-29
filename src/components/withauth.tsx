"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const withAuth = (WrappedComponent: any) => {
  return function ProtectedRoute(props: any) {

    const { data: session, status } = useSession();
    const router = useRouter();
  
    useEffect(() => {
      if (status === 'unauthenticated') {
        router.replace('/login');
      }
    }, [status, router]);

    if (!session) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;