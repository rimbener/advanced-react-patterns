import { expect, testStep } from '@kentcdodds/workshop-app/test'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toggle } from './toggle'

await testStep('can render Toggle with no props', () => {
	render(<Toggle />)
})

await testStep('toggle still operates like a toggle', async () => {
	const toggle = screen.getByRole('switch')
	expect(toggle).to.have.attr('aria-checked', 'false')
	await userEvent.click(toggle)
	expect(toggle).to.have.attr('aria-checked', 'true')
})
