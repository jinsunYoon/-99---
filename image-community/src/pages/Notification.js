import React from "react";
import styled from 'styled-components';
import {Grid, Text, Image} from "../elements";
import Card from "../elements/Card";

const Notification = (props) => {
    let noti = [
        {user_name: "aaaaa", post_id: "post1", image_url: ""},
        {user_name: "aaaaa", post_id: "post2", image_url: ""},
        {user_name: "aaaaa", post_id: "post3", image_url: ""},
        {user_name: "aaaaa", post_id: "post4", image_url: ""},
        {user_name: "aaaaa", post_id: "post5", image_url: ""},
        {user_name: "aaaaa", post_id: "post6", image_url: ""},
        {user_name: "aaaaa", post_id: "post7", image_url: ""},
    ];
    return (
        <React.Fragment>
            <NotiBox>
                <Grid>
                    {noti.map((n) => {
                        return(
                            <Card key={n.post_id} {...n}/>
                        )
                    })}
                </Grid>
            </NotiBox>
        </React.Fragment>
    )
};

const NotiBox = styled.div`
    width: 600px;
    border: 1px solid lightgray;
    margin: 20px 0px;
    background-color: #fff;
`;

export default Notification;