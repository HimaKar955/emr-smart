/*
* Mock async observables that return asynchronously.
* The observable either emits once and completes or errors.
*
* Must call tick() when test with fakeAsync().
* THE FOLLOWING DON'T WORK
* Using `of().delay() triggers TestBed errors;

see https://github.com/angular/angular/issues/10127
Using asap scheduler - as in of (value, asap) - doesn't work either.
*/

//istanbul ignore file
import { defer } from 'rxjs';

/**
* Create async observable that emits-once and completes
* after a JS engine turn
*/
export function asyncData<T>(data: T) {
return defer (() => Promise.resolve(data));
}
/**
* Create async observable error that errors
* after a JS engine turn
*/

export function asyncError<T>(errorObject: any) { 
    return defer (() => Promise. reject (errorObject));
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that 
can be found in the LICENSE file at https://angular.io/license
*/