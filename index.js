#!/usr/bin/env node

const ds = require("darian-system");

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(new ds.Darian_Date().getDate());
  process.exit(0);
}

if (!/\d{4}-\d{2}-\d{2}/.test(args[0])) {
  printMarsDate(new ds.Darian_Date());
} else {
  const dateArr = args[0].split("-");
  printMarsDate(new ds.Darian_Date(dateArr[0], dateArr[1], dateArr[2]));
}

function printMarsDate(marsDate) {
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
}
