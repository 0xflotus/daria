const execa = require("execa");
const ds = require("darian-system");

test("test with no args", async () => {
  const { stdout } = await execa('node', ['index.js']);
  const mDate = new ds.Darian_Date();
  expect(stdout).toBe(mDate.getDate());
});

test("test with wrong date format", async () => {
  const { stdout } = await execa('node', ['index.js', '2019-01-0']);
  const mDate = new ds.Darian_Date();
  expect(stdout.replace(/(\d)/, '0$1')).toBe(mDate.getDate());
})

test("test with specific date", async () => {
  const { stdout } = await execa('node', ['index.js', '2019-01-02']);
  expect(stdout).toBe("Sol Saturni, 7 Tula 217, 10:08:00");
});

test("test with specific date and format", async () => {
  const { stdout } = await execa('node', ['index.js', '2019-01-02', '-f', 'Today is %D. %m %Y']);
  expect(stdout).toBe("Today is 7. Tula 217");
});
