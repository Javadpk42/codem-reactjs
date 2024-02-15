import React from "react";
import ListItem from "./ListItem";
import Tools from "./Tools";
const arr = [
  {
    title: "appointment with doctor",
    descr: "patient is rescheduled to october",
    isActive: true,
  },
  {
    title: "appointment with doctor",
    descr: "patient is rescheduled to november",
    isActive: false,
  },
  {
    title: "appointment with doctor",
    descr: "patient is rescheduled to december",
    isActive: false,
  },
];
class List extends React.Component {
  constructor(props){
    super(props)
    
    this.state={
      data:arr
    }
  }
  onListChange(evt){
    console.log(evt.target.value)
    const value=evt.target.value
    const newList=arr.filter((item)=>{
        if(value==='all'){
            return true
        }
        if(value==='active'){
            return item.isActive===true
        }
        if(value==='non-active'){
            return item.isActive===false
        }
        return false
    })
    console.log(newList)
  }
  render() {
    return (
        <Tools onAction={this.onListChange}>
      <div className="app-list">
        {arr.map((obj) => {
          return (
            <ListItem key={obj.descr}
              title={obj.title}
              descr={obj.descr}
              isActive={obj.isActive}
            />
          );
        })}
      </div>
      </Tools>
    );
  }
}
export default List;
