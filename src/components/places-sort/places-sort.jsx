import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {func, string} from "prop-types";
import {changeSortingType} from "../../store/action";
import {getSortingOrder} from "../../store/offers/selectors";

const PlacesSort = ({activeSorting, onSortingChange}) => {

  const [hovered, setHovered] = useState(false);

  let className = hovered ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`;

  return (
    <form className="places__sorting"
      action="#"
      method="get"
      onMouseEnter={() => setHovered(true)}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={className}
        onMouseLeave={() => setHovered(false)}>
        <li className="places__option places__option--active" tabIndex="0">Popular</li>
        <li className="places__option" tabIndex="0">Price: low to high</li>
        <li className="places__option" tabIndex="0">Price: high to low</li>
        <li className="places__option" tabIndex="0">Top rated first</li>
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
  onSortingChange() {
    dispatch(changeSortingType());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesSort);
