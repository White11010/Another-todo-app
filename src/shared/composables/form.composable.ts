import React, {ChangeEvent, useState} from 'react';

export const useForm = <T>(
	initialState: T,
	submitHandler: (domainObject: T) => void,
	clearOnSubmit= true
) => {
	const _initialState: typeof initialState = initialState;

	const [domainObject, setDomainObject] = useState<typeof initialState>(_initialState);

	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const key = e.target.name;
		const value = e.target.value;

		setDomainObject(prevState => {
			return {...prevState, [key]: value};
		});
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		submitHandler(domainObject);
		if (clearOnSubmit) {
			setDomainObject(initialState);
		}
	};

	return {
		domainObject,
		setDomainObject,
		onChange,
		onSubmit,
	};
};