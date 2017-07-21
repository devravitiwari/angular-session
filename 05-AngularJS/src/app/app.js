(function() { 'use strict'; 
    
    var AppComponent = ng.core.Component({
        selector: 'sample-app',
        template: `<h1> Hello World </h1>`
    })
    .Class({
        constructor: function() { }
    });
    
    
    var AppModule = ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    .Class({
        constructor: function () { }
    });
    
    ng.platformBrowserDynamic
        .platformBrowserDynamic()
        .bootstrapModule(AppModule);

    
})();