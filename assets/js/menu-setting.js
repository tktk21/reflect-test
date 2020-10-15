var menu = new MmenuLight(
    document.querySelector( '#menu' ),
    'all'
);

var navigator = menu.navigation({
    // selectedClass: 'Selected',
    // slidingSubmenus: true,
    // theme: 'dark',
    // title: 'Menu'
});

var drawer = menu.offcanvas({
    position: 'right'
});

//	Open the menu.
document.querySelector( 'a[href="#menu"]' )
    .addEventListener( 'click', evnt => {
        evnt.preventDefault();
        drawer.open();
    });