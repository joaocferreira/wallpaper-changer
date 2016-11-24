var fs = require('fs');
var request = require('request');
var url = 'https://source.unsplash.com/random/1600x900';
var wallpaper = require('wallpaper');


request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        
        request(url).pipe(fs.createWriteStream('wallpaper.jpg'))
            .on('finish', function() {
                wallpaper.set('wallpaper.jpg');
                console.log("done");
            });
    }
})