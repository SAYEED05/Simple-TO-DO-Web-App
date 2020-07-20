$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
    
});

//delete function
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
  
  event.stopPropagation();
});

//adding text function
$("input[type='text'").keypress(function(event){
    if(event.which===13){
        var todo=$(this).val(); 
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span> "+todo+"</li>")
    }
});

//toggling between plus and minus icon
$(".fa-minus").click(function(){
    $("input[type='text'").fadeToggle("fast");
    $(this).toggleClass('fa-minus fa-plus')
});