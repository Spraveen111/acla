
import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import TaskList from './TaskList';

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Header/>}>
    <Route index element={<TaskList/>}/>
      <Route path="/add" element={<AddTask/>}/>
      <Route path='/edit' element={<EditTask/>}/>
 
    </Route>

   </Routes>
   </BrowserRouter>
  );
};

export default App;
