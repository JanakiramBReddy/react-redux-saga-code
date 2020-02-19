import React from 'react';
import {TextareaAutosize,Button, withStyles} from '@material-ui/core';
import { connect } from 'react-redux';
import {reviewSubmit} from '../actions/reviewActions'; 

const style = theme => ({

})

export class reviewContainer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            reviewText : ''
        }
    }


    render(){
        console.log(this.props)
        return (
            <div>
                <label>Review :</label>
                <TextareaAutosize aria-label="minimum height" rowsMin={3} onChange={(e) => this.setState({reviewText:e.target.value})}/>
                <Button onClick={() => {
                    this.props.reviewSubmit({text:this.state.reviewText})

                    }}>submit</Button>

                <span>{this.props.reviewResult}</span>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        reviewResult : state.review.value
    }
}

const mapDispatchToProps = dispatch => ({
    reviewSubmit : x => dispatch(reviewSubmit(x))
})

export default connect(mapStateToProps,{reviewSubmit})(withStyles(style)(reviewContainer))