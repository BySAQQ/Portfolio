import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  protected readonly title = signal('Portfolio');
  protected readonly navItems: NavItem[] = [
    { title: 'Home', link: '/' },
    { title: 'Projects', link: '/projects' },
    { title: 'Contact', link: '/contact' }, 
  ];
}

interface NavItem {
  title: string;
  link: string;
}