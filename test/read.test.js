describe('#read()', function(){
  
  var Bldr = require('../');
  
  it('should read the contents of examples/site', function(done){
    Bldr().read('./examples/site', {}, function (files) {
      files.should.eql([
        {
          file: 'README.md'
        , content: '# Site Example'
        }
      , {
          file: '_layout/default.html'
        , content: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>{{ title }}</title>\n</head>\n<body>\n  {{ content }}\n</body>\n</html>\n'
        }
      , {
          file: '_layout/detail.html'
        , content: '<h1>{{ title }}</h1>\n\n{{ body }}'
        }
      , {
          file: '_layout/home.html'
        , content: '<h1>{{ title }}</h1>\n\n{{ body }}'
        }
      , {
          file: '_pages/contact.md'
        , content: 'title: Content\n\n---\n\n'
        }
      , {
          file: '_pages/index.md'
        , content: 'title: Welcome\nauthor: E. Carter\ndate: 2012-02-09\ntemplate: home\n\n---\n\n# Welcome to the Site\n'
        }
      , {
          file: '_pages/about/history.md'
        , content: 'title: History\n\n---\n\n'
        }
      , {
          file: '_pages/about/team.md'
        , content: 'title: Team\n\n---\n\n'
        }
      , {
          file: '_pages/products/product-1.md'
        , content: 'title: Product 1\n\n---\n\n'
        }
      , {
          file: '_pages/products/product-2.md'
        , content: 'title: Product 2\n\n---\n\n'
        }
      , {
          file: '_pages/products/product-3.md'
        , content: 'title: Product 3\n\n---\n\n'
        }
      ]);
      done();
    });
  })
  
})