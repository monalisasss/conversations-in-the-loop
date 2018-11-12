var divs = [$("#01"), $("#02"), $("#03"), $("#04"), $("#05"), $("#06"), $("#07"), $("#08"), $("#09"), $("#10")];
var menu = [$("#menu01"), $("#menu02"), $("#menu03"), $("#menu04"), $("#menu05"), $("#menu06"), $("#menu07"), $("#menu08"), $("#menu09"), $("#menu10")];
var r1
var r2

showRandom();

menu[0].click({ID:0}, clickMenu);
menu[1].click({ID:1}, clickMenu);
menu[2].click({ID:2}, clickMenu);
menu[3].click({ID:3}, clickMenu);
menu[4].click({ID:4}, clickMenu);
menu[5].click({ID:5}, clickMenu);
menu[6].click({ID:6}, clickMenu);
menu[7].click({ID:7}, clickMenu);
menu[8].click({ID:8}, clickMenu);
menu[9].click({ID:9}, clickMenu);

function clickMenu(event) {
    hideAll();
    divs[event.data.ID].removeClass("hide");
    $("#sectionMenu").addClass("hide");
}

// show random
function showRandom() {
    
    hideAll()
    
    r1 = Math.floor(Math.random() * divs.length);
    r2 = Math.floor(Math.random() * divs.length);
    
    while(r1 == r2)
    {
        r2 = Math.floor(Math.random() * divs.length);
    }
    
    divs[r1].removeClass("hide");
    divs[r2].removeClass("hide");
    
    return false;
}

// hide all
function hideAll() {

    for (i = 0; i < divs.length; i++) {
        divs[i].addClass('hide');
        divs[i].find('div').hide();
        divs[i].find('button').removeClass('no-underline');
    }

}

// click loop
$("#btnLoop").click(function(event){
    showRandom();
});

// expand content
$(".btnTitle").click(function(event){
    $(this).parent('div').find('div').toggle();
    $(this).parent('div').find('button').toggleClass('no-underline')

});

$("#btnAbout").click(function(event){
    $("#sectionAbout").removeClass("hide");
    $("#sectionMenu").addClass("hide");
});

$("#btnMenu").click(function(event){
    $("#sectionMenu").removeClass("hide");
    $("#sectionAbout").addClass("hide");
});

$("#btnCloseAbout").click(function(event){
    $("#sectionAbout").addClass("hide");
});

$("#btnCloseMenu").click(function(event){
    $("#sectionMenu").addClass("hide");
});