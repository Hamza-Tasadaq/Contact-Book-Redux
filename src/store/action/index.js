const createContact = (data, history) => {
    history.push('/');
    return (dispatch) => {
        dispatch({
            type: 'CREATECONTACT',
            payload: data
        })
    }
}

const deleteContact = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'DELETECONTACT',
            payload: id
        })
    }
}

const deleteAllContacts = () => {
    return (dispatch) => {
        dispatch({
            type: 'DELETEALLCONTACTS'
        })
    }
}



export {
    createContact,
    deleteContact,
    deleteAllContacts
}