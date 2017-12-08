import { createSelector } from 'reselect';
import {
  pathToJS
} from 'react-redux-firebase'


/**
 * The global state selectors
 */

const selectGlobal = () => (state) => state.get('global');

const makeSelectGlobal = () => createSelector(
  selectGlobal(),
  (substate) => substate.toJS(),
);


const selectFirebase = () => (state) => state.get('firebase');
const makeSelectFirebaseAuth = () => createSelector(
  selectFirebase(),
  (firebase) => pathToJS(firebase, 'auth')
);



const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectGlobal,
  makeSelectLocationState,
  makeSelectFirebaseAuth
};
