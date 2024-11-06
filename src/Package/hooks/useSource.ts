import { type Derivable, type Source, source } from "@rbxts/vide";

export function useSource<T>(derivable: Derivable<T>): Source<T> {
	if (typeIs(derivable, "function")) {
		return derivable;
	}
	return source(derivable);
}
