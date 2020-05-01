import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

import Patient from '../components/Patient';

class home extends Component {
    state = {
        patients: null
    }
    componentDidMount() {
        axios.get('/patients')
        .then(res => {
            console.log(res.data)
            this.setState({
                patients: res.data
            })
        })
        .catch(err => console.log(err));
    }
    render() {
        let recentPatientsMarkup = this.state.patients ? (
        this.state.patients.map(patient => <Patient key={patient.patientID} patient={patient}/>)
        ) : <p>Loading...</p>
        return (
            <Grid container spacing={4}> 
                <Grid item sm={8} xs={12}>
                    {recentPatientsMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>Profile..</p>
                </Grid>
            </Grid>
        )
    }
}

export default home