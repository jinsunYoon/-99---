import React from 'react';
import { Grid, Image, Text, Button } from '../elements';
import styled from 'styled-components';

import {history} from "../redux/configStore"

const Post = (props) => {

    return (
        <React.Fragment>
            <PostBox>
                <Grid width="600px">
                    <BorderBottom>
                        <Grid is_flex padding="10px 16px">
                            <PostBoxFlex>
                                <Image shape ="circle" src = {props.src}/>
                                <Text bold>{props.user_info.user_name}</Text>
                            </PostBoxFlex>
                            <PostBoxFlex>
                                <Text>{props.insert_dt}</Text>
                                {props.is_me && (
                                    <Button width="auto" margin="4px" padding="4px" _onClick={() => {
                                        history.push(`/write/${props.id}`)
                                    }}>
                                    수정
                                    </Button>
                                )}
                            </PostBoxFlex>
                        </Grid>
                    </BorderBottom>
                    <Grid >
                        <Image shape="rectangle" src={props.image_url}/>
                    </Grid>
                    <Grid padding="16px">
                        <Text>{props.contents}</Text>
                    </Grid>
                    <Grid padding="0px 16px 8px 16px">
                        <Text margin="0" bold color="gray">댓글 {props.comment_cnt}개</Text>
                    </Grid>
                </Grid>
            </PostBox>
        </React.Fragment>
    )
}

Post.defaultProps = {
    user_info: {
        user_name: "jinsun",
        user_profile: "https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/1.JPG",
    },
    image_url : "https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/1.JPG",
    contents : "스타듀밸리네요!",
    comment_cnt: 10,
    insert_dt: "2021-10-01 10:00:00",
    is_me: false,
};

const PostBox = styled.div`
    border: 1px solid lightgray;
    background-color: #fff;
    margin: 30px 0px;
`;

const BorderBottom = styled.div`
    border-bottom: 1px solid lightgray;
`;

const PostBoxFlex = styled.div`
    display: flex;
    align-items: center;
`;

export default Post;