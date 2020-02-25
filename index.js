function getFirstSelector(selector) {
  console.log(document.querySelector(selector));
  return document.querySelector(selector)
}
function nestedTarget() {
  console.log(document.querySelector("#nested").querySelector(".target"));
  return document.querySelector("#nested").querySelector(".target")
}
function deepestChild() {
  document.querySelector("#grand-node")
}
