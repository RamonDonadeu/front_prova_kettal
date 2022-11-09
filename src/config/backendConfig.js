const currentURL = window.location.href;

const ip = currentURL.split(":")[1].split("//")[1];
const url = "http://" + ip + ":8080/";

module.exports = url;
