// addition = () => {
//     var x = document.getElementById("hidden");
//     var y = document.getElementById("hidden-item");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
    
    
// }

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