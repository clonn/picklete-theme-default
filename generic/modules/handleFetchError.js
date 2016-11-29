export default function handleFetchError({httpResponse, error, actionType}) {
  let errorMessage;
  if (httpResponse) {
    errorMessage = (httpResponse.status == 200)? error.toString() : `${httpResponse.status} (${httpResponse.statusText})`;
  } else {
    errorMessage = error.toString();
  }
  console.error(`action "${actionType}" => ${errorMessage}`);
  return errorMessage;
}
