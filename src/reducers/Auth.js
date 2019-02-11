import faker from 'faker'

const defaultUserInfo = {
  name: 'Ajay',
  image: faker.image.avatar(),
  editpermissions:true
};

export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  return state;
}