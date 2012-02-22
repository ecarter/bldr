# TO-DO

---

## lib / build.js

* __[line 29](.//lib/build.js#L29) need for function is questionable, revisit structure:__  ```function build ( data ) {```

* __[line 46](.//lib/build.js#L46) what else?:__  ```|| '{{ content }}';```

* __[line 51](.//lib/build.js#L51) like before.:__  ```|| '';```

* __[line 60](.//lib/build.js#L60) is `generated` useful other than tests?__ 
* __[line 67](.//lib/build.js#L67) error handling__ 

---

## lib / read.js

* __[line 28](.//lib/read.js#L28) "src" vs "source" needs to be determined globally:__  ```self._source = self._source || path;```

* __[line 55](.//lib/read.js#L55) file order errors in tests:__  ```fs.readdir( path, function (err, dirFiles) {```

* __[line 72](.//lib/read.js#L72) regexp needed:__  ```path: path.replace( self._source + '/', '')```


---

## lib / run.js

* __[line 14](.//lib/run.js#L14) table of contents / file map that in view locals__ 
* __[line 91](.//lib/run.js#L91) what gets passed to #run() callback?:__  ```done.call(self);```


---

## lib / parse.js

* __[line 34](.//lib/parse.js#L34) better regexp:__  ```} else if ( /^(.*): (.*)$/.test(line) ) {```


---

## lib / template.js

* __[line 35](.//lib/template.js#L35) sync actions may be harmful later:__  ```template =```

* __[line 76](.//lib/template.js#L76) needs validation:__  ```} else if ( options.content && options.name ) {```

* __[line 82](.//lib/template.js#L82) buffer needed?:__  ```new Buffer( options.content, 'utf8' );```

* __[line 85](.//lib/template.js#L85) callback?__ 
* __[line 89](.//lib/template.js#L89) why return Bldr instance here? chaining?:__  ```return self;```


