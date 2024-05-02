import { listEmployees, addEmployee, updtEmployee, deleteEmployee } from './service/employee/employee.service';
import { registerUser } from './service/user/user.service';

import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <button onClick={registerUser}>create user Ale</button>
        <button onClick={listEmployees}>call list Employees</button>
        <button onClick={addEmployee}>add Employees</button>
        <button onClick={updtEmployee}>update Employees</button>
        <button onClick={deleteEmployee}>delete Employees</button>
      </div>
      <div>
        TODO:
        <ul>
          <li>Rendi consultabili risultati chiamata da interfaccia, senza aprire la console</li>
          <li>Crea altro ms springboot senza autenticazione e rendi possibile la comunicazione</li>
          <li>Crea altro ms springboot con autenticazione token jwt</li>
        </ul>
      </div>
    </>
  );
}

export default App;
