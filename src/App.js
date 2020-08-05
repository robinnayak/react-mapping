import React from "react"
import Contact from "./ContactCard"
import Detail from "./detail"


export default function App(){
const show = Detail.map((detail) => <Contact name={detail.name} email={detail.email} phone = {detail.phone} />)

  return(
    <div>
      {show}
    </div>
  )
}