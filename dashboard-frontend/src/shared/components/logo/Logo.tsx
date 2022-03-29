import React from 'react';
import styles from './Logo.module.scss';

export function Logo() {
  return (
    <a href="/" className={styles.logo}>
      <svg viewBox="12 2 176 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_dd_1_1856)">
          <rect x="13" y="4" width="40" height="40" rx="10" fill="white" />
        </g>
        <path
          d="M63 32L66.24 16.76H72.696C73.688 16.76 74.552 16.864 75.288 17.072C76.04 17.264 76.656 17.592 77.136 18.056C77.632 18.52 78 19.128 78.24 19.88C78.496 20.632 78.624 21.552 78.624 22.64C78.624 23.808 78.472 24.952 78.168 26.072C77.88 27.192 77.392 28.192 76.704 29.072C76.016 29.952 75.112 30.664 73.992 31.208C72.888 31.736 71.52 32 69.888 32H63ZM69.576 30.32C70.104 30.32 70.568 30.104 70.968 29.672C71.384 29.224 71.736 28.664 72.024 27.992C72.328 27.304 72.576 26.552 72.768 25.736C72.976 24.904 73.136 24.104 73.248 23.336C73.376 22.568 73.464 21.88 73.512 21.272C73.576 20.664 73.608 20.232 73.608 19.976C73.608 19.48 73.504 19.096 73.296 18.824C73.104 18.536 72.76 18.392 72.264 18.392H71.112L68.544 30.32H69.576ZM80.7686 22.568C81.5846 22.168 82.4166 21.88 83.2646 21.704C84.1286 21.512 85.0886 21.416 86.1446 21.416C87.1686 21.416 88.0166 21.496 88.6886 21.656C89.3606 21.816 89.8966 22.048 90.2966 22.352C90.6966 22.656 90.9766 23.016 91.1366 23.432C91.2966 23.848 91.3766 24.32 91.3766 24.848C91.3766 25.152 91.3526 25.48 91.3046 25.832C91.2726 26.184 91.2326 26.48 91.1846 26.72L90.0566 32H86.1926L85.7606 30.464H85.6166C85.1046 31.024 84.5046 31.456 83.8166 31.76C83.1446 32.048 82.4726 32.192 81.8006 32.192C81.4166 32.192 81.0406 32.136 80.6726 32.024C80.3046 31.912 79.9766 31.744 79.6886 31.52C79.4006 31.28 79.1686 30.984 78.9926 30.632C78.8166 30.264 78.7286 29.824 78.7286 29.312C78.7286 28.48 78.9526 27.824 79.4006 27.344C79.8646 26.848 80.4646 26.48 81.2006 26.24C81.9526 25.984 82.7926 25.824 83.7206 25.76C84.6646 25.696 85.6086 25.664 86.5526 25.664C86.5846 25.504 86.6246 25.28 86.6726 24.992C86.7206 24.688 86.7446 24.424 86.7446 24.2C86.7446 23.912 86.6646 23.648 86.5046 23.408C86.3606 23.152 86.0486 23.024 85.5686 23.024C85.0086 23.024 84.5926 23.192 84.3206 23.528C84.0646 23.848 83.8966 24.24 83.8166 24.704H80.3126L80.7686 22.568ZM86.2886 26.792H85.8566C85.3926 26.792 84.9926 26.856 84.6566 26.984C84.3366 27.096 84.0726 27.248 83.8646 27.44C83.6726 27.632 83.5286 27.848 83.4326 28.088C83.3366 28.328 83.2886 28.568 83.2886 28.808C83.2886 29.192 83.3846 29.48 83.5766 29.672C83.7846 29.864 84.0246 29.96 84.2966 29.96C84.6326 29.96 84.9606 29.84 85.2806 29.6C85.6166 29.36 85.8246 29.04 85.9046 28.64L86.2886 26.792ZM99.8008 24.704C99.8168 24.624 99.8328 24.544 99.8488 24.464C99.8648 24.384 99.8728 24.296 99.8728 24.2C99.8728 23.912 99.8168 23.648 99.7048 23.408C99.6088 23.152 99.4088 23.024 99.1048 23.024C98.8328 23.024 98.5608 23.144 98.2888 23.384C98.0168 23.608 97.8808 23.912 97.8808 24.296C97.8808 24.552 97.9448 24.76 98.0728 24.92C98.2168 25.064 98.4008 25.184 98.6248 25.28C98.8488 25.376 99.0968 25.456 99.3688 25.52C99.6568 25.584 99.9368 25.648 100.209 25.712C100.593 25.808 100.953 25.928 101.289 26.072C101.641 26.2 101.953 26.376 102.225 26.6C102.497 26.824 102.713 27.104 102.873 27.44C103.033 27.76 103.113 28.16 103.113 28.64C103.113 29.312 102.953 29.88 102.633 30.344C102.329 30.792 101.897 31.16 101.337 31.448C100.793 31.72 100.145 31.912 99.3928 32.024C98.6568 32.136 97.8648 32.192 97.0168 32.192C95.7208 32.192 94.6488 32.096 93.8008 31.904C92.9528 31.712 92.3608 31.528 92.0248 31.352L92.5288 28.952H95.7688C95.7528 29.032 95.7448 29.112 95.7448 29.192C95.7448 29.256 95.7448 29.328 95.7448 29.408C95.7448 29.776 95.8248 30.072 95.9848 30.296C96.1608 30.504 96.4568 30.608 96.8728 30.608C97.3368 30.608 97.6648 30.48 97.8568 30.224C98.0648 29.952 98.1688 29.704 98.1688 29.48C98.1688 29.256 98.0808 29.064 97.9048 28.904C97.7448 28.728 97.5368 28.584 97.2808 28.472C97.0248 28.344 96.7368 28.24 96.4168 28.16C96.1128 28.064 95.8168 27.976 95.5288 27.896C95.3208 27.848 95.0808 27.768 94.8088 27.656C94.5528 27.544 94.3048 27.384 94.0648 27.176C93.8248 26.968 93.6248 26.704 93.4648 26.384C93.3048 26.048 93.2248 25.632 93.2248 25.136C93.2248 24.432 93.3928 23.848 93.7288 23.384C94.0808 22.904 94.5288 22.52 95.0728 22.232C95.6328 21.944 96.2568 21.736 96.9448 21.608C97.6488 21.48 98.3528 21.416 99.0568 21.416C99.9368 21.416 100.769 21.496 101.553 21.656C102.337 21.816 102.977 22.024 103.473 22.28L102.921 24.704H99.8008ZM110.806 23.216H110.974C111.278 22.912 111.63 22.632 112.03 22.376C112.366 22.152 112.766 21.952 113.23 21.776C113.694 21.6 114.214 21.512 114.79 21.512C115.622 21.512 116.31 21.728 116.854 22.16C117.398 22.576 117.67 23.152 117.67 23.888C117.67 24.112 117.646 24.368 117.598 24.656C117.55 24.928 117.494 25.224 117.43 25.544C117.366 25.848 117.294 26.16 117.214 26.48C117.15 26.784 117.094 27.064 117.046 27.32L116.038 32H111.166L112.486 25.736C112.518 25.528 112.558 25.32 112.606 25.112C112.654 24.888 112.678 24.688 112.678 24.512C112.678 24.272 112.614 24.08 112.486 23.936C112.374 23.776 112.198 23.696 111.958 23.696C111.67 23.696 111.39 23.8 111.118 24.008C110.862 24.216 110.662 24.4 110.518 24.56L108.934 32H104.038L107.446 15.872H112.366L110.806 23.216ZM122.139 32H118.251L121.659 15.872H126.579L125.019 23.216H125.187C125.715 22.608 126.307 22.176 126.963 21.92C127.635 21.648 128.299 21.512 128.955 21.512C129.515 21.512 129.979 21.6 130.347 21.776C130.731 21.936 131.035 22.16 131.259 22.448C131.483 22.736 131.643 23.08 131.739 23.48C131.835 23.88 131.883 24.304 131.883 24.752C131.883 24.976 131.867 25.312 131.835 25.76C131.803 26.208 131.731 26.712 131.619 27.272C131.507 27.816 131.347 28.384 131.139 28.976C130.931 29.552 130.651 30.08 130.299 30.56C129.963 31.04 129.531 31.432 129.003 31.736C128.491 32.04 127.875 32.192 127.155 32.192C126.723 32.192 126.299 32.144 125.883 32.048C125.483 31.952 125.115 31.824 124.779 31.664C124.459 31.504 124.171 31.32 123.915 31.112C123.675 30.888 123.499 30.664 123.387 30.44H123.219L122.139 32ZM124.851 29.864C125.235 29.864 125.555 29.664 125.811 29.264C126.067 28.848 126.275 28.368 126.435 27.824C126.595 27.264 126.707 26.712 126.771 26.168C126.851 25.608 126.891 25.192 126.891 24.92C126.891 24.6 126.835 24.336 126.723 24.128C126.627 23.92 126.443 23.816 126.171 23.816C125.851 23.816 125.555 23.936 125.283 24.176C125.011 24.4 124.811 24.592 124.683 24.752L123.747 29.048C123.859 29.24 124.003 29.424 124.179 29.6C124.371 29.776 124.595 29.864 124.851 29.864ZM140.24 21.416C142.144 21.416 143.528 21.752 144.392 22.424C145.304 23.128 145.76 24.296 145.76 25.928C145.76 26.936 145.592 27.848 145.256 28.664C144.92 29.464 144.448 30.128 143.84 30.656C142.624 31.68 140.864 32.192 138.56 32.192C136.592 32.192 135.184 31.816 134.336 31.064C133.424 30.28 132.968 29.104 132.968 27.536C132.968 26.496 133.176 25.552 133.592 24.704C134.024 23.856 134.64 23.152 135.44 22.592C136.608 21.808 138.208 21.416 140.24 21.416ZM138.608 30.56C139.008 30.56 139.352 30.336 139.64 29.888C139.944 29.44 140.184 28.896 140.36 28.256C140.536 27.6 140.664 26.928 140.744 26.24C140.84 25.536 140.888 24.928 140.888 24.416C140.888 23.968 140.84 23.632 140.744 23.408C140.664 23.168 140.48 23.048 140.192 23.048C139.76 23.048 139.384 23.28 139.064 23.744C138.76 24.208 138.512 24.76 138.32 25.4C138.128 26.04 137.984 26.696 137.888 27.368C137.808 28.04 137.768 28.584 137.768 29C137.768 30.04 138.048 30.56 138.608 30.56ZM148.362 22.568C149.178 22.168 150.01 21.88 150.858 21.704C151.722 21.512 152.682 21.416 153.738 21.416C154.762 21.416 155.61 21.496 156.282 21.656C156.954 21.816 157.49 22.048 157.89 22.352C158.29 22.656 158.57 23.016 158.73 23.432C158.89 23.848 158.97 24.32 158.97 24.848C158.97 25.152 158.946 25.48 158.898 25.832C158.866 26.184 158.826 26.48 158.778 26.72L157.65 32H153.786L153.354 30.464H153.21C152.698 31.024 152.098 31.456 151.41 31.76C150.738 32.048 150.066 32.192 149.394 32.192C149.01 32.192 148.634 32.136 148.266 32.024C147.898 31.912 147.57 31.744 147.282 31.52C146.994 31.28 146.762 30.984 146.586 30.632C146.41 30.264 146.322 29.824 146.322 29.312C146.322 28.48 146.546 27.824 146.994 27.344C147.458 26.848 148.058 26.48 148.794 26.24C149.546 25.984 150.386 25.824 151.314 25.76C152.258 25.696 153.202 25.664 154.146 25.664C154.178 25.504 154.218 25.28 154.266 24.992C154.314 24.688 154.338 24.424 154.338 24.2C154.338 23.912 154.258 23.648 154.098 23.408C153.954 23.152 153.642 23.024 153.162 23.024C152.602 23.024 152.186 23.192 151.914 23.528C151.658 23.848 151.49 24.24 151.41 24.704H147.906L148.362 22.568ZM153.882 26.792H153.45C152.986 26.792 152.586 26.856 152.25 26.984C151.93 27.096 151.666 27.248 151.458 27.44C151.266 27.632 151.122 27.848 151.026 28.088C150.93 28.328 150.882 28.568 150.882 28.808C150.882 29.192 150.978 29.48 151.17 29.672C151.378 29.864 151.618 29.96 151.89 29.96C152.226 29.96 152.554 29.84 152.874 29.6C153.21 29.36 153.418 29.04 153.498 28.64L153.882 26.792ZM161.971 21.68H165.883L166.243 23.48H166.411C166.779 22.904 167.251 22.416 167.827 22.016C168.403 21.616 169.163 21.416 170.107 21.416C170.171 21.416 170.267 21.424 170.395 21.44C170.539 21.44 170.691 21.464 170.851 21.512C171.027 21.544 171.203 21.6 171.379 21.68C171.571 21.744 171.755 21.84 171.931 21.968L170.875 26.912H168.259C168.227 25.92 168.139 25.232 167.995 24.848C167.851 24.448 167.619 24.248 167.299 24.248C167.139 24.248 166.963 24.288 166.771 24.368C166.595 24.432 166.411 24.584 166.219 24.824L164.683 32H159.787L161.971 21.68ZM181.762 15.872H186.682L183.25 32H179.362L178.93 30.464H178.762C178.666 30.608 178.514 30.784 178.306 30.992C178.114 31.184 177.866 31.376 177.562 31.568C177.258 31.744 176.898 31.888 176.482 32C176.066 32.128 175.586 32.192 175.042 32.192C174.482 32.192 174.002 32.112 173.602 31.952C173.218 31.776 172.898 31.544 172.642 31.256C172.402 30.968 172.226 30.624 172.114 30.224C172.002 29.808 171.946 29.36 171.946 28.88C171.946 28.672 171.962 28.344 171.994 27.896C172.026 27.432 172.098 26.928 172.21 26.384C172.338 25.824 172.514 25.256 172.738 24.68C172.978 24.088 173.29 23.552 173.674 23.072C174.074 22.592 174.562 22.2 175.138 21.896C175.714 21.576 176.41 21.416 177.226 21.416C177.482 21.416 177.754 21.44 178.042 21.488C178.33 21.536 178.602 21.624 178.858 21.752C179.13 21.88 179.37 22.064 179.578 22.304C179.786 22.544 179.938 22.856 180.034 23.24H180.202L181.762 15.872ZM178.834 23.768C178.45 23.768 178.13 23.984 177.874 24.416C177.618 24.832 177.41 25.32 177.25 25.88C177.09 26.44 176.97 27 176.89 27.56C176.826 28.12 176.794 28.536 176.794 28.808C176.794 29.128 176.842 29.4 176.938 29.624C177.034 29.832 177.218 29.936 177.49 29.936C177.65 29.936 177.802 29.904 177.946 29.84C178.106 29.76 178.25 29.672 178.378 29.576C178.522 29.464 178.642 29.352 178.738 29.24C178.834 29.128 178.914 29.032 178.978 28.952L179.914 24.584C179.802 24.408 179.65 24.232 179.458 24.056C179.282 23.864 179.074 23.768 178.834 23.768Z"
          fill="#5E6366"
        />
        <g filter="url(#filter1_dd_1_1856)">
          <path
            d="M24.9797 32L28.2197 16.76H34.6757C35.6677 16.76 36.5317 16.864 37.2677 17.072C38.0197 17.264 38.6357 17.592 39.1157 18.056C39.6117 18.52 39.9797 19.128 40.2197 19.88C40.4757 20.632 40.6037 21.552 40.6037 22.64C40.6037 23.808 40.4517 24.952 40.1477 26.072C39.8597 27.192 39.3717 28.192 38.6837 29.072C37.9957 29.952 37.0917 30.664 35.9717 31.208C34.8677 31.736 33.4997 32 31.8677 32H24.9797ZM31.5557 30.32C32.0837 30.32 32.5477 30.104 32.9477 29.672C33.3637 29.224 33.7157 28.664 34.0037 27.992C34.3077 27.304 34.5557 26.552 34.7477 25.736C34.9557 24.904 35.1157 24.104 35.2277 23.336C35.3557 22.568 35.4437 21.88 35.4917 21.272C35.5557 20.664 35.5877 20.232 35.5877 19.976C35.5877 19.48 35.4837 19.096 35.2757 18.824C35.0837 18.536 34.7397 18.392 34.2437 18.392H33.0917L30.5237 30.32H31.5557Z"
            fill="#367BF5"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_1_1856"
            x="7"
            y="0"
            width="52"
            height="52"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.0295189 0 0 0 0 0.137798 0 0 0 0 0.187773 0 0 0 0.24 0" />
            <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_1_1856" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="3" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.0295189 0 0 0 0 0.137798 0 0 0 0 0.187773 0 0 0 0.16 0" />
            <feBlend mode="multiply" in2="effect1_dropShadow_1_1856" result="effect2_dropShadow_1_1856" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_1856" result="shape" />
          </filter>
          <filter
            id="filter1_dd_1_1856"
            x="0.979687"
            y="8.76"
            width="63.624"
            height="63.24"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="6" />
            <feGaussianBlur stdDeviation="6" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.211765 0 0 0 0 0.482353 0 0 0 0 0.960784 0 0 0 0.16 0" />
            <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_1_1856" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="16" />
            <feGaussianBlur stdDeviation="12" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.211765 0 0 0 0 0.482353 0 0 0 0 0.960784 0 0 0 0.16 0" />
            <feBlend mode="multiply" in2="effect1_dropShadow_1_1856" result="effect2_dropShadow_1_1856" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_1856" result="shape" />
          </filter>
        </defs>
      </svg>
    </a>
  );
}