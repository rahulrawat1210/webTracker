$(document).ready(function() {
  //var siteid = $('#siteid').val();
       // var sdate = $('#sdate').val();
        //var edate = $('#edate').val();
        // var siteid = '';
        // //var ip = $('#ip').val();
        // var ip = '';
        // var sdate = '1990-1-1';
        //     var date = new Date();
        //     var mon = date.getMonth() + 1;
        //     var edate =  date.getFullYear()+"-"+mon+"-"+date.getDate();
        $.ajax({
            type: "get",
            url: '/getdata',
                    success: function (res) { if(res.success==false){ $('#d1').hide(); $('#tb1 tbody').empty(); alert("Error in db!!!");}
                                    else if(res.length==0){ $('#d1').hide(); $('#tb1 tbody').empty(); alert('No data found!!!');}
                                    else{   $('#d1').show();
                                            $('#tb1 tbody').empty();
                                            var oTable = $('#tb1').dataTable({
                                                retrieve: true,
                                                dom: 'Bfrtip',
                                                buttons: [
                                                    'copyHtml5',
                                                    'excelHtml5',
                                                    'csvHtml5',
                                                ]
                                            });
                                            oTable.fnClearTable();
                                            $.each(res, function (key, item) {
                                                oTable.fnAddData([item.site_id, item.url, item.ip, item.browser, item.browser_version, item.datetime, item.resolution, item.os, item.referrer, item.Device_Type, item.Device_name]);
                                            });
                                    }
                                },
        dataType: "json",
            error: function(data){
                alert("Some error occurred in making request to server!!!");
            }
        });
});