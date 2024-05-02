import axios from 'axios';
import { get_basic_authentication_header, default_user } from '../authentication/authentication.service';
import { base_url } from '../routes/routes.service';

const custom_headers = {
    headers: {
        ...get_basic_authentication_header(default_user),
    }
};

async function listEmployees() {
    console.log("-> list");
    let res = (await axios
        .get(base_url + "api/employees", custom_headers)
    ).data;
    console.log("list_response", res);
}

async function addEmployee() { console.log("-> add"); }

async function updtEmployee() { console.log("-> updt"); }

async function deleteEmployee() { console.log("-> delete"); }

export {
    listEmployees, addEmployee, updtEmployee, deleteEmployee
};
