import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  ruta : any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router = this.router;
  }

  modificarRuta(s: string){
    this.ruta = s;
    //console.log(this.ruta);
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
