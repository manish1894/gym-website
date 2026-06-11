import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { title } from 'node:process';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  projectTitle= 'Angular learning';
  gymServices=[
    {
    title:'weight lifting',
    description:'apna stamina aur badhao',
    icon:'fitness_center'
    },
    {
    title:'Cardio Training',
    description:'apna stamina aur badhao',
    icon:'directions_run'
    },
    {
    title:'Yoga & Flexibility',
    description:'Mansik shanti ke liye',
    icon:'self_improvement'
    }
  ]
  }

