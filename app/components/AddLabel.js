import React from 'react';
import AddLabelStore from '../stores/AddLabelStore';
import AddLabelActions from '../actions/AddLabelActions'

class AddLabel extends React.Component {
    constructor(props) {
    super(props);
    this.state = AddLabelStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddLabelStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddLabelStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var label = this.state.label.trim();

    AddLabelActions.addLabel(label);

  }

  render() {
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add Label</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className={'form-group ' + this.state.labelValidationState}>
                    <label className='control-label'>Label</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.label}
                           onChange={AddLabelActions.updateLabel} autoFocus/>
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddLabel;