// This function has the rules to encrypt / decrypt the text
function transformText (action){
    encryptedText.textContent = textToEncrypt.value;
    let encryptionPairs = {
        'e' : 'enter',
        'i' : 'imes',
        'a' : 'ai',
        'o' : 'ober',
        'u' : 'ufat'
    };

    if(encryptedText.textContent.length > 0) {
        asideMessage.classList.remove('invisible');
        asideNoMessage.classList.add('invisible');
        for(let key in encryptionPairs) {
            switch(action) {
                case 'encrypt': 
                    encryptedText.textContent = encryptedText.textContent.replaceAll(key, encryptionPairs[key]);
                    break;
                case 'decrypt':
                    encryptedText.textContent = encryptedText.textContent.replaceAll(encryptionPairs[key], key);
                    break;
            }
        }
    }
}