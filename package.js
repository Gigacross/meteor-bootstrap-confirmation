Package.describe({
	name: 'hinas:meteor-bootstrap-confirmation',
  summary: "Bootstrap powered popover confirmation.",
  version: '0.9.0',
  git: "https://github.com/Gigacross/meteor-bootstrap-confirmation.git"
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');
  // api.imply('jquery', 'client');

  //version constraint
  api.versionsFrom("0.9.4");

  api.add_files('lib/bootstrap3_confirmation.js', 'client');
});

