import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface DefaultPageProps {
  children: ReactNode;
}
export const Protectedroute: React.FC<DefaultPageProps> = ({ children }) => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to="/register" replace />;
  }
  return children;
};
