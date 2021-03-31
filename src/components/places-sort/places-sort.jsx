import React, {useState} from 'react';
import {connect} from "react-redux";
import {func, string} from "prop-types";
import {changeSortingType} from "../../store/action";
import {getSortingOrder} from "../../store/offers/selectors";
import {SortingType} from '../../const';

const PlacesSort = ({activeSorting, onSortingChange}) => {

  const options = Object.values(SortingType);

  const [hovered, setHovered] = useState(false);

  let className = hovered ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`;

  return (
    <form className="places__sorting"
      action="#"
      method="get"
      onMouseEnter={() => setHovered(true)}>
      <span className="places__sorting-caption">Sort by: </span>
      <span className="places__sorting-type" tabIndex="0">
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={className}
        onMouseLeave={() => setHovered(false)}>
        {options.map((item, index) => {
          const activeOption = item === activeSorting
            ? `places__option--active`
            : ``;
          return (
            <li key={item + index}
              className={`places__option ${activeOption}`}
              tabIndex="0"
              onClick={onSortingChange}>
              {item}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

PlacesSort.propTypes = {
  activeSorting: string.isRequired,
  onSortingChange: func.isRequired,
};

const mapStateToProps = (state) => ({
  activeSorting: getSortingOrder(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSortingChange(evt) {
    dispatch(changeSortingType(evt.target.textContent));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesSort);
