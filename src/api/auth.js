import axiosInstance from '@/axiosInstance/axios.js'

export function log(){
    return axiosInstance.get("admin/auth/google")
}

