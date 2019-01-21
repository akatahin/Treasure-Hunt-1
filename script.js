//default
$("img").hide();
$(".secrectMassage").hide();
$("button").hide();
$("#msg1").show();
$("#one").show();

//step one
$("#one").click(function() {
 $("#img-one").fadeIn();
 $(".secrectMassage").text("Hover on Step 2");
 $(".secrectMassage").css("background-color","limegreen");
 $("#one").hide();
 $("#msg1").hide();
 $("#msg2").show();
 $("#two").show();
 
});

//step two

$("#two").hover(function() {
 $("#img-two").slideDown();
 $(".secrectMassage").text("Leave your mouse over 3");
 $(".secrectMassage").css("background-color","red");
 $("#img-one").fadeOut();
 $("#two").hide();
 $("#msg2").hide();
 $("#msg3").show();
 $("#three").show();
 
});

//step 3
$("#three").mouseleave(function() {
 $("#img-three").slideDown();
 $(".secrectMassage").text("Double click Step 4!");
 $(".secrectMassage").css("background-color","blue");
 $("#img-two").fadeOut();
 $("#three").hide();
 $("#msg3").hide();
 $("#msg4").show();
 $("#four").show();

});

//step 4
$("#four").dblclick(function() {
 $("#img-four").slideUp();
 $(".secrectMassage").text("Point your mouse pointer on Step 5! ");
 $(".secrectMassage").css("background-color","orange");
 $("#img-three").fadeOut();
 $("#four").hide();
 $("#msg4").hide();
 $("#msg5").show();
 $("#five").show();
 
});

//step 5
$("#five").mouseenter(function() {
 $("#img-five").fadeIn();
 $(".secrectMassage").text("Double Click on Step 6 to declare that you're done! ");
 $(".secrectMassage").css("background-color","pink");
 $("#img-four").fadeToggle();
 $("#five").hide();
 $("#msg5").hide();
 $("#msg6").show();
 $("#six").show();
});

//step 6
$("#six").dblclick(function() {
 alert("Congrats!You completed the game!");
  $(".secrectMassage").text("Congrats ");
 $(".secrectMassage").css("background-color","cyan");
});

