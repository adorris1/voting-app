import alt from '../alt';

class FooterActions {
	constructor() {
		this.generateActions(
			'getTopCharactersSuccess',
			'getTopCharactersFail'
		);
	}

	getTopCharacters() {
		$.ajax({ url: 'api/characters/top'})
			.done((data) => {
				this.actions.getTopCharactersSuccess(data)
			})
			.fail((err) => {
				this.actions.getTopCharactersFail(err)
			});
	}
}

export default alt.createActions(FooterActions);