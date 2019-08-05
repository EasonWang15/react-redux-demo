const initialState = {
    lists: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LIST':
            const { id, title } = action.payLoad
            return {
                ...state,
                lists: [
                    ...state.lists,
                    {
                        id,
                        title
                    }
                ]
            }
        default:
            return state
    }
}