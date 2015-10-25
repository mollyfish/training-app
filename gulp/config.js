var dest = './public';
var src = './src';

module.exports = {
  javascript: {
    src: src + '/js/**/*.js',
    dest: dest,
    entryPoint: src + '/index.js',
    packedFile: 'packed.js'
  },
  sass: {
    src: src + '/styles/**/*.{sass,scss}',
    dest: dest + '/styles/',
    settings: {
      indentedSyntax: true,
    }
  },
  fonts: {
    src: src + "/styles/fonts/*",
    dest: dest
  },
  images: {
    src: src + "/imgs/*",
    dest: dest
  },
  html: {
    src: src + "/**/*.html",
    dest: dest
  },
  templates: {
    src: src + "/templates/**/*.html",
    dest: dest + "/templates/",
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
