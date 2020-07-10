// 2020.7/10, am 10:50 - 11:15
// mixin can make Component cobined with role or behavior using object not class.
// reuse code without create component | class

var React = require("react");

var KatesPou = {

    // setInterval(() => {}, interval);

    setInterval: function(cb, interval){

        var token = setInterval(cb, interval);
        this._interval.push(token); // cant be accessible by user
        return token; // token: number

    },

    componentDidMount: function(){

        this._interval = [];

    },

    componentWillUnmount: function(){

        this._interval.map(clearInterval);

    }

}

var PoupousTimer = React.createClass({

    mixin:[KatesPou],

    componentDidMount: function(){

        // handler: TimerHandler, timeout, arg
        this.setInterval(this.forceUpdate.bind(this), 1000);

    },

    render: function(){

        var from = Number(new Date(2018, 12, 22));
        var to = Date.now();
        return (

        <div> {(Math.round(to - from))} </div>

        );

    }

});

export default PoupousTimer;