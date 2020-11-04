#!/usr/bin/env node

const ds = require("darian-system");
const yargs = require("yargs");

const args = yargs.argv._

try {
  var marsDate = /\d{4}-\d{2}-\d{2}/.test(args[0])
    ? new ds.Darian_Date(...args[0].split("-"))
    : new ds.Darian_Date();
} catch (err) {
  console.warn("Error 101: Invalid date argument");
  process.exit(-1);
}

console.log(
  yargs.argv.f
    ? [
      [/%D/g, parseInt(marsDate.mDay)],
      [/%H/g, marsDate.mHour],
      [/%M/g, marsDate.mMin],
      [/%N/g, marsDate.mMonth],
      [/%S/g, marsDate.mSec],
      [/%Y/g, marsDate.mYear],
      [/%m/g, marsDate.mMonthName],
      [/%s/g, marsDate.mSolName]
    ].reduce((a, b) => a.replace(b[0], b[1]), yargs.argv.f)
    : `${marsDate.mSolName}, ${parseInt(marsDate.mDay)} ${marsDate.mMonthName} ${marsDate.mYear}, ${marsDate.mHour}:${marsDate.mMin}:${marsDate.mSec}`
);
