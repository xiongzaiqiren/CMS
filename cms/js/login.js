/* 
* @Author: xiongzaiqiren
* @Date:   2017-11-11 18:22:35
* @Last Modified by:   xiongzaiqiren
* @Last Modified time: 2017-11-19 16:21:08
*/

/*@charset "utf-8";*/
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
    console.log(event.keyCode);
});