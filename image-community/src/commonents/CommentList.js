import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Text } from "../elements";

const CommentList = (props) => {

    return(
        <React.Fragment>
            <Grid padding="0px 16px">
                <CommentItem/>
                <CommentItem/>
                <CommentItem/>
                <CommentItem/>
                <CommentItem/>
                <CommentItem/>
            </Grid>
        </React.Fragment>
    )
}

export default CommentList;

const CommentItem = (props) => {

    const {user_profile, user_name, user_id, post_id, contents, insert_dt } =props;

    return (
        <CommentListBorder>
            <Grid is_flex margin="10px">
                <Grid is_flex>
                    <Image shape="circle"/>
                    <Text margin="0px 20px 0px 0px" bold>{user_name}</Text>
                    <Text>{contents}</Text>
                </Grid>
                <Grid is_flex margin="0px 4px">
                    <Text color="darkgray" margin="0px">{insert_dt}</Text>
                </Grid>
            </Grid>
        </CommentListBorder>
    )
}

CommentItem.defaultProps = {
    user_profile: "",
    user_name: "jinsun",
    user_id: "",
    post_id: 1,
    contents: "귀여운 고양이네요!",
    insert_dt: "2021-01-01 19:00:00",
}

const CommentListBorder = styled.div`
    border-bottom: 1px solid #f3f3f3;
    padding: 10px 0px;
`;

// export default CommentItem;
// 컴포넌트 내부에 여러 개를 넣어도 상관없으며, 비슷한 기능끼리 묶어 만들기도 함. 특히 컴포넌트 길이가 짧을 때 자주 묶는다고 함.
// 위에 export를 한 애가 있기 때문에 또 할 필요가 없음.