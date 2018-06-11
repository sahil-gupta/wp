var buildify = require('buildify');

buildify()
  .load('src/impress.js')
  .perform(function(content){
      return "// generated from files in /src\n\n" + content;
  })
  // libraries
  .concat(['src/lib/gc.js'])
  .concat(['src/lib/util.js'])
  // plugins
  .concat(['src/plugins/autoplay/autoplay.js',
           'src/plugins/goto/goto.js',
           'src/plugins/mobile/mobile.js',
           'src/plugins/mouse-timeout/mouse-timeout.js',
           'src/plugins/navigation/navigation.js',
           'src/plugins/navigation-ui/navigation-ui.js',
           'src/plugins/progress/progress.js',
           'src/plugins/rel/rel.js',
           'src/plugins/resize/resize.js',
           'src/plugins/skip/skip.js',
           'src/plugins/stop/stop.js',
           'src/plugins/substep/substep.js',
           'src/plugins/toolbar/toolbar.js'])
  .uglify()
  .save('public/js/impress.min.js');
