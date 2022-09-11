import styled from "styled-components";

const DatePaneWrapper = styled.div`
    // width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(7, minmax(128px, 1fr));
    grid-template-rows: repeat(4, minmax(128px, 1fr));
    column-gap: 10px;
    row-gap: 20px;

    margin: 18px;
    margin-top: 0;
`

export { DatePaneWrapper }