/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Bug 1781025 - ESLint's use of multi-ini doesn't fully cope with
// mozilla-central's use of .ini files
// eslint-disable-next-line no-unused-vars
function run_test() {
  /* import-globals-from prefs_test_common.js */
  load("prefs_test_common.js");

  check_common_xpcshell_with_prefs();

  Assert.ok(
    !has_pref_from_manifest_file_section(),
    "Should not have pref that was only assigned to a different test"
  );
}
