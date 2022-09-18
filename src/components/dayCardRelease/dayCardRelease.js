import React, { useEffect, useState } from "react";
import { ReleaseWrapper, NameHeader } from './dayCardReleaseStyled'

export default function DayCardRelease(props) {
    return (
        <ReleaseWrapper imgSrc={props.imgSrc}>
            <NameHeader>{props.name}</NameHeader>
        </ReleaseWrapper>
    )
}