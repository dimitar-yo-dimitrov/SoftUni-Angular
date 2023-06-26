const Data = /* class */ (function () {
  const Data = (method, uri, version, message) => {
    this.method = method;
    this.uri = uri;
    this.version = version;
    this.message = message;
    this.response = undefined;
    this.fulfilled = false;
  };

  return Data;
})();

let myData = new Data("GET", "http://google.com", "HTTP/1.1", "");

console.log(myData);
