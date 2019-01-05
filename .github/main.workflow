workflow "Publish on npm" {
  on = "push"
  resolves = ["Publish"]
}

action "Build" {
  uses = "actions/npm@master"
  args = "install"
}

action "Test" {
  needs = "Build"
  uses = "actions/npm@master"
  args = "test"
}

action "Master" {
  needs = "Test"
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Publish" {
  needs = "Master"
  uses = "actions/npm@master"
  #args = "publish --access public"
  runs = "git diff HEAD^..HEAD | grep -E "(-|\+).*version" && npm publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
