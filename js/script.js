var divs = [$("#01"), $("#02"), $("#03"), $("#04"), $("#05"), $("#06"), $("#08"), $("#09"), $("#10"), $("#11"), $("#12")];

showRandom();

function showRandom() {
    for (i = 0; i < divs.length; i++) {
        divs[i].addClass("hide");
    }

    var r1 = Math.floor(Math.random() * divs.length);
    var r2 = Math.floor(Math.random() * divs.length);
    
    while(r1 == r2)
    {
        r2 = Math.floor(Math.random() * divs.length);
    }
    
    divs[r1].removeClass("hide");
    divs[r2].removeClass("hide");
}

$("#btnLoop").click(function(event){
    showRandom()
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