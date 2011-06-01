Building Android CouchDB
========================

These instruction are for building the couchdb android binaries from source, this involved building android, erlang, spidermonkey, couchdb and various libraries from source.

Android requires around 10GB of free space to complete its build.

It is currently aimed to work on Ubuntu 10.4, other platforms should be possible.

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
