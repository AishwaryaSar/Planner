import React, {useState} from "react";

const Plans = ({title, completed, remove, editListen}) =>{
    const [editPlan,setEdit] = useState(false);
    const [value,setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [completedPlan, setCompleted] = useState(completed);

    const handleOnEventChange = (e) =>{
        setTempValue(e.target.value);
    }
    const handleEditPlan = () =>{
        setEdit(true);
    }
    const handleonEditPlan = (e) =>{
        const key = e.keyCode;
        
        if(key === 13){
            editListen({title:tempValue})
            setValue(tempValue);
            setEdit(false);
        }
        else if(key === 27){
            setTempValue(value);
            setEdit(false);
        }
    }
    const handleCompleted = () =>{
        setCompleted((oldcompltedPlan)=>{
            const newState = !oldcompltedPlan;
            editListen({completed:newState})
            return newState;
        });
    }
    return (
        <div className="row">
        {
            editPlan?
                <div className="column seven wide">
                    <div className="ui input fluid">
                        <input 
                            onChange={handleOnEventChange}
                            autoFocus={true}
                            onKeyDown={handleonEditPlan}
                            value = {tempValue}/>
                    </div>
                </div> : 
                <>
                    <div className="column five wide"  onDoubleClick={handleEditPlan}>
                        <h2 className={"ui header"+(completedPlan ? " green" : "")}>{value}</h2>
                    </div>

                    <div className="column one wide">
                        <button 
                            className={"ui button circular icon" + (completedPlan? " green" : " blue")}
                            onClick={handleCompleted}
                            >
                            <i className="black check icon"></i></button>
                    </div>
                    <div className="column one wide">
                        <button 
                        onClick={remove}
                        className="ui button circular icon red">
                            <i className="black remove icon"></i></button>
                    </div>
                </>
        }
        </div>
    );
};
export default Plans;