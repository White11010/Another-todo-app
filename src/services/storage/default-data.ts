import {useLocalStorage} from './local-storage';
import {IDefaultDataService} from './storage-service.model';

export const useDefaultData = <T>(key: string, defaultData: T[]): IDefaultDataService  => {
	const {get: getFlag, set: setFlag} = useLocalStorage<boolean>('isFirstVisit');
	const {set} = useLocalStorage<T>(key);

	const setDefault = () => {
		const shouldSetDefault = getFlag();
		if (shouldSetDefault === null) {
			set(defaultData);
			setFlag(true);
		}
	};

	return {
		setDefault,
	};
};