import { getData, putData } from '../../constant/axiosClon'

export default {
  getUsersList: async (search='',banned,limit,page) => {
    const token = sessionStorage.getItem('token')

    let url = `/user/list?search=${search}&limit=${limit}`;
    if (banned !== 2) {
      url += `&banned=${banned}`;
    }
    if (page) {
      url += `&page=${page}`;
    }
    try {
        const response = await  getData(url,token)
        return response.data;
      } catch (error) {
        console.error(error);
        return [];
      }
  },
 
  userBan: async (id) => {
    const response = await putData(`/user/ban/${id}`,)
    if (response && response.status === 200) {
      return true
    } else {
      return false
    }
  },

}