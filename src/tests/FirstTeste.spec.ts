import { User } from '../models/User'

test('it should be ok', () => {
  const user = new User()
  user.name = 'Lucas'

  expect(user.name).toEqual('Lucas')
})
