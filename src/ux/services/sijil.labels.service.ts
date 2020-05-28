import { Injectable } from "@angular/core";
import {BundlesService} from 'sijil';
import {LabelsService} from '.';

@Injectable()
export class SijilLabelsService extends LabelsService {
    constructor(private bundles: BundlesService) {
        super();
    }
    getLabel(label: string) {
        return this.bundles.translate(label);
    }
}