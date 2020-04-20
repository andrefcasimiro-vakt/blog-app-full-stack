import { Injectable } from "@nestjs/common";
import { UserProviderSeed } from "../user/user.provider.seed";

@Injectable()
export class SeederProvider {
  
  constructor(
    private readonly userProviderSeeder: UserProviderSeed,
  ) {}

  async seed() {
    await this.createUsers()
      .then((completed) => {
        console.log(`Operation completed`)
        
        Promise.resolve(completed)
      })
      .catch((error) => {
        console.error(`Operation failed`)

        Promise.reject(error)
      })
  }

  async createUsers() {
    return await Promise.all(this.userProviderSeeder.create())
      .then(resultOfOperation =>
        console.log(`Created ${resultOfOperation.filter(x => x).length} users.`)
      )
  }
}