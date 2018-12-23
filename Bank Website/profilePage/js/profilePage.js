
$(document).ready(function(){

    $(".fa-edit").click(function() {
        console.log( "Handler for .click() called." );
        $(this).toggle("active");
    });

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
