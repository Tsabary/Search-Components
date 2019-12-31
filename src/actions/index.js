import { FETCH_RESULTS } from "./types";
import resultsApi from "../apis/resultsApi";

export const fetchResults = term => async dispatch => {
  const response = await resultsApi.get("/search", { q: term });
  dispatch({
    type: FETCH_RESULTS,
    payload: response.data
  });
};
