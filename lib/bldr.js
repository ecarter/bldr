/**
 * Bldr
 * Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> (http://github.com/ecarter)
 * MIT Licensed
 */

/** Exports */
exports = module.exports = Bldr;

/**
 * Bldr Constructor
 */

function Bldr ( setup ) {
  return this instanceof Bldr ? this : Bldr.create( setup );
}

Bldr.create = require('./create');

Bldr.prototype.build = require('./build');
Bldr.prototype.compile = require('./compile');
Bldr.prototype.parse = require('./parse');
Bldr.prototype.read = require('./read');
Bldr.prototype.run = require('./run');
Bldr.prototype.setup = require('./setup');
Bldr.prototype.template = require('./template');