import { getToken } from "../@guard/AuthGuard";
const Api = `http://127.1.1.0:7173`;

export async function Get(link, params, token) {
  var payload = {
    method: "Get",
  };

  params = params.join().replace(",", "/");
  link = Api.concat(link, "/", params);

  if (token == true) {
    payload.headers = {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    };
  }
  var result =await SendRequest(link,payload)
  return result;
}

export async function Post(link,data,token,type){
    var payload = {
        method: "POST",
        body:data
      };
      
      link = Api.concat(link);
    
      if (token == true) {
        payload.headers = {
          Authorization: `Bearer ${getToken()}`,
          "Content-Type": (type ==null || type!=undefined )?"application/json":type,
        };
      }

      var result =await SendRequest(link,payload)
      return result;
}

export async function Update(link,data,token,type){
    var payload = {
        method: "PUT",
        body:data
      };
      
      link = Api.concat(link);
    
      if (token == true) {
        payload.headers = {
          Authorization: `Bearer ${getToken()}`,
          "Content-Type": (type ==null || type!=undefined )?"application/json":type,
        };
      }

      var result =await SendRequest(link,payload)
      return result; 
}

export async function Delete(link, params, token){
    var payload = {
        method: "Delete",
      };
    
      params = params.join().replace(",", "/");
      link = Api.concat(link, "/", params);
    
      if (token == true) {
        payload.headers = {
          Authorization: `Bearer ${getToken()}`,
          "Content-Type": "application/json",
        };
      }
      var result =await SendRequest(link,payload)
      return result;
}

async function SendRequest(link, payload){
    var result = await fetch(link, payload)
    .then(async (res) => {
      var result = await res.json();
      return result;
    })
    .then((response) => {
      return response
    })
    .catch((error) => {
    return error
    });

    return result;
}
