var dest = './public';
var src = './src';

module.exports = {
  javascript: {
    src: src + '/app/**/*.js',
    dest: dest + '/js/',
    entryPoint: src + '/webpack-entry.js',
    packedFile: 'packed.js'
  },
  sass: {
    src: src + '/styles/**/*.{sass,scss}',
    dest: dest + '/styles/',
    settings: {
      indentedSyntax: true,
    }
  },
  views: {
    src: src + "/app/views/**/*.html",
    dest: dest + "/views/",
  },
  html: {
    src: src + "/app/*.html",
    dest: dest,
  },
  jpeg: {
    src: src + "/styles/**/*.jpeg",
    dest: dest,
  },
  png: {
    src: src + "/styles/**/*.png",
    dest: dest,
  },
  server: {
    serverFile: './server.js'
  },
  production: {
    cssSrc: dest + '/styles/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
