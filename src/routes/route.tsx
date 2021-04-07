import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppState} from '../reducers';

export interface IRoutProps {
	component: any;
	isPrivate: boolean;
	exact: boolean;
	path: string;
}

const RouteWrapper = ({component, isPrivate, ...props}: IRoutProps) => {

		return <Route {...props} component={component} />;
};

export default RouteWrapper;
