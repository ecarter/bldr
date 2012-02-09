/**
 * Bldr - setup
 * Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> (http://github.com/ecarter)
 * MIT Licensed
 */

/**
 * Sets Bldr properties
 */

module.exports = function ( config ) {
  
  if ( !(config instanceof Object) ) {
    return new Error ('#setup() requires `config` {Object}');
  }
  
  for ( var property in config ) {
    this[ '_' + property ] = config[ property ];
  }
  
  return this;
};


