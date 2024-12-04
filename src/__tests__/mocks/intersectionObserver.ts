/*
    Intersection Observer mock from motion/react tests
    https://github.com/framer/motion/blob/main/packages/motion/react/src/utils/__tests__/mock-intersection-observer.ts
*/

export type MockIntersectionObserverEntry = {
    isIntersecting: boolean
    target: Element
}

export type MockIntersectionObserverCallback = (
    entries: MockIntersectionObserverEntry[]
) => void

let activeIntersectionObserver: MockIntersectionObserverCallback | undefined

export const getActiveObserver = () => activeIntersectionObserver

window.IntersectionObserver = class MockIntersectionObserver {
    callback: MockIntersectionObserverCallback

    constructor(callback: MockIntersectionObserverCallback) {
        this.callback = callback
    }

    observe() {
        activeIntersectionObserver = this.callback
    }

    unobserve() {
        activeIntersectionObserver = undefined
    }

    disconnect() {
        activeIntersectionObserver = undefined
    }
} as any; // eslint-disable-line