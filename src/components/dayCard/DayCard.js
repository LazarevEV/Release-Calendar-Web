import React, { useEffect, useState } from "react";
import { DayCardWrapper, DaySpan } from "./dayCardStyled";
import DayCardRelease from "../dayCardRelease/dayCardRelease";

const MAX_ELEMENTS = 3

export default function DayCard(props) {
    const [releases, setReleases] = useState([])

    useEffect(() => {
        setReleases(['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5'])
    }, [])

    return (
        <DayCardWrapper releaseN={1} isCurrentMonth={props.isCurrentMonth}>
            <DaySpan isEmpty={true} isCurrentMonth={props.isCurrentMonth}>{props.dayNumber}</DaySpan>
            <DayCardRelease name={'World of Warcraft: Dragonflight'} imgSrc={'https://img.championat.com/news/big/o/o/addon-dragonflight-dlya-wow-mozhet-vyjti-v-marte-2023-goda-vot-dva-dovoda_16524639991402648188.jpg'}></DayCardRelease>
        </DayCardWrapper>
    )
}