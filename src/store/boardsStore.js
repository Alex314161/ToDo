let initialState = {
    boards: [
        {id: 1, title: "ToDo", items: []},
        {id: 2, title: "Research", items: []},
        {id: 3, title: "Testing", items: []},
        {id: 4, title: "Completed", items: []}
    ]
}

export const boardsStore = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOARD':
            return {...state, boards: [...state.boards, action.payload]}
        case 'ADD_TASK':
            state.boards.map(el => {
                if (el.id == action.id){
                    el.items = [...el.items, action.payload]
                }
            })
            return state
        default:
            return state;
    }
}