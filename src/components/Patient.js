import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const styles = {
    card: {
        display: 'flex',
        marginBottom: 20,
    },
    content: {
        padding: 25
    }
}

class Patient extends Component {
    render() {
        dayjs.extend(relativeTime)
        const { classes, patient : {name, address_line, cell_phone, city, country, postal_code, patientID, sex, createdBy, createdOn} } = this.props
        return (
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography variant="h5" component="h2" component={Link} to={`/pharmacies/${name}`} color="primary">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {patientID}
                    </Typography>
                    <Typography variant="body1">
                        {address_line}
                    </Typography>
                    <Typography variant="body1">
                        {cell_phone}
                    </Typography>
                    <Typography variant="body1">
                        {city}
                    </Typography>
                    <Typography variant="body1">
                        {postal_code}
                    </Typography>
                    <Typography variant="body1">
                        {country}
                    </Typography>
                    <Typography variant="body1">
                        {sex}
                    </Typography>
                    <Typography variant="body1">
                        {createdBy}
                    </Typography>
                    <Typography variant="body1">
                        {dayjs(createdOn).fromNow()}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Patient);