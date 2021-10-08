import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
    const {shape, src, size} = props;

    const styles = {
        src : src, 
        size : size,
    }

    if(shape === "circle"){
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle"){
        return(
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }

    if(shape === "logo"){
        return(
            <MainLogo {...styles}></MainLogo>
        )
    }

    if(shape === "logoLogin"){
        return(
            <MainLogoLogin {...styles}></MainLogoLogin>
        )
    }

    return(
        <React.Fragment>
            <ImageDefault {...styles}></ImageDefault>
        </React.Fragment>
    )
}

Image.defaultProps ={
    shape: "circle",
    src: "https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/1.JPG",
    size: 36,
}

const ImageDefault = styled.div`
    --size: ${(props)=>props.size}px;
    width: 4rem;
    height: 4rem;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin-right: 4px;
`;

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;

`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

const ImageCircle = styled.div`
    --size: ${(props)=>props.size}px;
    /* width: var(--size);
    height: var(---size);
    border-radius: var(--size); */
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin-right: 10px;
`;

const MainLogo = styled.div`
    background-image: url("${(props) => props.src}");
    background-size: cover;
    width: 10rem;
    height: 3rem;
    cursor: pointer;
`;

const MainLogoLogin = styled.div`
    background-image: url("${(props) => props.src}");
    background-size: cover;
    width: 10rem;
    height: 3rem;
    cursor: pointer;
`;

export default Image;