import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	theme: 'dark',
}
const ThemeBtn = createSlice({
	name: 'ThemeBtn',
	initialState,
	reducers: {
		changeTheme: (state) => {
			state.theme = state.theme === 'dark' ? 'light' : 'dark';
		},
	},
})
export default ThemeBtn.reducer
export const { changeTheme } = ThemeBtn.actions
