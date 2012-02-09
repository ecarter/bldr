/**
 * Bldr - read
 * Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> (http://github.com/ecarter)
 * MIT Licensed
 */

/** Requires */
var fs = require('fs');

/**
 * Reads contents of a directory, parses files
 *
 * @param {String} path Path of directory
 * @param {Object} options Read options
 * @param {Function} done Callback executed on complete
 * @return {Object} Doto instance
 */

module.exports = function ( path, options, done ) {
  
  var self;
  
  self = self || this;
  
  self._source = self._source || path;
  self._files = self._files || [];
  self._found = self._found || 0;
  self._total = self._total || 0;
  
  options = options || {};
  // TODO: #read() options?
  
  fs.lstat( path, function (err, stats) {
    
    if ( stats.isDirectory() ) {
      
      fs.readdir( path, function (err, dirFiles) { // TODO: file order errors in tests
        if (err) throw err;
        
        dirFiles.forEach( function (file) {
          self.read( path + '/' + file, options, done );
        });
      });
      
    } else if ( stats.isFile () ) {
      
      self._found++;
      
      fs.readFile( path, function (err, data) {
        if (err) throw err;
        
        self._total++;
        self._files.push({
          file: path.replace( self._source + '/', '') // TODO: regexp needed
        , content: data.toString()
        });
        
        if ( self._found === self._total ) {
          delete self._found;
          delete self._total;
          done.call(self, self._files);
        }
        
      });
    }
    
  });
  
  return this;
};

