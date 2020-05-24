import getPosts from "./getJson.js";
const songoltUrl = "https://api.jsonbin.io/b/5ec9530cbbaf1f258945a769/latest";
const element = document.getElementById("emegtei");
getPosts(songoltUrl, element, (contents) => {
  contents.forEach((content) => {
    document.getElementById("emegtei").innerHTML += content.Create();
  });
});
