import React from "react";
import styled from 'styled-components';
import { Text, Input, Grid, Button } from "../elements";
// import { getCookie, setCookie, deleteCookie } from '../shared/Cookie';

import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";
import { emailCheck } from '../shared/common';
import {history} from "../redux/configStore"

const Login = (props) => {
    const dispatch = useDispatch();

    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");



    const login = () => {

        if(id==="" || pwd === ""){
            window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
            return;
        }

        if(!emailCheck(id)){
            window.alert("이메일 형식이 맞지 않습니다!");
            return;
        }

        dispatch(userActions.loginFB(id, pwd));
    }

    return (
        <React.Fragment>
            <LoginBox>
                <Grid padding="16px">
                    <Title><Text size="32px" bold>로그인</Text></Title>

                    <Grid padding="16px 0px">
                    <Input
                        label="아이디"
                        placeholder="아이디를 입력해주세요."
                        _onChange={(e) => {
                            setId(e.target.value);
                        }}
                    />
                    </Grid>

                    <Grid padding="16px 0px">
                    <Input
                        label="패스워드"
                        placeholder="패스워드 입력해주세요."
                        type="password"
                        _onChange={(e) => {
                            setPwd(e.target.value);
                        }}
                    />
                    </Grid>

                    <Grid is_flex padding="16px 0px">
                        <Btn>
                            <Button 
                            text="회원가입 하러가기" 
                            _onClick={() => {
                                history.push('/signup')
                            }}
                            ></Button> 
                        </Btn>
                        <Btn>
                            <Button 
                            text="로그인하기" 
                            _onClick={() => {
                                console.log("로그인 했어!");
                                login();
                            }}
                            ></Button>      
                        </Btn>              
                    </Grid>
                </Grid>
            </LoginBox>
        </React.Fragment>
    );
};

const LoginBox = styled.div`
    width: 600px;
    background-color: #fff;
    border: 1px solid lightgray;
    display: flex;
    justify-content: center;
    margin: 20px 0px;
    padding-top: 10px;
`;

const Title = styled.div`
    border-bottom: 1px solid lightgray;
    margin-bottom: 20px;
`;

const Btn = styled.div`
    border: 1px solid lightgray;
    width: 240px;
    display: flex;
    justify-content: center;
    & button{
        width: 100%;
    }
    & button:hover{
        background-color: darkgrey;
        color: #fff;
    }
`;

export default Login;

