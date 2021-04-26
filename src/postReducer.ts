

export interface PostState {
    posts: string[]
}

const initialState = {
    posts: []
}

type Action ={type: 'ADD_POST', payload: string}

export const addPost = (post:string):Action =>({
    type:'ADD_POST', payload: post,
})

export const postReducer = (state:PostState=initialState, action:Action)=>{
    switch(action.type){
         case 'ADD_POST':{
             return {...state, posts: [...state.posts, action.payload]}
         }
         default:
             return state
    }
}


