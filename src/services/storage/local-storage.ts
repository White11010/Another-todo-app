import {IStorageService} from './storage-service.model';

export const useLocalStorage = <T>(key: string): IStorageService<T> => {
	const _key = key;

	const _set = (value: T | Array<T>): void => {
		localStorage.setItem(_key, JSON.stringify(value));
	};

	const _get = (): Array<T> | null => {
		const value = localStorage.getItem(_key);
		return value === null ? value : JSON.parse(value);
	};

	const set = (payload: T | T[]): T | T[] => {
		_set(payload);
		return payload;
	};

	const add = (payload: T): T => {
		const oldValue = _get();
		const newEntity = {...payload, id: Date.now()};
		if (oldValue === null) {
			_set([newEntity]);
		} else {
			_set([...oldValue, newEntity]);
		}
		return newEntity;
	};

	const get = (): T[] | null => {
		const entities = _get();
		if (entities === null) return null;
		return entities;
	};

	const update = (payload: T): T => {
		const entities = _get();
		if (entities === null) {
			// TODO Обработка ошибок
			console.error(`Collection ${_key} is empty, updating is impossible`);
			return payload;
		}
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const index = entities.findIndex(entity => entity.id === payload.id);
		entities[index] = payload;
		_set(entities);
		return payload;
	};
	
	return {
		set,
		add,
		get,
		update,
	};
};