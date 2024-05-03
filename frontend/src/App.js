import { useState } from 'react';

import { listEmployees, addEmployee, updtEmployee, deleteEmployee } from './service/employee/employee.service';

import './App.css';

function App() {

  const [employees, setEmployees] = useState([]);


  const show_employees = async () => {
    let response = await listEmployees();
    setEmployees(response);
  };


  return (
    <div className="App">
      <div>
        TODO:
        <ul>
          <li>Crea altro ms springboot senza autenticazione e rendi possibile la comunicazione</li>
          <li>Crea altro ms springboot con autenticazione token jwt</li>
        </ul>
      </div>

      <br />

      <div>
        <button onClick={show_employees}>call list Employees</button>
        <ul>
          {employees?.map(e => (
            <li key={e.employeeId}>{e.employeeId + ' - ' + e.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <button onClick={addEmployee}>add Employees</button>
        <button onClick={updtEmployee}>update Employees</button>
        <button onClick={deleteEmployee}>delete Employees</button>
      </div>


    </div>

  );
}

export default App;
