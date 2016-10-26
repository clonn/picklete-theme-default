export default function handleFetchError(data) {
  let errorMessage;
  if (data.response) {
    errorMessage = (data.response.status == 200)? data.error.toString() : `${data.response.status} (${data.response.statusText})`;
  } else {
    errorMessage = data.error.toString();
  }
  console.error(`action "${data.actionType}" => ${errorMessage}`);
  return errorMessage;
}
