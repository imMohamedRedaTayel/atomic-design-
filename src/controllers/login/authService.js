export default {
    checkIfAuthorized: () => {
        const token = sessionStorage.getItem("token");
        const isAuthed = sessionStorage.getItem("isAuthed");

        if (token && isAuthed) return true;
        return false;
    }
}