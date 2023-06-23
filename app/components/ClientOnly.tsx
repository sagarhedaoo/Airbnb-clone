"use client";
import React, { useEffect, useState } from "react";

interface CLientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<CLientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounter] = useState(false);

  useEffect(() => {
    setHasMounter(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <>{children}</>;
};

export default ClientOnly;
