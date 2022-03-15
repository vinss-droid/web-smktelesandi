$(document).ready(function () {
    // console.log(Cmm)

    // Navbar

    var $document = $(document),
        $nav = $('#navbar')

    $document.scroll(function() {
        if ($document.scrollTop() >= 25) {
            $nav.removeClass('navbar-light');
            $nav.addClass('navbar-dark bg-nav shadow-lg');
        } else {
            $nav.addClass('navbar-light');
            $nav.removeClass('navbar-dark bg-nav shadow-lg');
        }
    });

    // Jurusan

    $('#rpl').click( function () {
        $('#Crpl').addClass('card-active');
        $('#Cmm').removeClass('card-active');
        $('#Ctkj').removeClass('card-active');
        $('#Ctelko').removeClass('card-active');

        // Detail Jurusan
        $('#detail-rpl').removeClass('d-none');
        $('#detail-mm').addClass('d-none');
        $('#detail-tkj').addClass('d-none');
        $('#detail-telko').addClass('d-none');
    });
    
    $('#mm').click( function () {
        $('#Cmm').addClass('card-active');
        $('#Crpl').removeClass('card-active');
        $('#Ctkj').removeClass('card-active');
        $('#Ctelko').removeClass('card-active');

        // Detail Jurusan
        $('#detail-mm').removeClass('d-none');
        $('#detail-rpl').addClass('d-none');
        $('#detail-tkj').addClass('d-none');
        $('#detail-telko').addClass('d-none');
    });
    
    $('#tkj').click( function () {
        $('#Ctkj').addClass('card-active');
        $('#Crpl').removeClass('card-active');
        $('#Cmm').removeClass('card-active');
        $('#Ctelko').removeClass('card-active');

        // Detail Jurusan
        $('#detail-tkj').removeClass('d-none');
        $('#detail-rpl').addClass('d-none');
        $('#detail-mm').addClass('d-none');
        $('#detail-telko').addClass('d-none');
    });
    
    $('#telko').click( function () {
        $('#Ctelko').addClass('card-active');
        $('#Crpl').removeClass('card-active');
        $('#Cmm').removeClass('card-active');
        $('#Ctkj').removeClass('card-active');

        // Detail Jurusan
        $('#detail-telko').removeClass('d-none');
        $('#detail-mm').addClass('d-none');
        $('#detail-tkj').addClass('d-none');
        $('#detail-rpl').addClass('d-none');
    });
    

});