import React from "react";
import Plans from "./Plans";
const List = ({ plannerList, removePlan, editListen }) =>{
    const renderedPlannerList = plannerList.map((item)=><Plans 
        title = {item.title} 
        key = {item.title} 
        completed = {item.completed} 
        remove = {(e) => {removePlan(item._id)}}
        editListen = {(updatedPlan)=>editListen(item._id,updatedPlan)}
    >
    </Plans>)
    return(
        <div className="ui grid center aligned">
            {renderedPlannerList}
        </div>
    );
};
export default List;