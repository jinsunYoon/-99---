import React from 'react';
import styled from 'styled-components';
import {Edit} from "@material-ui/icons";
import {ExpandLess} from "@material-ui/icons";
import {AccountCircle} from "@material-ui/icons";
import {ExitToAppSharp} from "@material-ui/icons";
import {NotificationsSharp} from "@material-ui/icons";


const Button = (props) => {
    const {text, _onClick, is_float, children, margin, width, padding, up, my_info, my_noti, logout } = props;

    if(is_float){
        return(
            <React.Fragment>
                <FloatButton onClick={_onClick}>
                    {text? text : children}
                    <Edit style={{ marginRight: "10px", color: "gray", fontSize: "27px", background: "#fff", borderRadius: "50px" }} />
                </FloatButton>
            </React.Fragment>
        )
    }

    if(my_info){
        return(
            <React.Fragment>
                <FloatButton onClick={_onClick}>
                    {text? text : children}
                    <AccountCircle style={{ marginRight: "10px", color: "gray", fontSize: "27px", background: "#fff", borderRadius: "50px" }} />
                </FloatButton>
            </React.Fragment>
        )
    }

    if(my_noti){
        return(
            <React.Fragment>
                <FloatButton onClick={_onClick}>
                    {text? text : children}
                    <NotificationsSharp style={{ marginRight: "10px", color: "gray", fontSize: "27px", background: "#fff", borderRadius: "50px" }} />
                </FloatButton>
            </React.Fragment>
        )
    }

    if(logout){
        return(
            <React.Fragment>
                <FloatButton onClick={_onClick}>
                    {text? text : children}
                    <ExitToAppSharp style={{ color: "#b9b9b9", fontSize: "27px", background: "#fff", borderRadius: "50px" }} />
                </FloatButton>
            </React.Fragment>
        )
    }

    if(up){
        return(
            <React.Fragment>
                <UPButton onClick={_onClick}>
                    {text? text : children}
                    <ExpandLess style={{ color: "#b9b9b9", fontSize: "35px", padding:"5px", background: "#fff", borderRadius: "50px", border:"2px solid #f5f4f4"}} />
                </UPButton>
            </React.Fragment>
        )
    }

    const styles = {
        margin: margin, 
        width: width,
        padding: padding,
    };

    return(
        <React.Fragment>
            <ElButton {...styles} onClick={_onClick}>{text? text : children}</ElButton>
        </React.Fragment>
    )
}

Button.defaultProps = {
    text: false,
    children : null,
    _onClick: () => {},
    is_float: false,
    margin: false,
    padding: "12px 0px",
}

const ElButton = styled.button`
    width: ${(props) => props.width};
    color: gray;
    padding: ${(props) => props.padding};;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
    background-color: #fff;
`;

const FloatButton = styled.button`
    box-sizing: border-box;
    bottom: 50px;
    right: 16px;
    border-style: none;
    background: none;
    cursor: pointer;
`;

const UPButton = styled.button`
    box-sizing: border-box;
    position: fixed;
    bottom: 50px;
    right: 16px;
    border-style: none;
    background: none;
    cursor: pointer;
`;


export default Button;