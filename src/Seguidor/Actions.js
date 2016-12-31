export const REQUEST_MATERIAS = 'REQUEST_MATERIAS';
export const RECEIVE_MATERIAS = 'RECEIVE_MATERIAS';
export const RECEIVE_MATERIAS_FAILURE = 'RECEIVE_MATERIAS_FAILURE';

function loadMaterias() {

  const _endpoint = 'data/materias.json';
  
  return {
    types: [REQUEST_MATERIAS, RECEIVE_MATERIAS, RECEIVE_MATERIAS_FAILURE],
    shouldCallAPI: (state) => true,
    endpoint: _endpoint,
    callHeaders: { mode: 'cors', cache: 'default' },
    payload: null
  }
}

export default loadMaterias;
