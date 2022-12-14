/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

extern crate data_encoding;
extern crate nsstring;

use data_encoding::BASE32;
use nsstring::{nsACString, nsCString};

#[no_mangle]
pub extern "C" fn base32encode(unencoded: &nsACString, encoded: &mut nsCString) {
    encoded.assign(&BASE32.encode(&unencoded[..]));
}
