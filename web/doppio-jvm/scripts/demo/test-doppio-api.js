// Generated by CoffeeScript 1.8.0
(function() {
  "use strict";
  var root;

  root = this;

  root.init_editor = function() {
    root.editor = new PlayerCodeEditor('source', null, 'classes.doppio.JavaScript.eval("console.log(\\\"HELLO WORLD\\\");");', false, "", "", true);
  };

  root.preload = function() {
    var log, stdout;
    stdout = function(msg) {
      return console.log(msg);
    };
    log = console.log;
    root.doppioAPI = new DoppioApi(stdout, log);
    root.init_editor();
    $('#run_btn').click(function(e) {
      root.doppioAPI.run(root.editor.getStudentCode());
      e.preventDefault();
    });
    $('#abort_btn').click(function(e) {
      root.doppioAPI.abort();
      e.preventDefault();
    });
  };

  $(document).ready(function() {
    return root.preload();
  });


  /* TEST CODE */

}).call(this);
