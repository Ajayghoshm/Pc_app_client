import faker from 'faker'

const defaultUserInfo = {
  name: 'Ajay',
  image: faker.image.avatar()
};

export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  return state;
}