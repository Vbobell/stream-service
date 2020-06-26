import { Module } from '@nestjs/common';
import { KeyService } from './key.service';
import { KeyClient } from './client/key.client';

@Module({ providers: [KeyClient, KeyService], exports: [KeyService] })
export class KeyModule {}
