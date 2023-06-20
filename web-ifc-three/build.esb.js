const esbuild = require('esbuild')


esbuild
  .build({
    entryPoints: ['./src/IFCLoader.js'],
    outfile: './dist/web-ifc-three.js',
    bundle: true,
    platform: 'node',
    target: ['node16'],
    // external: ['three', 'three/*'],
    format: 'cjs',
  })
  .then((result) => {
    console.log('Build succeeded.')
  })
  .catch(() => process.exit(1))
