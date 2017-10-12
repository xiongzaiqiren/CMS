function SubmitForm(id) {
    if (!!id)
        $("form#" + id).submit();
    else
        $("form")[0].submit();
};
function Reset() {
    $("input,select").each(function (index, element) {
        $(this).val(null);
    });
};

$(document).ready(function () {
    $("#LoginName").focus();

    $("#LoginBtn").click(function () {
        SubmitFrom();
    });
});

$(document).keydown(function (event) {
    if (event.keyCode == 13) {
        SubmitForm();
    }
    //alert(event.keyCode);
});