import { Component, OnInit } from '@angular/core';
import {ProductsserviceService} from '../productsinven/productsservice.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  allproducts;

  namecount;
    top=5;
   customcount=[];
   customename=[];
   barChartOptions;
   barChartLabels;
   barChartType;
   barChartLegend;
   barChartData;
   obj;

  constructor(private prodservice: ProductsserviceService) { }

  ngOnInit(): void {
    this.getProducts();

  }


  async getProducts(){
    this.customcount=[];
   this.customename=[];
    this.allproducts =await this.prodservice.getProducts().subscribe(
      data=>{
        this.allproducts=data;
        console.log(this.allproducts)
    //this.price=this.allproducts.price;

       this.namecount= JSON.stringify(this.allproducts, ['name','viewcount']);


        this.obj=JSON.parse(this.namecount);


       this.obj.sort((a, b) => (a.viewcount < b.viewcount) ? 1 : -1)

      this.chartsdisplay();
      } 
    )

  }
  chartsdisplay(){
    for (var index = 0; index < this.top; index++) { 
 
      this.customename.push(this.obj[index].name);
      this.customcount.push(this.obj[index].viewcount);
    }
    console.log(this.customename) 
    console.log(this.customcount)

    //console.log(this.name)
    this.barChartOptions={
      scaleShowVerticalLines: false,
      responsive: true
    };
    this.barChartLabels=this.customename; 
    this.barChartType = 'bar';
    this.barChartLegend = true;
    //console.log(this.viewcount);
    this.barChartData = [
      {data: this.customcount, label: 'Number of Views'}
  //{data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];
  }

//__________________________________________________________________??
  // public barChartOptions = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };

  // public barChartLabels = this.name;

  // public barChartType = 'bar';
  // public barChartLegend = true;

  // public barChartData = [
  //   {data: this.price, label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ];
//?????????????????????????????????????????????????????????????__

}
