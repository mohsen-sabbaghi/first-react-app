import React, {Component} from 'react';


class MyInput extends Component {

    constructor(props, context) {
        super(props, context);
        console.info("##constructor...")
        this.state = {
            error: false,
            loading: true
        }
        this.stopLoading = this.stopLoading.bind(this)
    }

    stopLoading() {
        this.setState({
            loading: false
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // super.componentDidUpdate(prevProps, prevState, snapshot);
        console.info("##componentDidUpdate...")
        console.log(prevProps)
        console.log(prevState)
        console.log(snapshot)
    }

    componentDidMount() {
        // super.componentDidMount();
        console.info("##componentDidMount...")
        setTimeout(() => {
            this.setState({loading: false})
        }, 5000)
    }

    validateEmail(email) {
        const re = /^(([^<>()\\[\].,;:\s@"]+(\.[^<>()\\[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render() {
        if (this.state.loading)
            return (
                <div>Loading... <br/> <input type="button" onClick={this.stopLoading} value={"stop loading..."}/></div>)

        return (
            <div style={{margin: 10}}>
                <input type="text" onChange={(e) => {
                    if (this.validateEmail(e.target.value) || e.target.value === "") {
                        this.setState({
                            error: false
                        })
                    } else {
                        this.setState({
                            error: true
                        })
                    }
                }}/>
                {
                    this.state.error ?
                        <span style={{color: "red", fontSize: 10}}>  فرمت ایمیل صحیح نمی باشد </span> : null
                }
                <br/>
            </div>
        );
    }
}

export default MyInput;