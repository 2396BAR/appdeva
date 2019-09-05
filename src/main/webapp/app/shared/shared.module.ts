import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppdevaSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [AppdevaSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [AppdevaSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppdevaSharedModule {
  static forRoot() {
    return {
      ngModule: AppdevaSharedModule
    };
  }
}
