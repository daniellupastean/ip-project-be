import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './orm.config';
import { AppController } from './app.controller';
import { GalleryController } from './controllers/gallery.controller';
import { AppService } from './app.service';
import { GalleryService } from './services/gallery.service';
import { GalleryImage } from './entities/gallery-image.entity';
import { TextSection } from './entities/text-section.entity';
import { StaffMember } from './entities/staff-member.entity';
import { Sponsor } from './entities/sponsor.entity';
import { Championship } from './entities/championship.entity';
import { User } from './entities/user.entity';
import { Article } from './entities/article.entity';
import { Match } from './entities/match.entity';
import { PlayerPosition } from './entities/player-position.entity';
import { Player } from './entities/player.entity';
import { Team } from './entities/team.entity';
import { Trophy } from './entities/trophy.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Article]),
    TypeOrmModule.forFeature([Championship]),
    TypeOrmModule.forFeature([GalleryImage]),
    TypeOrmModule.forFeature([Match]),
    TypeOrmModule.forFeature([PlayerPosition]),
    TypeOrmModule.forFeature([Player]),
    TypeOrmModule.forFeature([Sponsor]),
    TypeOrmModule.forFeature([StaffMember]),
    TypeOrmModule.forFeature([Team]),
    TypeOrmModule.forFeature([TextSection]),
    TypeOrmModule.forFeature([Trophy]),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController, GalleryController],
  providers: [AppService, GalleryService],
})
export class AppModule {}