
import CryptoJS from 'crypto-js';
export default class Encryption {

    constructor(){
    
    }

    getEncryptedData(content) {
        var key = CryptoJS.enc.Utf8.parse("JhnhSN7RaaWGgWfzeZeJdIMALLlZ1FQ2");

        var iv = CryptoJS.enc.Utf8.parse("JhnhSN7RaaWGgWfz");
      
        var encrypted = CryptoJS.AES.encrypt(content, key, {
          iv: iv,
        });
        
       return "00*"+encrypted;
    }
}



// var key = CryptoJS.enc.Utf8.parse("JhnhSN7RaaWGgWfzeZeJdIMALLlZ1FQ2");

// var iv = CryptoJS.enc.Utf8.parse("JhnhSN7RaaWGgWfz");

// var encrypted = CryptoJS.AES.encrypt("hello", key, {
//   iv: iv,
// });

// var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
//   iv: iv,
// });
// decrypted = decrypted.toString(CryptoJS.enc.Utf8);