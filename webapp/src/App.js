import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import Layout from './components/Layout/Drawer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import AccountPage from './components/Manage/ManageAccount/AccountPage'
import { fetchAccounts, createAccount } from './actions';
import ClassPage from './components/Manage/ManagerClass/ClassPage'
import ClassSectionPage from './components/Manage/ManageClassSection/ClassSectionPage'
import RoomPage from './components/Manage/ManageRoom/RoomPage'
import RequestManagerPage from './components/Manage/ManageRequest/RequestManager'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchAccounts())
  }

  onCreateAccount = ({username, password, role}) => {
    this.props.dispatch(createAccount({username, password, role}))
  }

  render() {
    return (
      <Router>
        <Layout>
          <div>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route 
                path="/account-manager" 
                render={() => <AccountPage
                  accounts={this.props.accounts}
                  onCreateAccount={this.onCreateAccount}    
                />}
              />
              <Route 
                path="/class-manager" 
                render={() => <ClassPage
                />}
              />
              <Route 
                path="/class-section-manager" 
                render={() => <ClassSectionPage
                />}
              />
              <Route 
                path="/room-manager" 
                render={() => <RoomPage
                />}
              />
              <Route 
                path="/request-manager" 
                render={() => <RequestManagerPage
                />}
              />
            </Switch>
          </div>
        </Layout>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    accounts: state.accounts
  }
}

export default connect(mapStateToProps) (App);
