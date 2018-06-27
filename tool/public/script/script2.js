$(document).ready(function() {
    $('#d1').hide();
    $('.datepicker').datepicker({
        format: 'm/d/yyyy',
        orientation: 'left top',
        autoclose: true
    });
    $("#sform").submit(function(e) {
        var siteid = $('#siteid').val();
        var sdate = $('#sdate').val();
        var edate = $('#edate').val();
        var ip = $('#ip').val();
        if (sdate == '') sdate = '1/1/1990';
        if (edate == '') {
            var date = new Date();
            edate = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
        }
        console.log(sdate, edate);
        $.ajax({
            type: "POST",
            url: '/search',
            data: {
                siteid: siteid,
                sdate: sdate,
                edate: edate,
                ip: ip
            },

            success: function (res) {
                
                if (res.success == false) {
                    $('#d1').hide();
                    $('#tb1 > tbody').html("");
                    alert("Error in db!!!");
                } else if (res.length == 0) {
                    $('#d1').hide();
                    $('#tb1 tbody').html("");
                    alert('No data found!!!');
                } else {
                    
                    $('#d1').show();
                    $('#tb1 tbody').empty();
                    console.log(res.length);
                    var obj = [];

                    for (var i = 0; i < res.length; i++) {
                    
                        $('#tb1').append(`<tr><td>${res[i].site_id}</td><td>${res[i].url}</td><td>${res[i].ip}</td><td>${res[i].browser}</td><td>${res[i].browser_version}</td><td>${res[i].date}</td><td>${res[i].resolution}</td><td>${res[i].os}</td><td>${res[i].referrer}</td><td>${res[i].Device_Type}</td><td>${res[i].time}</td><td>${res[i].Device_name}</td></tr>`);
                    }

                    $("#tb1").tableExport({
                        position: "bottom",
                        formats: ["xls", "csv"]
                    }).reset();  
                  //  table = $('#tb1').DataTable();
                }
            },
            dataType: "json",
            error: function (data) {
                alert("Some error occurred in making request to server!!!");
            }
        });
        e.preventDefault();
    });
});