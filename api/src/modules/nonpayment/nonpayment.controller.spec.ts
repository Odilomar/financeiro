import { Test, TestingModule } from '@nestjs/testing';
import { NonpaymentController } from './nonpayment.controller';

describe('NonpaymentController', () => {
  let controller: NonpaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NonpaymentController],
    }).compile();

    controller = module.get<NonpaymentController>(NonpaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
