import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from "../../components/banner/banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, BannerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
}