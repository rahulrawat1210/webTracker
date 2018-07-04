$(document).ready(function () {
  var v = 0;          //   0 - frontend, 1 - backend
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    function main(){
      var siteid = getParameterByName('site_id');
      $('#hd').empty();
      $('#hd').html(`<b>Site Id: </b>`+siteid);
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
            ip: ip,
            v: v
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
                      extend: 'copyHtml5',
                      exportOptions: {
                        columns: [0,1,2,4,5,6,7,8,9,10,11,12]
                      }
                    },
                    {
                        extend: 'excelHtml5',
                        exportOptions: {
                          columns: [0,1,2,4,5,6,7,8,9,10,11,12]
                        },
                        title: siteid
                    },
                    {
                        extend: 'csvHtml5',
                        exportOptions: {
                          columns: [0,1,2,4,5,6,7,8,9,10,11,12]
                        },
                        title: siteid
                    }
                  ]
              });
              oTable1.fnClearTable();
              $.each(dta, function (key, item) {
                  oTable1.fnAddData([`${item.isAdmin}`, `${item.ip}`, `${item.country}`, `<button class="btn btn-info geo" data-toggle="modal" href="#exampleModalLong1" value='${item.ip}'>Get It</button>`, `${item.url}`, `${item.browser}`, `${item.browser_version}`, `${item.datetime}`, `${item.resolution}`, `${item.os}`, `${item.referrer}`, `${item.Device_Type}`, `${item.Device_name}`]);
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

        $.ajax({
          url: '/getgraphdata',
          type: 'post',
          data: {
            siteid: siteid,
            v: v
          },
          dataType:'json',
          success: function(dta){
            if(dta.success==false){
              alert(dta.err);
            }else{
              var viewData = [];
              for(var i=0;i<dta.length;i++){
                  var d = new Date(dta[i].date);
                  var y = d.getFullYear();
                  var m = d.getMonth();
                  var day = d.getDate();
                  viewData.push({
                      x: new Date(parseInt(y), parseInt(m), parseInt(day), 0, 0, 0),
                      y: dta[i].view
                  })
              }
              var chart = new CanvasJS.Chart("chartContainer", {
                  animationEnabled: true,
                  title:{
                      text: "Site Analytics"
                  },
                  axisY: {
                      title: "Views",
                      valueFormatString: "#0.",
                  },
                  axisX: {
                      intervalType: "day",
                      title: "Date",
                      valueFormatString: "DD MMMM YYYY",
                      interval: 1
                  },
                  data: [{
                      type: "splineArea",
                      color: "rgba(54,158,173,.7)",
                      markerSize: 5,
                      dataPoints:viewData
                  }]
                  });
              chart.render();
            }
          },
          error: function(xhr) { alert("There is some problem in making request!!!!"); }
        });
    }
    $("#test").on("keyup change", function() {
      if($('#test').is(':checked')){
        v = 1;
        $('#abc').empty();
        $('#abc').html(`Backend`);
      }
      else{
        v = 0;
        $('#abc').empty();
        $('#abc').html(`Frontend`);
      }
      main();
    })

    main();
});