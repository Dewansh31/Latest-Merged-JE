import React from 'react';
import Search from './Search';
import Sidebar from '../Sidebar';




const Dashboard = (props) => {
  return (
    <div>

      <Sidebar username={props.name}  />
     
    <Search/>
     
    
 

    </div>
  );
};

export default Dashboard;
