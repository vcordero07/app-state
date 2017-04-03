$('.shopping-list-form').submit(function(event) {
    event.preventDefault();
    $('.shopping-list').append('<li>' + $('.shopping-list-add-input').val() + '</li>');
});
