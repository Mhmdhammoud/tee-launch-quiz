import React from 'react';
import { Route } from 'react-router-dom';
export interface IRoutProps {
  component: any;
  isPrivate: boolean;
  exact: boolean;
  path: string;
}

const RouteWrapper = ({ component, isPrivate, ...props }: IRoutProps) => {
  return <Route {...props} component={component} />;
};

export default RouteWrapper;
