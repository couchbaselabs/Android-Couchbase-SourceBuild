Building Android CouchDB
========================

These instruction are for building the couchdb android binaries from source, this involved building android, erlang, spidermonkey, couchdb and various libraries from source.

Android requires around 10GB of free space to complete its build.

It is currently aimed to work on Ubuntu 10.4 and Debian Squeeze x86 32bit, other platforms should be possible.

Dependencies
============
Compiling android requires the JDK and various system dependancies, you can find these listed @ http://source.android.com/source/initializing.html

Usage
=====
    $ git clone git@github.com:daleharvey/build-android-couch.git
    $ cd build-android-couch
    $ ./build.android
    $ ./build.resetmz
    $ ./build.nspr
    $ ./build.js
    $ ./build.otp
    $ ./build.couch
    $ ./build.final

Credits
=======
Original port by Aaron Miller (https://github.com/apage43).

Updated port, patches and build scripts by Matt Adams (http://radicaldynamic.com) based on Aaron's work and using patches to CouchDB from Chris C. Coulson (https://launchpad.net/~chrisccoulson) for compatibility with newer versions of libjs.

Further work on the build system by Dale Harvey (http://arandomurl.com) and Matt Adams.
