<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

//Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(event.which === 13) {
        //grabbing new todo text from input
       let todoText = $(this).val();
       $(this).val("");
       //create a new li and add to ul
       $("ul").append("<li><span class='li-minus'><i class='fas fa-minus-circle'></i></span> " + todoText + "</li>");
    }
});

$(".toggle-plus").click(function(){
    $("input[type='text']").fadeToggle(500);
}); 

