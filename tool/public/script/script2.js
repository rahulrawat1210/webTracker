$(document).ready(function () {
    // $('#d1').hide();
    // $('.datepicker').datepicker({
    //     format: 'yyyy-m-d',
    //     orientation: 'left top',
    //     autoclose: true
    // });
    // $("#sform").submit(function(e) {
    //     var siteid = $('#siteid').val();
    //     var sdate = $('#sdate').val();
    //     var edate = $('#edate').val();
    //     var ip = $('#ip').val();
    //     if (sdate == '') sdate = '1990-1-1';
    //     if (edate == '') {
    //         var date = new Date();
    //         var mon = date.getMonth() + 1;
    //         edate =  date.getFullYear()+"-"+mon+"-"+date.getDate();
    //     }
    //     $.ajax({
    //         type: "POST",
    //         url: '/search',
    //         data: { siteid: siteid, sdate: sdate, edate: edate, ip: ip },
    //                 success: function (res) { if(res.success==false){ $('#d1').hide(); $('#tb1 tbody').empty(); alert("Error in db!!!");}
    //                                 else if(res.length==0){ $('#d1').hide(); $('#tb1 tbody').empty(); alert('No data found!!!');}
    //                                 else{  $('#d1').show();
    //                                         $('#tb1 tbody').empty();
    //                                         var oTable = $('#tb1').dataTable({
    //                                             retrieve: true,
    //                                             dom: 'Bfrtip',
    //                                             buttons: [
    //                                                 'copyHtml5',
    //                                                 'excelHtml5',
    //                                                 'csvHtml5',
    //                                             ]
    //                                         });
    //                                         oTable.fnClearTable();
    //                                         $.each(res, function (key, item) {
    //                                             oTable.fnAddData([item.site_id, item.url, item.ip, item.browser, item.browser_version, item.datetime, item.resolution, item.os, item.referrer, item.Device_Type, item.Device_name]);
    //                                         });
    //                                 }
    //                             },
    //     dataType: "json",
    //         error: function(data){
    //             alert("Some error occurred in making request to server!!!");
    //         }
    //     });
    //     e.preventDefault();
    //     $('html,body').animate({
    //         scrollTop: $("#scl").offset().top},
    //         'slow');
    // });

    $("#d1").hide();
    $("#d2").hide();
    $("#main").hide();
    $(document).find('#exampleModalLong1').on('hidden.bs.modal', function () {
      $('body').addClass('modal-open');
    });
    $("#logout").click(function(){
        $.ajax({
            type: "POST",
            url: '/logout',
            success: function (res) { window.location.href = res.redirect; },
            dataType: "json"
        });
    });

    //$('#datetimepicker').datetimepicker({format: 'yyyy-mm-dd hh:ii:ss'});
    $('#datetimepicker1').datetimepicker({
      format: 'YYYY-MM-DD HH:mm:ss',
      widgetPositioning:{
        horizontal: 'auto',
        vertical: 'bottom'
      }
      //defaultDate: new Date(),
      //sideBySide: true
    });

    $('#datetimepicker2').datetimepicker({
      format: 'YYYY-MM-DD HH:mm:ss',
      widgetPositioning:{
        horizontal: 'auto',
        vertical: 'bottom'
      }
      //defaultDate: new Date(),
      //sideBySide: true
    });

    $("#sform").submit(function(e) {
      var siteid = $('#siteid').val();
      var start = $('#start').val();
      var end = $('#end').val();
      var ip = $('#ip').val();
      $.ajax({
                type: "POST",
                url: '/search',
                data: { siteid: siteid, start: start, end: end, ip: ip },
                        success: function (res) { if(res.success==false){ $('#d1').hide(); $('#tb1 tbody').empty(); alert("Error in db!!!");}
                                        else if(res.length==0){ $('#main').hide(); $('#tb11 tbody').empty(); alert('No data found!!!');}
                                        else{ //console.log(res);
                                          $("#main").show();
                                          $("#tb11").show();
                                          $("#tb11 tbody").empty();
                                          var oTable11 = $('#tb11').dataTable({
                                              retrieve: true
                                          });
                                          oTable11.fnClearTable();
                                          res.forEach(function (item) {
                                            console.log(item.view);
                                              oTable11.fnAddData([`<button class=" btn-block btn btn-info cl" data-toggle="modal" data-target="#exampleModalLong">${item.site_id}</button>`, `${item.view}`, `<button value ="${item.site_id}" class=" btn btn-success detail" onclick="window.location='/view?site_id=${item.site_id}'">View More</button>`]);
                                          });
                                          // $('.detail').click(function(){
                                          //   $("#d1").show();
                                          //   $("#d2").hide();
                                          //   var siteid = $(this).val();
                                          //   $('#exampleModalLongTitle').empty();
                                          //   $('#exampleModalLongTitle').html(`<b>Site Id: </b>`+siteid);
                                          // });
                                          $('.cl').click(function(){
                                            $("#d2").show();
                                            $("#d1").hide();
                                              var siteid = $(this).text();
                                              $('#exampleModalLongTitle').empty();
                                              $('#exampleModalLongTitle').html(`<b>Site Id: </b>`+siteid);
                                              $.ajax({
                                                url: "/getallip",
                                                type: "post",
                                                data: {
                                                  siteid : siteid,
                                                  start: start,
                                                  end: end,
                                                  ip: ip
                                                },
                                                dataType : 'json',
                                                success: function(dt) {
                                                  if(dt.success==false){
                                                        alert("Problem in DB!!");
                                                      }else{
                                                        $("#tb2 tbody").empty();
                                                        var oTable2 = $('#tb2').dataTable({
                                                            retrieve: true
                                                        });
                                                        oTable2.fnClearTable();
                                                        $.each(dt, function (key, item) {
                                                            oTable2.fnAddData([`${item.ip}`, `${item.view}`, `<button class="btn btn-info geo" data-toggle="modal" href="#exampleModalLong1" value='${item.ip}'>Get It</button>`, `<button value="${item.ip}" class="btn btn-danger del">Delete</button>`]);
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
                                                        $('.del').click(function(){
                                                          var ip = $(this).val();
                                                          $.ajax({
                                                            url :  "/deleteentry",
                                                            type: "post",
                                                            data: {
                                                              siteid : siteid,
                                                              ip: ip
                                                            },
                                                            dataType: 'json',
                                                            success: function(res){
                                                              if(res.success==true){  alert('Successfully deleted!'); location.reload();}
                                                              else alert('error occurred!')
                                                            }
                                                          });
                                                        });
                                                      }
                                                },
                                                error: function(xhr) { alert("There is some problem in making request!!!!"); }
                                              });
                                          });


                                          // $('#d1').show();
                                          //       $('#tb1 tbody').empty();
                                          //       var oTable = $('#tb1').dataTable({
                                          //           retrieve: true,
                                          //           dom: 'Bfrtip',
                                          //           buttons: [
                                          //               'copyHtml5',
                                          //               'excelHtml5',
                                          //               'csvHtml5',
                                          //           ]
                                          //       });
                                          //       oTable.fnClearTable();
                                          //       $.each(res, function (key, item) {
                                          //           oTable.fnAddData([item.site_id, item.url, item.ip, item.browser, item.browser_version, item.datetime, item.resolution, item.os, item.referrer, item.Device_Type, item.Device_name]);
                                          //       });
                                        }
                                    },
            dataType: "json",
                error: function(data){
                    alert("Some error occurred in making request to server!!!");
                }
            });
      e.preventDefault();
    })




  // var Data;
  //   $.get("/getalldata", function(data, status) {
  //     if (data.success==false) {
  //       alert("Problem in db!!!");
  //     } else {
  //       $("#d11").show();
  //       $("#tb11 tbody").empty();
  //       var oTable11 = $('#tb11').dataTable({
  //           retrieve: true
  //       });
  //       oTable11.fnClearTable();
  //       $.each(data, function (key, item) {
  //           oTable11.fnAddData([`<button class=" btn-block btn btn-info cl" data-toggle="modal" data-target="#exampleModalLong">${item.site_id}</button>`, `${item.view}`, `<button value ="${item.site_id}" class=" btn btn-success detail"  data-toggle="modal" data-target="#exampleModalLong">View More</button>`]);
  //       });
  //       $('.detail').click(function(){
  //         $("#d1").show();
  //         $("#d2").hide();
  //         var siteid = $(this).val();
  //         $('#exampleModalLongTitle').empty();
  //         $('#exampleModalLongTitle').html(`<b>Site Id: </b>`+siteid);
  //         $.ajax({
  //           url: '/viewmore',
  //           type: 'post',
  //           data: {
  //             siteid: siteid
  //           },
  //           dataType:'json',
  //           success: function(dta){
  //             if(dta.success==false){
  //               alert("Problem in DB!!");
  //             }else{
  //               $("#tb1 tbody").empty();
  //               var oTable1 = $('#tb1').dataTable({
  //                   retrieve: true,
  //                   dom: 'Bfrtip',
  //                   buttons: [
  //                     {
  //                       extend: 'copyHtml5'
  //                     },
  //                     {
  //                         extend: 'excelHtml5',
  //                         title: siteid
  //                     },
  //                     {
  //                         extend: 'csvHtml5',
  //                         title: siteid
  //                     }
  //                   ]
  //               });
  //               oTable1.fnClearTable();
  //               $.each(dta, function (key, item) {
  //                   oTable1.fnAddData([`${item.ip}`, `<button class="btn btn-info geo" data-toggle="modal" href="#exampleModalLong1" value='${item.ip}'>Get It</button>`, `${item.url}`, `${item.browser}`, `${item.browser_version}`, `${item.datetime}`, `${item.resolution}`, `${item.os}`, `${item.referrer}`, `${item.Device_Type}`, `${item.Device_name}`]);
  //               });
  //               $('.geo').click(function(){
  //                 var ip = $(this).val();
  //                 $('#exampleModalLongTitle1').empty();
  //                 $('#exampleModalLongTitle1').html(`<b>IP Address: </b>`+ip);
  //                 $.ajax({
  //                   url: "/fillipdata",
  //                   type: "post",
  //                   data: {
  //                     ip: ip
  //                   },
  //                   dataType : 'json',
  //                   success: function(data){
  //                         if(data.success==false){
  //                           $('#tb3 tbody').empty();
  //                           $('#d3').hide();
  //                           $('#abc').show();
  //                           $('#abc').empty();
  //                           $('#abc').html(`<h3>${data.err}</h3>`);
  //                         }
  //                         else{
  //                           $('#d3').show();
  //                           $('#abc').hide();
  //                           $('#tb3 tbody').empty();
  //                           $('#tb3 tbody').append(`<tr><td>${data.country}</td><td>${data.timezone}</td><td>${data.isp}</td><td>${data.city}</td><td>${data.latitude}</td><td>${data.longitude}</td><td>${data.zip}</td></tr>`);
  //                         }
  //                   },
  //                   error: function(xhr) { alert("There is some problem in making request!!!!"); }
  //                 });
  //               });
  //             }
  //           },
  //           error: function(xhr) { alert("There is some problem in making request!!!!"); }
  //         });
  //       });
  //       $('.cl').click(function(){
  //         $("#d2").show();
  //         $("#d1").hide();
  //           var siteid = $(this).text();
  //           $('#exampleModalLongTitle').empty();
  //           $('#exampleModalLongTitle').html(`<b>Site Id: </b>`+siteid);
  //           $.ajax({
  //             url: "/getallip",
  //             type: "post",
  //             data: {
  //               siteid : siteid
  //             },
  //             dataType : 'json',
  //             success: function(dt) {
  //               if(dt.success==false){
  //                     alert("Problem in DB!!");
  //                   }else{
  //                     $("#tb2 tbody").empty();
  //                     var oTable2 = $('#tb2').dataTable({
  //                         retrieve: true
  //                     });
  //                     oTable2.fnClearTable();
  //                     $.each(dt, function (key, item) {
  //                         oTable2.fnAddData([`${item.ip}`, `${item.view}`, `<button class="btn btn-info geo" data-toggle="modal" href="#exampleModalLong1" value='${item.ip}'>Get It</button>`, `<button value="${item.ip}" class="btn btn-danger del">Delete</button>`]);
  //                     });
  //                     $('.geo').click(function(){
  //                       var ip = $(this).val();
  //                       $('#exampleModalLongTitle1').empty();
  //                       $('#exampleModalLongTitle1').html(`<b>IP Address: </b>`+ip);
  //                       $.ajax({
  //                         url: "/fillipdata",
  //                         type: "post",
  //                         data: {
  //                           ip: ip
  //                         },
  //                         dataType : 'json',
  //                         success: function(data){
  //                               if(data.success==false){
  //                                 $('#tb3 tbody').empty();
  //                                 $('#d3').hide();
  //                                 $('#abc').show();
  //                                 $('#abc').empty();
  //                                 $('#abc').html(`<h3>${data.err}</h3>`);
  //                               }
  //                               else{
  //                                 $('#d3').show();
  //                                 $('#abc').hide();
  //                                 $('#tb3 tbody').empty();
  //                                 $('#tb3 tbody').append(`<tr><td>${data.country}</td><td>${data.timezone}</td><td>${data.isp}</td><td>${data.city}</td><td>${data.latitude}</td><td>${data.longitude}</td><td>${data.zip}</td></tr>`);
  //                               }
  //                         },
  //                         error: function(xhr) { alert("There is some problem in making request!!!!"); }
  //                       });
  //                     });
  //                     $('.del').click(function(){
  //                       var ip = $(this).val();
  //                       $.ajax({
  //                         url :  "/deleteentry",
  //                         type: "post",
  //                         data: {
  //                           siteid : siteid,
  //                           ip: ip
  //                         },
  //                         dataType: 'json',
  //                         success: function(res){
  //                           if(res.success==true){  alert('Successfully deleted!'); location.reload();}
  //                           else alert('error occurred!')
  //                         }

  //                       });
  //                     });
  //                   }
  //             },
  //             error: function(xhr) { alert("There is some problem in making request!!!!"); }
  //           });
  //       });
  //     }
  //   });



});