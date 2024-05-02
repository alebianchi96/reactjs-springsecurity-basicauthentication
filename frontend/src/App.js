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
          <li>Crea interazione crud per utenti via basic authentication</li>
          <li>Scrivi readme dettagliato su funzionamento</li>
          <li>Refactoring del codice BE e FE</li>
        </ul>
      </div>
    </>
  );
}

export default App;
