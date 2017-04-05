import * as React from 'react';
import * as _ from 'lodash';
import $ from 'jquery';
import Tracks from './Tracks';
import {ThumbnailExpandVAFPlot} from '../vafPlot/ThumbnailExpandVAFPlot';
import {Mutation} from "../../../shared/api/generated/CBioPortalAPI";
import SampleManager from "../sampleManager";
import {ClinicalDataBySampleId} from "../../../shared/api/api-types-extended";

interface IGenomicOverviewProps {
    mutations: Mutation[];
    cnaSegments: any;
    sampleOrder: {[s:string]:number};
    sampleLabels: {[s:string]:string};
    sampleColors: {[s:string]:string};
    sampleManager: SampleManager;
}

export type MutationFrequencies = number[];

export type MutationFrequenciesBySample = { [sampleId:string]: MutationFrequencies  }

export default class GenomicOverview extends React.Component<IGenomicOverviewProps, { frequencies:MutationFrequenciesBySample }> {

    shouldComponentUpdate(){
        return false;
    }

    constructor(props:IGenomicOverviewProps) {
        super(props);
        const frequencies = this.computeMutationFrequencyBySample(props.mutations);
        this.state = {
            frequencies
        };

    }

    componentDidMount(){

        var debouncedResize =  _.debounce(()=>this.forceUpdate(),500);

        $(window).resize(debouncedResize);

    }

    public render() {

        const width = $('.tab-content').width()-140;

        const labels = _.reduce(this.props.sampleManager.samples, (result: any, sample: ClinicalDataBySampleId, i: number)=>{
            result[sample.id] = i + 1;
            return result;
        }, {});

        return (
            <div style={{ display:'flex', alignItems:'center'  }}>
                <Tracks mutations={this.props.mutations} key={Math.random()} sampleManager={this.props.sampleManager} width={width} cnaSegments={this.props.cnaSegments} />
                <ThumbnailExpandVAFPlot
                    data={this.state.frequencies}
                    order={this.props.sampleManager.sampleIndex}
                    colors={this.props.sampleColors}
                    labels={labels}
                    overlayPlacement="right"
                />
            </div>
        );
    }

    private computeMutationFrequencyBySample(mutations:Mutation[]):{[sampleId:string]:MutationFrequencies} {
        const ret:{[s:string]:number[]} = {};
        let sampleId;
        let freq;
        for (let mutation of mutations) {
            sampleId = mutation.sampleId;
            freq = mutation.tumorAltCount / (mutation.tumorRefCount + mutation.tumorAltCount);
            ret[sampleId] = ret[sampleId] || [];
            ret[sampleId].push(freq);
        }
        return ret;
    }

}
