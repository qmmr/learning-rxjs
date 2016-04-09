console.log('Using Chrome Dev Tools gives you some ES2015 features, nice!')

// var foo = Rx.Observable.create((observer) => {
// 	console.log('hello')
// 	try {
// 		observer.next(42)
// 		observer.next(33)
// 		observer.next(66)
// 		setTimeout(function() {
// 			observer.next(99)
// 			observer.complete() // no arguments
// 		}, 1000)
// 	} catch (err) {
// 		observer.error(err)
// 	}
// })

// foo.subscribe(
// 	function valueHandler(x) {
// 		console.log(x)
// 	},
// 	function errorHandler(err) {
// 		console.error('Oops, something went wrong: ' + err)
// 	},
// 	function completionHandler() {
// 		console.log('done for good!')
// 	}
// )

// generator
function* generator () {
	console.log('generator')
	yield 42
	yield 33
	yield 66
}
// var iter = bar()
// console.log(iter.next().value)
// console.log(iter.next().value)
// console.log(iter.next().value)

// Observable.of

// var of = Rx.Observable.of(42, 33, 66)
// of.subscribe(
// 	(val) => {
// 		console.log('Observable.of: ' + val)
// 	},
// 	(err) => {
// 		console.error('error: ' + err)
// 	},
// 	() => {
// 		console.log('done!')
// 	}
// )

// Observable.fromArray

// var arr = [42, 33, 66]
// var from = Rx.Observable.fromArray(arr)
// from.subscribe(
// 	(val) => {
// 		console.log('Observable.fromArray: ' + val)
// 	},
// 	(err) => {
// 		console.error('error: ' + err)
// 	},
// 	() => {
// 		console.log('done!')
// 	}
// )

// Observable.fromPromise

// var promise = fetch('https://null.jsbin.com')
// var fromPromise = Rx.Observable.fromPromise(promise)
// fromPromise.subscribe(
// 	(val) => {
// 		console.log('Observable.fromPromise: ' + val.status)
// 	},
// 	(err) => {
// 		console.error('error: ' + err)
// 	},
// 	() => {
// 		console.log('done!')
// 	}
// )

// Observable.from - auto-detects the type and converts it to observer
// argument can be an array, a promise or an iterator

// var from = Rx.Observable.from(generator())
// from.subscribe(
// 	(val) => {
// 		console.log('Observable.from: ' + val)
// 	},
// 	(err) => {
// 		console.error('error: ' + err)
// 	},
// 	() => {
// 		console.log('done!')
// 	}
// )

// DOM Events
// var addEventHandler = (handler) => document.addEventListener('click', handler)
// var removeEventHandler = (handler) => document.removeEventListener('click', handler)
// var foo = Rx.Observable.fromEventPattern(addEventHandler, removeEventHandler)

// Shorthand version
// var foo = Rx.Observable.fromEvent(document, 'click')

// foo.subscribe(
// 	(val) => console.log('clientX: ', val.clientX, 'clientY', val.clientY),
// 	(err) => console.error('error: ', err),
// 	() => console.log('done!')
// )

// Boring but very useful operators
// empty, never, throw
// var foo = Rx.Observable.empty(); // Does not deliver any values, simply calls done
// var foo = Rx.Observable.never(); // Does not deliver any values, does not call done
// var foo = Rx.Observable.throw(new Error('Boom!')) // Only does deliver error

// foo.subscribe(
// 	(val) => console.log(val),
// 	(err) => console.error(err),
// 	() => console.log('done!')
// )

// Time related Observables

// var interval = Rx.Observable.interval(1000);
// interval.subscribe(
// 	(val) => console.log('tick: ', val),
// 	(err) => console.error('error: ', err),
// 	() => console.log('done!')
// )

// var date = new Date(new Date().getTime() + 3000)
// console.log('start, waiting 3000ms then start tocking')
// var timer = Rx.Observable.timer(date, 1000);
// timer.subscribe(
// 	(val) => console.log('tocking: ', val),
// 	(err) => console.error('error: ', err),
// 	() => console.log('done!')
// )
