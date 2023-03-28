export type Profileprops={
    name:string
}

export default function Profile(props:Profileprops) {
  return (
    <div>Profile Page {props.name}</div>
  )
}
