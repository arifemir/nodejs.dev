import React from 'react';

import './DownloadToggle.scss';

interface Props {
  handleClick: (type: string) => void;
  selected: string;
}

export default function DownloadToggle({
  handleClick,
  selected,
}: Props): JSX.Element {
  return (
    <div className="download-toogle">
      <div className="download-toogle__selector">
        <button
          className="download-toogle__switch"
          type="button"
          role="switch"
          aria-label="Show LTS versions"
          aria-checked={selected === 'LTS'}
          onClick={(): void =>
            handleClick(selected === 'CURRENT' ? 'LTS' : 'CURRENT')
          }
        >
          <span
            className={
              selected === 'LTS'
                ? 'download-toogle__button -active'
                : 'download-toogle__button'
            }
          >
            LTS
          </span>
          <span
            className={
              selected === 'CURRENT'
                ? 'download-toogle__button -current -active'
                : 'download-toogle__button -current'
            }
          >
            Current
          </span>
        </button>
      </div>
      <p className="download-toogle__description">
        {selected === 'LTS'
          ? 'Recommended for most users'
          : 'With the latest features'}
      </p>
    </div>
  );
}
