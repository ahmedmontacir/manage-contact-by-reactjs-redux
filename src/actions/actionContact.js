import axios from 'axios'
import { bindActionCreators } from 'redux';

export const getContacts = () =>  dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {dispatch ({
        type: 'GET_CONTACTS',
        payload: res.data
      })})
    .catch(err => alert(err))
}

export const deleteContact = (id) => async dispatch => {
    try{
    await axios.delete('https://jsonplaceholder.typicode.com/users/'+id);
    dispatch ({
             type: 'DELETE_CONTACT',
             payload: id
           })
    }
    catch(error){
        alert(error);
    }
}

export const addcontact = (contact) => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users',contact);
    dispatch ({
             type: 'ADD_CONTACT',
             payload: res.data
           })
}

export const updatecontact = (id,contact) => async dispatch => {
    
    const res = await axios.put('https://jsonplaceholder.typicode.com/users/'+id, contact)
    dispatch ({
             type: 'UPDATE_CONTACT',
             payload: res.data
           })
}

export const getcontact = (id) => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
    dispatch ({
             type: 'GET_CONTACT',
             payload: res.data
           })
}