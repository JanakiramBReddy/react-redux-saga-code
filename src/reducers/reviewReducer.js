const initialState = {
    value : ''
}

export default function(state = initialState,action){
    console.log('reducer');
    switch(action.type){
        case "REVIEW_SUBMIT":
            console.log('REVIEW_SUBMIT reducer');
            return {
                ...state, value : action.payload.text
            }
        default:
    }
    return state;
}