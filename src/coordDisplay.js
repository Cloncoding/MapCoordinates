'use strict'

const e = React.createElement;

var txtFld;

class TextField extends React.Component {
    constructor(props) {
        super(props);

        txtFld = this;

        this.state = {
            latitude: 0,
            longitude: 0
        };
    }

    updateStateCoordinates(latitude, longitude) {
        this.setState({
            latitude: latitude,
            longitude: longitude
        });
    }

    render() {
        return e(
            "div",
            {},
            null,
            e("h3", {}, "getroffene Koordinate:"),
            e("div", { style: { width: "50%", float: "left" } },
                e("p", {}, "latitude:" + "\n" + "longitude:")),
            e("div", { style: { width: "50%", float: "right" } },
                e("p", {}, this.state.latitude + "\n" + this.state.longitude))
        );
    }
}


const txt = e(TextField, {}, null);

const root = ReactDOM.createRoot(document.getElementById("coordDisplay"));
root.render(txt);


function updateCoordinates(latitude, longitude) {
    txtFld.updateStateCoordinates(latitude, longitude);
}