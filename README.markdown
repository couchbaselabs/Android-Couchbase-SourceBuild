Building Android CouchDB
========================

These instruction are for building the couchdb android binaries from source, this involved building android, erlang, spidermonkey, couchdb and various libraries from source.

Android requires around 15GB of free space to complete its build.

Dependencies
============
Compiling android requires the JDK and various system dependancies, you can find these listed @ http://source.android.com/source/initializing.html

## Ubuntu 10.10 32bit
    # Install Java 1.5
    sudo add-apt-repository "deb http://archive.ubuntu.com/ubuntu dapper-updates main multiverse"
    sudo add-apt-repository "deb http://archive.ubuntu.com/ubuntu dapper-updates main multiverse"
    sudo apt-get update
    sudo apt-get install sun-java5-jdk
    sudo update-java-alternatives -s java-1.5.0-sun

    # Install dependancies
    sudo apt-get install libncurses5-dev git-core gnupg flex bison gperf build-essential zip curl zlib1g-dev libc6-dev autoconf2.13 autoconf2.59 libtool

    # Mimic the sdcard layout on the device
    sudo mkdir /sdcard
    sudo chown dale:dale /sdcard

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
