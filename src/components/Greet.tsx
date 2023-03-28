

type User={
    name:string
}

export default function Greet(props:User) {
  return (
    <div>Hello Every Body!!!, I am {props.name}</div>
  )
}
