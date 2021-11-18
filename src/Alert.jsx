import React, { useState } from "react";

function Alert(){
  const [moon,Setmoon]=useState("rocket")
  function  change(){
    Setmoon("satellite")
  }
    return(
      <>
        <div class="alert alert-info
        alert-dismissible fade show" role="alert">WELCOME,HERE YOU CAN SOME CUSTOMIZATION OF GIVEN TEXT!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <div class="alert alert-danger
        alert-dismissible fade show" role="alert">CLICK TO SEE MAGIC  <i onClick={change} class={`fas fa-${moon} mx-2`}></i>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      </>
    )
}
export default Alert