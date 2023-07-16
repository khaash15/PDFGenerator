import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { CSVLink } from 'react-csv';
import { getMockReport } from '../../../mocks/mockReport';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        color: '#FFF !important',
    },
});

class SurveyResults extends React.Component {
    constructor(props) {
        super(props);

        this.state = { data: [] };

        this.getSurveyReport = this.getSurveyReport.bind(this);
    }

    // Tried to check for state update in order to force re-render
    shouldComponentUpdate(nextProps, nextState) {
        return !(
            (nextProps.surveyId === this.props.surveyId) &&
            (nextState.data === this.state.data)
        );
    }
    getSurveyReport(surveyId) {
        // this is a mock, but getMockReport will essentially be making a fetch
        const reportData = getMockReport(surveyId);
        this.setState({ data: reportData });
    }

    render() {
        return (<CSVLink
            style={{ textDecoration: 'none' }}
            data={this.state.data}
            // I also tried adding the onClick event on the link itself
            filename={'my-file.csv'}
            target="_blank"
        >
            <Button
                className={this.props.classes.button}
                color="primary"
                onClick={() => this.getSurveyReport(this.props.surveyId)}
                size={'small'}
                variant="raised"
            >
                Download Results
            </Button>
        </CSVLink>);
    }
}

export default withStyles(styles)(SurveyResults);