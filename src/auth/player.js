import { APIController } from "../shared/player.network";
import { player } from "../shared/webplayerbody";

export const playerBody = () => {
  let body = document.getElementsByTagName("body");
  document.body.innerHTML = player();
  var username = document.getElementById("username");
  var id = localStorage.getItem("id");
  fetch(`http://localhost:8000/users?id=${id}`)
  .then((res)=> {
      console.log(res);
      return res.json()
  })
  // .then((res) => res.json())
  .then((res)=>{
      console.log(res);
      username.textContent = res[0].profileName;
  })
  .catch(err=>console.log(err))
  APIController.artist();
};
export const playerBody2 = () => {
  let body = document.getElementsByTagName("body");
  document.body.innerHTML = player();
  
  var username = document.getElementById("username");
  var id = localStorage.getItem("id");
  fetch(`http://localhost:8000/users?id=${id}`)
  .then((res)=> {
      console.log(res);
      return res.json()
  })
  // .then((res) => res.json())
  .then((res)=>{
      console.log(res);
      username.textContent = res[0].profileName;
  })
  .catch(err=>console.log(err))
  APIController.playlist();
};
export const side = () => {
  let body = document.getElementsByTagName("body");
  document.body.innerHTML = player();
  var username = document.getElementById("username");
  var id = localStorage.getItem("id");
  fetch(`http://localhost:8000/users?id=${id}`)
  .then((res)=> {
      console.log(res);
      return res.json()
  })
  // .then((res) => res.json())
  .then((res)=>{
      console.log(res);
      username.textContent = res[0].profileName;
  })
  .catch(err=>console.log(err))
  APIController.sideBar();
};