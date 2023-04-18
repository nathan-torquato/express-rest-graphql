import { Query, Resolver } from 'type-graphql';
import { BasicService } from '../services/basic.service';

@Resolver()
export class BasicResolver {
  constructor(private readonly basicService: BasicService) {
    this.basicService = new BasicService();
  }

  @Query(() => String)
  hello() {
    return this.basicService.hello();
  }
}
