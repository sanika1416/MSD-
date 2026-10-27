var path = require("path");


console.log('normalization : ' + path.normalize('/sssit/apl//node/newfolder/tab/..'));

console.log('joint path : ' + path.join('/sssit', 'apl', 'node/newfolder', 'tab', '..'));


console.log('resolve : ' + path.resolve('path_example.js'));


console.log('ext name: ' + path.extname('path_example.js'));