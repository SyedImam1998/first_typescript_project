import {useState} from 'react'

type AuthUser={
    name:string,
    email:string
}
type Username={
    username:"imam"|"syed"
}

export default function User() {
    /// here this about future value which can be either null or AuthUser type
    const [first, setfirst] = useState<AuthUser | null>();
    
    /// These are called literals where developer can only asign below 2 values
   let name:"syed"|"imam"

    const HandleClick=()=>{
        setfirst({
            name:"imam",
            email:"syed"
        })
    }
   
  return (
    <div>
        <button onClick={HandleClick}>Login</button>
        <button>LoginOut</button>
       <div>
        {first?.name}
       </div>
    </div>
  )
}
