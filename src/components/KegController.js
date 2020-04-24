import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetails from './KegDetails';

class KegController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const newKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newKegList, formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id ===id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({masterKegList: newMasterKegList, selectedKeg: null});
  }

  handleSellingPint = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    const updatedQuantity = selectedKeg.quantity -1;
    const updatedKeg = {...selectedKeg, quantity: updatedQuantity };
    const kegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: [...kegList, updatedKeg]
    })
  }

  // handleSellingPint = (id) => {
  //   const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
  //   const updatedQuantity = selectedKeg.quantity -1;
  //   const updatedKeg = {...selectedKeg, quantity: updatedQuantity}
  //   const updatedKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(updatedKeg);
  //   this.setState({
  //     masterKegList : updatedKegList
  //   });
  // }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetails 
        keg = {this.state.selectedKeg} 
        onClickingDelete = {this.handleDeletingKeg} />
      buttonText = "Return to Tap List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm 
        onNewKegCreation={this.handleAddingNewKegToList} />;  
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <KegList 
        kegList={this.state.masterKegList} 
        onSellingPint={this.handleSellingPint}
        onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegController;