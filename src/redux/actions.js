export const addList = title => ({
    type: 'ADD_LIST',
    payLoad: {
        id: Math.floor(Math.random() * 10000000000000000000 + 1),
        title
    }
})