import { UseGuards } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Request } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AuthService } from './shared/auth.service';
import { LocalAuthGuard } from './shared/local-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
