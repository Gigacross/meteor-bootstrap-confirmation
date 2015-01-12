Package.describe({
	name: 'meteor-bootstrap-confirmation',
  summary: "Bootstrap powered popover confirmation.",
  version: '1.0.0',
  git: "https://github.com/Gigacross/meteor-bootstrap-confirmation.git"
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');
  api.imply('jquery', 'client');

  api.add_files('lib/bootstrap3_confirmation.js', 'client');
});

