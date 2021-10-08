import React from "react";
import styled from 'styled-components';
import {Grid, Text, Image} from "../elements";

const Card = (props) => {
    const{image_url, user_name, post_id} =props;

    return(
        <CardBox>
            <Grid padding="16px" is_flex bg="#fff" margin="16px">
                <Grid width="auto" margin="0px 8px 0px 0px">
                    <Image shape="square" image_url={image_url}/>
                </Grid>
                <Grid>
                    <Text>
                        <b>{user_name}</b>님이 게시글에 댓글을 남겼습니다!
                    </Text>
                </Grid>
            </Grid>
        </CardBox>
    )
}

Card.defaultProps = {
    image_url: "",
    user_name: "",
    post_id: null
}

const CardBox = styled.div`
    border-bottom: 1px solid lightgray;
`;

export default Card;