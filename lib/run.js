/**
 * Bldr - run
 * Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> (http://github.com/ecarter)
 * MIT Licensed
 */

/** Requires */
var path = require('path');

/**
 * Reads views and source, parses files, builds files.
 */

module.exports = function ( options, done ) {
  
  var self;
  
  self = self || this;
  
  // Options
  options = typeof arguments[0] === 'object'
          ? arguments[0]
          : {}
  
  // Callback
  done = typeof arguments[0] === 'function'
       ? arguments[0]
       : typeof arguments[1] === 'function'
          ? arguments[1]
          : done;
  
  // View Templates Directory
  options.views = options.views
                || self._views
                || './views';
  
  // Source Files Directory
  options.source = options.source
                || self._source
                || './src';
  
  // Destination Directory
  options.dest = options.dest
              || self._dest
              || './public';
  
  // Read Views
  self.read( options.views, {}, function ( err, views ) {
    if (err) done.call(self, err);
    
    // Load each view file
    views.forEach( function ( view ) {
      self.template({
        content: view.content
      , name: path.basename( view.path, '.html' )
      });
    });
    
    // Read Source
    var found
      , built;
    
    self.read( options.source, {}, function ( err, files ) {
      
      if (err) done.call(self, err);
      
      found = files.length-1;
      built = 0;
      
      // Build Source Files
      files.forEach( function ( file ) { 
        
        var filename = path.dirname( file.path )
                      .replace(options.source, options.dest)
                      + '/'
                      + path.basename( file.path, '.md' )
                      + '.html';
        
        self.build(
          file.path, {
              content: file.content
            , dest: options.dest
            , filename: filename
          },
          function (generated) {
            built++;
            
            if ( found === built ) {
              done.call(self); // TODO: what gets passed to #run() callback?
            }
          }
        );
        
      });
      
    });
    
  });
  
  return self;
};