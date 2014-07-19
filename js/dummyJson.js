var dummyjson = require('dummy-json');
var template = '{ "people": [ {{#repeat 25}} { "firstName": "{{firstName}}", "lastName": "{{lastName}}", "email": "{{email}}", "work": "{{company}}", "age": {{number 20 50}} } {{/repeat}}],"images": [{{#repeat 25}}"http://lorempixel.com/300/300/people/{{index}}" {{/repeat}}]}';
var result = dummyjson.parse(template);
