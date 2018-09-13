import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { APPModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);