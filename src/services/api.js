import axios from 'axios';

const host = "localhost";
// const host = "192.168.112.51";
const port = "3001";


const baseAPIUrl = `${host}:${port}`
// "server": "json-server -p3001 --host 192.168.112.51 --watch db.json"

function getStore(storeName) {
    let data = []
    axios.get(`http://${baseAPIUrl}/${storeName}`).then(re => {
        data.push(re.data)
    })
    return data
}

function editStoreItem(storeName, id, updatedObject) {
    axios.put(`http://${baseAPIUrl}/${storeName}/${id}`, updatedObject).then(re => {
        return getStore(storeName)
    })
}

function addStoreItem(storeName, newObject) {
    axios.post(`http://${baseAPIUrl}/${storeName}`, newObject).then(re => {
        getStore(storeName)
    })
}

function deleteStoreItem(storeName, id) {
    axios.delete(`http://${baseAPIUrl}/${storeName}/${id}`).then(re => {
        getStore(storeName)
    })
}

const API = {
    baseAPIUrl,
    getStore,
    editStoreItem,
    addStoreItem,
    deleteStoreItem
}

export default API