// Init App
var myApp = new Framework7({
    //    modalTitle: 'Pepin',
    // Enable Material theme
    material: true,
    cache: true,
    materialRipple: true,
    scrollTopOnNavbarClick: true
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {});

// GENERAL


$$('a').on('click', function (e) { //Close panel when you open a new page
    myApp.closePanel();
});

$$('a.home').on('click', function (e) { //Close popover when you open a new page
    myApp.closeModal('.popover-more-home');
});
$$('a.more').on('click', function (e) { //Close popover when you open a new page
    myApp.closeModal('.popover-more');
});

$$(document).on('click', '.alert-text', function () {
    myApp.modal({
        title: 'Forgot Password ?',
        text: 'Please enter your email',
        afterText: '<input type="text" class="modal-text-input" placeholder="Your email">',
        buttons: [{
            text: 'OK',
            //            onClick: function () {
            //                myApp.alert('You clicked Ok!');
            //            }
    }, {
            text: 'Cancel',
            //            onClick: function () {
            //                myApp.alert('You clicked Cancel!');
            //            }
    }, ]
    });
});


$$(document).on('click', '.logout', function () {
    myApp.modal({
        title: 'Are sure want to exit ?',
        buttons: [{
            text: 'OK',
            onClick: function () {
              window.open("index.html","_self");
            }
    }, {
            text: 'Cancel',
            //            onClick: function () {
            //                myApp.alert('You clicked Cancel!');
            //            }
    }, ]
    });
});





$$(document).on('click', '.fav', function () {
    $(this).toggleClass('color-change')
});

$$(document).on('pageInit', function (e) {
    // Do something here when page loaded and initialized
    var mySwiper = myApp.swiper('.swiper-container.swiper-init', {
        pagination: '.swiper-pagination',
        paginationHide: false,
        autoplay: 3000,
        onReachEnd: function (swiper) {
            //callback function code here
        }
    });

});






function gotPic(event) {
    if (event.target.files.length === 1 && event.target.files[0].type.indexOf('img/') === 0) {
        $$('#avatar').attr('src', URL.createObjectURL(event.target.files[0]));
    }
}




$$('#avatarCapture').on('change', gotPic);

// ICONS TRANSITIONS


$$('i.material-icons.fav').on('click', function (e) { //Changing color icons onclick
    $$(this).toggleClass('color-change');
});

myApp.onPageInit('profile', function (page) {
    $$('i.material-icons.fav').on('click', function (e) { //Changing color icons onclick
        $$(this).toggleClass('color-change');
    });
});

myApp.onPageInit('photos', function (page) {
    $$('i.material-icons.fav').on('click', function (e) { //Changing color icons onclick
        $$(this).toggleClass('color-change');
    });
});

myApp.onPageInit('videos', function (page) {
    $$('i.material-icons.fav').on('click', function (e) { //Changing color icons onclick
        $$(this).toggleClass('color-change');
    });
});

myApp.onPageInit('musiques', function (page) {
    $$('i.material-icons.fav').on('click', function (e) { //Changing color icons onclick
        $$(this).toggleClass('color-change');
    });
});

myApp.onPageInit('index2', function (page) {
    $$('i.material-icons.fav').on('click', function (e) { //Changing color icons onclick
        $$(this).toggleClass('color-change');
    });
});

myApp.onPageInit('article', function (page) {
    $$('i.material-icons.fav-article').on('click', function () { //Changing color icons onclick
        $$(this).toggleClass('color-change');
    });
});

myApp.onPageInit('notifications', function (page) { //Change icon when add or delete person
    $$(document).on('click', 'i.material-icons.add', function () {
        $(this).replaceWith('<div class="item-after"><i class="material-icons done">done</i></div>');
    });
    $$(document).on('click', 'i.material-icons.done', function () {
        $(this).replaceWith('<div class="item-after"><i class="material-icons add">person_add</i></div>');
    });
});

myApp.onPageInit('followers', function (page) { //Change icon when add or delete person
    $$(document).on('click', 'i.material-icons.add', function () {
        $(this).replaceWith('<div class="item-after"><i class="material-icons done">done</i></div>');
    });
    $$(document).on('click', 'i.material-icons.done', function () {
        $(this).replaceWith('<div class="item-after"><i class="material-icons add">person_add</i></div>');
    });
});

myApp.onPageInit('following', function (page) { //Change icon when add or delete person
    $$(document).on('click', 'i.material-icons.add', function () {
        $(this).replaceWith('<div class="item-after"><i class="material-icons done">done</i></div>');
    });
    $$(document).on('click', 'i.material-icons.done', function () {
        $(this).replaceWith('<div class="item-after"><i class="material-icons add">person_add</i></div>');
    });
});

myApp.onPageInit('index2', function (page) { //Change icon when add or delete person
    $$(document).on('click', 'i.material-icons.add', function () {
        $(this).replaceWith('<div class="item-after"><i class="material-icons done">done</i></div>');
    });
    $$(document).on('click', 'i.material-icons.done', function () {
        $(this).replaceWith('<div class="item-after"><i class="material-icons add">person_add</i></div>');
    });
});


// PAGES FUNCTION


myApp.onPageInit('article', function (page) {
    $$('.ac-1').on('click', function () {
        var buttons = [
            {
                text: 'Facebook',
        },
            {
                text: 'Twitter'
        },
            {
                text: 'Google Plus'
        },
            {
                text: 'Cancel',
                color: 'red'
        },
    ];
        myApp.actions(buttons);
    });
});

function cari() {
    $('form#cari').addClass('layer searchbar-active');
}

function pangkah() {
    $('form#cari').removeClass('layer searchbar-active');
}

//function add_advert() {
//    
////    $('div.tukar:nth-child(1)').html().replace('active','saya');
//    $('div.tukar').replaceWith('<h2>New heading</h2>');
//    alert($('div.tukar').html());
//}

//function fav() {
//    $('.fav').addClass('color-change');
//    $('.fav').attr('onclick','unfav()');
//}
//function unfav() {
//    $('.fav').removeClass('color-change');
//    $('.fav').attr('onclick','fav()');
//}

//
//$('.fav').click(function () {
//    alert(111);
//            $(this).click(function () {
//                alert(111);
//                if ($(this).hasClass('color-change')) {
//                    alert(222);
//                    $(this).removeClass('color-change');
//                } else {
//                    alert(111);
//                    $(this).addClass('color-change');
//                }
//            });
//});



//function fav() {
//    if ($('.fav').hasClass('color-change')) {
//        alert(222);
//        $('.fav').removeClass('color-change');
//    } else {
//        alert(111);
//        $('.fav').addClass('color-change');
//    }
//}