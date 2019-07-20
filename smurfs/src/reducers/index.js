import {
  FETCH_START, 
  FETCH_SUCCESS,  
  FETCH_ERROR,

  POST_START,
  POST_SUCCESS,
  POST_ERROR,
} from '../actions'


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   error: null,
   addingSmurf: false,
   deletingSmurf: false,
   //updatingSmurf: false,
 }

 export const rootReducer = (state = initialState, action) => {
   switch(action.type) {

     case FETCH_START:
       return {
         ...state,
         error: null,
         fetchingSmurfs: true
       }

       case FETCH_SUCCESS: 
         return {
           ...state,
           error: null,
           fetchingSmurfs: false,
           smurfs: action.payload
         }

       case FETCH_ERROR: 
         return {
           ...state,
           fetchingSmurfs: false,
           error: action.payload
         }

         case POST_START:
          return {
            ...state,
            addingSmurf: true,
            error: null,
          }

        case POST_SUCCESS:
          return {
            ...state,
            addingSmurf: false,
            error: null,
            smurfs: action.payload
          }

          
        case POST_ERROR:
          return {
            ...state,
            addingSmurf: false,
            error: action.payload
          }

      default:
       return state
   }
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
