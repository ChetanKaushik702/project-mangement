import { CREATE_PROJECT } from "../constants/projectConstants";

const initState = {
    projects: [
        {id: '1', title: 'title', description: 'description'},
        {id: '2', title: 'title', description: 'description'},
        {id: '3', title: 'title', description: 'description'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case CREATE_PROJECT:
            console.log('created project', action.project);
            break;
        default:
            console.log('default case');
    }
    return state;
}

export default projectReducer;