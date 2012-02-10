/**
 * Bldr - read
 * Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> (http://github.com/ecarter)
 * MIT Licensed
 */

/** Requires */
var fs = require('fs')
  , basename = require('path').basename;

/**
 * Reads contents of a directory, parses files
 *
 * @param {String} path Path of directory
 * @param {Object} options Read options
 * @param {Function} done Callback executed on complete
 * @return {Object} Doto instance
 */

module.exports = function ( path, options, done ) {
  
  var self
    , doRead;
  
  self = self || this;
  
  self._source = self._source || path;  // TODO: "src" vs "source" needs to be determined globally
  self._files = self._files || [];
  self._found = self._found || 0;
  self._total = self._total || 0;
  
  options = options || {};
  options.hidden = options.hidden || false;
  
  doRead = true;
  
  // Hidden Files
  if ( !options.hidden && /^\./.test( basename(path) ) ) {
    doRead = false;
  }
  
  if ( doRead ) {
  
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
            path: path.replace( self._source + '/', '') // TODO: regexp needed
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
  
  }
  
  return this;
};

