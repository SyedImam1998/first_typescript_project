import { CSSProperties } from "react"

type ContainerProps={
    style:CSSProperties
}
export default function Container(props:ContainerProps) {
  return (
    <div style={props.style}>
        Hello every body
    </div>
  )
}
