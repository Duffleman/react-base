import React from 'react';
import ReactDOM from 'react-dom';

require('./scss/app.scss'); // global styles

const style = {
	header: {
		color: '#0f0f0f',
	},
};

class Root extends React.Component {
	render() {
		return (
			<h1 style={style.header}>{'Hello World'}</h1>
		);
	}
}

ReactDOM.render(
	<Root />,
	document.getElementById('container')
);
