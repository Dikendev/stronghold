import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { UserDto } from '../dto/user-dto';
describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const user: UserDto = {
      name: 'John Doe',
      email: 'john@doe',
      password: 'password',
      phone: '1234567890',
      photo: 'http://photo',
      role: 'admin',
    };

    const userResponse = await service.create(user);
    expect(userResponse).toBeDefined();
    expect(userResponse.id).toBe('1');
    expect(service.inMemoryUsers.length).toBe(1);
  });
});
