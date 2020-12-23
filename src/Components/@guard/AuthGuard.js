import { Router } from "@vaadin/router";
export function checkRouterAccess(context) {
  const visitedPath = context.pathname; // get current path
  var data = localStorage.getItem("data");
  if (data != null) return true;
  else Router.go("/");
}

export function getToken() {
    var result=getCurrentUserData('user_extra')
   return result.token
}

export function getCurrentUserData(value) {
  let data = localStorage.getItem("data");
  if (data != null) {
    data = JSON.parse(data);
    if (value == null) return data;
    return data[value]
  }
}
