type NameList={
    names:{
        name:string,
        last:string
    }[]
}
export default function PersonList(props:NameList) {
  return (
    <div>
        {
            props.names.map((item)=>{
                return (
                    <div>
                        {item.name}, {item.last}
                    </div>
                )
            })
        }
    </div>
  )
}
