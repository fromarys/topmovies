import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { KeyInterceptor } from './interceptors/key.interceptor';

@NgModule({
  declarations: [HeaderComponent, MainComponent, SnackbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
  ],
  exports: [HeaderComponent, MainComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KeyInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
