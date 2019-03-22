import UserStore from './UserStore';

class RootStore {
  constructor(context) {
    this.userStore = new UserStore(context);
  }
}

export default RootStore;
