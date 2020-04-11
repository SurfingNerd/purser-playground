import { observable } from 'mobx';
import * as pm from '@surfingnerd/purser-metamask';
import * as pc from '@surfingnerd/purser-core';

class Model {
    @observable name = 'Noah';

    @observable metamaskFound : boolean | undefined = undefined;


    public startMetamask() {
        pm.detect().then(x=>{
            console.log('detect result: ', x);
            this.metamaskFound = x;
        })


    }

    public openMetamask() {
        pm.open().then(x=>{
            console.log('Metamask got Opened!');
        })
    }

}

export default Model;
