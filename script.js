$("document").ready(function() {
  var sum = [];
  var sumeq;
  $(".n").on("click", function() {
    if ($(".display").html() == 0 || $(".display").html() == sumeq) {
      $(".display").empty();
      if (sum == sumeq) {
        sum = [];
      }
    }
  })
  
  $("#one").on("click", function() {
    $(".display").append(1);
    sum.push(1);
  })  
  $("#two").on("click", function() {
    $(".display").append(2);
    sum.push(2);
  })  
  $("#three").on("click", function() {
    $(".display").append(3);
    sum.push(3);
  })  
  $("#4").on("click", function() {
    $(".display").append(4);
    sum.push(4);
  })  
  $("#5").on("click", function() {
    $(".display").append(5);
    sum.push(5);
  })  
  $("#6").on("click", function() {
    $(".display").append(6);
    sum.push(6);
  })  
  $("#7").on("click", function() {
    $(".display").append(7);
    sum.push(7);
  })  
  $("#8").on("click", function() {
    $(".display").append(8);
    sum.push(8);
  })  
  $("#9").on("click", function() {
    $(".display").append(9);
    sum.push(9);
  })  
  $("#zero").on("click", function() {
    $(".display").append(0);
    sum.push(0);
  })  
  $("#ac").on("click", function() {
    $(".display").html(0);
    sum = [];
  })  
  $("#ce").on("click", function() {
    if (sum.length == 1 || sum.length == 0) {
      sum = [];
      $(".display").html(0);
    } 
    else {
      sum.pop();
      $(".display").html(sum);
    } 
  })  
  $("#div").on("click", function() {
    $(".display").append(" / ");
    sum.push("/");
  })
  $("#x").on("click", function() {
    $(".display").append("*");
    sum.push("*");
  })
  $("#minus").on("click", function() {
    $(".display").append("\-");
    sum.push("-");
  })
  $("#plus").on("click", function() {
    $(".display").append("\+");
    sum.push("+");
    console.log(sum);
  })
  $("#equal").on("click", function() {
    sumeq = sum.join("");
    sumeq = eval(sumeq);
    sumeq = sumeq.toString();
    var dec = sumeq.length;
    sumeq = parseFloat(sumeq);
    if (dec > 8) {
      sumeq = sumeq.toFixed(8);
    }
    $(".display").html(sumeq);
    console.log(sumeq);
    sum = [];
    sum.push(sumeq);
  })  
  $("#dot").on("click", function() {
    $(".display").append(".");
    sum.push(".");
  })
})