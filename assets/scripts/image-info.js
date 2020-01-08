"use strict";
const loadFullPhoto = (photoId) => {
    fetch("https://picsum.photos/id/"+photoId+"/info")
    .then(function(resp){
        return resp.json();
    }).then(function (data){
        document.querySelector(".section-right").innerHTML = `
        <div class="load-photo">
            <div class="photo-description">
                <h2>Author: ${data.author}</h2>
                <p>Width: ${data.width}; Height: ${data.height}</p>
            </div>	
            <div class="full-photo">
                <img class="photo-full" src="${data.download_url}">
            </div>
        </div>
        `
    });	
}