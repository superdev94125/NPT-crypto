import { memo } from 'react';
import PropTypes from 'prop-types';

const BasicApexRow = memo(({ item }) => (
  <tr>
    <td className='left'>
      <h6>{item.category}</h6>
    </td>
    <td className='right'><h6>{item.value}</h6></td>
  </tr>
));

BasicApexRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default BasicApexRow;
