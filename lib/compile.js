/**
 * Bldr - compile
 * Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> (http://github.com/ecarter)
 * MIT Licensed
 */

/**
 * Interpolates locals, layout, and template to output content.
 */

module.exports = function ( locals, options, done ) {
  
  var layout
    , output
    , template;
  
  if ( !(locals instanceof Object) ) {
    return new Error('#compile() requires `locals` {Object}');
  }
  
  // Set options
  options = options || {};
  options.layout = options.layout || self._defaultLayout || '{{ content }}';
  options.template = options.template || self._defaultTemplate || '';
  
  layout = options.layout;
  template = options.template;
  
  // Replace template blocks with locals
  for ( var property in locals ) {
    template = template.replace(
      new RegExp( "\{\{ " + property + " \}\}" )
    , locals[ property ]
    );
  }
  
  // Replace layout content block with template
  output = layout.replace( /\{\{ content \}\}/, template );
  
  // Fire Callback
  if ( typeof done === 'function' ) {
    done.call(this, output);
  }
  
  // TODO: async with callback vs sync without?
  
  return this;
};