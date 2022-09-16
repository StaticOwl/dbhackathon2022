'use strict';
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();
listFiles();

async function listFiles() {
        const bucketName = 'onizuka'
        console.log('Listing objects in a Bucket');
        const [files] = await storage.bucket(bucketName).getFiles();
        files.forEach(file => {
            console.log('Reading: '+file.name);
            var archivo = file.createReadStream();
            console.log('Concat  Data');
            var  buf = '';
            archivo.on('data', function(d) {
                buf += d;
            }).on('end', function() {
                console.log(buf);
                console.log("End");
            });    
        });
};


listFiles();