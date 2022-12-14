import React from 'react';
import { Button, Result } from 'antd';

const Login = () => {

    const cognitalURL = "https://ie-ta01.auth.ap-southeast-2.amazoncognito.com/login?client_id=7k2qpqrk7eg5ujru3dlobl9b11&response_type=code&scope=openid+profile&redirect_uri=https://pediroo.me/loginSuccess"

    return (
        <Result
            status="warning"
            title="This website is developing. Please login before use the system"
            extra={
                <Button type="primary" key="console" href={cognitalURL}>
                    Login
                </Button>
            }
        />
    );
};

export default Login;