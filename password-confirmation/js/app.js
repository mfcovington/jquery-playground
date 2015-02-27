var $passwordInput = $('#password');
var $passwordConfirm = $('#confirm_password');

var $submitButton = $('input[type="submit"]');
$submitButton.prop('disabled', true)

function isPasswordValid() {
    return $passwordInput.val().length > 8;
}

function isPasswordConfirmed() {
    return $passwordInput.val() === $passwordConfirm.val();
}

function checkPasswordLength() {
    if (isPasswordValid()) {
        $passwordInput.siblings('span').hide();
    }
    else {
        $passwordInput.siblings('span').show();
    }
}

function checkPasswordConfirm() {
    if (isPasswordConfirmed()) {
        $passwordConfirm.siblings('span').hide();
    }
    else {
        $passwordConfirm.siblings('span').show();
    }
}

function isSubmittable() {
    if (isPasswordValid() && isPasswordConfirmed()) {
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
