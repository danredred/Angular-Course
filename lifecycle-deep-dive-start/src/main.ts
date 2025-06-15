import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HostListener } from '@angular/core';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
