import { APIController } from "../shared/player.network";
import { player } from "../shared/webplayerbody";

export const playerBody = () => {
  let body = document.getElementsByTagName("body");
  document.body.innerHTML = player();
  APIController.artist();
};
export const playerBody2 = () => {
  let body = document.getElementsByTagName("body");
  document.body.innerHTML = player();
  APIController.playlist();
};
