import { Service } from 'egg';

class HomeService extends Service {
  public async list(_page?: number) {
    return [];
  }
}

export default HomeService