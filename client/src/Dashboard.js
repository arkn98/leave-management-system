import React, { Component } from 'react';
import styles from './Dashboard.css';
import Sidenav from './components/Sidenav';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/Main';
import LeaveApplication from './components/LeaveApplication';
import ViewHolidays from './components/ViewHolidays';
import AddStaff from './components/AddStaff';
import AddAdmin from './components/AddAdmin';

class Dashboard extends Component {
  state = {
    notifCount: 0,
    mouseX: 0,
    mouseY: 0
  };

  render() {
    return (
      <div className={styles.dashMount}>
        <div className={styles.sideNavWrapper}>
          <Sidenav />
        </div>
        <div className={styles.mainWrapper}>
          <Switch>
            <Route
              path="/dashboard/apply"
              exact
              component={LeaveApplication}
              notifCount={this.state.notifCount}
            />
            <Route
              path="/dashboard/view-holidays"
              exact
              component={LeaveApplication}
              notifCount={this.state.notifCount}
            />
            <Route
              path="/dashboard/add-staff"
              exact
              component={AddStaff}
              notifCount={this.state.notifCount}
            />
            <Route
              path="/dashboard/add-admin"
              exact
              component={AddAdmin}
              notifCount={this.state.notifCount}
            />
            <Route
              path="/dashboard"
              exact
              component={Main}
              notifCount={this.state.notifCount}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;
