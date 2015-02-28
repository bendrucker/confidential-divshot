'use strict';

var test       = require('tape');
var browserify = require('browserify');
var vm         = require('vm');

test('parse divshot env', function (t) {
  browserify()
    .require(__dirname + '/../', {
      expose: 'confidential-divshot'
    })
    .add(__dirname + '/fixture')
    .bundle(function (err, src) {
      t.error(err);
      var context = {
        window: {
          __env: {
            KEY: 'VAL'
          }
        }
      };
      vm.runInNewContext(src, context);
      t.deepEqual(context.window.parsed, {
        foo: {
          bar: 'VAL'
        }
      });
      t.end();
    });
});
