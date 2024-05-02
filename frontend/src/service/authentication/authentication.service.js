function get_basic_authentication_header({ username, password }) {
    let ref_string = "{username}:{password}"
        .replace("{username}", username)
        .replace("{password}", password);

    // to base64 -> btoa
    return {
        "Authorization": "Basic " + btoa(ref_string)
    };
}

const default_user = {
    "username": "ale",
    "password": "ale"
};

export { get_basic_authentication_header, default_user };
