# TO-DO

---

## lib / build.js

* __[line 43](.//lib/build.js#L43) what else?:__  ```|| '{{ content }}';```

* __[line 48](.//lib/build.js#L48) like before.:__  ```|| '';```

* __[line 57](.//lib/build.js#L57) is `generated` useful other than tests?:__  ``````


---

## lib / compile.js

* __[line 32](.//lib/compile.js#L32) global replace?:__  ```new RegExp( "\{\{ " + property + " \}\}" )```

* __[line 38](.//lib/compile.js#L38) what about locals in layout?:__  ```compiled = layout.replace( /\{\{ content \}\}/, view );```


---

## lib / parse.js

* __[line 34](.//lib/parse.js#L34) better regexp:__  ```} else if ( /^(.*): (.*)$/.test(line) ) {```


---

## lib / read.js

* __[line 27](.//lib/read.js#L27) "src" vs "source" needs to be determined globally:__  ```self._source = self._source || path;```

* __[line 48](.//lib/read.js#L48) file order errors in tests:__  ```fs.readdir( path, function (err, dirFiles) {```

* __[line 65](.//lib/read.js#L65) regexp needed:__  ```path: path.replace( self._source + '/', '')```


---

## lib / run.js

* __[line 7](.//lib/run.js#L7) Implement #run()__ 

---

## lib / template.js

* __[line 35](.//lib/template.js#L35) sync actions may be harmful later:__  ```template =```

* __[line 77](.//lib/template.js#L77) why return Bldr instance here? chaining?:__  ```return self;```


