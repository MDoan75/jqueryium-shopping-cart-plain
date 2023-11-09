$(document).ready(function () {

  $('body').on('input','.shopping input', function (){
    var grandTotal = 0;
    console.log('run')
    var productCount = $(this).val();
    var productPrice = parseFloat($(this).parent().prev().text().substring(1,3));
    var subTotal = productPrice * productCount;
    $(this).parent().next().next().html("$"+subTotal+".00");
    $(".totalcost").each(function () {
      if (/\d/.test($(this).text())) {
        grandTotal += parseFloat($(this).text().substring(1));
      }
    
    });

    $('#totalprice').html("$"+grandTotal+".00");
  });

  $(document).on('click', '.btn.remove', function (){
    $(this).parent().parent().remove();
    var grandTotal = 0;
    $(".totalcost").each(function () {
    if (/\d/.test($(this).text())) {
      grandTotal += parseFloat($(this).text().substring(1));
    }
  });
  console.log(`Grand Total: $${grandTotal}.00`);
});

  $(document).on('click', '.btn.add', function (){
    var product = $(this).parent().prev().prev().children("input").val();
    var price = $(this).parent().prev().children("input").val();
    $(this).parent().parent().before("<div class='row shopping'>" +
    "<div class='col-xs-3 product'>"+product+"</div>" +
    "<div class='col-xs-3 price'>$"+price+".00</div>" +
    "<div class ='col-xs-3 pax'>QTY<input type='number' /></div>" +
      "<div class ='col-xs-1 remove'><button class='btn btn-light btn-sm remove'>remove</button></div>" +
      "<div class='col-xs-2 totalcost'>$00.00</div>" +
    "</div>");
 });
});
