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
    , compiled
    , view;
  
  if ( !(locals instanceof Object) ) {
    return new Error('#compile() requires `locals` {Object}');
  }
  
  // Set options
  options = options || {};
  
  layout = options.layout       // passed as string
          || '{{ content }}';   // default
  
  view = options.view || '{{ content }}';
  
  // Replace layout content block with template
  compiled = layout.toString().replace( /\{\{ content \}\}/, view );
  
  // Replace template blocks with locals
  for ( var property in locals ) {
    compiled = compiled.toString().replace(
        new RegExp( "\{\{ " + property + " \}\}", 'gi' )
      , locals[ property ]
    );
  }
  
  // Fire Callback
  if ( typeof done === 'function' ) {
    done.call(this, compiled);
    return this;
  } else {
    return compiled;
  }
  
};
