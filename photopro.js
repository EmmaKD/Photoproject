/**
* @author
*/

/* this is an array of all our images (in order) */
var images=["image1.png", "image2.png", "image3.png", "image4.png", "image5.png", "image6.png", "image7.png", 
"image8.png", "image9.png]";

var index = 0;

function setNav() {
	
console.log("setNav")

$(".button").on("click", function() {

var isNext = $(this).hasClass("next");

if (isNext == true && index != (images.length-1)){

index = index +1;

} else if (isNext == false && index > 0){
	
index = index -1;	

console.log(isNext);

}

if (index == 0){

$("button.prev").addClass("disabled");	

}else if (index == (images.length-1)){
	
$(".button.next").addClass("disabled");

}else{
	
$("button").removeClass("disabled");

}
updateImage();

console.log("click!!");


});





}
/* change the image here */
function updateImage(){
	
$(".image-holder").html(
	
"<img src='images/"+images[index]+"'/>"

);	

}
/* load the first image into our image holder */
$(document).ready(function() {
	
$(".image-holder").html(
	
"<img src='images/"+images[index]+"'/>"

);

$(".button.prev").addClass("disabled");

setNav();
});



console.log(images);