# TO-DO

---

## lib / compile.js

* __[line 45](.//lib/compile.js#L45) async with callback vs sync without?__ 

---

## lib / parse.js

* __[line 36](.//lib/parse.js#L36) better regexp:__  ```} else if ( /^(.*): (.*)$/.test(line) ) {```


---

## lib / read.js

* __[line 31](.//lib/read.js#L31) #read() options?__ 
* __[line 37](.//lib/read.js#L37) file order errors in tests:__  ```fs.readdir( path, function (err, dirFiles) {```

* __[line 54](.//lib/read.js#L54) regexp needed:__  ```file: path.replace( self._source + '/', '')```


---

## lib / run.js

* __[line 7](.//lib/run.js#L7) Implement #run()__ 

