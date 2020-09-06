export default {
	[Symbol.iterator]: () => ({
		next: () => ({value: Symbol()})
	})
};
