console.log("masuk list kendaraan js");

var listKendaraan = {

    getDataVehicle:function(next){
        var data = {};
        var url = '/read-kendaraan';

        global.ajaxGet(url, data, function(result){
            console.log(result[0].mlv_vehicleName);
            var strHTML = '';
            for (let i = 0; i < result.length; i++) {
                strHTML += '<tr>';
                strHTML += '<td>'+result[i].mlv_vehicleName+'</td>';
                strHTML += '<td>'+result[i].mlv_vehicleCode+'</td>';
                strHTML += '<td>'+result[i].mlv_vehicleBrand+'</td>';
                strHTML += '<td>'+result[i].mlv_vehicleModel+'</td>';
                strHTML += '<td>'+result[i].mlv_vehicleNumber+'</td>';
                strHTML += '<td>'+result[i].mlv_vehicleLongRun+'</td>';
                strHTML += '<td>'+result[i].mlv_BuyingDate+'</td>';
                strHTML += '<td><button class="btn btn-primary btn-edit" data-id="'+result[i].mlv_id+'">Edit</button></td>';
                strHTML += '</tr>';
            }
            $('#tbVehicle').append(strHTML);

            next();
        });
    },
    validation:function(next){
        var strHTML = "";
        var flag = 0;
        var vehicleName = $("#vehicleName").val();
        var vehicleCode = $("#vehicleCode").val();
        var vehicleBrand = $("#vehicleBrand").val();
        var vehicleModel = $("#vehicleModel").val();
        var vehicleNumber = $("#vehicleNumber").val();
        var vehicleLongRun = $("#vehicleLongRun").val();
        var vehicleBuyingDate = $("#vehicleBuyingDate").val();

        if(vehicleName == ""){
            strHTML = "Nama Belum Diisi";
            flag = 1;
        }else if(vehicleCode == ""){
            strHTML = "Code Belum Diisi";
            flag = 1;
        }else if(vehicleBrand == ""){
            strHTML = "Brand Belum Diisi";
            flag = 1;
        }else if(vehicleModel == ""){
            strHTML = "Model Belum Diisi";
            flag = 1;
        }else if(vehicleNumber == ""){
            strHTML = "Number Belum Diisi";
            flag = 1;
        }else if(vehicleLongRun == ""){
            strHTML = "Vehicle Long Run Belum Diisi";
            flag = 1;
        }else if(vehicleBuyingDate == ""){
            strHTML = "Buying Date Belum Diisi";
            flag = 1;
        }

        if(flag == 1){
            alert(strHTML);
            // error(strHTML);
        }else{
            next();
        }

    }

}

$(document).ready(function() {

    listKendaraan.getDataVehicle(function(){

        $(".btn-delete").click(function(){
            console.log($(this).data("id"));
        });
    
        $(".btn-edit").click(function(){
            console.log($(this).data("id"));
        });

    });

    $('#addKendaraan').click(function() {
        $(".modal-title").html('Add Kendaraan');
        $('.modal-dialog').addClass('modal-lg');
        $("#modal-default").modal("show");
    });

    

    $("#btn-save").click(function(){
        // alert("mancing mania mantap");

        var vehicleName = $("#vehicleName").val();
        var vehicleCode = $("#vehicleCode").val();
        var vehicleBrand = $("#vehicleBrand").val();
        var vehicleModel = $("#vehicleModel").val();
        var vehicleNumber = $("#vehicleNumber").val();
        var vehicleLongRun = $("#vehicleLongRun").val();
        var vehicleBuyingDate = $("#vehicleBuyingDate").val();

        var data = {
            vName : vehicleName,
            vCode : vehicleCode,
            vBrand : vehicleBrand,
            vModel : vehicleModel,
            vNumber : vehicleNumber,
            vLongRun : vehicleLongRun,
            vBuyingDate : vehicleBuyingDate
        }

        var url = '/list-kendaraan/addKendaraan';

        listKendaraan.validation(function(){
            //ini nextnya
            global.ajaxPost(url, data, function(result){
                console.log(result);
                if(result['result'] == true){
                    alert("Data Berhasil Disimpan");
                    window.location = base_url + result['url'];
                }else{
                    alert("Data Gagal Disimpan");
                }
            });
        });

    });

});