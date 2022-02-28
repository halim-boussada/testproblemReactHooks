// set data in local storage
const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
// get data from local storage
const get = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
// scroll down body
const scrollDown = () => {
  document.getElementById("body").scrollTop = document.getElementById(
    "body"
  ).scrollHeight;
};

module.exports = {
  set,
  get,
  scrollDown,
};
