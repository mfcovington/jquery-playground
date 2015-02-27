var $passwordInput = $('#password');
var $passwordConfirm = $('#confirm_password');

var $submitButton = $('input[type="submit"]');
$submitButton.prop('disabled', true).css('background', 'gray');

function checkPasswordLength() {
    if ($passwordInput.val().length > 8) {
        $passwordInput.siblings('span').hide();
    }
    else {
        $passwordInput.siblings('span').show();
    }
}

function checkPasswordConfirm() {
    if ($passwordInput.val() === $passwordConfirm.val()) {
        $passwordConfirm.siblings('span').hide();
    }
    else {
        $passwordConfirm.siblings('span').show();
    }
}

function isSubmittable() {
    if ($passwordInput.val().length > 8 && $passwordInput.val() === $passwordConfirm.val()) {
        $submitButton.prop('disabled', false).css('background', '#2F558E');
    }
    else {
        $submitButton.prop('disabled', true).css('background', 'gray');
    }
}

$passwordInput.keyup(function() {
    checkPasswordLength();
    checkPasswordConfirm();
    isSubmittable();
}).focus(function() {
    checkPasswordLength();
    isSubmittable();
});

$passwordConfirm.keyup(function() {
    checkPasswordConfirm();
    isSubmittable();
});
