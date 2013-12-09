Demo-DurandalObservablePlugin
=============================

Demonstrating the behaviors of the Durandal Observable Plugin

##Rule Number One

>Always go through the module object when using observable properties!

> 1. This forces the values go throught the getters and setters
> 2. Returning object literals from the module breaks observable properties.  This means the revealing module pattern does not work well with the observable plugin.
> 3. When composing your viewModel from other observable modules return the observable module being compose and not the properties on that module.  If you only return the properties on the observable module new observables are created on your viewModel with the values of the property you wanted to compose not the observables themselves.

