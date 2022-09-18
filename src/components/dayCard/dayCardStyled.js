import styled from "styled-components";

const DayCardWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: repeat(${props => props.releaseN}, 1fr);
    gap: 0px;

    background: ${props => props.isCurrentMonth ? "rgba(93, 93, 93, 0.25)" : "rgba(0, 0, 0, 0.25)"};
    border-radius: 28px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.8px);
    border: 1px solid rgba(255, 255, 255, 0.05);

    overflow: hidden;
`

const DaySpan = styled.span`
    width: 36px;
	height: 36px;
    line-height: 36px;

    border-radius: 100%;
    // background: ${props => props.isEmpty ? "none" : "#da6375"};
    background: ${props => {
        if (props.isEmpty) return "none"
        if (!props.isEmpty && props.isCurrentMonth) return "#da6375"
        if (!props.isEmpty && !props.isCurrentMonth) return "rgba(208, 60, 83, .75)"
    }};
    color: ${props => {
        if (props.isEmpty && props.isCurrentMonth) return "#9c939a"
        if (props.isEmpty && !props.isCurrentMonth) return "#665e64"
        if (!props.isEmpty && props.isCurrentMonth) return "#f4f4f4"
        if (!props.isEmpty && !props.isCurrentMonth) return "#cfcfcf"
    }};

    font-size: 16px;
    text-align: center;

    position: fixed;
	top: 8px;
	left: 8px;
`


export { DayCardWrapper, DaySpan }