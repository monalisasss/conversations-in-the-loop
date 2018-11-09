var divs = [$("#01"), $("#02"), $("#03"), $("#04"), $("#05"), $("#06"), $("#07"), $("#08"), $("#09"), $("#10")];
var menu = [$("#menu01"), $("#menu02"), $("#menu03"), $("#menu04"), $("#menu05"), $("#menu06"), $("#menu08"), $("#menu09"), $("#menu10")];
var r1
var r2

showRandom();

// menu click

for (var i = 0; i < menu.length; i++) {
    var menu = menu[i];
    menu.onclick = clicou;
}

function clicou() {
        // alert(r1+" "+r2+" "+i)
        alert(this.id);
        divs[r1].addClass("hide");
        divs[r2].addClass("hide");
        divs[this.id].removeClass("hide");
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
        divs[i].addClass("hide");
        divs[i].find('div').hide();
    }

}

// click loop
$("#btnLoop").click(function(event){
    showRandom();
});

// expand content
$(".btnTitle").click(function(event){
    $(this).parent('div').find('div').show();
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