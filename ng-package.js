const ngPackage = require('ng-packagr');

ngPackage
  .ngPackagr()
  .forProject('./library/ng-package.json')
  .withTsConfig('./library/tsconfig.lib.json')
  .build()
  .catch(error => {
    console.error(error);
    process.exit(1);
  });