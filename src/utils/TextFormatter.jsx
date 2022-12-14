


export const currencyFormat = (num) => {
   // return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '৳,')
   return new Intl.NumberFormat("en-US", {
     style: "currency",
     currency: "BDT",
   }).format(num);
   // return num.toLocaleString('en-US', { style: 'currency', currency: 'BDT' });
 };




// var key = CryptoJS.enc.Utf8.parse("JhnhSN7RaaWGgWfzeZeJdIMALLlZ1FQ2");

// var iv = CryptoJS.enc.Utf8.parse("JhnhSN7RaaWGgWfz");

// var encrypted = CryptoJS.AES.encrypt("hello", key, {
//   iv: iv,
// });

// var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
//   iv: iv,
// });
// decrypted = decrypted.toString(CryptoJS.enc.Utf8);