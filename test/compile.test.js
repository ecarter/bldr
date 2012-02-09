describe('#compile()', function(){
  
  var Bldr = require('../');
  
  var locals
    , options
    , testOutput;
  
  before(function(){
    locals = {
      title: 'Test Title'
    , body: '<p>this is the test body</p>'
    };
    options = {
      layout: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>{{ title }}</title>\n</head>\n<body>\n  {{ content }}\n</body>\n</html>\n'
    , template: '<h1>{{ title }}</h1>\n\n{{ body }}'
    };
    testOutput = '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>{{ title }}</title>\n</head>\n<body>\n  <h1>Test Title</h1>\n\n<p>this is the test body</p>\n</body>\n</html>\n';
  })
  
  it('should compile locals to output', function(done){
    Bldr().compile( locals, options, function (output) {
      output.should.eql( testOutput );
      done();
    });
  })
  
})