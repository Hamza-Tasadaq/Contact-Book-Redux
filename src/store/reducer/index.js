const INITIAL_STATE = {
    contacts: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CREATECONTACT':
            return ({
                ...state,
                contacts: [...state.contacts, action.payload]
            })
        case 'DELETECONTACT':
            return ({
                ...state,
                contacts: state.contacts.filter((contact, index) => index !== action.payload)
            })

        case 'DELETEALLCONTACTS':
            return ({
                ...state,
                contacts: []
            })
        default:
            return state;
    }
}