const btn 

function encriptar(texto){

    var replacements = [["a", "ai;"], ["e", "enter;"],
                        ["i", "imes;"], ["o", "ober;"]];
    forEach(replacements, function(replace) {
        text = texto.replace(replace[0], replace[1]);
    });
    return text;

}


// afge
// aifgenter