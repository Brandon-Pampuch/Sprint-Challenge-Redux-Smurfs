import axios from 'axios'


export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const getData = () => (dispatch) =>{
    dispatch({type:GET_DATA_START})
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log("response-data",res)
        dispatch({type: GET_DATA_SUCCESS, payload: res.data})
    })

    .catch(err => {
      console.log(err);
      dispatch({ type: GET_DATA_FAILURE });
    });
  }
export const addSmurf = (newSmurf) => (dispatch) =>{
    dispatch({type:ADD_SMURF_START})
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
        console.log("response-data",res)
        dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_SMURF_FAILURE });
    });
  }



/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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
