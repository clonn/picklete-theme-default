import handleFetchError from 'generic/modules/handleFetchError'

export default function callFetchAPIMiddleware({ dispatch, getState }) {
  return (next) => {
    return async (action) => {
      const {
        actionType,
        callAPI,
        shouldCallAPI = (state) => true,
        handleResponse = async (httpResponse) => await httpResponse.json(),
        afterSuccess = ({dispatch, state, response}) => {},
        afterError = ({dispatch, state, httpResponse}) => {},
        payload = {}
      } = action;

      if (!callAPI || !actionType) {
        return next(action);
      }

      if (!Array.isArray(actionType) || actionType.length !== 3 || !actionType.every(type => typeof type === 'string' || typeof type === 'symbol')) {
        throw new Error('Expected an array of three string or symbol acionTypes.');
      }

      if (typeof callAPI !== 'function') {
        throw new Error('Expected fetch to be a function.');
      }

      if (!shouldCallAPI(getState())) {
        return;
      }

      const [requestType, successType, errorType] = actionType;

      dispatch(Object.assign({}, {
        type: requestType,
        payload
      }));

      let httpResponse, response;
      try {
        httpResponse = await callAPI();
        if (httpResponse.status != 200) {
          throw new Error(`${httpResponse.status (httpResponse.statusText)}`);
        }
        response = await handleResponse(httpResponse);
        dispatch(Object.assign({}, {
          type: successType,
          payload: {
            ...payload,
            response
          }
        }));
        try {
          await afterSuccess({dispatch, state: getState(), response});
        } catch (error) {
          console.error(error);
        }
      } catch (error) {
        dispatch(Object.assign({}, payload, {
          type: errorType,
          payload: {
            ...payload,
            error: handleFetchError({httpResponse, error, actionType: errorType})
          }
        }));
        try {
          await afterError({dispatch, state: getState(), httpResponse});
        } catch (error) {
          console.error(error);
        }
      }
    };
  };
}
