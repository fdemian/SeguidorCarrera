import
{
  REQUEST_MATERIAS,
  RECEIVE_MATERIAS,
  RECEIVE_MATERIAS_FAILURE
} from './Actions';

import mapSubjectsFromServer from './SubjectsByYear';

const initialState = {
  materias: [],
  isFetching: false,
  error: false
}

export function seguidor(state = initialState, action) {
 switch (action.type) {
  case REQUEST_MATERIAS:
      return { ...state, isFetching: true };
  case RECEIVE_MATERIAS:
      const _materias = mapSubjectsFromServer(action.data);
      return { ...state, isFetching: false, materias: _materias };
  case RECEIVE_MATERIAS_FAILURE:
      return { ...state, isFetching: false, error: true, materias: [] };
	default:
      return state;
 }
}

export default seguidor;
