export function bootstrap(module) {
    if (!module.start) throw new Error(`no start method mentioned in current Module: ${module}`); // just a helper for module
    module.start();
}