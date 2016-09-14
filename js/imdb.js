
//application "state" array 
var liArray = [];

function handle(e){
  
  //tirgers the "enter" event
  if(e.keyCode === 13){
    
    // Ensure it is only this code that run
    e.preventDefault(); 
    
    //catching the text within the search box
    var catchSearch = document.getElementById("search");
    
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
 
  //delButton.value = "X";
  delButton.onclick = deleteLi;
  var buttonData = document.createTextNode("X");
  delButton.appendChild(buttonData);


  //create new "li" item in order to insert it to the existing "ul"
  var newItem = document.createElement("li");
  var name = movieName.value;
  var janner = movieJanner.value;
  var time = movieTime.value;
  var create = document.createTextNode;
   
  //"create" text node to assign in the new "li" 
  var newName = create(name + ", " + janner + ", " + time + " ");
  //assinging the text node to the new "li"
  newItem.appendChild(newName);

  //adding the button option to the "li"
  newItem.appendChild(delButton);

  //push the "li" to the state array
  liArray.push(newItem);
  
  //call showList with the text in the null as a value
  showList(null);
};

$( '.name' );

//this function purpose is to prevent sumbitting 
//unfull movie data.
function disCheck() {
  
  // assign to movie@ the relevant text element
  var movieName = document.getElementById("movieName").value;
  var movieJanner = document.getElementById("movieJanner").value;
  var movieTime = document.getElementById("movieTime").value;

  
  //condition for checking false insertion of "li"'s
  if ((movieName !== "") && (movieJanner !== "") && (movieTime !== "")) {

    document.getElementById("buttn").disabled = false;
  
  }else {
    document.getElementById("buttn").disabled = true;
  }

};


//this function is responsible for presenting the item in the ul.
function showList (e) {

  //in case e == null (probably when calling the function 
  //from addMovie or when serach box is empty). 
  //will present all the elements in the array- all the list.
  if (e == null){
 
    var currentLi = document.getElementById("anchor"); 
    var ul = document.getElementById("mList");

    ul.insertBefore(liArray[liArray.length -1 ], currentLi);
 
  //in case e !== null (probably when calling the function 
  //from serach box and the serch box is not empty). 
  //will present all the elements in the array that 
  //the string in the search box is a substring of them.
  } else {
     
    var ul = document.getElementById("mList");
    
    //empty the "ul"
    ul.innerHTML = '';
    liArray.filter(x).forEach(y);

    function x (li){
      return (li.innerHTML.indexOf(e) !== -1);
    }

    function y (li) { 
      var currentLi = document.getElementById("anchor"); 
      var ul = document.getElementById("mList");
      ul.insertBefore(li, currentLi);
    }   
  }
};

//this function is responsible for deleting a list item
//when pressing the 'X' button.
function deleteLi (){

  //assingning x the "li" parent element of the button
  var liParent = this.parentNode;

  //constructing assistance array for manipulating 
  //the existing array and delete from the original array
  //the "li" whom the "X" button of his was submitted
  liArray.splice(liArray.indexOf(this.parentNode),1);
  
  //removing the "li"
    this.parentNode.remove();
};
