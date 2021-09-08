import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/css/toggles.min.css';

/**
 *
 * @visibleName Toggle
 */
const Toggle = ({
  className,
  hasSeparator,
  hasLabelLeft,
  label,
  id,
  description,
  ...remainingProps
}) => {
  const _id = useRef(id || uuidv4());

  useEffect(() => {
    _id.current = id || uuidv4();
  }, [id]);

  const _className = classNames('fr-toggle', {
    'fr-toggle--border-bottom': hasSeparator,
    'fr-toggle--label-left': hasLabelLeft,
  }, className);
  return (
    <div
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      <input
        {...dataAttributes.filterAll(remainingProps)}
        data-testid="toggle-input"
        type="checkbox"
        className="fr-toggle__input"
        id={_id.current}
      />
      <label
        className="fr-toggle__label"
        htmlFor={_id.current}
        data-fr-checked-label="Activé"
        data-fr-unchecked-label="Désactivé"
      >
        {label}
      </label>
      {description && <p className="fr-hint-text">{description}</p>}
    </div>
  );
};

Toggle.defaultProps = {
  id: '',
  className: '',
  hasSeparator: false,
  hasLabelLeft: false,
  description: '',
};

Toggle.propTypes = {
  id: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  hasSeparator: PropTypes.bool,
  hasLabelLeft: PropTypes.bool,
  description: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default Toggle;
