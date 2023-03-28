import React, { ProfilerProps } from 'react'
import { Profileprops } from './Profile'

type Privateprops={
    isLogged:Boolean,
    component:React.ComponentType<Profileprops>

}
export default function Private(props:Privateprops) {
  if(props.isLogged){
    return <props.component name="imam"></props.component>
  }else{
    return <></>
  }
}
