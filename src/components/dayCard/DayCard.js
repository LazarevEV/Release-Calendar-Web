import React, { useEffect } from "react";
import styled from "styled-components";
import { DayCardWrapper, DaySpan } from "./dayCardStyled"; 

export default function DayCard(props) {
    
    return (
        <DayCardWrapper releaseN={5}>
            <DaySpan isEmpty={false}>10</DaySpan>
            {/* <div style={{width: "100%", backgroundColor: "#f5a9de"}}></div>
            <div style={{width: "100%", backgroundColor: "#e5f5a5"}}></div>
            <div style={{width: "100%", backgroundColor: "#a6f342"}}></div>
            <div style={{width: "100%", backgroundColor: "#d6192a"}}></div>
            <div style={{width: "100%", backgroundColor: "#a6f112"}}></div> */}
        </DayCardWrapper>
    )
}