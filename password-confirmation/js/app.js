var $passwordInput = $('#password');
var $passwordConfirm = $('#confirm_password');

$passwordInput.keyup(function() {
    if ($passwordInput.val().length > 8) {
        $passwordInput.siblings('span').hide();
    }
    else {
        $passwordInput.siblings('span').show();
    }

    if ($passwordInput.val() === $passwordConfirm.val()) {
        $passwordConfirm.siblings('span').hide();
    }
    else {
        $passwordConfirm.siblings('span').show();
    }
});

$passwordConfirm.keyup(function() {
    if ($passwordInput.val() === $passwordConfirm.val()) {
        $passwordConfirm.siblings('span').hide();
    }
    else {
        $passwordConfirm.siblings('span').show();
    }
});
