import React from 'react';

class CallTestApi extends React.Component {

    constructor(props){
        super(props);
        var obj = {"token":"7a4b758e-cc2e-4ff4-9e52-7ba07520c1689"};
        this.state = {
            strGreedy: "Greedy.",
            jsonObj:obj
        }
    }

    componentDidMount() {
        //------------------------------------------------------------------------
        const urlApi = 'http://localhost:8888/testCallApi/testPost01';
        const options = {
            method: 'post'
            , headers: {
                'Content-Type': 'application/json;charset=UTF-8'
                , 'Accept': 'application/json;charset=UTF-8'
                , 'Access-Control-Allow-Origin': '*'
            }
            // , body: ''
        };

        fetch(urlApi,options)
            .then(res => res.json())
            .then(response => {
                this.state.jsonObj = response;
                console.log("this.state.jsonObj = ", this.state.jsonObj)
                console.log('Success:', response.result)
            })
            // .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(err => console.error('Error:',err))
        
        //------------------------------------------------------------------------
        const urlApi01 =  'http://localhost:8888/tokenlogin/checkThisToken';
        const options01 = {
            method: 'post'
            , headers: {
                'Content-Type': 'application/json;charset=UTF-8'
                , 'Accept': 'application/json;charset=UTF-8'
                , 'Access-Control-Allow-Origin': '*'
            }
            , body: JSON.stringify(
                {
                    'token' : '7a4b758e-cc2e-4ff4-9e52-7ba07520c168'
                    ,'dataValue' : []
                }
            )
        };

        fetch(urlApi01,options01)
            .then(res => res.json())
            .then(response => {
                console.log('Success01:', response.result)
            })
            .catch(err => console.error('Error:',err))
        
        //------------------------------------------------------------------------
        const urlApi02 = 'http://localhost:8888/tokenlogin/testPost01';
        const options02 = {
            method: 'post'
            , headers: {
                'Content-Type': 'application/json;charset=UTF-8'
                , 'Accept': 'application/json;charset=UTF-8'
                , 'Access-Control-Allow-Origin': '*'
            }
        };

        fetch(urlApi02,options02)
            .then(res => res.json())
            .then(response => {
                console.log('Success02:', response.result)
            })
            .catch(err => console.error('Error:',err))
        //------------------------------------------------------------------------
    }

    render() {
        return ("Call Test API : "+this.state.jsonObj.token);
    }
}

export default CallTestApi;