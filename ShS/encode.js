function encrypt() {
    var text = document.getElementById("inputText").value;
    var shift = parseInt(document.getElementById("shift").value)%25;
    var result = "";

    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        var encryptedCharCode;

        // Для символов от a до z
        if (charCode >= 97 && charCode <= 122) {
            encryptedCharCode = ((charCode - 97 + shift) % 26) + 97;
        } 
        // Для символов от A до Z
        else if (charCode >= 65 && charCode <= 90) {
            encryptedCharCode = ((charCode - 65 + shift) % 26) + 65;
        } 
        // Для остальных символов (цифры, знаки пунктуации и т.д.)
        else {
            encryptedCharCode = charCode;
        }

        result += String.fromCharCode(encryptedCharCode);
    }

    document.getElementById("outputText").value = result;
}

function decrypt() {
    var text = document.getElementById("inputText").value;
    var shift = parseInt(document.getElementById("shift").value)%25;
    var result = "";

    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        var decryptedCharCode;

        // Для символов от a до z
        if (charCode >= 97 && charCode <= 122) {
            decryptedCharCode = ((charCode - 97 - shift + 26) % 26) + 97;
        } 
        // Для символов от A до Z
        else if (charCode >= 65 && charCode <= 90) {
            decryptedCharCode = ((charCode - 65 - shift + 26) % 26) + 65;
        } 
        // Для остальных символов (цифры, знаки пунктуации и т.д.)
        else {
            decryptedCharCode = charCode;
        }

        result += String.fromCharCode(decryptedCharCode);
    }

    document.getElementById("outputText").value = result;
}