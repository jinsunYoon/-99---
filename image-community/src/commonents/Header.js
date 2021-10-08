import React from 'react';
import { Grid, Button, Image } from '../elements';
// import { getCookie, deleteCookie } from '../shared/Cookie';

import {useSelector, useDispatch} from "react-redux";
import { actionCreators as userActions } from '../redux/modules/user';

import { history } from "../redux/configStore";
import { apiKey } from '../shared/firebase';

const Header = (props) => {
    const is_login = useSelector((state) => state.user.is_login);
    const dispatch = useDispatch();

    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(_session_key)? true : false;
    console.log(is_session);

    if(is_login && is_session){
        return(
            <React.Fragment>
                <Grid is_flex padding="16px">
                    <Grid _onClick={() => {
                            history.push('/');
                        }}>
                        <Image shape="logo" src={"https://firebasestorage.googleapis.com/v0/b/project-week3-b42ba.appspot.com/o/images%2FjinsunnyLogo.png?alt=media&token=cf89847d-4da6-460d-a203-381f575a2154"}/>
                    </Grid>
                    <Grid is_flex>
                        <Button is_float _onClick={() => history.push("./write")}></Button>
                        <Button my_info></Button>
                        <Button my_noti _onClick={() => {
                            history.push("./noti");
                        }}></Button>
                        <Button logout _onClick={() => {
                                dispatch(userActions.logoutFB());
                            }}
                        ></Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }

    return(
        <React.Fragment>
            <Grid is_flex padding="16px">
                <Grid _onClick={() => {
                            history.push('/');
                        }}>
                    <Image shape="logo" src={"https://firebasestorage.googleapis.com/v0/b/project-week3-b42ba.appspot.com/o/images%2FjinsunnyLogo.png?alt=media&token=cf89847d-4da6-460d-a203-381f575a2154"}/>
                </Grid>
                <Grid is_flex>
                    <Button text="로그인" _onClick={() => {
                        history.push('/login');
                    }}></Button>
                    <Button margin="0px 0px 0px 40px" text="회원가입" _onClick={() => {
                        history.push('/signup');
                    }}></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Header.defaultProps = {}

export default Header;