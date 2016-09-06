


//application "state" array 
var liArray = [];


function handle(e){
  
  //tirgers the "enter" event
  if(e.keyCode === 13){
  	
  	// Ensure it is only this code that run
    e.preventDefault(); 

    var catchSearch = document.getElementById("search");
    
    // temporary - checking myself
    console.log(catchSearch.value);
    console.log(liArray[0].innerHTML.indexOf("e"));
    
    //call showList with the text in the searchbox as a value
    showList(catchSearch.value);
   }
  
 };

function addMovie (e) {

  //assign to movie@ the relevant text element
  var movieName = document.getElementById("movieName");
  var movieJanner = document.getElementById("movieJanner");
  var movieTime = document.getElementById("movieTime");
  
  //create a button element that will be used to delete list item
  var delButton = document.createElement("button");
  delButton.setAttribute('value', 'X');
  //delButton.setAttribute('onclick',deleteLi());
  var buttonData = document.createTextNode("X");
  delButton.appendChild(buttonData);


  //create new "li" item in order to insert it to the existing "ul"
  var newItem = document.createElement("li");

	 
  //"create" text node to assign in the new "li" 
  var newName = document.createTextNode(movieName.value + ", ");
  //assinging the text node to the new "li"
  newItem.appendChild(newName);

  //"create" another text node to append in the new "li" 
  var newJanner = document.createTextNode(movieJanner.value + ", ");
  //appending the text node to the new "li"
  newItem.appendChild(newJanner);

  //"create" another text node to append in the new "li" 
  var newTime = document.createTextNode(movieTime.value + " ");
  //appending the text node to the new "li"
  newItem.appendChild(newTime);
  //appending the the delete nutton to the "li" element
  newItem.appendChild(delButton);
  
  //push the "li" to the stse array
  liArray.push(newItem);
  
  //call showList with the text in the null as a value
  showList(null);
 
  
};


//this function purpose is to prevent sumbitting 
//unfull movie data.
function disCheck() {
	
	// assign to movie@ the relevant text element
	var movieName = document.getElementById("movieName");
	var movieJanner = document.getElementById("movieJanner");
	var movieTime = document.getElementById("movieTime");
	
	//condition for checking false insertion of "li"'s
	if ((movieName.value !== "") && (movieJanner.value !== "") && 
		(movieTime.value !== "")) {

		document.getElementById("buttn").disabled = false;
	
	}else {
		document.getElementById("buttn").disabled = true;
	}
}


//this function is responsible for presenting the item in the ul.
function showList (e) {

  //// temporary - checking myself
  console.log(e);

  //in case e == null (probably when calling the function 
  //from addMovie or when serach box is empty). 
  //will present all the elements in the array- all the list.
  if (e == null){
 
   for (var i = 0; i < liArray.length; i++) {

   	 var currentLi = document.getElementById("anchor"); 
  	 var ul = document.getElementById("mList");
  	 ul.insertBefore(liArray[i], currentLi);
   
   } 
  //in case e !== null (probably when calling the function 
  //from serach box and the serch box is not empty). 
  //will present all the elements in the array that 
  //the string in the serch bow is a substring of them.
  }else {
     
     for (var i = 0; i < liArray.length; i++) {
       // temporary - checking myself
       console.log("bla");
       console.log(liArray[i].innerHTML.indexOf(e));
       

       if (liArray[i].innerHTML.indexOf(e) !== -1){
   	   var currentLi = document.getElementById("anchor"); 
   	   console.log("here");
  	   var ul = document.getElementById("mList");
  	   ul.insertBefore(liArray[i], currentLi);
       
       }
   }
  };


}

//this function is responsible for deleting a list item
//when pressing the 'X' button.
function deleteLi (){

	console.log("I'm working!");
}