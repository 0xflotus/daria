workflow "Publish on npm" {
  on = "push"
  resolves = ["Publish"]
}

action "Publish" {
  uses = "0xflotus/daria@master"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
