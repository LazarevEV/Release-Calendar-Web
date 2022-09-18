import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getMonthDaysList, fillLeadingAndTrailingDates, getMonthFromString } from '../../utils/dateHandlers';
import { DatePaneWrapper } from "./DatePaneStyled";
import DayCard from "../dayCard/DayCard";

export default function DatePane(props) {
    const [ dates, setDates ] = useState([])

    useEffect(() => {
        setDates(fillLeadingAndTrailingDates(getMonthDaysList(props.currentDate)))
    }, [props.currentDate])
    
    return (
        <DatePaneWrapper>
            {
                dates.map((day) => (
                    <DayCard
                        key={day}
                        isCurrentMonth={day.getMonth() === getMonthFromString(props.currentDate.month)}
                        dayNumber={day.getDate()}
                    ></DayCard>
                ))
            }
        </DatePaneWrapper>
    )
}