import styles from './BackgroundSVG.module.scss';

const BackgroundSVG = () => {
  return (
    <div className={styles['background-wrapper']} aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="1066" height="799" viewBox="0 0 1066 799" fill="none">
        <path
          d="M676.505 266.333C676.505 413.425 525.064 532.666 338.252 532.666C151.441 532.666 0 413.425 0 266.333C0 119.241 151.441 0 338.252 0C525.064 0 676.505 119.241 676.505 266.333Z"
          fill="#00FF9F"
          fillOpacity="0.15"
        />
        <path
          d="M849.273 532.667C849.273 679.759 697.832 799 511.02 799C324.209 799 172.768 679.759 172.768 532.667C172.768 385.575 324.209 266.334 511.02 266.334C697.832 266.334 849.273 385.575 849.273 532.667Z"
          fill="#00BAFF"
          fillOpacity="0.15"
        />
        <path
          d="M1065.33 266.333C1065.33 413.425 913.892 532.666 727.081 532.666C540.269 532.666 388.828 413.425 388.828 266.333C388.828 119.241 540.269 0 727.081 0C913.892 0 1065.33 119.241 1065.33 266.333Z"
          fill="#FF9900"
          fillOpacity="0.15"
        />
      </svg>
    </div>
  );
};

export default BackgroundSVG;
