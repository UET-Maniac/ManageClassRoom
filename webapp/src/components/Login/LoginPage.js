
import React, {useState, Fragment} from "react";
import { Link, Redirect } from 'react-router-dom';
// import logoImg from "../img/logo.jpg";
import { Card, Logo, Form, Input, Button } from '../styles';
import {useAuth} from '../../context/auth';
import {login} from '../../api/index';
import { Box } from "@material-ui/core";

function Login() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
    
    const postLogin = () => {
        login({username: userName, password: password}).then(result => {
            switch(result.status) {
                case 200: {
                    localStorage.setItem('tokenjwt', result.data.token)
                    console.log("Local: ", localStorage.getItem("tokenjwt"))
                    setAuthTokens(result.data.token);
                    setLoggedIn(true);
                    break;
                }
                case 403: {
                    setIsError(true);
                }
                default: setIsError(true);
            }
        }).catch(e => {
          setIsError(true);
        });
    }

    if (isLoggedIn) {
    return (<Fragment><Redirect to="/" /> </Fragment>);
    }
    return (
    <Card>
        {/* <Logo src={logoImg} /> */}
        <Form>
        <Input 
            type="username" 
            value={userName}
            onChange={e => { setUserName(e.target.value)}}
            placeholder="tài khoản" 
        />
        <Input 
            type="password" 
            placeholder="mật khẩu"
            onChange={e => {setPassword(e.target.value)}}
            value={password}    
        />
        <Button onClick={postLogin}>Sign In</Button>
        </Form>
        {isError && 
            <Box component="div">Mật khẩu hoặc tài khoản không chính xác</Box>
        }
    </Card>
    );
}

export default Login;