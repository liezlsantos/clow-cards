/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import10 from '../../../node_modules/@angular/router/src/directives/router_link_active.ngfactory';
import * as import11 from '@angular/core/src/linker/query_list';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
export declare class Wrapper_AppComponent {
    _eventHandler: Function;
    context: import0.AppComponent;
    _changed: boolean;
    constructor();
    ngOnDetach(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import1.AppView<any>, _eventHandler: any): void;
}
export declare const AppComponentNgFactory: import8.ComponentFactory<import0.AppComponent>;
export declare class View_AppComponent0 extends import1.AppView<import0.AppComponent> {
    _el_0: any;
    _text_1: any;
    _el_2: any;
    _el_3: any;
    _RouterLinkWithHref_3_3: import9.Wrapper_RouterLinkWithHref;
    _RouterLinkActive_3_4: import10.Wrapper_RouterLinkActive;
    _query_RouterLink_3_0: import11.QueryList<any>;
    _query_RouterLinkWithHref_3_1: import11.QueryList<any>;
    _text_4: any;
    _text_5: any;
    _text_6: any;
    _el_7: any;
    _vc_7: import12.ViewContainer;
    _RouterOutlet_7_5: import13.Wrapper_RouterOutlet;
    _text_8: any;
    _expr_15: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import1.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import8.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    handleEvent_3(eventName: string, $event: any): boolean;
}
