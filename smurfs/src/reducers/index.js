import {
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};
export const getData = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_START:
      return { ...state, fetchingSmurfs: true };
    case GET_DATA_SUCCESS:
      console.log("data in reducer", action.payload);
      return { ...state, fetchingSmurfs: false, smurfs: action.payload };
    case GET_DATA_FAILURE:
      return { ...state, fetchingSmurfs: false, error: "" };
    case ADD_SMURF_START:
      return { ...state, fetchingSmurfs: true };
    case ADD_SMURF_SUCCESS:
      console.log("data in reducer", action.payload);
      return { ...state, fetchingSmurfs: false, smurfs: action.payload };
    case ADD_SMURF_FAILURE:
      return { ...state, fetchingSmurfs: false, error: "" };
    case DELETE_SMURF_START:
      return { ...state, fetchingSmurfs: true };
    case DELETE_SMURF_SUCCESS:
      console.log("data in delete", action.payload);
      return { ...state, fetchingSmurfs: false, smurfs: action.payload };
    case DELETE_SMURF_FAILURE:
      return { ...state, fetchingSmurfs: false, error: "" };

    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
