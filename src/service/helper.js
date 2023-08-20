import axios from 'axios'


export const getService1 = () => {
    return axios.get("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1").then(response => response.data)
}

export const getService2 = (data) => {
    return axios.get("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1").then(response => response.data)
}