describe('Bldr()', function(){
  
  var Bldr = require('../');
  
  describe('Constructor', function(){
    
    function isBldr ( instance, done ) {
      instance.should.be.instanceof(Bldr);
      instance.should.respondTo('setup');
      done();
    }
    
    describe('new Bldr()', function(){
      it('should return Bldr instance', function(done){
        isBldr( new Bldr(), done );
      })
    })
    
    describe('Bldr()', function(){
      it('should return Bldr instance', function(done){
        isBldr( Bldr(), done );
      })
    })
    
    describe('Bldr.create()', function(){
      it('should return Bldr instance', function(done){
        isBldr( Bldr.create(), done );
      })
    })
    
  })
  
})