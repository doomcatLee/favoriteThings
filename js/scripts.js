$(function(){
  $("form#enterFav").submit(function(){
    event.preventDefault();
    var favoriteThings = [];
    var input1 = $("input#item1").val();
    var input2 = $("input#item2").val();
    var input3 = $("input#item3").val();
    var input4 = $("input#item4").val();
    // console.log(input1,input2,input3);
    favoriteThings.push(input1,input2,input3,input4);
    // console.log(favoriteThings);
    favoriteThings.push(input2, input1, input3);
    // console.log(favoriteThings);
    favoriteThings.forEach(function(item){
      $("#output ul").prepend("<li>" + item + "</li>");
    });
  });
});
