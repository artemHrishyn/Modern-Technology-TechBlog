import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { BlogModule } from './blog/blog.module';
import { AboutModule } from './about/about.module';
import { ContactsModule } from './contacts/contacts.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainModule,
    BlogModule,
    AboutModule,
    ContactsModule
  ]
})
export class PagesModule { }
