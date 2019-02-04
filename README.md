
# PWA REACT GENERATE

You can run `npm run create-pwa` and this project will start with [Create React App](https://github.com/facebookincubator/create-react-app). 

## It's includes the packages

 - [Sass](https://sass-lang.com/)
 - [material ui](https://v1-3-0.material-ui.com/) 
 - [redux](https://redux.js.org/)
 - [redux-saga](https://redux-saga.js.org/)
 - [redux-persist](https://github.com/rt2zz/redux-persist)
 - [reselect](https://github.com/reduxjs/reselect)

## App config

Your configuration can be write on `your-app-name/.env` for example:

```sh
    DEV_NODE_ENV=development
    DEV_APP_NAME=
    DEV_API_HOST=
    DEV_VERSION=v1
    DEV_REFRESH_TOKEN=300000
    DEV_ACCESS_KEY_NAME=Access-Key
    DEV_PARAM_TOKEN_NAME=Authorization
    DEV_BEARER=Bearer
    DEV_BASE64_HML_BASIC=teste:teste

    HML_NODE_ENV=development
    HML_APP_NAME=
    HML_API_HOST=
    HML_VERSION=v1
    HML_REFRESH_TOKEN=300000
    HML_ACCESS_KEY_NAME=Access-Key
    HML_PARAM_TOKEN_NAME=Authorization
    HML_BEARER=Bearer
    HML_BASE64_HML_BASIC=teste:teste

    PRD_NODE_ENV=production
    PRD_APP_NAME=
    PRD_HOST_TOKEN=
    PRD_API_HOST=
    PRD_VERSION=v1
    PRD_REFRESH_TOKEN=300000
    PRD_ACCESS_KEY_NAME=Access-Key
    PRD_PARAM_TOKEN_NAME=Authorization
    PRD_BEARER=Bearer
    PRD_BASE64_PRD_BASIC=teste:teste
```
When you to start the app It will be genereted an app.json file in `your-app-name/src/config/app.json` as that variable.

## Folder Structure

After creation, your project should look like this:

```
your-app-name/
    README.md
    config
        jest/
            cssTransform.js
            fileTransform.js
        env.js
        paths.js
        poths.js
        polyfills.js
        webpack.config.dev.js
        webpack.config.prod.js
        webpackDevServer.config.js
    public/
        assets/
            ...
        index.html
        manifest.json
        service-worker.js
    scripts/
        build.js
        configEnvironment.dev.js
        configEnvironment.js
        start.js
        test.js
        version.js
        writeServiceWorker.js
    src/
        assets/
        common/
        config/
        constants/
        containers/
        models/
        sagas/
        services/
        store/
        test/
        utilites/
        App.js
        index.js
        registerServiceWorker.js
        .env
        .gitignore
        server.js
```
