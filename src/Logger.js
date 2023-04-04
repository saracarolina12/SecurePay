import axios from 'axios';
export const logMessage = (m, level = "info") => {
    axios.post('http://172.177.33.225:4000/log', {m, level})
    //axios.post('http://localhost:4000/log', {m, level})
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.error(error);
    })
};