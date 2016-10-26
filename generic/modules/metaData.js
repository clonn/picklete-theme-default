module.exports = function(name){
  let data = document.querySelector(`meta[name="${name}"]`).getAttribute('content');
  try {
    data = JSON.parse(data);
  } catch(e) {

  }
  return data;
};
