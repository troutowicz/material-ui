var React = require('react');
var StylePropable = require('../mixins/style-propable');
var Extend = require('../utils/extend');

var ToolbarTitle = React.createClass({

  mixins: [StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  propTypes: {
    text: React.PropTypes.string,
  },

  getTheme: function() {
    return this.context.muiTheme.component.toolbar;
  },

  render: function() {
    var props = Extend({}, this.props);
    delete props.text;

    props.style = this.mergeAndPrefix({
      paddingRight: this.context.muiTheme.spacing.desktopGutterLess,
      lineHeight: this.getTheme().height + 'px',
      fontSize: this.getTheme().titleFontSize + 'px',
      display: 'inline-block',
      position: 'relative',
    }, this.props.style);

    return (
      <span {...props}>{this.props.text}</span>
    );
  }

});

module.exports = ToolbarTitle;
