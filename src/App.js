import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";
import axios from "axios";
const appTitle = "Planner App";

const App = () =>{

  useEffect(()=>{
    async function fetchData(){
      const { data } = await axios.get("http://localhost:3030/planners/");
      setPlannerList(data);
    }
    fetchData();
  },[])

  const addPlan = async (item) =>{
    const { data } = await axios.post("http://localhost:3030/planners/",item);
    setPlannerList((oldList)=> [...oldList,data]);
  }
  const removePlan = async (id) =>{
    await axios.delete("http://localhost:3030/planners/"+id)
    setPlannerList((oldList)=>oldList.filter((item)=>item._id!==id))
  }
  const editPlanListen = async (id,item)=>{
    await axios.put("http://localhost:3030/planners/"+id,item)
  }
  const [plannerList,setPlannerList] = useState([]);
  return (<div className="ui container center aligned">
  <Section>
  <h1>{appTitle}</h1>
  </Section>
  <Section>
  <Form addPlan={addPlan}/>
  </Section>
  <Section>
    <List 
    editListen = {editPlanListen} 
    plannerList={plannerList} 
    removePlan={removePlan}>
    </List>
  </Section>
  </div>)
}
export default App;