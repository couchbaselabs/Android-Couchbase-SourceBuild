Building Couchbase Mobile for Android
========================

These instructions are for building Couchbase Mobile for Android binaries from source.  This involves building openssl, spidermonkey, erlang, CouchDB, GeoCouch, and the Couchbase Mobile Android Service from source.

It is currently aimed to work on Ubuntu 10.10, 11.04 and Debian Squeeze x86 32bit, other platforms should be possible.

Dependencies
============

- Android SDK - http://developer.android.com/sdk/index.html
- Android NDK - http://developer.android.com/sdk/ndk/index.html
- autoconf 2.13 (required by spidermonkey)
- autoconf 2.59 (required by erlang)


You will also need to create a staging directory for the installation process:

    # Mimic the data layout on the device
    sudo mkdir /data
    sudo chown dale:dale /data

Set environment variables pointing to location of SDK and NDK (or edit scripts/env)

    export ANDROID_NDK_ROOT=...
    export ANDROID_SDK_ROOT=...

Usage
=====
    $ ./build.openssl
    $ ./build.resetmz
    $ ./build.nspr
    $ ./build.js
    $ ./build.erlang
    $ ./build.couch
    $ ./build.geocouch
    $ ./build.couchservice 2.0.0-dp r14b03
    $ ./build.final 2.0.0-dp r14b03

Credits
=======
Original port by Aaron Miller (https://github.com/apage43).

Updated port, patches and build scripts by Matt Adams (http://radicaldynamic.com) based on Aaron's work and using patches to CouchDB from Chris C. Coulson (https://launchpad.net/~chrisccoulson) for compatibility with newer versions of libjs.

Further work on the build system by Dale Harvey (http://arandomurl.com) and Matt Adams.
