import getPosts from "./getJson.js"
const songoltUrl = "https://api.jsonbin.io/b/5ec9530cbbaf1f258945a769/latest";
getPosts(songoltUrl,
    (contents) => {
        contents.forEach(
            (content) => {
                document.getElementById("emegtei").innerHTML += content.Create();
            })
    })