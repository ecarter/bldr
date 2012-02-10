describe('#parse()', function(){
  
  var Bldr = require('../');
  
  var content
    , parsedPage;
  
  content = 'title: Welcome\nauthor: E. Carter\ndate: 2012-02-09\n\n---\n\n# Welcome to the Site\n';
  parsedPage = {
      body: '\n# Welcome to the Site\n\n'
    , title: 'Welcome'
    , author: 'E. Carter'
    , date: '2012-02-09'
    , content: '<h1>Welcome to the Site</h1>'
  };
  
  it('should parse content', function(done){
    
    Bldr().parse( content, function ( parsed ) {
      parsed.should.eql( parsedPage );
      done();
    });
    
  })
  
})