describe('#template()', function(){
  
  var Bldr = require('../');
  
  var testFile
    , testName
    , testTemplate;
  
  before(function(){
    testFile = 'examples/site/views/default.html';
    testName = 'default';
    testTemplate = '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>{{ title }}</title>\n</head>\n<body>\n  {{ content }}\n</body>\n</html>\n';
  })
  
  it('should add anonymous template to cache from file', function(done){
    Bldr().template({
      file: testFile
    , complete: function (buffer) {
        buffer.toString().should.eql( testTemplate );
        this._templateCache.should.have.property( testFile );
        done();
      }
    });
  })
  
  it('should add named template to cache from file', function(done){
    Bldr().template({
      name: testName
    , file: testFile
    , complete: function (buffer) {
        buffer.toString().should.eql( testTemplate );
        this._templateCache.should.have.property( testName );
        done();
      }
    });
  })
  
  it('should get cached template from key', function(done){
    Bldr().template({
      name: testName
    , file: testFile
    , complete: function () {
        this.template( testName ).toString().should.eql( testTemplate );
        done();
      }
    });
  })
  
  it('should get cached template from file path', function(done){
    Bldr().template({
      file: testFile
    , complete: function () {
        this.template( testFile ).toString().should.eql( testTemplate );
        done();
      }
    });
  })
  
})