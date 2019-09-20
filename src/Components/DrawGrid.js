import React from 'react';
import ReservedList from './ReservedList';
import AvailableList from './AvailableList';
class DrawGrid extends React.Component {
    render() {
      return (
         <div className="container">
          {/* <h2></h2> */}
          <table className="grid">
            <tbody>
                <tr>
                  { this.props.seat.map( row =>
                    <td 
                      className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                      key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
                </tr>
            </tbody>
          </table>
          
          <div className="left">
            <AvailableList available = { this.props.available } />
          </div>
          <div className="right">
            <ReservedList reserved = { this.props.reserved } />
          </div>
          
          
         </div>
      )
    }
    
    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
  }

  export default DrawGrid;