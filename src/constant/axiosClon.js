import { API } from "@/const"
import axios from "axios"

const instance = axios.create({
    baseURL: API,
})

export const postData = async (url, data) => {
    try {
        const res = await axios.post(` ${API}${url} `, data, {
            headers: {
                Authorization: sessionStorage.getItem('token')
            }
        })
        if (res && res.status === 200) {
            return res.data
        } else {
            return false
        }
    } catch (error) {
        console.log('Error ', error);
        return false;
    }
}

export const getData = async (url, token) => {
    try {
        const res = await axios.get(`${API}${url}`, {
            headers: {
                ...(token !== null && { Authorization: token }),
                "Accept-Language": "*",
            },
        })

        if (res && res.status === 200) {
            return res.data
        } else {
            console.log('خطأ', 'حدث خطأ اثناء جلب البيانات ', 'error')
            return false
        }
    } catch (error) {
        console.log('Error ', error);
        console.log('خطأ', 'قم بالتحقق من الاتصال ', 'error')
        return false
    }
}

export const putData = async (url, data) => {
    try {
      const res = await axios.put(`${API}${url}`, data, {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      })
  
      if (res && res.status === 200) {
        return res.data
      } else {
        return false
      }
    } catch (err) {
      console.log(err)
      return false
    }
  }

export default instance
