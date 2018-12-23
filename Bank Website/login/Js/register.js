$(document).ready(function(){

    $(".form-signin").submit(function (e) {
        e.preventDefault();
        console.log(e);
        let result;
        $.each($(this).serializeArray(), function () {
            result[this.username] = this.value;
            result[this.email] = this.value;
            result[this.password] = this.value;
        });
        console.log(result);
    });
});
