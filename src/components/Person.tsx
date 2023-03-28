type Personprops={
    firstName:string,
    lastName:string,
}

export default function Person(props:Personprops
    ) {
  return (
    <div>firstName:{props.firstName} LastName:{props.lastName}</div>
  )
}
