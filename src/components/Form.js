import React, { useState } from "react";

const Form = ({addPlan}) => {
    const[plan,setValue] = useState("");
    const handlePlanChange = (event) =>{
        setValue(event.target.value);
    }

    const handlePlanAddition = (e) =>{
        e.preventDefault();
        if(plan.trim() === "") return;
        addPlan({id:4,title:plan.trim(),completed:false});
        setValue("");
    }
    return(
        <form className="ui form" onSubmit = {handlePlanAddition}>
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column five wide">
                        <input 
                            value = {plan}
                            onChange={handlePlanChange}
                            type="text" 
                            placeholder="Enter an activity to plan"/>
                    </div>
                
                    <div className="column one wide">
                        <button type="submit" className="ui button circular icon green"><i className="black plus icon"></i></button>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default Form;