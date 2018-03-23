/**
 * Чекбок очки
 */




$("#Checkbox1").change(function() {
    if(this.checked) {
        $("#ochki").show()

            .css({'position' : 'absolute', 'z-index' : '999999999999999999999', top: 0, left: 0})
            .animate({opacity: 0.8,
                left: 106,
                top: 70,
                // width: 50
                // height: 70
            }, 0);
        $("#Editbox_ochki").val(1000);
    }
    else{
        $("#ochki")
            .css({'position' : 'absolute', 'z-index' : '999999999999999999999', top: 60, left: 70})
            .animate({opacity: 0.8,
                left: 0,
                top: 0,
                // width: 50
                // height: 70
            }, 0, function() {
                $(this).hide();
            });
        $("#Editbox_ochki").val(0);
    }

    var ochki = parseInt($("#Editbox_ochki").val());
    var usy = parseInt($("#Editbox_usy").val());
    var result = ochki + usy;
    $("#itog").html('Итого ' + result + ' руб.');

});


/**
 * Чекбокс усы
 */
$("#Checkbox3").change(function() {
    if(this.checked) {
        $("#Image2").show()

            .css({'position' : 'absolute', 'z-index' : '999999999999999999999', top: 0, left: 0})
            // .appendTo("body")
            .animate({opacity: 0.8,
                left: 143,
                top: 150,
                // width: 50
                // height: 70
            }, 1000);
        $("#Editbox_usy").val(3000);

    }
    else{
        $("#Image2")
            .css({'position' : 'absolute', 'z-index' : '999999999999999999999', top: 60, left: 70})
            // .appendTo("body")
            .animate({opacity: 0.8,
                left: 0,
                top: 0,
                // width: 50
                // height: 70
            }, 1000, function() {
                $(this).hide();
            });
        $("#Editbox_usy").val(0);
    }

    var ochki = parseInt($("#Editbox_ochki").val());
    var usy = parseInt($("#Editbox_usy").val());
    var result = ochki + usy;
    $("#itog").html('Итого ' + result + ' руб.');;
});



/**
 * Cкачиваем с помощью библиотеки html2canvas
 */
$("#Button_download").click(function() {
    html2canvas($("#down"), {
        onrendered: function (canvas) {
            var a = document.createElement('a');
            // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
            a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            a.download = 'somefilename.png';
            a.click();
        }
    });
});
