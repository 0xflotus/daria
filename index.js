#!/usr/bin/env node

const ds = require("darian-system");

const args = process.argv.slice(2);

try {
  var marsDate = /\d{4}-\d{2}-\d{2}/.test(args[0])
    ? new ds.Darian_Date(...args[0].split("-"))
    : new ds.Darian_Date();
} catch (err) {
  console.warn("Error 101: Invalid date argument");
  process.exit(-1);
}

if (args.length === 0) {
  console.log(marsDate.getDate());
  process.exit(0);
}

console.log(
  args.indexOf("-f") !== -1
    ? args[args.indexOf("-f") + 1]
        .replace("%Y", marsDate.mYear)
        .replace("%D", marsDate.mDay)
        .replace("%H", marsDate.mHour)
        .replace("%M", marsDate.mMin)
        .replace("%S", marsDate.mSec)
        .replace("%s", marsDate.mSolName)
        .replace("%N", marsDate.mMonth)
        .replace("%m", marsDate.mMonthName)
    : `${marsDate.mSolName}, ${marsDate.mDay} ${marsDate.mMonthName} ${
        marsDate.mYear
      }, ${marsDate.mHour}:${marsDate.mMin}:${marsDate.mSec}`
);
