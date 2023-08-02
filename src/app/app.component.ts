import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'httpclientprojectfakeapi';
  post:any;
  tableauposts : any[]=[];
  constructor(private service : ApiService)
  {

  }

  ngOnInit(): void {
     var resp = this.service.getPosts();
     resp.subscribe(
      {
        next: (data)=>
        {
            this.tableauposts=data        },
        error: (errr)=>
        {

        }
      }
    )
    }
    getdata(text:any)
    {
          this.service.getPostbyid(text.value).subscribe(
            {
              next: (resp)=>
              {
                this.post=resp;
              },
              error:(err)=>
              {
                console.log(err)
              }
            }
          )
    }

}
