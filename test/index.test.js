const execa = require("execa").shellSync;
const ds = require("darian-system");

test("no args", () => {
  const { stdout } = execa("./index.js");
  const mDate = new ds.Darian_Date();
  expect(stdout).toBe(mDate.getDate());
});

test("wrong date format", () => {
  const { stdout } = execa("./index.js 2019-01-0");
  const mDate = new ds.Darian_Date();
  expect(stdout).toBe(mDate.getDate());
})

test("with specific date", () => {
  const { stdout } = execa("./index.js 2019-01-02");
  expect(stdout).toBe("Sol Saturni, 7 Tula 217, 10:08:00");
});

test("with specific date and format", () => {
  const { stdout } = execa('./index.js 2019-01-02 -f "Today is %D. %m %Y"');
  expect(stdout).toBe("Today is 7. Tula 217");
});
