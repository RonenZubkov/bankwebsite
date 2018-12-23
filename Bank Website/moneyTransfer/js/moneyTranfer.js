$(document).ready(function(){

    $(".moneyTransfer").submit(function (e){
        console.log("Submitted");
        e.preventDefault();
        let result;
        $.each($(this).serializeArray(), function () {
            result[this.username] = this.value;
        //    ToDo: Adding the rest of the inputs.
        });
        console.log(result);
    });

});


