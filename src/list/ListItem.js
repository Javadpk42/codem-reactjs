import React from "react";
import Label from "./Label";
import './ListItem.css'
function ListItem(props) {
    return (
      <div className="list-item">
        <hr />
        <div className="list-title">
          <h4>{props.title}</h4>
        </div>
        <div className="list-discr">{props.descr}</div>
        <div className="list-label">
          <Label onAction={()=>{console.log('clicked');}} isActive={props.isActive}/>
        </div>
        <hr />
      </div>
    );
  };
  export default ListItem