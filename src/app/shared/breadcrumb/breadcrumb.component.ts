import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

  public titulo!: string ;
  public ttuloSubs$!: Subscription ;

  constructor( private router: Router ) { 

    this.ttuloSubs$ = this.getDataRuta()
      .subscribe ( (event: any) => {
        this.titulo = event.snapshot.data.titulo;
        document.title = `Precios - ${this.titulo}`
        console.log(this.titulo);
      })
  }
  ngOnDestroy(): void {
    this.ttuloSubs$.unsubscribe();
  }



 getDataRuta() {

 return this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd ))
        
 }


  ngOnInit(): void {
  }
goBack() {
    window.history.back();
  }
}
