var base_url = window.location.origin;
console.log(base_url);

var global = {

    ajaxPost:function (url, data, next){
        $.ajax({
            type: "POST",
            dataType : "json",
            url: base_url+url,
            data: data,
            success: function(result) {
                next(result);
            },
            error: function(error,xhr) {
                // console.log(base_url+url);
                console.log(xhr);
                next(error);
            }
        });
    },
    ajaxGet:function(url, data, next){
        $.ajax({
            type: "GET",
            dataType : "json",
            url: base_url+url,
            data: data,
            success: function(result) {
                next(result);
            },
            error: function(error) {
                next(error);
            }
        });
    },
    ajaxPost2:function (url, data, next){
        $.ajax({
            type: "POST",
            // dataType : "json",
            url: base_url+url,
            data: data,
            success: function(result) {
                next(result);
            },
            error: function(error,xhr) {
                console.log(xhr);
                next(error);
            }
        });
    },
    ajaxGet2:function(url, next){
        $.ajax({
            type: "GET",
            dataType : "json",
            url: url,
            success: function(result) {
                next(result);
            },
            error: function(error) {
                next(error);
            }
        });
    },

}
