describe('#run()', function(){
  
  var Bldr = require('../')
    , fs = require('fs');
  
  var testReport;
  
  before(function(){
    testReport = {
      
    };
  })
  
  it('should run instance and generate example/site/public', function(done){
    
    Bldr().run({
        source: 'examples/site/src'
      , dest: 'examples/site/public'
      , views: 'examples/site/views'
      }, 
      function ( err ) {
        if (err) done(err);
        
        // index.html
        fs.readFileSync('examples/site/public/index.html').toString()
          .should.eql('<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>{{ title }}</title>\n</head>\n<body>\n  <div id="home-content">\n  <h2>Welcome to the Site</h2>\n\n<p>Have a look around and let us know what you think!</p>\n</div>\n</body>\n</html>\n');
        
        // contact.html
        fs.readFileSync('examples/site/public/contact.html').toString()
          .should.eql('<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>{{ title }}</title>\n</head>\n<body>\n  <h2>Drop us a line!</h2>\n\n<p>Godard farm-to-table you probably haven\'t heard of them, et sriracha salvia single-origin coffee incididunt williamsburg lo-fi gentrify. Stumptown nisi viral bicycle rights mixtape, pickled organic tempor gastropub raw denim do salvia vinyl. Godard odd future narwhal portland et, truffaut assumenda sunt 3 wolf moon sartorial echo park. Ethnic nostrud non, readymade shoreditch cardigan keytar street art beard butcher american apparel post-ironic farm-to-table. Authentic hella bushwick, kogi eu sint single-origin coffee flexitarian synth small batch +1 deserunt id fanny pack. Synth nesciunt DIY delectus. Exercitation brooklyn etsy typewriter biodiesel fanny pack put a bird on it, kale chips locavore hella mustache reprehenderit.</p>\n</body>\n</html>\n');
        
        // about/history.html
        fs.readFileSync('examples/site/public/about/history.html').toString()
          .should.eql('<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>{{ title }}</title>\n</head>\n<body>\n  <p>American apparel dolore minim, dreamcatcher skateboard VHS flexitarian artisan pickled adipisicing ethnic. Excepteur yr cardigan id dreamcatcher placeat. Seitan put a bird on it sunt, placeat VHS echo park exercitation 8-bit tempor aliquip selvage proident officia. Scenester carles 3 wolf moon, nihil minim gastropub officia twee ex salvia non tumblr marfa. Non officia wayfarers, laborum seitan cred assumenda craft beer. Vinyl pinterest kale chips, american apparel farm-to-table polaroid placeat biodiesel irony swag quis narwhal. Pariatur culpa mcsweeney\'s before they sold out, cupidatat lo-fi wayfarers.</p>\n</body>\n</html>\n');
        
        // about/team.html
        fs.readFileSync('examples/site/public/about/team.html').toString()
          .should.eql('<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>{{ title }}</title>\n</head>\n<body>\n  <p>Skateboard excepteur wayfarers, ad retro dolor fugiat mcsweeney\'s sunt cosby sweater elit. Beard culpa esse 3 wolf moon readymade. Banh mi cillum occupy scenester. Mcsweeney\'s trust fund cred yr. Chillwave mlkshk qui banksy. Narwhal odd future cupidatat retro, vero gentrify ea aliquip pickled officia cillum williamsburg. Sriracha farm-to-table hella thundercats, stumptown cillum in etsy dolore chillwave mlkshk.</p>\n</body>\n</html>\n');
        
        // products/product-1.html
        fs.readFileSync('examples/site/public/products/product-1.html').toString()
          .should.eql('<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>{{ title }}</title>\n</head>\n<body>\n  <p><img src="http://placehold.it/640x270" alt="Product 1" title="" /></p>\n\n<h3>Mixtape portland brunch</h3>\n\n<p>3 wolf moon american apparel four loko pop-up jean shorts fap. </p>\n\n<ul>\n<li>Mixtape pitchfork cred trust fund mlkshk DIY single-origin coffee.</li>\n<li>Umami biodiesel vice viral gluten-free, keffiyeh freegan small batch stumptown messenger bag salvia blog trust fund vinyl kale chips.</li>\n<li>Keytar wayfarers mumblecore stumptown, echo park put a bird on it selvage single-origin coffee cosby sweater quinoa street art pop-up before they sold out.</li>\n</ul>\n\n<p>DIY letterpress vice occupy pickled before they sold out. PBR whatever williamsburg organic dreamcatcher flexitarian 8-bit, scenester brooklyn letterpress typewriter twee keffiyeh seitan forage. Seitan thundercats godard, mlkshk sustainable post-ironic sriracha PBR ethical shoreditch pinterest mustache viral chillwave.</p>\n</body>\n</html>\n');
        
        // products/product-2.html
        fs.readFileSync('examples/site/public/products/product-2.html').toString()
          .should.eql('<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>{{ title }}</title>\n</head>\n<body>\n  <p><img src="http://placehold.it/640x270" alt="Product 2" title="" /></p>\n\n<h3>Keffiyeh cosby sweater seitan sustainable wes anderson.</h3>\n\n<p>Organic pickled hella twee, banh mi tofu mixtape tumblr wolf keytar pop-up quinoa fingerstache narwhal. </p>\n\n<ul>\n<li>Polaroid brunch four loko mcsweeney\'s, </li>\n<li>freegan skateboard semiotics butcher cosby sweater squid. </li>\n<li>Fanny pack chillwave blog irony forage. </li>\n<li>Austin jean shorts you probably haven\'t heard of them next level pour-over umami. </li>\n</ul>\n\n<p>Forage carles banksy, craft beer seitan fingerstache cosby sweater food truck put a bird on it lo-fi vegan. DIY tattooed cosby sweater, irony wolf selvage odd future chillwave kogi cardigan banh mi.</p>\n</body>\n</html>\n');
        
        // products/product-3.html
        fs.readFileSync('examples/site/public/products/product-3.html').toString()
          .should.eql('<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>{{ title }}</title>\n</head>\n<body>\n  <p><img src="http://placehold.it/640x270" alt="Product 3" title="" /></p>\n\n<h3>Mcsweeney\'s umami letterpress</h3>\n\n<ul>\n<li>hella artisan leggings iphone authentic cray vinyl swag beard jean shorts narwhal carles.</li>\n<li>Direct trade yr iphone pop-up. </li>\n<li>Small batch etsy DIY wolf. </li>\n<li>Polaroid irony mixtape, biodiesel synth typewriter retro post-ironic occupy single-origin coffee williamsburg mumblecore vice. </li>\n</ul>\n\n<p>Sriracha wolf hella williamsburg bespoke, beard bushwick dreamcatcher vinyl PBR umami fingerstache. Truffaut sustainable synth, fanny pack art party typewriter wayfarers tumblr swag williamsburg freegan bicycle rights wolf. </p>\n\n<p>You probably haven\'t heard of them helvetica semiotics, iphone chillwave terry richardson chambray sustainable.</p>\n</body>\n</html>\n');
        
        done();
    });
    
  })
  
})