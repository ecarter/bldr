/**
 * Bldr - create
 * Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> (http://github.com/ecarter)
 * MIT Licensed
 */

/**
 * Creates new Bldr instance
 */

module.exports = function ( setup ) {
  
  var instance;
  
  setup = setup || {};
  
  // New constructor
  instance = new this();
  
  // Set Defaults
  
  return instance.setup( setup );
};

