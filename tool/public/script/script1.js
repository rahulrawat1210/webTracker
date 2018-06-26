$(document).ready(function() {
  var Data;
  $("#d1").hide();
  $("#d2").hide();
    $.get("/getalldata", function(data, status) {
      if (data.success==false) {
        alert("Problem in db!!!");
      } else {
        $("#d11").show();
        $("#tb11 tbody").empty();
        for(var i=0;i<data.length;i++){
          $("#tb11 tbody").append(`<tr><td><button class="btn btn-info cl" data-toggle="modal" data-target="#exampleModalLong">${data[i].site_id}</button></td><td>${data[i].view}</td><td><button value ="${data[i].site_id}" class="btn btn-success detail"  data-toggle="modal" data-target="#exampleModalLong">View More</button></td></tr>`);
        }
        $('.detail').click(function(){
          $("#d1").show();
          $("#d2").hide();
          var siteid = $(this).val();
          $.ajax({
            url: '/viewmore',
            type: 'post',
            data: {
              siteid: siteid
            },
            dataType:'json',
            success: function(dta){
              if(dta.success==false){
                alert("Problem in DB!!");
              }else{
                $("#tb1 tbody").empty();
                for(var i=0;i<dta.length;i++){
                  $("#tb1 tbody").append(`<tr><td>${dta[i].site_id}</td><td>${dta[i].ip}</td><td>${dta[i].url}</td><td>${dta[i].browser}</td><td>${dta[i].browser_version}</td><td>${dta[i].date}</td><td>${dta[i].resolution}</td><td>${dta[i].os}</td><td>${dta[i].referrer}</td><td>${dta[i].Device_Type}</td><td>${dta[i].time}</td><td>${dta[i].Device_name}</td></tr>`);
                }
              }
            },
            error: function(xhr) { alert("There is some problem in making request!!!!"); }
          });
        });
        $('.cl').click(function(){
          $("#d2").show();
          $("#d1").hide();
            var siteid = $(this).text();
            $.ajax({
              url: "/getallip",
              type: "post",
              data: {
                siteid : siteid
              },
              dataType : 'json',
              success: function(dta) {
                if(dta.success==false){
                      alert("Problem in DB!!");
                    }else{
                      $("#tb2 tbody").empty();
                      for(var i=0;i<dta.length;i++){
                        $("#tb2 tbody").append(`<tr><td>${dta[i].site_id}</td><td>${dta[i].ip}</td><td>${dta[i].view}</td><td><button value="${dta[i].ip}" class="btn btn-danger del">Delete</button></td></tr>`);
                      }
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
      }
    });
});
