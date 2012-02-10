/**
 * Bldr - view
 * Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> (http://github.com/ecarter)
 * MIT Licensed
 */

/** Requires */
var fs = require('fs')
  , path = require('path');

/**
 * Adds or returns a view.
 */

module.exports = function ( options ) {
  
  var template
    , file
    , name
    , templateFile
    , self;
  
  self = self || this;
  
  // Get Template
  if ( typeof options === 'string' ) {
    
    name = options; // Assume single argument is for `name`
    
    // Get localized template path
    file = ( typeof self._views === 'string' ? self._views + '/' : './')
           + name + '.html';
    
    
    template =                                        // TODO: sync actions may be harmful later
      self._templateCache.hasOwnProperty( options )   // check cache for template
        ? self._templateCache[ name ]                 // get cached template buffer
        : path.existsSync( file )                     // if file exists
          ? fs.readFileSync( file ).toString()        // get template contents
          : template;                                 // return undefined otherwise
    
    return template;
    
  // Add Template
  } else if ( typeof options === 'object' ){
    
    if ( options.file ) {
      
      // Get template path
      file = typeof self._views !== 'undefined'         // if views directory is set
            ? path.join( self._views, options.file )    // join path
            : options.file;
      
      // Get template name
      name = typeof options.name === 'string'
            ? options.name
            : typeof self._views !== 'undefined'
              ? path.basename( file.replace(self._views, ''), '.html' )
              : file;
      
      // Read template content
      fs.readFile( file, function (err, data) {
        if (err) throw err;
        
        // If not in template cache, add it
        if ( !self._templateCache.hasOwnProperty(name) ) {
          self._templateCache[name] = data; // Buffer
        }
        
        if ( typeof options.complete === 'function' ) {
          options.complete.call(self, self._templateCache[name] );
        }
        
      });
    }
    
    return self; // TODO: why return Bldr instance here? chaining?
  }
  
};