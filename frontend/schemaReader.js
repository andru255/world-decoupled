//reading the schemas for css/js
var fs = require('fs');
var schema = fs.readFileSync('./schemas/page.json');

var resolvePathsFromSchema = function(){
    var parsedSchema = JSON.parse(schema);
    var paths = [];
    for(var nodes in parsedSchema){
        var type = nodes;
        var names = parsedSchema[nodes][0];
        paths.push([type, "/", names, "/scripts/default.js"].join(""));
    }
    return paths;
};

module.exports = resolvePathsFromSchema;
