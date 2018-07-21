$( document ).ready(function() {
    $('.sidebarToggle').on('click', function() {
        $('aside').toggleClass('open');
        $('.mainContent').toggleClass('sideOpen');
    })
});