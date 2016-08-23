import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {AppModule} from './app/app.module';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule );