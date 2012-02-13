describe('#build()', function(){
  
  var Bldr = require('../')
    , fs = require('fs');
  
  var buildTest;
  
  before(function(){
    buildTest = {
      parsed: {
          body: '\n## Welcome to the Site\n\nHave a look around and let us know what you think!\n',
          title: 'Welcome',
          author: 'E. Carter',
          date: '2012-02-09',
          view: 'home',
          content: '<h2>Welcome to the Site</h2>\n\n<p>Have a look around and let us know what you think!</p>'
      },
      compiled: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>{{ title }}</title>\n</head>\n<body>\n  <div id="home-content">\n  <h2>Welcome to the Site</h2>\n\n<p>Have a look around and let us know what you think!</p>\n</div>\n</body>\n</html>\n',
      saved: 'examples/site/public/index.html'
    };
  })
  
  describe('build file using `setup` properties', function(){
    
    it('should build file', function(done){
      Bldr({
        layout: '<!DOCTYPE html>\n<html>\n<head>\n'
              + '  <meta charset="utf-8">\n'
              + '  <title>{{ title }}</title>\n</head>\n<body>\n'
              + '  {{ content }}\n</body>\n</html>\n'
      , view: '<div id="home-content">\n  {{ content }}\n</div>'
      })
      .build(
          'examples/site/src/index.md'
        , {}
        , function (generated) {
            buildTest.saved = 'examples/site/src/index.html';
            generated.should.eql( buildTest );
            fs.readFile('examples/site/src/index.html', function (err, data) {
              if (err) done(err);
              data.toString().should.eql( buildTest.compiled );
              done();
            })
      });
    })
    
    after(function(){
      fs.unlinkSync('examples/site/src/index.html');
    })
    
  })
  
  describe('build file from template files', function(){
    
    it('should build file', function(done){
      Bldr({
        views: 'examples/site/views'
      })
      .build(
          'examples/site/src/index.md'
        , { dest: 'examples/site/public' }
        , function (generated) {
            buildTest.saved = 'examples/site/public/index.html';
            generated.should.eql( buildTest );
            fs.readFile('examples/site/public/index.html', function (err, data) {
              if (err) done(err);
              data.toString().should.eql( buildTest.compiled );
              done();
            })
      });
    })
    
    after(function(){
      fs.unlinkSync('examples/site/public/index.html');
    })
    
  })
  
})