#!/bin/bash -x
#

source scripts/env

# Make sure we have a valid environment before we continue
./scripts/checkenv
if [[ $? -ne 0 ]]; then
    exit 1
fi

ANDROID_NDK=$COUCH_ANDROID_HOME/build/deps/ndk/android-ndk-r4c

cd $COUCH_ANDROID_HOME/build/deps/mozilla-current/mozilla-central/js/src
autoconf2.13

./configure \
--target=arm-android-eabi \
--with-android-ndk=$ANDROID_NDK \
--with-android-sdk=$ANDROID_NDK/build/platforms/android-8 \
--with-android-version=8 \
--disable-tests \
--disable-shared \
--enable-static \
--enable-strip \
--enable-endian=little \
--with-arm-kuser \
--enable-threadsafe \
--with-nspr-cflags=-I$(pwd)/../../nsprpub/dist/include/nspr \
--with-nspr-libs="-L$(pwd)/../../nsprpub/dist/lib -lnspr4 -lplc4 -lplds4"

make -s

##
# Remove the shared lib to force Couch to link statically
# (this isn't working due to Android toolchain difficulties)
#
#rm libmozjs.so
#mv libjs_static.a libmozjs.a

exit $?
