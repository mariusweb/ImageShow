(function(){

"use strict";
	
	
	fetch("https://picsum.photos/v2/list").then(function(resp){
			return resp.json();
		}).then(function (data){
			// for(let i = 0; i < data.length; i++){
			// 	console.log(data[i].download_url)
			// }
			let dataImages = data.map( (data) => {
				return `
				<div class="image">
					<img class="photo" src="${"https://picsum.photos/id/"+data.id+"/200"}">
				</div>
				`
			}).join('');
			document.querySelector(".images").innerHTML = dataImages;
			console.log(dataImages);
		});
		
		

}());
