import React from 'react';

const total = 100;
var owner_count = 1;
var creator_name = ["cupcake", "cryptopur", "bluecrab", "lavacake", "cryptobird", "lilygreen"]
var name_count = 0;

export default class Creator extends React.Component {

    state = {
        count: 0,
        creators: [{ name: 'cryptogod', ownership: 100, max: 100 }],
        selected: "custom",
        key: 28,
        show_message: false
    }


    addCreator() {
        owner_count++;
        this.setState({
            creators: [...this.state.creators, { name: creator_name[name_count], ownership: ' ' }]
        })
        name_count++;
    };

    deletCreator(e) {
        var tempArr = this.state.creators;
        tempArr.splice(e, 1);
        this.setState({ creators: tempArr });

        var newCount = 100;
        for (var i = 0; i < this.state.creators.length; i++) {
            newCount -= this.state.creators[i].ownership;
        }
        this.setState({ count: newCount });
        name_count--;
    }

    changeOwnership(event) {
        //   change the current input
        var tempArr = this.state.creators;
        tempArr[event.target.id].ownership = event.target.value;
        this.setState({ creators: tempArr });

        // change the calunter value
        var newCount = 100;
        for (var i = 0; i < this.state.creators.length; i++) {
            newCount -= this.state.creators[i].ownership;
        }
        this.setState({ count: newCount });
    }

    radioSelect(e) {
        this.setState({ selected: e.target.value })
        var tempArr = this.state.creators;
        var share = parseFloat(100 / tempArr.length).toFixed(1);

        if (e.target.value === "auto") {
            for (var i = 0; i < tempArr.length; i++) {
                tempArr[i].ownership = share;
            }
        } else {
            for (var i = 0; i < tempArr.length; i++) {
                if (i === 0)
                    tempArr[i].ownership = Math.ceil(tempArr[i].ownership);
                else
                    tempArr[i].ownership = Math.floor(tempArr[i].ownership);
            }
        }
    }

    onKeyDown(e) {
        console.log("keydown:" + e.key);
        this.setState({ key: e.key.charCodeAt(0) })
    }


    changeName(event) {
        var tempArr = this.state.creators;
        tempArr[event.target.id].name = event.target.value;
        this.setState({ creators: tempArr });
    }
    render() {

        return (
            <div>
                <div className="form-row" style={{ marginBottom: 16 }}>
                    <div className="col-md-8" >
                        <input type="radio" style={{ cursor: 'pointer' }} name="drone" value="auto" onChange={this.radioSelect.bind(this)}
                            checked={this.state.selected === "auto"} /><span> Split evenly</span>

                        <input type="radio" style={{ cursor: 'pointer', marginLeft: 24 }} name="drone" value="custom" onChange={this.radioSelect.bind(this)}
                            checked={this.state.selected === "custom"} /><span> Customize split</span>
                    </div>
                </div>


                {this.state.creators.map((content, i) => {
                    return <div className="form-row" key={i} style={{ marginBottom: 16 }}>
                        <div className="col-md-5">
                            {i === 0 ?
                                <input type="name" className="form-control" value={content.name} readOnly />
                                : <input type="name" className="form-control" placeholder="username" id={i} value={content.name} onChange={this.changeName.bind(this)} />
                            }
                        </div>
                        <div className="col-md-4">
                            {/* {i === 0 ?
                                <input type="number" value={content.ownership} className="form-control" id="quantity" name="quantity" min="0" max="100" readOnly />
                                : */}
                            <input type="number" value={content.ownership} id={i} className="form-control" placeholder='00' onChange={this.changeOwnership.bind(this)} />
                            {/* } */}
                        </div>
                        <div className="col-md-2"> % credit </div>
                        {i === 0 ? <div></div> : <div className="col-md-1" style={{ cursor: 'pointer' }} onClick={() => this.deletCreator(i)}> X </div>}
                    </div>
                }
                )}
                {this.state.count === 0 ? <p></p> : (this.state.count < 0 ? <p style={{ color: 'red' }}>Subtract {0 - this.state.count} credits to total 100%</p> : <p style={{ color: 'red' }}> Add {this.state.count} credits to total 100%</p>)}

                <div style={{ cursor: 'pointer', color: 'blue' }} onClick={() => this.addCreator()} id="add_people">Add a collaborator +</div>
                <br />
                {this.state.count === 0 ? <button>submit</button> : <button disabled>submit</button>}
            </div >
        )

    }
}