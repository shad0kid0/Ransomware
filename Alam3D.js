var encryptor = require('file-encryptor');
var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the private key: ', function(key) {
    rl.close();

    const testFolder = "./sample/";

    fs.readdirSync(testFolder).forEach(file => {
        if (file.endsWith('.encrypted')) {

            encryptor.decryptFile(`${testFolder}/${file}`, `${testFolder}/${file.replace('.encrypted', '')}`, key, function(err) {
                if (err) {
                    console.error('Error decrypting file:', err);
                } else {
                    fs.unlinkSync(`${testFolder}/${file}`);
                    console.log('File is decrypted and removed!');
                }
            });
        } else {
            encryptor.encryptFile(`${testFolder}/${file}`, `${testFolder}/${file}.encrypted`, key, function(err) {
                if (err) {
                    console.error('Error encrypting file:', err);
                } else {
                    fs.unlinkSync(`${testFolder}/${file}`);
                    console.log('File is encrypted!');
                }
            });
        }
    });
});
