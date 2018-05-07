import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { FormsModule } from '@angular/forms';

export * from './schedule.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
