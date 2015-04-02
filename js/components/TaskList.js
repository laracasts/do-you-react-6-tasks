var TaskList = React.createClass({

    render: function() {
        var displayTask = (task) => <li>{task}</li>;

        return (
            <ul>
                { this.props.items.map(displayTask) }
            </ul>
        );
    }

});