import React from "react";
import RenderProp from "./RenderProp";

export default function PropPost() {
  return (
    <RenderProp>
      {({ counter, clickCounter }) => {
        return (
          <div>
            <button style={{backgroundColor:"green",color:"black",fontSize:"16px",margin:"10px"}} onClick={clickCounter}>Like Post {counter}</button>
          </div>
        );
      }}
    </RenderProp>
  );
}