import {getPosts} from "./getJson"
const songoltUrl = "https://api.jsonbin.io/b/5ec9530cbbaf1f258945a769/2";
getPosts(songoltUrl,
    (contents) => {
        contents.forEach(
            (content) =>
            {
                console.log("uurtaibatsaan")
                // document.getElementById("emegtei").innerHTML += content.Create();
        })
    })    