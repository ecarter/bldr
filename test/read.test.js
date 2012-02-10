describe('#read()', function(){
  
  var Bldr = require('../');
  
  var testFiles;
  
  before(function(){
    testFiles = [
      {
        path: 'README.md',
        content: '# Site Example'
      },
      {
        path: 'src/contact.md',
        content: 'title: Content\n\n---\n\n'
      },
      {
        path: 'src/index.md',
        content: 'title: Welcome\nauthor: E. Carter\ndate: 2012-02-09\nview: home\n\n---\n\n## Welcome to the Site\n\nHave a look around and let us know what you think!'
      },
      {
        path: 'views/default.html',
        content: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>{{ title }}</title>\n</head>\n<body>\n  {{ content }}\n</body>\n</html>\n'
      },
      {
        path: 'views/detail.html',
        content: '<h1>{{ title }}</h1>\n\n{{ content }}'
      },
      {
        path: 'views/home.html',
        content: '<div id="home-content">\n  {{ content }}\n</div>'
      },
      {
        path: 'src/about/history.md',
        content: 'title: History\n\n---\n\n'
      },
      {
        path: 'src/about/team.md',
        content: 'title: Team\n\n---\n\n'
      },
      {
        path: 'src/products/product-1.md',
        content: 'title: Product 1\n\n---\n\n'
      },
      {
        path: 'src/products/product-2.md',
        content: 'title: Product 2\n\n---\n\n'
      },
      {
        path: 'src/products/product-3.md',
        content: 'title: Product 3\n\n---\n\n'
      }
    ];
  })
  
  it('should read the contents of examples/site', function(done){
    Bldr().read('./examples/site', {}, function (files) {
      files.should.eql( testFiles );
      done();
    });
  })
  
})