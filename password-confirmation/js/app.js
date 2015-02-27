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

function passwordEvent() {
    if (isPasswordValid()) {
        $passwordInput.siblings('span').hide();
    }
    else {
        $passwordInput.siblings('span').show();
    }
}

function confirmPasswordEvent() {
    if (isPasswordConfirmed()) {
        $passwordConfirm.siblings('span').hide();
    }
    else {
        $passwordConfirm.siblings('span').show();
    }
}

function enableSubmitEvent() {
    if (isPasswordValid() && isPasswordConfirmed()) {
        $submitButton.prop('disabled', false).css('background', '#2F558E');
    }
    else {
        $submitButton.prop('disabled', true).css('background', 'gray');
    }
}

$passwordInput.keyup(function() {
    passwordEvent();
    confirmPasswordEvent();
    enableSubmitEvent();
}).focus(function() {
    passwordEvent();
    enableSubmitEvent();
});

$passwordConfirm.keyup(function() {
    confirmPasswordEvent();
    enableSubmitEvent();
});
