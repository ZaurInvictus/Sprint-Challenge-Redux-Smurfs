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




export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_ERROR = "DELETE_ERROR";


export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('call failed: ', err.response);
    });
};


export const EDIT_SMURF_START = 'EDIT_SMURF_START';
export const EDIT_SMURF_SUCCESS = 'EDIT_SMURF_SUCCESS';
export const EDIT_SMURF_FAILURE = 'EDIT_SMURF_FAILURE';

export const editSmurf = smurf => dispatch => {
  dispatch({ type: EDIT_SMURF_START });
  return axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('call failed: ', err.response);
    })}

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
