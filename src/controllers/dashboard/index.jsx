import { getData } from "@/constant/axiosClon";


export default { 
    getDashboardList: async () => {
        const token = sessionStorage.getItem('token')
        try {
            const response = await getData('/dashboard/statistics', token)
            return response;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
 }