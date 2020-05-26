import { CommonModule } from '@angular/common'
import { ModuleWithProviders, NgModule, Provider } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { SijilModule } from 'sijil';

import {
    DatepickerComponent,
    FormErrorsComponent,
    FormFieldComponent,
    ItemTreeComponent,
    LightBoxComponent,
    LightboxConfirmComponent,
    ListComponent,
    MultiComboComponent,
    MultiSelectComponent,
    MonoSelectComponent,
    PanelSectionComponent,
    PortalComponent,
    PushPanelComponent,
    SearchInputComponent,
    SideLayoutComponent,
    SidePanelComponent,
    StepComponent,
    TooltipComponent,
    WizardComponent,
    SimpleSelectComponent,
    MessageStickerComponent,
    MessageBoxComponent,
    UploadFilesComponent
} from './components'
import { AnchorDirective, DynamicTemplateDirective, DynamicComponentDirective, DragAndDropFilesDirective } from './directives'
import { FilterPipe, OrderPipe, StorePipe, LimitPipe, FlattenObjectArrayPipe, LocalizedDatePipe, BytesPipe } from './pipes'
import { DynamicModuleImportsService, LabelsService } from './services';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { InputFileService } from "./services/inputFile.service";
import { SijilLabelsService } from './services/sijil.labels.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SijilModule.forChild(),
        InfiniteScrollModule
    ],
    declarations: [
        // components
        DatepickerComponent,
        FormErrorsComponent,
        FormFieldComponent,
        ItemTreeComponent,
        LightBoxComponent,
        LightboxConfirmComponent,
        ListComponent,
        MonoSelectComponent,
        MultiSelectComponent,
        MultiComboComponent,
        PanelSectionComponent,
        PortalComponent,
        PushPanelComponent,
        SearchInputComponent,
        SideLayoutComponent,
        SidePanelComponent,
        StepComponent,
        TooltipComponent,
        WizardComponent,
        SimpleSelectComponent,
        MessageStickerComponent,
        MessageBoxComponent,
        UploadFilesComponent,
        // directives
        AnchorDirective,
        DynamicTemplateDirective,
        DynamicComponentDirective,
        DragAndDropFilesDirective,
        // pipes
        FilterPipe,
        FlattenObjectArrayPipe,
        LimitPipe,
        OrderPipe,
        StorePipe,
        LocalizedDatePipe,
        BytesPipe
    ],
    exports: [
        // components
        DatepickerComponent,
        FormErrorsComponent,
        FormFieldComponent,
        ItemTreeComponent,
        LightBoxComponent,
        LightboxConfirmComponent,
        ListComponent,
        MonoSelectComponent,
        MultiSelectComponent,
        MultiComboComponent,
        PanelSectionComponent,
        PortalComponent,
        PushPanelComponent,
        SearchInputComponent,
        SideLayoutComponent,
        SidePanelComponent,
        StepComponent,
        TooltipComponent,
        WizardComponent,
        SimpleSelectComponent,
        MessageStickerComponent,
        MessageBoxComponent,
        UploadFilesComponent,
        // directives
        AnchorDirective,
        DynamicTemplateDirective,
        DynamicComponentDirective,
        DragAndDropFilesDirective,
        // pipes
        FilterPipe,
        FlattenObjectArrayPipe,
        LimitPipe,
        OrderPipe,
        StorePipe,
        LocalizedDatePipe,
        BytesPipe
    ],
    providers: [InputFileService, SijilLabelsService],
    entryComponents: [SimpleSelectComponent, MessageBoxComponent]
})
export class UxModule {
    static forRoot(labelsProvider: Provider): ModuleWithProviders {
        return {
            ngModule: UxModule,
            providers: [
                DynamicModuleImportsService,
                labelsProvider || LabelsService
            ]
        };
    }

    static forChild(): ModuleWithProviders {
        return {
            ngModule: UxModule,
            providers: []
        }
    }
    static withSijil(): ModuleWithProviders {
        return {
            ngModule: UxModule,
            providers: [
                DynamicModuleImportsService,
                {
                    provide: LabelsService,
                    useExisting: SijilLabelsService
                }    
            ]
                        
        };
    }
}

