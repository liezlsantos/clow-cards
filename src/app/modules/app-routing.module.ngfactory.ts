/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app-routing.module';
import * as import2 from '@angular/router/src/router_module';
import * as import3 from '@angular/common/src/location/location';
import * as import4 from '@angular/router/src/url_tree';
import * as import5 from '@angular/router/src/router_outlet_map';
import * as import6 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import7 from '@angular/router/src/router_preloader';
import * as import8 from '@angular/core/src/di/injector';
import * as import9 from '../components/daily-reading.component.ngfactory';
import * as import10 from '../components/clow-card-detail.component.ngfactory';
import * as import11 from '@angular/common/src/location/platform_location';
import * as import12 from '@angular/core/src/linker/compiler';
import * as import13 from '../components/daily-reading.component';
import * as import14 from '../components/clow-card-detail.component';
import * as import15 from '@angular/core/src/application_ref';
import * as import16 from '@angular/router/src/url_handling_strategy';
import * as import17 from '@angular/router/src/route_reuse_strategy';
import * as import18 from '@angular/router/src/router';
import * as import19 from '@angular/common/src/location/location_strategy';
import * as import20 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import21 from '@angular/router/src/router_config_loader';
import * as import22 from '@angular/router/src/router_state';
import * as import23 from '@angular/core/src/application_init';
import * as import24 from '@angular/core/src/application_tokens';
class AppRoutingModuleInjector extends import0.NgModuleInjector<import1.AppRoutingModule> {
  _ROUTER_FORROOT_GUARD_0:any;
  _RouterModule_1:import2.RouterModule;
  _AppRoutingModule_2:import1.AppRoutingModule;
  __APP_BASE_HREF_3:any;
  __ROUTER_CONFIGURATION_4:any;
  __LocationStrategy_5:any;
  __Location_6:import3.Location;
  __UrlSerializer_7:import4.DefaultUrlSerializer;
  __RouterOutletMap_8:import5.RouterOutletMap;
  __NgModuleFactoryLoader_9:import6.SystemJsNgModuleLoader;
  __ROUTES_10:any[];
  __Router_11:any;
  __ActivatedRoute_12:any;
  _NoPreloading_13:import7.NoPreloading;
  _PreloadingStrategy_14:any;
  _RouterPreloader_15:import7.RouterPreloader;
  __PreloadAllModules_16:import7.PreloadAllModules;
  __NgProbeToken_17:any[];
  __RouterInitializer_18:import2.RouterInitializer;
  __APP_INITIALIZER_19:any[];
  __ROUTER_INITIALIZER_20:any;
  __APP_BOOTSTRAP_LISTENER_21:any[];
  constructor(parent:import8.Injector) {
    super(parent,[
      import9.DailyReadingComponentNgFactory,
      import10.ClowCardDetailComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _APP_BASE_HREF_3():any {
    if ((this.__APP_BASE_HREF_3 == null)) { (this.__APP_BASE_HREF_3 = '/'); }
    return this.__APP_BASE_HREF_3;
  }
  get _ROUTER_CONFIGURATION_4():any {
    if ((this.__ROUTER_CONFIGURATION_4 == null)) { (this.__ROUTER_CONFIGURATION_4 = {}); }
    return this.__ROUTER_CONFIGURATION_4;
  }
  get _LocationStrategy_5():any {
    if ((this.__LocationStrategy_5 == null)) { (this.__LocationStrategy_5 = import2.provideLocationStrategy(this.parent.get(import11.PlatformLocation),this._APP_BASE_HREF_3,this._ROUTER_CONFIGURATION_4)); }
    return this.__LocationStrategy_5;
  }
  get _Location_6():import3.Location {
    if ((this.__Location_6 == null)) { (this.__Location_6 = new import3.Location(this._LocationStrategy_5)); }
    return this.__Location_6;
  }
  get _UrlSerializer_7():import4.DefaultUrlSerializer {
    if ((this.__UrlSerializer_7 == null)) { (this.__UrlSerializer_7 = new import4.DefaultUrlSerializer()); }
    return this.__UrlSerializer_7;
  }
  get _RouterOutletMap_8():import5.RouterOutletMap {
    if ((this.__RouterOutletMap_8 == null)) { (this.__RouterOutletMap_8 = new import5.RouterOutletMap()); }
    return this.__RouterOutletMap_8;
  }
  get _NgModuleFactoryLoader_9():import6.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_9 == null)) { (this.__NgModuleFactoryLoader_9 = new import6.SystemJsNgModuleLoader(this.parent.get(import12.Compiler),this.parent.get(import6.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_9;
  }
  get _ROUTES_10():any[] {
      if ((this.__ROUTES_10 == null)) { (this.__ROUTES_10 = [[
        {
          path: '',
          redirectTo: '/daily-reading',
          pathMatch: 'full'
        }
        ,
        {
          path: 'daily-reading',
          component: import13.DailyReadingComponent
        }
        ,
        {
          path: 'clow-card/:id',
          component: import14.ClowCardDetailComponent
        }

      ]
    ]); }
    return this.__ROUTES_10;
  }
  get _Router_11():any {
    if ((this.__Router_11 == null)) { (this.__Router_11 = import2.setupRouter(this.parent.get(import15.ApplicationRef),this._UrlSerializer_7,this._RouterOutletMap_8,this._Location_6,this,this._NgModuleFactoryLoader_9,this.parent.get(import12.Compiler),this._ROUTES_10,this._ROUTER_CONFIGURATION_4,this.parent.get(import16.UrlHandlingStrategy,(null as any)),this.parent.get(import17.RouteReuseStrategy,(null as any)))); }
    return this.__Router_11;
  }
  get _ActivatedRoute_12():any {
    if ((this.__ActivatedRoute_12 == null)) { (this.__ActivatedRoute_12 = import2.rootRoute(this._Router_11)); }
    return this.__ActivatedRoute_12;
  }
  get _PreloadAllModules_16():import7.PreloadAllModules {
    if ((this.__PreloadAllModules_16 == null)) { (this.__PreloadAllModules_16 = new import7.PreloadAllModules()); }
    return this.__PreloadAllModules_16;
  }
  get _NgProbeToken_17():any[] {
    if ((this.__NgProbeToken_17 == null)) { (this.__NgProbeToken_17 = [import2.routerNgProbeToken()]); }
    return this.__NgProbeToken_17;
  }
  get _RouterInitializer_18():import2.RouterInitializer {
    if ((this.__RouterInitializer_18 == null)) { (this.__RouterInitializer_18 = new import2.RouterInitializer(this)); }
    return this.__RouterInitializer_18;
  }
  get _APP_INITIALIZER_19():any[] {
    if ((this.__APP_INITIALIZER_19 == null)) { (this.__APP_INITIALIZER_19 = [import2.getAppInitializer(this._RouterInitializer_18)]); }
    return this.__APP_INITIALIZER_19;
  }
  get _ROUTER_INITIALIZER_20():any {
    if ((this.__ROUTER_INITIALIZER_20 == null)) { (this.__ROUTER_INITIALIZER_20 = import2.getBootstrapListener(this._RouterInitializer_18)); }
    return this.__ROUTER_INITIALIZER_20;
  }
  get _APP_BOOTSTRAP_LISTENER_21():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_21 == null)) { (this.__APP_BOOTSTRAP_LISTENER_21 = [this._ROUTER_INITIALIZER_20]); }
    return this.__APP_BOOTSTRAP_LISTENER_21;
  }
  createInternal():import1.AppRoutingModule {
    this._ROUTER_FORROOT_GUARD_0 = import2.provideForRootGuard(this.parent.get(import18.Router,(null as any)));
    this._RouterModule_1 = new import2.RouterModule(this._ROUTER_FORROOT_GUARD_0);
    this._AppRoutingModule_2 = new import1.AppRoutingModule();
    this._NoPreloading_13 = new import7.NoPreloading();
    this._PreloadingStrategy_14 = this._NoPreloading_13;
    this._RouterPreloader_15 = new import7.RouterPreloader(this._Router_11,this._NgModuleFactoryLoader_9,this.parent.get(import12.Compiler),this,this._PreloadingStrategy_14);
    return this._AppRoutingModule_2;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_0; }
    if ((token === import2.RouterModule)) { return this._RouterModule_1; }
    if ((token === import1.AppRoutingModule)) { return this._AppRoutingModule_2; }
    if ((token === import19.APP_BASE_HREF)) { return this._APP_BASE_HREF_3; }
    if ((token === import2.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_4; }
    if ((token === import19.LocationStrategy)) { return this._LocationStrategy_5; }
    if ((token === import3.Location)) { return this._Location_6; }
    if ((token === import4.UrlSerializer)) { return this._UrlSerializer_7; }
    if ((token === import5.RouterOutletMap)) { return this._RouterOutletMap_8; }
    if ((token === import20.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_9; }
    if ((token === import21.ROUTES)) { return this._ROUTES_10; }
    if ((token === import18.Router)) { return this._Router_11; }
    if ((token === import22.ActivatedRoute)) { return this._ActivatedRoute_12; }
    if ((token === import7.NoPreloading)) { return this._NoPreloading_13; }
    if ((token === import7.PreloadingStrategy)) { return this._PreloadingStrategy_14; }
    if ((token === import7.RouterPreloader)) { return this._RouterPreloader_15; }
    if ((token === import7.PreloadAllModules)) { return this._PreloadAllModules_16; }
    if ((token === import15.NgProbeToken)) { return this._NgProbeToken_17; }
    if ((token === import2.RouterInitializer)) { return this._RouterInitializer_18; }
    if ((token === import23.APP_INITIALIZER)) { return this._APP_INITIALIZER_19; }
    if ((token === import2.ROUTER_INITIALIZER)) { return this._ROUTER_INITIALIZER_20; }
    if ((token === import24.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_21; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._RouterPreloader_15.ngOnDestroy();
  }
}
export const AppRoutingModuleNgFactory:import0.NgModuleFactory<import1.AppRoutingModule> = new import0.NgModuleFactory(AppRoutingModuleInjector,import1.AppRoutingModule);