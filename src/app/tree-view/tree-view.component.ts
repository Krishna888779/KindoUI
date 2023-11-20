import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent {
 public expandedKeys: any[] = ['0', '1','2'];

 public checkedKeys: any[] = ['2_2'];

  public data1: any[] = [
      {
          text: 'Furniture',
          items: [
            { text: 'Tables & Chairs' },
           { text: 'Sofas' }, 
           { text: 'Occasional Furniture' }
          ]
      },
      {
          text: 'Decor',
          items: [
            { text: 'Bed Linen' },
           { text: 'Curtains & Blinds' }, 
           { text: 'Carpets' }
          ]
      },
      {
        text: 'Color',
        items: [
          { text: 'Red' }, 
          { text: 'Green' }, 
          { text: 'Blue' }
        ]
    }
  ];

  public data: any[] = [
    {
      text: "Furniture",
      items: [
        { text: "Tables & Chairs" },
        {
          text: "Sofas",
          items: [
            { text: "Bean Bag" },
            { text: "Armchair" },
            { text: "Modular" },
          ],
        },
        { text: "Occasional" },
      ],
    },
    {
      text: "Decor",
      items: [
        { text: "Bed Linen" },
        { text: "Curtains & Blinds" },
        { text: "Carpets" },
      ],
    },
  ];

  public keys:string[]=[];

  public isExpanded=(dataItem:any,index:string)=>{debugger
    return this.keys.indexOf(index)>-1;
  }

  public handleCollapse(nodes:any){debugger
  this.keys =this.keys.filter((k:any)=>k!==nodes.index)
  }

  public handleExpanded(node:any){debugger
    this.keys=this.keys.concat(node.index)
  }

  public children=(dataitem:any):Observable<any[]>=>of(dataitem.items)
  public hasChildren=(dataitems:any):boolean=>!!dataitems.items;
  // public program:any[]=[
  //   {lang:'Backend lang',
  //   Items:[
  //     {lang:'C programming'},
  //     {lang:'C# programming'},
  //     {lang:'C++ programming'},
  //     {lang:'Java programming'},
  //     {lang:'More Langauges',Items:[{lang:'Java'},{lang:'C Sharp'},{lang:'C++'},{lang:'Python'},{lang:'Machine Languages',Items:[{lang:'Java'},{lang:'Python'},{lang:'C#'}]}]}
  //    ,{lang:'Backend Framework',Items:[{lang:'.Net Core'},{lang:'.Net MVC'},{lang:'.Net Web API'}]}
  //   ]
  // },
  // {
  //   lang:"Frontet lang",
  //   Items:[
  //     {lang:'HTML'},
  //     {lang:'CSS'},
  //     {lang:'SCSS'},
  //     {lang:'JAVASCRIPT'},
  //     {lang:'Framwork',Items:[{lang:'Angular'},{lang:'Reacte'}]}
  //   ]
  // }
  // ]
}
