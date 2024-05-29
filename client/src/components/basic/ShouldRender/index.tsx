import React, { ReactNode } from 'react';

interface ShouldRenderProps {
  check: boolean | string | number | unknown;
  children: ReactNode;
}

export const ShouldRender: React.FC<ShouldRenderProps> = ({
  check,
  children,
}) => {
  const component = (children as React.ReactElement) || <React.Fragment />;
  return check ? component : <React.Fragment />;
};
