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
                    extend: 'copyHtml5',
                    exportOptions: {
                      columns: [0,1,3,4,5,6,7,8,9,10,11]
                    }
                  },
                  {
                      extend: 'excelHtml5',
                      exportOptions: {
                        columns: [0,1,3,4,5,6,7,8,9,10,11]
                      },
                      title: siteid
                  },
                  {
                      extend: 'csvHtml5',
                      exportOptions: {
                        columns: [0,1,3,4,5,6,7,8,9,10,11]
                      },
                      title: siteid
                  }
                ]
            });
            oTable1.fnClearTable();
            $.each(dta, function (key, item) {
                oTable1.fnAddData([`${item.ip}`, `${item.country}`, `<button class="btn btn-info geo" data-toggle="modal" href="#exampleModalLong1" value='${item.ip}'>Get It</button>`, `${item.url}`, `${item.browser}`, `${item.browser_version}`, `${item.datetime}`, `${item.resolution}`, `${item.os}`, `${item.referrer}`, `${item.Device_Type}`, `${item.Device_name}`]);
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
          siteid: siteid
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
            //console.log(dta[0].date.getMonth());
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                title:{
                    text: "Site Analytics"
                },
                axisY: {
                    title: "Views",
                    valueFormatString: "#0.",
                    //suffix: "mn",
                    //prefix: "$"
                },
                axisX: {
                    intervalType: "day",
                    title: "Date",
                    valueFormatString: "DD MMMM YYYY",
                    interval: 1
                    //valueFormatString: "#0,,.",
                },
                data: [{
                    type: "splineArea",
                    color: "rgba(54,158,173,.7)",
                    markerSize: 5,
                    //xValueFormatString: "DD-MMM",
                    //yValueFormatString: "$#,##0.##",
                    dataPoints:viewData/* [
                        { x: new Date(2000, 0), y: 3289000 },
                        { x: new Date(2001, 0), y: 3830000 },
                        { x: new Date(2002, 0), y: 2009000 },
                        { x: new Date(2003, 0), y: 2840000 },
                        { x: new Date(2004, 0), y: 2396000 },
                        { x: new Date(2005, 0), y: 1613000 },
                        { x: new Date(2006, 0), y: 2821000 },
                        { x: new Date(2007, 0), y: 2000000 },
                        { x: new Date(2008, 0), y: 1397000 },
                        { x: new Date(2009, 0), y: 2506000 },
                        { x: new Date(2010, 0), y: 2798000 },
                        { x: new Date(2011, 0), y: 3386000 },
                        { x: new Date(2012, 0), y: 6704000},
                        { x: new Date(2013, 0), y: 6026000 },
                        { x: new Date(2014, 0), y: 2394000 },
                        { x: new Date(2015, 0), y: 1872000 },
                        { x: new Date(2016, 0), y: 2140000 }
                    ]*/
                }]
                });
            chart.render();
          }
        },
        error: function(xhr) { alert("There is some problem in making request!!!!"); }
      });

});