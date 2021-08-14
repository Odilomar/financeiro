import { Test, TestingModule } from '@nestjs/testing';
import { NonpaymentService } from './nonpayment.service';

describe('NonpaymentService', () => {
  let service: NonpaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NonpaymentService],
    }).compile();

    service = module.get<NonpaymentService>(NonpaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
