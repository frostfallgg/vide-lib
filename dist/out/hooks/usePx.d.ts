/**
 * Rounds and scales a number to the current `px` unit. Includes additional
 * methods for edge cases.
 *
 * @param value The number to scale.
 * @returns A number in scaled `px` units.
 */
export declare const px: ((value: number) => number) & {
    even: (value: number) => number;
    scale: (value: number) => number;
    floor: (value: number) => number;
    ceil: (value: number) => number;
};
/**
 * Scales the current `px` unit based on the current viewport size. Should be
 * called once when mounting the app.
 */
export declare function usePx(): void;
