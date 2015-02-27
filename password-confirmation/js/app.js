$('form span').hide();

var $passwordInput = $('#password');
var $passwordConfirm = $('#confirm_password');

function checkPasswordLength() {
    if ($passwordInput.val().length > 8) {
        $passwordInput.siblings('span').hide();
    }
    else {
        $passwordInput.siblings('span').show();
    }
}

function checkPasswordConfirm(argument) {
    if ($passwordInput.val() === $passwordConfirm.val()) {
        $passwordConfirm.siblings('span').hide();
    }
    else {
        $passwordConfirm.siblings('span').show();
    }
}

$passwordInput.keyup(function() {
    checkPasswordLength();
    checkPasswordConfirm();
}).focus(function() {
    checkPasswordLength();
});

$passwordConfirm.keyup(checkPasswordConfirm);
