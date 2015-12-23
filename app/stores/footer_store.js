import alt from '../alt';
import FooterActions from '../actions/footer_actions';

class FooterStore {
	constructor() {
		this.bindActions(FooterActions);
		this.characters = [];
	}

	onGetTopCharactersSuccess(data) {
		this.characters = data.slice(0, 5);
	}

	onGetTopCharactersFail(err) {
		toastr.error(err.responseJSON && err.responseJSON.message || err.responseText || err.statusText);
	}
}

export default alt.createStore(FooterStore);