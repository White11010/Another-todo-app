import {IStorageService} from './storage-service.model';

export const useLocalStorage = <T>(key: string): IStorageService => {
	const _key = key;

	const set = (value: T): void => {
		localStorage.setItem(_key, JSON.stringify(value));
	};

	const get = (): T | null => {
		const value = localStorage.getItem(_key);
		return value === null ? value : JSON.parse(value);
	};
	
	return {
		set,
		get,
	};
};