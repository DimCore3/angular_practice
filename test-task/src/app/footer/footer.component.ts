import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  socialMedia = [{
      name: 'instagram',
      link: 'https://www.instagram.com/beyonce/',
    },{
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/dimcore3/',
    }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.socialMedia.push({
        name: 'YouTube',
        link: 'https://www.youtube.com/watch?v=Rf54BH35yrY',
      })
    }, 3000)
  };
}
