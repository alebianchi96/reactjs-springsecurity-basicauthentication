import axios from 'axios';
import { default_user } from '../authentication/authentication.service';
import { base_url } from '../routes/routes.service';

async function registerUser() {
    let res = await axios
        .post(base_url + "register", default_user);
    console.log("register-response", res);
}

export { registerUser };