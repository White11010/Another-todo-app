import {IStorageService} from './storage-service.model';

export const useLocalStorage = (key: string): IStorageService => {
	const _key = key;

	const set = (value: any): void => {
		localStorage.setItem(_key, JSON.stringify(value));
	};

	const get = (): any => {
		const value = localStorage.getItem(_key);
		return value === null ? value : JSON.parse(value);
	};
	
	return {
		set,
		get,
	};
};