import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

const routs:Routes=[

]

@NgModule({

     imports:[
        RouterModule.forRoot(routs)
     ],
     exports:[],
     providers:[RouterModule]
})

export class AppRouting{

}

