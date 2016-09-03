
function handle(e){
  
  //tirgers the "enter" event
  if(e.keyCode === 13){
  	
  	// Ensure it is only this code that run
    e.preventDefault(); 
    var x = document.getElementById("search");
    console.log(x.value);
   }
  
 };

function addMovie (e) {

  // assign to x,y,z the relevant text element
  var x = document.getElementById("movieName");
  var y = document.getElementById("movieJanner");
  var z = document.getElementById("movieTime");
 
  //create new "li" item in order to insert it to the existing "ul"
  var newItem = document.createElement("li");
 
  //"create" text node to assign in the new "li" 
  var newName = document.createTextNode(x.value + ", ");
  //assinging the text node to the new "li"
  newItem.appendChild(newName);

  //"create" another text node to append in the new "li" 
  var newJanner = document.createTextNode(y.value + ", ");
  //appending the text node to the new "li"
  newItem.appendChild(newJanner);

  //"create" another text node to append in the new "li" 
  var newTime = document.createTextNode(z.value);
  //appending the text node to the new "li"
  newItem.appendChild(newTime);

  //inserting the new "li" to the "ul"
  var currentLi = document.getElementById("anchor"); 
  var y = document.getElementById("mList");
   y.insertBefore(newItem, currentLi);

};

function disCheck() {
	
	// assign to x,y,z the relevant text element
	var x = document.getElementById("movieName");
	var y = document.getElementById("movieJanner");
	var z = document.getElementById("movieTime");
	
	//condition for checking false insertion of "li"'s
	if ((x.value !== "") && (y.value !== "") && (z.value !== "")) {
		document.getElementById("buttn").disabled = false;
	}else {
		document.getElementById("buttn").disabled = true;
	}
}


