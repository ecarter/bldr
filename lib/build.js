/**
 * Bldr - build
 * Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> (http://github.com/ecarter)
 * MIT Licensed
 */

/** Requires */
var fs = require('fs')
  , path = require('path')
  , exec = require('child_process').exec;

/**
 * Reads, parses, compiles, and saves static file.
 */

module.exports = function ( file, options, done ) {
  
  var self;
  
  self = self || this;
  
  // Set Options
  options = options || {};
  options.dest = options.dest || path.dirname( file );
  options.filename = options.filename
    || path.join( options.dest, path.basename( file, '.md' ) ) + '.html';
  
  // Build Method
  function build ( data ) { // TODO: need for function is questionable, revisit structure
    
    var generated
      , parsed
      , compiled
      , layout
      , view;
    
    generated = {};
    
    // Parse File Contents
    parsed = self.parse( data.toString() );
    
    layout = options.layout                     // layout content passed as string
            || self.template( parsed.layout )   // check if template (by name) exists
            || self.template('default')         // check for default layout
            || self._layout                     // check for default cached layout
            || '{{ content }}';                 // TODO: what else?
    
    view = options.view                         // view content passed as string
          || self.template( parsed.view )       // check if template (by name) exists
          || self._view                         // check for default cached view
          || '';                                // TODO: like before.
    
    // Compile contents, layout, and view
    compiled =
      self.compile( parsed, {
        layout: layout
      , view: view
      });
    
    // TODO: is `generated` useful other than tests?
    generated.parsed = parsed;
    generated.compiled = compiled;
    
    // Make Directory
    exec('mkdir -p ' + path.dirname( options.filename ),
      function ( err, stdout, stderr ) {
        // TODO: error handling
        
        // Save compiled content to file
        fs.writeFile( options.filename, generated.compiled, function (err) {
          if (err) throw err;
          generated.saved = options.filename;
          if ( typeof done === 'function' ) {
            done.call(self, generated);
          }
        });
        
      });
      
  }
  
  // Build from passed string
  if ( typeof options.content === 'string' ) {
    build( options.content );
  
  // Build from file content
  } else {
    fs.readFile( file, function (err, data) {
      build( data );
    });
  }
  
  return self;
};