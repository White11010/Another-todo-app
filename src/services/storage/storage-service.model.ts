export interface IStorageService<T> {
	set: (payload: T | T[]) => T | T[];
	add: (payload: T) => T;
	get: () => T[] | null;
	update: (payload: T) => T;
}

export interface IDefaultDataService {
	setDefault: () => void;
}