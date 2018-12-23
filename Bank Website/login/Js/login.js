$(document).ready(function(){

    $(".form-login").submit(function (e) {
        e.preventDefault();
        let result;
        $.each($(this).serializeArray(), function () {
            result[this.username] = this.value;
            result[this.password] = this.value;
        });
        console.log(result);
    });
});
