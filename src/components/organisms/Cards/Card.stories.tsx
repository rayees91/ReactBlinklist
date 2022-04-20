import React from "react";
import Card   from './Card'
import entreprenuer from '../../../images/organisms/entreprenuer.svg'
import user from "../../../bookImages/user.svg"
const func={
    title: 'Organism/Card',
    component: Card
}

export default func

export const Cards = ()=> <Card bookLabel="finished" key="1" id={10} imag={entreprenuer} bookName="ahmed" author="taj" time="1hr read" user={user} count="1k read" status="finished" added="no" />
