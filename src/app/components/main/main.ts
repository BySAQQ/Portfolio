import { Component } from '@angular/core';
import { SocialPill } from '../social-pill/social-pill';
import { Experience } from '../experience/experience';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-main',
  imports: [SocialPill, Experience, Hero],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}