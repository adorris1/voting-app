import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/footer_store';
import FooterActions from '../actions/footer_actions';

class Footer extends React.Component { 
	constructor(props) {
		super(props);
		this.state = FooterStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		FooterStore.listen(this.onChange);
		FooterActions.getTopCharacters();
	}

	componentWillUnmount() {
		FooterStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		let leaderBoardCharacters = this.state.characters.map(character => {
			return (
				<li key={character.characterId}>
					<Link to={'/characters/' + character.characterId}>
						<img className='thumb-md' src={'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg'} />
					</Link>
				</li>
			)
		});

		return (
			<footer>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-5'>
							<h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
						</div>
						<div className='col-sm-7 hidden-xs'>
							<h3 className='lead'><strong>Leaderboard</strong>Top 5 Characters</h3>
							<ul className='list-inline'>
								{leaderBoardCharacters}
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;