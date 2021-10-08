import React from 'react';
import styled from 'styled-components';

import { Grid, Input, Button } from '../elements';

const CommentWrite = (props) => {

    return(
        <React.Fragment>
            <CommentBorder>
                <Grid width="600px" padding="16px" is_flex>
                    <Input placeholder="댓글 내용을 입력해주세요 :)"/>
                    <Button width="50px">작성</Button>
                </Grid>
            </CommentBorder>
        </React.Fragment>
    )
}

const CommentBorder = styled.div`
    border-bottom: 1px solid lightgray;
`;

export default CommentWrite;