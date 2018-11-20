import React from 'react';

class CallTestApi extends React.Component {
    constructor(props){
        super(props);
        var obj = {token:"7a4b758e-cc2e-4ff4-9e52-7ba07520c1689"};
        this.state = {
            strGreedy: "Greedy.",
            jsonObj:obj
        }
    }

    async componentDidMount() {
        console.log(this.state.jsonObj);
        try {
            const response = await fetch('http://localhost:8888/testCallApi/testPost01',
            {
                method:'POST',
                mode:'no-cors'
            })
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.text();
            // this.setState.jsonObj = json;
            console.log("json : ",json);
        } catch (error) {
            console.log("ERROR : ",error);
        }
    }

    render() {
        return ("Call Test API : "+this.state.strGreedy+" !!!");
    }
}

export default CallTestApi;