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
  /-f/.test(args.join())
    ? args[args.indexOf("-f") + 1]
        .replace(/%Y/g, marsDate.mYear)
        .replace(/%D/g, parseInt(marsDate.mDay))
        .replace(/%H/g, marsDate.mHour)
        .replace(/%M/g, marsDate.mMin)
        .replace(/%S/g, marsDate.mSec)
        .replace(/%s/g, marsDate.mSolName)
        .replace(/%N/g, marsDate.mMonth)
        .replace(/%m/g, marsDate.mMonthName)
    : `${marsDate.mSolName}, ${parseInt(marsDate.mDay)} ${
        marsDate.mMonthName
      } ${marsDate.mYear}, ${marsDate.mHour}:${marsDate.mMin}:${marsDate.mSec}`
);
