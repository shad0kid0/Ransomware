# file-encrypter

Questa è una semplice libreria Javascript per criptare e decriptare i file.

Richiede OpenSSL

#### Esempi

Per criptare un file:

```javascript
const file_encrypter=require("file-encrypter")

file_encrypter.crypt("nomefileinput","nomefileoutput","password")
```

Per decriptare:

```javascript
const file_encrypter=require("file-encrypter")

file_encrypter.decrypt("nomefileinput","nomefileoutput","password")
```



Ci saranno futuri miglioramenti
