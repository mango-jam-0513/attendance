

var show  = true;
const visibleButtonItem = document.getElementById('hiddenBtn');
const visibleInputItem = document.getElementById('hiddenInput');
function addition (){
    if(show == true){
        visibleButtonItem.style.display = "block";
        visibleInputItem.style.display = "block";
        show = false;
    }
    else{
        visibleButtonItem.style.display = "none";
        visibleInputItem.style.display = "none";
        show = true;
    }
}
// =============detail callender============
 $(function () {
  $("#datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});
 $(function () {
  $("#datepicker1").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});

// ====================chart callender===============

$(function () {
  $("#callender").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});
