

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
$(function () {
  $("#callender1").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});

// ==================statistics week===================
function selWeek(){
            let selValue = $('#engine').val()
            if($('#engine').val() == "first"){
                $.getJSON('../../asset/json/statistics.json', function (data) {
                    console.log('success', data);
                    var html = '';
                    $.each(data.name, function (i, emp) {
                        html += "<tr>"
                        html += '<td>' + emp.id + '</td>'
                        html += '<td>' + emp.name + '</td>'
                        html += '<td>' + emp.shouldWorkDay + '</td>'
                        html += '<td>' + emp.actualWorkDay + '</td>'
                        html += '<td>' + emp.late + '</td>'
                        html += '<td>' + emp.earlyLeave + '</td>'
                        html += '<td>' + emp.absent + '</td>'
                        html += '<td>' + emp.sickness + '</td>'
                        html += '<td>' + emp.businessTrip + '</td>'
                        html += "</tr>"
                       
                    });
                     $('#test').html(html)
                }).error(function () {
                    console.log('error');
                });
            }else if($('#engine').val()=='second'){
                $.getJSON('../../asset/json/statistics-1.json', function (data) {
                    console.log('success', data);
                     var html = '';
                    $.each(data.name, function (i, emp) {
                       
                        html += "<tr>"
                        html += '<td>' + emp.id + '</td>'
                        html += '<td>' + emp.name + '</td>'
                        html += '<td>' + emp.shouldWorkDay + '</td>'
                        html += '<td>' + emp.actualWorkDay + '</td>'
                        html += '<td>' + emp.late + '</td>'
                        html += '<td>' + emp.earlyLeave + '</td>'
                        html += '<td>' + emp.absent + '</td>'
                        html += '<td>' + emp.sickness + '</td>'
                        html += '<td>' + emp.businessTrip + '</td>'
                        html += "</tr>"

                    });
                    $('#test').html(html)
                }).error(function () {
                    console.log('error');
                });
            }else if ($('#engine').val() == 'third') {
                $.getJSON('../../asset/json/statistics.json', function (data) {
                    console.log('success', data);
                    var html = '';
                    $.each(data.name, function (i, emp) {

                        html += "<tr>"
                        html += '<td>' + emp.id + '</td>'
                        html += '<td>' + emp.name + '</td>'
                        html += '<td>' + emp.shouldWorkDay + '</td>'
                        html += '<td>' + emp.actualWorkDay + '</td>'
                        html += '<td>' + emp.late + '</td>'
                        html += '<td>' + emp.earlyLeave + '</td>'
                        html += '<td>' + emp.absent + '</td>'
                        html += '<td>' + emp.sickness + '</td>'
                        html += '<td>' + emp.businessTrip + '</td>'
                        html += "</tr>"

                    });
                    $('#test').html(html)
                }).error(function () {
                    console.log('error');
                });
            }else if ($('#engine').val() == 'forth') {
                $.getJSON('../../asset/json/statistics-1.json', function (data) {
                    console.log('success', data);
                    var html = '';
                    $.each(data.name, function (i, emp) {

                        html += "<tr>"
                        html += '<td>' + emp.id + '</td>'
                        html += '<td>' + emp.name + '</td>'
                        html += '<td>' + emp.shouldWorkDay + '</td>'
                        html += '<td>' + emp.actualWorkDay + '</td>'
                        html += '<td>' + emp.late + '</td>'
                        html += '<td>' + emp.earlyLeave + '</td>'
                        html += '<td>' + emp.absent + '</td>'
                        html += '<td>' + emp.sickness + '</td>'
                        html += '<td>' + emp.businessTrip + '</td>'
                        html += "</tr>"

                    });
                    $('#test').html(html)
                }).error(function () {
                    console.log('error');
                });
            }
        }
        

// =======================statistics month===================
function selMonth(){
            let selValue = $('#engine-1').val()
            if($('#engine-1').val() == "first"){
                $.getJSON('../../asset/json/statistics.json', function (data) {
                    console.log('success', data);
                    var html = '';
                    $.each(data.name, function (i, emp) {
                        html += "<tr>"
                        html += '<td>' + emp.id + '</td>'
                        html += '<td>' + emp.name + '</td>'
                        html += '<td>' + emp.shouldWorkDay + '</td>'
                        html += '<td>' + emp.actualWorkDay + '</td>'
                        html += '<td>' + emp.late + '</td>'
                        html += '<td>' + emp.earlyLeave + '</td>'
                        html += '<td>' + emp.absent + '</td>'
                        html += '<td>' + emp.sickness + '</td>'
                        html += '<td>' + emp.businessTrip + '</td>'
                        html += "</tr>"
                       
                    });
                     $('#test-1').html(html)
                }).error(function () {
                    console.log('error');
                });
            }else if($('#engine-1').val()=='second'){
                $.getJSON('../../asset/json/statistics-1.json', function (data) {
                    console.log('success', data);
                     var html = '';
                    $.each(data.name, function (i, emp) {
                       
                        html += "<tr>"
                        html += '<td>' + emp.id + '</td>'
                        html += '<td>' + emp.name + '</td>'
                        html += '<td>' + emp.shouldWorkDay + '</td>'
                        html += '<td>' + emp.actualWorkDay + '</td>'
                        html += '<td>' + emp.late + '</td>'
                        html += '<td>' + emp.earlyLeave + '</td>'
                        html += '<td>' + emp.absent + '</td>'
                        html += '<td>' + emp.sickness + '</td>'
                        html += '<td>' + emp.businessTrip + '</td>'
                        html += "</tr>"

                    });
                    $('#test-1').html(html)
                }).error(function () {
                    console.log('error');
                });
            }else if ($('#engine-1').val() == 'third') {
                $.getJSON('../../asset/json/statistics.json', function (data) {
                    console.log('success', data);
                    var html = '';
                    $.each(data.name, function (i, emp) {

                        html += "<tr>"
                        html += '<td>' + emp.id + '</td>'
                        html += '<td>' + emp.name + '</td>'
                        html += '<td>' + emp.shouldWorkDay + '</td>'
                        html += '<td>' + emp.actualWorkDay + '</td>'
                        html += '<td>' + emp.late + '</td>'
                        html += '<td>' + emp.earlyLeave + '</td>'
                        html += '<td>' + emp.absent + '</td>'
                        html += '<td>' + emp.sickness + '</td>'
                        html += '<td>' + emp.businessTrip + '</td>'
                        html += "</tr>"

                    });
                    $('#test-1').html(html)
                }).error(function () {
                    console.log('error');
                });
            }else if ($('#engine-1').val() == 'forth') {
                $.getJSON('../../asset/json/statistics-1.json', function (data) {
                    console.log('success', data);
                    var html = '';
                    $.each(data.name, function (i, emp) {

                        html += "<tr>"
                        html += '<td>' + emp.id + '</td>'
                        html += '<td>' + emp.name + '</td>'
                        html += '<td>' + emp.shouldWorkDay + '</td>'
                        html += '<td>' + emp.actualWorkDay + '</td>'
                        html += '<td>' + emp.late + '</td>'
                        html += '<td>' + emp.earlyLeave + '</td>'
                        html += '<td>' + emp.absent + '</td>'
                        html += '<td>' + emp.sickness + '</td>'
                        html += '<td>' + emp.businessTrip + '</td>'
                        html += "</tr>"

                    });
                    $('#test-1').html(html)
                }).error(function () {
                    console.log('error');
                });
            }
        }