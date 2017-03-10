/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './daily-reading.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import19 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
export declare class Wrapper_DailyReadingComponent {
    _eventHandler: Function;
    context: import0.DailyReadingComponent;
    _changed: boolean;
    constructor(p0: any);
    ngOnDetach(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import1.AppView<any>, _eventHandler: any): void;
}
export declare const DailyReadingComponentNgFactory: import7.ComponentFactory<import0.DailyReadingComponent>;
export declare class View_DailyReadingComponent0 extends import1.AppView<import0.DailyReadingComponent> {
    _text_0: any;
    _el_1: any;
    _text_2: any;
    _anchor_3: any;
    _vc_3: import12.ViewContainer;
    _TemplateRef_3_5: any;
    _NgFor_3_6: import19.Wrapper_NgFor;
    _text_4: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import1.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import7.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    createEmbeddedViewInternal(nodeIndex: number): import1.AppView<any>;
}