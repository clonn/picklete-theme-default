import handleFetchError from 'generic/modules/handleFetchError'

export default function callFetchAPIMiddleware({ dispatch, getState }) {
  return (next) => {
    return async (action) => {
      const {
        actionType,
        callAPI,
        shouldCallAPI = (state) => true,
        handleResponse = (httpResponse) => httpResponse.json(),
        afterSuccess = ({dispatch, state, response}) => {},
        afterError = ({dispatch, state, response}) => {},
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

      let response;
      try {
        response = await callAPI();
        if (response.status != 200) {
          throw new Error(`${response.status (response.statusText)}`);
        }
        response = await handleResponse(response);
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
            error: handleFetchError({httpResponse: response, error, actionType: errorType})
          }
        }));
        try {
          await afterError({dispatch, state: getState(), httpResponse: response});
        } catch (error) {
          console.error(error);
        }
      }
    };
  };
}
