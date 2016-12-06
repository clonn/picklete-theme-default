export default ({method = 'POST', action, formData}) => {
  const form = document.createElement('form');
  form.method = method;
  form.action = action;

  _.forEach(formData, (value, field) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = field;
    input.value = value;
    form.appendChild(input);
  });

  form.submit();
}
