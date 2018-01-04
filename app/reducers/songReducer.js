export default function songReducer(state = null, action) {
  console.log(action);

  if (action.type==="SELECT_SONG") {
   return action.song;     
  }
  
 

  return state;
}
