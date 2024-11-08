import { type Derivable, type Source, source } from "@rbxts/vide";

/**
 * Ensures that a derivable value is a source.\
 * If the value is already a source, it is returned as is, otherwise a new source is created.
 *
 * @param derivable The derivable value or a source.
 * @returns A source.
 *
 */
export function useSource<T>(derivable: Derivable<T>): Source<T> {
	if (typeIs(derivable, "function")) {
		return derivable;
	}
	return source(derivable);
}
