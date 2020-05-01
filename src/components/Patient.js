import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    card: {
        display: 'flex'
    }
}

class Patient extends Component {
    render() {
        const { classes, patient : {name, address_line, cell_phone, city, country, postal_code, patientID, sex, createdBy, createdOn} } = this.props
        return (
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {patientID}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {address_line}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {cell_phone}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {city}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {postal_code}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {country}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {sex}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {createdBy}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {createdOn}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Patient);