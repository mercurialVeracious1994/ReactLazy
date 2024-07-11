import { lazy } from "react";

const lazyWithRetryAndPreloading = (componentImport) => {
    const factory = async () => {
        try {
            return await componentImport();
        } catch (error) {
            console.error(error);
            return window.location.reload();
        }
    };

    const Component = lazy(factory);

    Component.preload = factory;

    return Component;
};
export const LazyRouteForBooks = lazyWithRetryAndPreloading(() => import("../components/Books/Books"));
export const LazyRouteForProducts = lazyWithRetryAndPreloading(() => import("../components/products/Products"));
export const LazyRouteForArticles = lazyWithRetryAndPreloading(() => import("../components/Articles"));