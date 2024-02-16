import React from "react";
import Tools from "./Tools";
import SimpleList from "./SimpleList";
const arr = [
  {
    id:1,
    title: "appointment with doctor",
    descr: "patient is rescheduled to october",
    isActive: true,
  },
  {
    id:2,
    title: "appointment with doctor",
    descr: "patient is rescheduled to november",
    isActive: false,
  },
  {
    id:3,
    title: "appointment with doctor",
    descr: "patient is rescheduled to december",
    isActive: false,
  },
];
class List extends React.Component {
  constructor(props){
    super(props)
    
    this.state={
      data:arr,
      activeState:'all'
    }
  }
  onListChange=(evt)=>{
    const value=evt.target.value
    this.setState({
      activeState:value
    })
  }
  handleDelete=(item)=>{
    console.log(item)
    const newList=this.state.data.filter(element=>element.id!==item.id)
    this.setState({
      data:newList
    })
  }
  handleLabelClick=(arg)=>{
    this.setState({
      activeState:arg
    })
  }
  render() {
    const{
      data,
      activeState
    }=this.state
    const newList=data.filter((item)=>{
        if(activeState==='all'){
            return true
        }
        if(activeState==='active'){
            return item.isActive===true
        }
        if(activeState==='non-active'){
            return item.isActive===false
        }
        return false
    })
    return (
        <Tools labelValue={activeState} onAction={this.onListChange}>
          <SimpleList onLabelClick={this.handleLabelClick} data={newList} onAction={this.handleDelete}/>
      </Tools>
    );
  }
}
export default List;
