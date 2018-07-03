$(document).ready(function () {
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    var siteid = getParameterByName('site_id');

    var start='';
    var end = '';
    var ip='';
    
    $.ajax({
        url: '/viewmore',
        type: 'post',
        data: {
          siteid: siteid,
          start: start,
          end: end,
          ip: ip
        },
        dataType:'json',
        success: function(dta){
          if(dta.success==false){
            alert("Problem in DB!!");
          }else{
            $("#tb1 tbody").empty();
            var oTable1 = $('#tb1').dataTable({
                retrieve: true,
                dom: 'Bfrtip',
                buttons: [
                  {
                    extend: 'copyHtml5'
                  },
                  {
                      extend: 'excelHtml5',
                      title: siteid
                  },
                  {
                      extend: 'csvHtml5',
                      title: siteid
                  }
                ]
            });
            oTable1.fnClearTable();
            $.each(dta, function (key, item) {
                oTable1.fnAddData([`${item.ip}`, `<button class="btn btn-info geo" data-toggle="modal" href="#exampleModalLong1" value='${item.ip}'>Get It</button>`, `${item.url}`, `${item.browser}`, `${item.browser_version}`, `${item.datetime}`, `${item.resolution}`, `${item.os}`, `${item.referrer}`, `${item.Device_Type}`, `${item.Device_name}`]);
            });
            $('.geo').click(function(){
              var ip = $(this).val();
              $('#exampleModalLongTitle1').empty();
              $('#exampleModalLongTitle1').html(`<b>IP Address: </b>`+ip);
              $.ajax({
                url: "/fillipdata",
                type: "post",
                data: {
                  ip: ip
                },
                dataType : 'json',
                success: function(data){
                      if(data.success==false){
                        $('#tb3 tbody').empty();
                        $('#d3').hide();
                        $('#abc').show();
                        $('#abc').empty();
                        $('#abc').html(`<h3>${data.err}</h3>`);
                      }
                      else{
                        $('#d3').show();
                        $('#abc').hide();
                        $('#tb3 tbody').empty();
                        $('#tb3 tbody').append(`<tr><td>${data.country}</td><td>${data.timezone}</td><td>${data.isp}</td><td>${data.city}</td><td>${data.latitude}</td><td>${data.longitude}</td><td>${data.zip}</td></tr>`);
                      }
                },
                error: function(xhr) { alert("There is some problem in making request!!!!"); }
              });
            });
          }
        },
        error: function(xhr) { alert("There is some problem in making request!!!!"); }
      });



});