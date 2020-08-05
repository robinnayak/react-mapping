import React from "react";

function ContactCard(props) {
  // console.log(props.name);
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <p>Email:{props.email}</p>
      <p>Phone:{props.phone}</p>
      <p />
    </div>
  );
}

export default ContactCard;
