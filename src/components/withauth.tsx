"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent: any) => {
  return function ProtectedRoute(props: any) {
    const router = useRouter();
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    useEffect(() => {
      if (!token) {
        router.replace('/login');
      }
    }, [token]);

    if (!token) {
      return null; // Empêche l'affichage de la page le temps de rediriger
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;