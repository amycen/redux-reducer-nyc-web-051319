export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, {name: action.friend.name, hometown: action.friend.hometown, id: actionfriend.id}]}
    default:
      state
  }
}
