var figlet = require('figlet');

figlet('Fighting JYW!!!', function(err, data){
    if (err){
        console.log('Something is Wrong');
        console.dir(err);
        return;
    }
    console.log(data);
})