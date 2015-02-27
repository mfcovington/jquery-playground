var $passwordInput = $('#password');

$passwordInput.keyup(function() {
    if ($passwordInput.val().length > 8) {
        $passwordInput.siblings('span').hide();
    }
    else {
        $passwordInput.siblings('span').show();
    }
});
