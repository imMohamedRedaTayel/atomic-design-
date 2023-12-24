import { postData } from "@/constant/axiosClon"


export default {

    submitLogin: async (password, userName) => {
        const data = {
            emailOrPhone: password,
            password: userName,
        }
        try {
            const response = await postData( '/auth/admin/login', data ) 
            if (!response.error) {
                sessionStorage.setItem("token", response.data.token);
                sessionStorage.setItem("isAuthed", true);
                sessionStorage.setItem("user",JSON.stringify(response.data.user));
                window.location.href = '/'
            } else {
                return response.msg
            }
        } catch (error) {
            console.log( 'Error ', error );
        }
    },

}