import React, {useEffect} from 'react'
import Routes from './routes'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {Paper} from '@material-ui/core'
import {green} from '@material-ui/core/colors'

function App() {
	const theme = createMuiTheme({
		direction: 'rtl',
		palette: {
			type: 'dark',
			primary: {
				main: '#ffff',
			},
			secondary: {
				main: green['A700'],
			},
			warning: {
				main: '#9c27b0',
			},
			background: {
				default: '#040d21',
				paper: '#18243d',
			},
		},
		typography: {
			// fontFamily: ['Nunito Sans'].join(),
			button: {
				textTransform: 'none',
				fontWeight: 'normal',
				fontSize: '18px',
				color: '#8193b2',
			},
			h1: {
				fontSize: '32px',
				fontWeight: 'bold',
				background: 'linear-gradient(70deg,#a2facf,#64acff)',
				WebkitBackgroundClip: 'text',
				color: 'transparent',
				backgroundClip: 'text',
			},
			h2: {
				fontSize: '24px',
				fontWeight: 'bold',
			},
			h3: {
				fontSize: '19px',
				fontWeight: 'bold',
			},
			h4: {
				fontSize: '16px',
				fontWeight: 'bold',
			},
			h5: {
				fontSize: '13px',
				fontWeight: 'bold',
			},
			h6: {
				fontSize: '11px',
				fontWeight: 'bold',
			},
			body1: {
				fontSize: '24px',
				fontWeight: 600,
			},
			body2: {
				fontSize: '18px',
				fontWeight: 400,
				color: 'white',
			},
			caption: {
				fontSize: '24px',
				fontWeight: 'bold',
				letterSpacing: '0.00938em',
				color: '#8193b2',
			},
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<Paper elevation={0}>
				<Routes />
			</Paper>
		</ThemeProvider>
	)
}

export default App