console.log( 'script.js has been sourced');


let clickCount = 0;

$(document).ready(function(){
    console.log( 'jQuery is ready');
    $('#counterButton').on( 'click', clickHandler);
    updateDomCount();
});

function clickHandler(){
    console.log( 'counter button was clicked!');
    clickCount++;
    console.log(clickCount);
    updateDomCount();
    addNewCreature();
}

function updateDomCount(){
    $('#totalCount').text(clickCount);
}

let creatureName = $( '#newCreatureName' )
function addNewCreature(){
    $('#creatureList').prepend(
       '<tr>' +
            '<td>' + $('#newCreatureName').val() + '</td>' + 
            '<td>' + $('#newCreatureSize').val() + ' ft.</td>' + 
            '<td>' + $('#newCreatureType').val() + '</td>' + 
            '<td>' + $('#newCreatureSpeed').val() + ' mph</td>' + 
       '</tr>'
    );
}