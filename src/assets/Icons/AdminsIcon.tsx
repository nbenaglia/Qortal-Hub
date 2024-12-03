import React from 'react';

export const AdminsIcon= ({ color = 'white', height = 48, width = 50 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.278 10.622C19.278 8.52117 19.901 6.46752 21.0681 4.72074C22.2353 2.97396 23.8942 1.61251 25.8351 0.808557C27.7761 0.00460249 29.9118 -0.205749 31.9722 0.204103C34.0327 0.613956 35.9254 1.6256 37.4109 3.11112C38.8964 4.59663 39.908 6.48929 40.3179 8.54976C40.7278 10.6102 40.5174 12.746 39.7134 14.6869C38.9095 16.6278 37.548 18.2867 35.8013 19.4539C34.0545 20.621 32.0008 21.244 29.9 21.244C27.0838 21.2408 24.3839 20.1207 22.3926 18.1294C20.4013 16.1381 19.2812 13.4382 19.278 10.622ZM17.16 37.736C17.3428 37.8483 17.5137 37.979 17.67 38.126L17.5 40.426C17.3249 40.549 17.1372 40.6529 16.94 40.736C16.6401 40.6901 16.3332 40.7363 16.0601 40.8684C15.7869 41.0005 15.5603 41.2124 15.41 41.476L14.54 42.996C14.3907 43.2597 14.325 43.5625 14.3518 43.8644C14.3786 44.1662 14.4966 44.4528 14.69 44.686C14.7144 44.8985 14.7177 45.1129 14.7 45.326L12.8 46.636C12.5952 46.5775 12.3974 46.4971 12.21 46.396C12.0564 46.1331 11.8277 45.9221 11.5533 45.7903C11.2788 45.6584 10.9712 45.6116 10.67 45.656L8.95 45.926C8.6485 45.9709 8.36799 46.1071 8.14628 46.3163C7.92457 46.5255 7.7723 46.7976 7.71 47.096C7.56006 47.2479 7.39599 47.3852 7.22 47.506L5.01 46.826C4.92855 46.6296 4.86822 46.4251 4.83 46.216C4.94414 45.9337 4.9689 45.6231 4.90095 45.3263C4.83299 45.0294 4.67559 44.7606 4.45 44.556L3.17 43.376C2.94532 43.1703 2.66372 43.0373 2.36214 42.9945C2.06055 42.9517 1.75306 43.001 1.48 43.136C1.26901 43.1167 1.06096 43.0731 0.86 43.006L0 40.866C0.107104 40.6785 0.230942 40.5012 0.37 40.336C0.662067 40.2503 0.920588 40.0766 1.11029 39.8386C1.3 39.6006 1.41164 39.3098 1.43 39.006L1.56 37.266C1.58108 36.9627 1.50882 36.6603 1.35293 36.3993C1.19705 36.1383 0.96501 35.9312 0.688 35.806C0.579009 35.6225 0.482136 35.4321 0.398 35.236L1.548 33.226C1.75938 33.1906 1.97386 33.1772 2.188 33.186C2.43756 33.3593 2.73415 33.4522 3.038 33.4522C3.34185 33.4522 3.63844 33.3593 3.888 33.186L5.328 32.196C5.57858 32.0241 5.77044 31.7795 5.87773 31.4952C5.98501 31.2109 6.00255 30.9006 5.928 30.606C5.99996 30.4048 6.09034 30.2106 6.198 30.026L8.478 29.676C8.63866 29.8159 8.78292 29.9736 8.908 30.146C8.92721 30.4496 9.03917 30.7399 9.22874 30.9778C9.41832 31.2156 9.67637 31.3896 9.968 31.476L11.638 31.986C11.9289 32.0736 12.2396 32.0708 12.5289 31.9779C12.8181 31.8851 13.0724 31.7065 13.258 31.466C13.46 31.3985 13.6675 31.3484 13.878 31.316L15.578 32.876C15.5633 33.0885 15.5298 33.2994 15.478 33.506C15.2538 33.7116 15.0975 33.9804 15.0296 34.2769C14.9617 34.5733 14.9856 34.8834 15.098 35.166L15.738 36.786C15.8515 37.0693 16.0481 37.3116 16.3019 37.4812C16.5557 37.6507 16.8548 37.7396 17.16 37.736ZM10.51 38.156C10.3773 37.678 10.0609 37.2718 9.63 37.026C9.35098 36.8624 9.03343 36.7762 8.71 36.776C8.29776 36.7752 7.89685 36.9109 7.56974 37.1618C7.24264 37.4126 7.0077 37.7647 6.90156 38.163C6.79541 38.5613 6.82401 38.9836 6.9829 39.364C7.14179 39.7444 7.42205 40.0615 7.78 40.266C7.99021 40.3909 8.2238 40.4713 8.46633 40.5022C8.70886 40.5332 8.95516 40.5141 9.19 40.446C9.42745 40.3851 9.65005 40.2765 9.8443 40.127C10.0385 39.9774 10.2004 39.79 10.32 39.576C10.4445 39.3633 10.5255 39.1279 10.5581 38.8836C10.5907 38.6393 10.5744 38.3909 10.51 38.153V38.156ZM44.168 29.124C40.8 25.786 35.977 24.165 29.929 24.268C23.891 24.168 19.148 25.746 15.782 28.986L18.104 31.122C18.3885 31.3825 18.5612 31.743 18.586 32.128C18.6519 33.0412 18.5153 33.9577 18.186 34.812L18.232 34.931C19.0589 35.3243 19.7879 35.8969 20.366 36.607C20.612 36.904 20.7341 37.2843 20.707 37.669L20.451 41.298H48.374C48.518 41.2982 48.6604 41.2672 48.7913 41.2073C48.9223 41.1474 49.0387 41.0599 49.1327 40.9508C49.2267 40.8416 49.2961 40.7135 49.336 40.5752C49.3759 40.4368 49.3855 40.2914 49.364 40.149C48.8358 36.0186 47.0175 32.1604 44.168 29.124Z" fill={color}/>
        </svg>
        
        
        


    );
  };
  