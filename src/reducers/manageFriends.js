export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, {name: action.name, hometown: action.hometown, id: action.id}]}
    default:
      state
  }
}
