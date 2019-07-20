import axios from 'axios'

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_ERROR = "FETCH_ERROR"

const URL = ('http://localhost:3333/smurfs');

export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}`);
  return dispatch => {
    dispatch({ type: FETCH_START });
    smurfs
      .then(res => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_ERROR, payload: err });
      });
  };
};

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_ERROR = "POST_ERROR";


export const postSmurf = (newSmurf) => dispatch => {
  dispatch({ type: POST_START });
  axios 
  .post('http://localhost:3333/smurfs', newSmurf)
  .then( res => {
    dispatch({ type: POST_SUCCESS, payload: res.data});
  })
  .catch(err => {
    console.log('ERROR from AXIOS POST CALL', err.response.data.Error)
    dispatch({ type: POST_ERROR, payload: err.response.data.Error});
  });
};

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
