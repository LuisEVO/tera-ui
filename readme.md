# Tera UI library

## To install

### On Angular App

```
npm i @lvilcarromeroo/test-ui-angular
```

```
import { TeraUIModule } from '@lvilcarromeroo/tera-ui-angular';

@NgModule({
  imports: [
    TeraUIModule
  ],
})
export class AppModule { }
```

```
<my-component [first]="'Luis'" [middle]="'Ernesto'" [last]="'Vilcarromero'"></my-component>
```

## To build and deploy

### Core

```
npm run build
npm version [major|minor|patch]
npm publish --access public
```

### Angular

```
npm i --save @lvilcarromeroo/test-ui-core@latest
npm run build
npm version [major|minor|patch]
npm publish --access public
```