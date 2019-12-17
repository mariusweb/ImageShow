(function(){

"use strict";

	fetch("https://picsum.photos/v2/list")
	.then(function(resp){
		return resp.json();
	}).then(function (data){
		let smallImages = data.map( (data) => {
			let image = `
			<div class="small-image">
				<img class="photo" id="${data.id}" src="https://picsum.photos/id/${data.id}/200" onclick="loadFullPhoto(this.id)">
			</div>
			`
			return image
		}).join('');
		document.querySelector(".images").innerHTML = smallImages;
	});	
}());
