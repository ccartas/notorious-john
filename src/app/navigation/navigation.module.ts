import {NgModule} from '@angular/core'
import {NavComponent} from './navigation.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [NavComponent],
    imports: [BrowserAnimationsModule],
    exports: [NavComponent],
    providers: []
})
export class NavigationModule {

}