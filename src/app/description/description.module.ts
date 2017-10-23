import {NgModule} from '@angular/core'
import {DescriptionComponent} from './description.component'
@NgModule({
    declarations:[DescriptionComponent],
    imports:[],
    exports:[DescriptionComponent]
})
export class DescriptionModule {
    image = './assets/images/portret.jpg'
}