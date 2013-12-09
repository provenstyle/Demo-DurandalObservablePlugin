Demo-DurandalObservablePlugin
=============================

Demonstrating the behaviors of the Durandal Observable Plugin

##Rule Number One

>Always go through the module object when using observable properties!

> 1. This forces the values go throught the getters and setters
> 2. Returning object literals from modules creates new observable properties with getters and setters and the original value of the property inside an observable.  Functions inside the module continue to modify the internal values of the observables, but this does not go through the observable functions and breaks observablility.  This means the revealing module pattern does not work well with the observable plugin.
> 3. When composing your viewModel from other observable modules return the observable module being composed and not the properties on that module.  If you only return the properties on the observable module new observables are created on your viewModel with the values of the property you wanted to compose not the observables themselves.

