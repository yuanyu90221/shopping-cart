var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');
var products =[ 
    new Product({
        imagePath: 'http://vignette1.wikia.nocookie.net/harrypotter/images/b/b2/2001-Harry-Potter-and-the-Sorcerer-s-Stone-Promotional-Shoot-HQ-harry-potter-11097228-1600-1960.jpg/revision/latest/scale-to-width-down/163?cb=20141122213655',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://vignette1.wikia.nocookie.net/harrypotter/images/b/b2/2001-Harry-Potter-and-the-Sorcerer-s-Stone-Promotional-Shoot-HQ-harry-potter-11097228-1600-1960.jpg/revision/latest/scale-to-width-down/163?cb=20141122213655',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://vignette1.wikia.nocookie.net/harrypotter/images/b/b2/2001-Harry-Potter-and-the-Sorcerer-s-Stone-Promotional-Shoot-HQ-harry-potter-11097228-1600-1960.jpg/revision/latest/scale-to-width-down/163?cb=20141122213655',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!',
        price: 10
    })
];
var done = 0;
for( var i = 0 ; i <products.length; i++ ){
    products[i].save(function(err, result){
        done++;
        if(done===products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}