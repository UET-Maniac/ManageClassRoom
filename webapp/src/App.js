import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import Layout from './components/Layout/Drawer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import AccountPage from './components/Manage/ManageAccount/AccountPage'
import { fetchAccounts, createAccount, importAccounts, updateAccount } from './actions';
import ClassPage from './components/Manage/ManagerClass/ClassPage'
import ClassSectionPage from './components/Manage/ManageClassSection/ClassSectionPage'
import RoomPage from './components/Manage/ManageRoom/RoomPage'
import RequestManagerPage from './components/Manage/ManageRequest/RequestManager'
import {AuthContext} from "./context/auth";
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login/LoginPage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authTokens: null,
    }
  }
  componentDidMount() {
    this.props.dispatch(fetchAccounts())
  }

  onCreateAccount = ({username, password, role}) => {
    this.props.dispatch(createAccount({username, password, role}))
  }

  onImportAccounts = ({formData, role}) => {
    this.props.dispatch(importAccounts({formData, role}))
  }

  onUpdateAccount = ({id, body}) => {
    this.props.dispatch(updateAccount({id, body}))
  }

  setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data))
    this.setState({authTokens: data})
  }

  render() {
    // console.log(this.state.authTokens)
    const {authTokens} = this.state

    return (
      <AuthContext.Provider value={{authTokens, setAuthTokens: this.setTokens}}>
      <Router>
        <Layout>
          <div>
            <Switch>
              <PrivateRoute path="/" exact={true} render={() => <HomePage />} />
              <PrivateRoute 
                path="/account-manager" 
                render={() => <AccountPage
                  accounts={this.props.accounts}
                  onCreateAccount={this.onCreateAccount}
                  onImportAccounts={this.onImportAccounts} 
                  onUpdateAccount={this.onUpdateAccount}
                />}
              />
              <PrivateRoute 
                path="/class-manager" 
                render={() => <ClassPage
                />}
              />
              <PrivateRoute 
                path="/class-section-manager" 
                render={() => <ClassSectionPage
                />}
              />
              <PrivateRoute 
                path="/room-manager" 
                render={() => <RoomPage
                />}
              />
              <PrivateRoute path="/request-manager" render={() => <RequestManagerPage />} />
              
              <Route path="/login" component={Login} />
              />
            </Switch>
          </div>
        </Layout>
      </Router>

      </AuthContext.Provider>

    )
  }
}

function mapStateToProps(state) {
  // console.log(state)
  return {
    accounts: state.accountReducer.accounts,
    rooms: state.roomReducer.rooms,
  }
}

export default connect(mapStateToProps) (App);
