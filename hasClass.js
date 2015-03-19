Element.prototype.hasClass = function (className){
  return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
}
