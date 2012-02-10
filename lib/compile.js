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
  
  view = options.view || '';
  
  // Replace template blocks with locals
  for ( var property in locals ) {
    view = view.replace(
      new RegExp( "\{\{ " + property + " \}\}" )    // TODO: global replace?
    , locals[ property ]
    );
  }
  
  // Replace layout content block with template
  compiled = layout.replace( /\{\{ content \}\}/, view ); // TODO: what about locals in layout?
  
  // Fire Callback
  if ( typeof done === 'function' ) {
    done.call(this, compiled);
    return this;
  } else {
    return compiled;
  }
  
};