/**
 * Bldr - parse
 * Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> (http://github.com/ecarter)
 * MIT Licensed
 */

/** Requires */
var markdown = require('github-flavored-markdown')
  , path = require('path');

/**
 * Parses files
 */

module.exports = function ( content, done ) {
  
  var isBody
    , lines
    , parsed;
  
  isBody = false;
  lines = content.split(/\r?\n/);
  parsed = {};
  parsed.body = '';
  
  lines.forEach( function ( line ) {
    
    if ( isBody ) {
      parsed.body += line + '\n';
      
    } else if ( /^---/.test(line) ) {
      isBody = true;
      
    } else if ( /^(.*): (.*)$/.test(line) ) { // TODO: better regexp
      parsed[ RegExp.$1 ] = RegExp.$2;
    }
    
  });
  
  parsed.content = markdown.parse( parsed.body );
  
  if ( typeof done === 'function' ) {
    done.call(this, parsed);
    return this;
  } else {
    return parsed;
  }
  
};

