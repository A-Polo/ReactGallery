import { action, observable } from 'mobx';

class UserStore {
  @observable message = '';

  @action('[UserStore] set message')
  setField = (value) => {
    this.message = value;
  }
}

export default UserStore;
