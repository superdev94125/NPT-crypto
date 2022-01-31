import React from "react";
import { Route, Switch } from "react-router-dom";

import CapitalScreen from './screens/Capital/CapitalScreen';
import DashboardScreen from './screens/Dashboard/DashboardScreen';
import UserboardScreen from './screens/Dashboard/UserboardScreen';
import TransactionsScreen from './screens/Transactions/TransactionsScreen';

import NotFoundScreen from './screens/NotFound/NotFoundScreen';

import SigninScreen from './screens/Members/SigninScreen';
import SignupScreen from './screens/Members/SignupScreen';
import ForgotScreen from './screens/Members/ForgotScreen';
import ProfileScreen from './screens/Members/ProfileScreen';
import MarketScreen from './screens/Market/MarketScreen';
import MembersScreen from './screens/Members/MembersScreen';
import HistoryScreen from './screens/Transactions/HistoryScreen';
import UserHistoryScreen from './screens/Transactions/UserHistoryScreen';
const BaseRoute = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={SigninScreen} />
        <Route exact path='/members' component={ProfileScreen} />
        <Route exact path='/admin/members' component={MembersScreen} />
        <Route exact path='/admin/history' component={HistoryScreen} />
        <Route exact path='/capital' component={CapitalScreen} />
        <Route exact path='/admin/dashboard' component={DashboardScreen} />
        <Route exact path='/panel' component={UserboardScreen} />
        <Route exact path='/history' component={UserHistoryScreen} />
        <Route exact path='/transactions' component={TransactionsScreen} />
        <Route exact path='/members/forgot-password' component={ForgotScreen} />
        <Route exact path='/members/signup' component={SignupScreen} />
        <Route exact path='/market' component={MarketScreen} />
        <Route component={NotFoundScreen} />
      </Switch>
    </>
  );
};

export default BaseRoute;
