import React, { ReactNode } from 'react';

interface EmptyLayoutProps {
  children: ReactNode;
}

const EmptyLayout = (props: EmptyLayoutProps) => {
  const { children } = props;

  return <>{children}</>;
};

export default EmptyLayout;
