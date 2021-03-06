import alt from '../alt';
import NavbarActions from '../actions/navbar_actions';

class NavbarStore {
	constructor() {
		this.bindActions(NavbarActions);
		this.totalCharacters = 0;
		this.onlineUsers = 0;
		this.searchQuery = '';
		this.ajaxAnimationClass = '';
	}

	onFindCharacterSuccess(payload) {
		payload.history.pushState(null, '/characters', payload.characterId);
	}

	onFindCharacterFail(payload) {
		payload.searchForm.classList.add('shake');
		setTimeout(() => {
			payload.searchForm.classList.remove('shake');
		}, 1000);
	}

	onUpdateOnlineUsers(data) {
		this.onlineUsers = data.onlineUsers;
	}

	onUpdateAjaxAnimation(className) {
		this.ajaxAnimationClass = className; 
	}

	onUpdateSearchQuery(event) {
		this.searchQuery = event.target.value
	}

	onGetCharacterCountSuccess(data) {
		this.totalCharacters = data.count;
	}

	onGetCharacterCountFail(err) {
		toastr.error(err.responseJSON.message);
	}
}

export default alt.createStore(NavbarStore);