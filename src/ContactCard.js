import React from "react";
// import detail from "./detail"

export default function Contact(props) {
  return (
    <>
      <div>
        <h1 style = {{display : props.name ? 'block': 'none'}} >Name:{props.name}</h1>
        <p style= {{color: props.name ? 'red':'#888888' }}>Email:{props.email}</p>
        <p style = {{color: props.name? 'red':'#888888'}}>Phone:{props.phone}</p>
        <hr />
      </div>
    </>
  );
}
