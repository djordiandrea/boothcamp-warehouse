console.log("masuk list kendaraan js");

var listKendaraan = {

    getDataVehicle:function(next){

        $('.card-title').html('Vehicle');

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
                strHTML += '<td>';
                strHTML += '<button class="btn btn-primary btn-edit" data-id="'+result[i].mlv_id+'">Edit</button> '+
                            '<button class="btn btn-danger btn-delete" data-id="'+result[i].mlv_id+'" data-name="'+result[i].mlv_vehicleName+'">Delete</button>'
                strHTML += '</td>';
                strHTML += '</tr>';

                //<button class="btn btn-primary btn-edit" data-id="'+result[i].mlv_id+'">Edit</button>
            }
            $('#tbVehicle').append(strHTML);

            next();
        });
    },
    getDataVehicleById:function(id, next){

        var data = {id:id};
        var url = '/read-kendaraan/update';

        global.ajaxGet(url, data, function(result){
            next(result);
        });
    },
    resetContent:function(next){
        $("#vehicleName").val('');
        $("#vehicleCode").val('');
        $("#vehicleBrand").val('');
        $("#vehicleModel").val('');
        $("#vehicleNumber").val('');
        $("#vehicleLongRun").val('');
        $("#vehicleBuyingDate").val('');
        next();
    },
    validation:function(next){
        var strHTML = "";
        var vehicleName = $("#vehicleName").val();
        var vehicleCode = $("#vehicleCode").val();
        var vehicleBrand = $("#vehicleBrand").val();
        var vehicleModel = $("#vehicleModel").val();
        var vehicleNumber = $("#vehicleNumber").val();
        var vehicleLongRun = $("#vehicleLongRun").val();
        var vehicleBuyingDate = $("#vehicleBuyingDate").val();

        if(vehicleName == ""){
            strHTML = "Nama Belum Diisi";
        }else if(vehicleCode == ""){
            strHTML = "Code Belum Diisi";
        }else if(vehicleBrand == ""){
            strHTML = "Brand Belum Diisi";
        }else if(vehicleModel == ""){
            strHTML = "Model Belum Diisi";
        }else if(vehicleNumber == ""){
            strHTML = "Number Belum Diisi";
        }else if(vehicleLongRun == ""){
            strHTML = "Vehicle Long Run Belum Diisi";
        }else if(vehicleBuyingDate == ""){
            strHTML = "Buying Date Belum Diisi";
        }

        if(strHTML != ""){
            alert(strHTML);
        }else{
            next();
        }

    },
    deleteKendaraan:function(id){
        var data = {id: id}
        var url = '/read-kendaraan/delete';

        global.ajaxGet(url,data,function(result){
            console.log(result);
            if(result.length > 0){
                alert("Data Telah dihapus")
            }else{
                alert("Data Gagal di hapus")
            }
        });
    },
    getAllUser(){
        var url = "/list-user";

        var data = {
            username:"udinpetot"
        }
        
        global.ajaxGet(url,data,function(result){
            console.log("kena");
            console.log(JSON.parse(result));
        });

    }

}

$(document).ready(function() {

    listKendaraan.getAllUser();


    listKendaraan.getDataVehicle(function(){

        $(".btn-delete").click(function(){
            console.log($(this).data("id"));
            let text = "Are You sure want to delete "+$(this).data("name")+" ?";
            if (confirm(text) == true) {
                listKendaraan.deleteKendaraan($(this).data("id"))
            } else {
                console.log("You canceled!")
            }
            
        });
    
        $(".btn-edit").click(function(){
            var id = $(this).data("id");

            $(".modal-title").html('Edit Kendaraan');
            $('.modal-dialog').addClass('modal-lg');
            $("#modal-default").modal("show");

            listKendaraan.getDataVehicleById(id, function(result){

                $("#vehicleName").val(result[0].mlv_vehicleName);
                $("#vehicleCode").val(result[0].mlv_vehicleCode);
                $("#vehicleBrand").val(result[0].mlv_vehicleBrand);
                $("#vehicleModel").val(result[0].mlv_vehicleModel);
                $("#vehicleNumber").val(result[0].mlv_vehicleNumber);
                $("#vehicleLongRun").val(result[0].mlv_vehicleLongRun);
                $("#vehicleBuyingDate").val(result[0].mlv_BuyingDate);
            
            });

        });

    });

    $('#addKendaraan').click(function() {
        listKendaraan.resetContent(function(){
            $(".modal-title").html('Add Kendaraan');
            $('.modal-dialog').addClass('modal-lg');
            $("#modal-default").modal("show");
        });
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