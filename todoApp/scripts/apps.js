//console.log("todo app"); 

// If you need something that is not related to the html page, the variable can be outside the init function


var exchangeRate = 21;

function addTodo() {
    //console.log("btn Clicked");
    var text = $("#todoText").val(); //to read value from input field
    //console.log(text);
    $("#todoText").val(''); // Clear the input field

    // create an li with the text
    var li = "<li>" + text + "</li>";
    $("#pendingList").append(li);

    //focus on the input

    $("#todoText").focus();
}

function init() {
    //set the text on the input
    //var input = document.getElementById("todoText");
    //input.value = "Hello there";
    // $("") - this means...jQuery find me an element
    // # for ID,  . for class name, DIV tag
    $("#btnAdd").click(addTodo);



    $("#todoText").val("Hello there!");
    console.log($("#todoText").val());


    $("#todoText").val(""); //Used to clear the text
}




// Event that get executed only after the browser has loaded all of the html
//pass a functiuon named "init"

window.onload = init;