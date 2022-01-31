import { memo } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';

import Box from '../../Common/Box';

const BalanceStats = memo(({ item }) => (
  <div>
    <div className='box-content box-vertical-padding box-horizontal-padding'>
      <div className='widget-coin-horizontal flex flex-center flex-space-around nowrap'>
        <div style={{width: '16%', textAlign: 'center'}}>
          <div className='icon cover' style={{ backgroundImage: `url('/images/coin/NAV.png')` }} />
        </div>
        <div style={{width: '34%', textAlign: 'center'}}>
          <h4><NumberFormat value={item.npt} displayType={'text'}  thousandSeparator="." decimalSeparator="," prefix={''} /></h4>
        </div>
        <div style={{width: '25%', textAlign: 'center'}}>
            <button type="button" className="button button-purple button-medium button-block resposive-hide"><i className="material-icons">add_to_queue</i>&nbsp;<span className="responsive-hide">Deposit</span></button>
        </div>
        <div style={{width: '25%', textAlign: 'center'}}>
            <button type="button" className="button button-purple button-medium button-block"><i className="material-icons">remove_from_queue</i>&nbsp;<span className="responsive-hide">Withdraw</span></button>
        </div>
      </div>
    </div>
    <div className='box-content box-vertical-padding box-horizontal-padding'>
      <div className='widget-coin-horizontal flex flex-center flex-space-around nowrap'>
        <div style={{width: '16%', textAlign: 'center'}}>
          <div className='icon cover' style={{ backgroundImage: `url('/images/coin/EURO.png')` }} />
        </div>
        <div style={{width: '34%', textAlign: 'center'}}>
          <h4><NumberFormat value={item.eur} displayType={'text'}  thousandSeparator="." decimalSeparator="," prefix={''} /></h4>
        </div>
        <div style={{width: '25%', textAlign: 'center'}}>
            <button type="button" className="button button-purple button-medium button-block resposive-hide"><i className="material-icons">add_to_queue</i>&nbsp;<span className="responsive-hide">Deposit</span></button>
        </div>
        <div style={{width: '25%', textAlign: 'center'}}>
            <button type="button" className="button button-purple button-medium button-block"><i className="material-icons">remove_from_queue</i>&nbsp;<span className="responsive-hide">Withdraw</span></button>
        </div>
      </div>
    </div>
  </div>
));

BalanceStats.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default BalanceStats;
