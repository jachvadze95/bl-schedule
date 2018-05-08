import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'bl-dropdown-ng2';

export * from './schedule.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule
  ],
  declarations: [
    ScheduleComponent
  ],
  exports: [
    ScheduleComponent
  ]
})
export class ScheduleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ScheduleModule,
      providers: []
    };
  }
}
