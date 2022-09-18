import styled from "styled-components";

const ReleaseWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    background: url(${props => props.imgSrc});
    background-size: 125%;
`

const NameHeader = styled.span`
    width: 70%;

    font-weight: 300;
    font-size: 18px;
    color: #e4e4e4;
    // text-shadow: -1px -1px 0 rgba(0, 0, 0, .5), 1px -1px 0 rgba(0, 0, 0, .5), -1px 1px 0 rgba(0, 0, 0, .5), 1px 1px 0 rgba(0, 0, 0, .5);

    margin-left: 16px;
    margin-bottom: 16px;
`

export { ReleaseWrapper, NameHeader }