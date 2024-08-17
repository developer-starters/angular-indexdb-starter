# Angular Indexdb Starter Kit

### Tools Supported

- [Angular](https://angular.dev/)
- [PNPM](https://pnpm.io/)
- [indexDB](https://developer.chrome.com/docs/devtools/storage/indexeddb)
- [Dexie](https://dexie.org/docs/Tutorial/Angular) to interact with IndexDB in Browser.

### Purpose Solved

- Angular App needed for Offline Support
- Angular App that utilizes the indexDB Browser DB API to persist data in browser instead of localStorag/SessionStorage

### Usecases where it can be used
- Requirement is to store data within browser for offline sync
- Progressive Web Apps

### Restrictions
- Works only with Browsers having support for IndexDB API

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Building and running your application

When you're ready, start your application by running:
`docker compose up --build`.

Your application will be available at http://localhost:4200.

### Deploying your application to the cloud

First, build your image, e.g.: `docker build -t myapp .`.
If your cloud uses a different CPU architecture than your development
machine (e.g., you are on a Mac M1 and your cloud provider is amd64),
you'll want to build the image for that platform, e.g.:
`docker build --platform=linux/amd64 -t myapp .`.

Then, push it to your registry, e.g. `docker push myregistry.com/myapp`.

Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/)
docs for more detail on building and pushing.

## Further help
* To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
* [Docker's Node.js guide](https://docs.docker.com/language/nodejs/) 
