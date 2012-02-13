describe('#read()', function(){
  
  var Bldr = require('../');
  
  var testFiles;
  
  before(function(){
    testFiles = [ { path: 'contact.md',
        content: 'title: Contact\n\n---\n\n## Drop us a line!\n\nGodard farm-to-table you probably haven\'t heard of them, et sriracha salvia single-origin coffee incididunt williamsburg lo-fi gentrify. Stumptown nisi viral bicycle rights mixtape, pickled organic tempor gastropub raw denim do salvia vinyl. Godard odd future narwhal portland et, truffaut assumenda sunt 3 wolf moon sartorial echo park. Ethnic nostrud non, readymade shoreditch cardigan keytar street art beard butcher american apparel post-ironic farm-to-table. Authentic hella bushwick, kogi eu sint single-origin coffee flexitarian synth small batch +1 deserunt id fanny pack. Synth nesciunt DIY delectus. Exercitation brooklyn etsy typewriter biodiesel fanny pack put a bird on it, kale chips locavore hella mustache reprehenderit.' },
      { path: 'index.md',
        content: 'title: Welcome\nauthor: E. Carter\ndate: 2012-02-09\nview: home\n\n---\n\n## Welcome to the Site\n\nHave a look around and let us know what you think!' },
      { path: 'about/history.md',
        content: 'title: History\n\n---\n\nAmerican apparel dolore minim, dreamcatcher skateboard VHS flexitarian artisan pickled adipisicing ethnic. Excepteur yr cardigan id dreamcatcher placeat. Seitan put a bird on it sunt, placeat VHS echo park exercitation 8-bit tempor aliquip selvage proident officia. Scenester carles 3 wolf moon, nihil minim gastropub officia twee ex salvia non tumblr marfa. Non officia wayfarers, laborum seitan cred assumenda craft beer. Vinyl pinterest kale chips, american apparel farm-to-table polaroid placeat biodiesel irony swag quis narwhal. Pariatur culpa mcsweeney\'s before they sold out, cupidatat lo-fi wayfarers.' },
      { path: 'about/team.md',
        content: 'title: Team\n\n---\n\nSkateboard excepteur wayfarers, ad retro dolor fugiat mcsweeney\'s sunt cosby sweater elit. Beard culpa esse 3 wolf moon readymade. Banh mi cillum occupy scenester. Mcsweeney\'s trust fund cred yr. Chillwave mlkshk qui banksy. Narwhal odd future cupidatat retro, vero gentrify ea aliquip pickled officia cillum williamsburg. Sriracha farm-to-table hella thundercats, stumptown cillum in etsy dolore chillwave mlkshk.' },
      { path: 'products/product-1.md',
        content: 'title: Product 1\n\n---\n\n![Product 1](http://placehold.it/640x270)\n\n### Mixtape portland brunch\n\n3 wolf moon american apparel four loko pop-up jean shorts fap. \n\n* Mixtape pitchfork cred trust fund mlkshk DIY single-origin coffee.\n* Umami biodiesel vice viral gluten-free, keffiyeh freegan small batch stumptown messenger bag salvia blog trust fund vinyl kale chips.\n* Keytar wayfarers mumblecore stumptown, echo park put a bird on it selvage single-origin coffee cosby sweater quinoa street art pop-up before they sold out.\n\nDIY letterpress vice occupy pickled before they sold out. PBR whatever williamsburg organic dreamcatcher flexitarian 8-bit, scenester brooklyn letterpress typewriter twee keffiyeh seitan forage. Seitan thundercats godard, mlkshk sustainable post-ironic sriracha PBR ethical shoreditch pinterest mustache viral chillwave.\n' },
      { path: 'products/product-2.md',
        content: 'title: Product 2\n\n---\n\n![Product 2](http://placehold.it/640x270)\n\n### Keffiyeh cosby sweater seitan sustainable wes anderson.\n\nOrganic pickled hella twee, banh mi tofu mixtape tumblr wolf keytar pop-up quinoa fingerstache narwhal. \n\n* Polaroid brunch four loko mcsweeney\'s, \n* freegan skateboard semiotics butcher cosby sweater squid. \n* Fanny pack chillwave blog irony forage. \n* Austin jean shorts you probably haven\'t heard of them next level pour-over umami. \n\nForage carles banksy, craft beer seitan fingerstache cosby sweater food truck put a bird on it lo-fi vegan. DIY tattooed cosby sweater, irony wolf selvage odd future chillwave kogi cardigan banh mi.\n' },
      { path: 'products/product-3.md',
        content: 'title: Product 3\n\n---\n\n![Product 3](http://placehold.it/640x270)\n\n### Mcsweeney\'s umami letterpress\n\n* hella artisan leggings iphone authentic cray vinyl swag beard jean shorts narwhal carles.\n* Direct trade yr iphone pop-up. \n* Small batch etsy DIY wolf. \n* Polaroid irony mixtape, biodiesel synth typewriter retro post-ironic occupy single-origin coffee williamsburg mumblecore vice. \n\nSriracha wolf hella williamsburg bespoke, beard bushwick dreamcatcher vinyl PBR umami fingerstache. Truffaut sustainable synth, fanny pack art party typewriter wayfarers tumblr swag williamsburg freegan bicycle rights wolf. \n\nYou probably haven\'t heard of them helvetica semiotics, iphone chillwave terry richardson chambray sustainable.' } ];
  })
  
  it('should read the contents of examples/site', function(done){
    Bldr().read('./examples/site/src', {}, function (err, files) {
      if (err) done(err);
      files.should.eql( testFiles );
      done();
    });
  })
  
})