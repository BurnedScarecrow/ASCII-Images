<template>
  <div>
    <form id="form">
      <input
        type="file"
        ref="myFiles"
        hidden
        accept=".png,.jpg,.gif,.bmp"
        id="file"
        @change="onFileChange($event)"
      />
      <span id="file-span">
        <label id="file-button" for="file">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M0.416666 14.5833C0.360813 14.5832 0.305551 14.5719 0.254166 14.55C0.178855 14.5181 0.114596 14.4647 0.0693992 14.3966C0.0242025 14.3284 6.6657e-05 14.2485 0 14.1667L0 2.08333C0 1.5308 0.219493 1.0009 0.610193 0.610194C1.00089 0.219493 1.5308 0 2.08333 0L17.9166 0C18.1902 0 18.4611 0.053887 18.7139 0.158584C18.9667 0.263282 19.1963 0.416739 19.3898 0.610194C19.5832 0.80365 19.7367 1.03331 19.8414 1.28608C19.9461 1.53884 20 1.80975 20 2.08333V9.16667C20.0005 9.24943 19.9763 9.33046 19.9305 9.39942C19.8848 9.46839 19.8195 9.52217 19.7431 9.5539C19.6667 9.58564 19.5825 9.5939 19.5014 9.57762C19.4202 9.56134 19.3458 9.52126 19.2875 9.4625L15.9166 6.09167C15.8386 6.01406 15.733 5.9705 15.6229 5.9705C15.5128 5.9705 15.4072 6.01406 15.3291 6.09167L8.86249 12.5583C8.82355 12.597 8.77738 12.6275 8.72662 12.6482C8.67585 12.669 8.62149 12.6795 8.56665 12.6792C8.51153 12.6789 8.45699 12.6678 8.40621 12.6463C8.35543 12.6249 8.30941 12.5935 8.27082 12.5542L5.77083 10.0542C5.73209 10.0151 5.68601 9.98412 5.63523 9.96296C5.58446 9.94181 5.53 9.93092 5.47499 9.93092C5.41999 9.93092 5.36553 9.94181 5.31475 9.96296C5.26398 9.98412 5.21789 10.0151 5.17916 10.0542L0.708332 14.4625C0.630724 14.5395 0.525974 14.5829 0.416666 14.5833V14.5833ZM2.08333 0.833333C1.75181 0.833333 1.43387 0.965029 1.19945 1.19945C0.965028 1.43387 0.833332 1.75181 0.833332 2.08333V13.1708L4.60833 9.45417C4.72446 9.33763 4.86245 9.24517 5.01439 9.18208C5.16633 9.11899 5.32922 9.08651 5.49374 9.08651C5.65826 9.08651 5.82116 9.11899 5.9731 9.18208C6.12504 9.24517 6.26303 9.33763 6.37916 9.45417V9.45417L8.57082 11.6667L14.7416 5.50417C14.9801 5.27791 15.2963 5.15178 15.625 5.15178C15.9537 5.15178 16.2699 5.27791 16.5083 5.50417L19.1666 8.1625V2.08333C19.1666 1.75181 19.0349 1.43387 18.8005 1.19945C18.5661 0.965029 18.2482 0.833333 17.9166 0.833333H2.08333Z"
                fill="black"
              />
              <path
                d="M15.8333 20H2.08334C1.80975 20 1.53884 19.9461 1.28608 19.8414C1.03332 19.7367 0.80365 19.5832 0.610195 19.3898C0.416739 19.1963 0.263282 18.9667 0.158584 18.7139C0.0538871 18.4611 0 18.1902 0 17.9167L0 14.1666C0.000228854 14.1115 0.0113952 14.057 0.0328522 14.0062C0.0543091 13.9554 0.08563 13.9094 0.125 13.8708L4.60834 9.45414C4.72447 9.33761 4.86246 9.24514 5.0144 9.18205C5.16634 9.11896 5.32924 9.08649 5.49375 9.08649C5.65827 9.08649 5.82117 9.11896 5.97311 9.18205C6.12505 9.24514 6.26304 9.33761 6.37917 9.45414L16.1292 19.2917C16.1865 19.3501 16.2253 19.4242 16.2408 19.5047C16.2563 19.5851 16.2477 19.6683 16.2161 19.7439C16.1845 19.8195 16.1314 19.8841 16.0633 19.9296C15.9952 19.9752 15.9153 19.9996 15.8333 20ZM0.833334 14.3416V17.9167C0.833334 18.2482 0.96503 18.5661 1.19945 18.8005C1.43387 19.035 1.75181 19.1667 2.08334 19.1667H14.8333L8.27501 12.5583L5.775 10.0583C5.73627 10.0193 5.69019 9.98826 5.63941 9.9671C5.58864 9.94595 5.53418 9.93506 5.47917 9.93506C5.42417 9.93506 5.36971 9.94595 5.31893 9.9671C5.26816 9.98826 5.22207 10.0193 5.18334 10.0583L0.833334 14.3416Z"
                fill="black"
              />
              <path
                d="M17.9166 20H15.8333C15.7782 19.9998 15.7236 19.9886 15.6729 19.9672C15.6221 19.9457 15.5761 19.9144 15.5375 19.875L8.27497 12.5584C8.19737 12.4803 8.15381 12.3747 8.15381 12.2646C8.15381 12.1545 8.19737 12.0489 8.27497 11.9709L14.7416 5.50418C14.9801 5.27793 15.2963 5.15179 15.625 5.15179C15.9537 5.15179 16.2699 5.27793 16.5083 5.50418L19.8791 8.87501C19.9561 8.95262 19.9995 9.05737 20 9.16668V17.9167C20 18.1903 19.9461 18.4612 19.8414 18.7139C19.7367 18.9667 19.5832 19.1964 19.3898 19.3898C19.1963 19.5833 18.9667 19.7367 18.7139 19.8414C18.4611 19.9461 18.1902 20 17.9166 20V20ZM16.0083 19.1667H17.9166C18.2482 19.1667 18.5661 19.035 18.8005 18.8006C19.0349 18.5662 19.1666 18.2482 19.1666 17.9167V9.33752L15.9208 6.09168C15.8427 6.01407 15.7371 5.97052 15.6271 5.97052C15.517 5.97052 15.4114 6.01407 15.3333 6.09168L9.16664 12.2667L16.0083 19.1667Z"
                fill="black"
              />
              <path
                d="M4.58333 6.66666C4.17129 6.66666 3.7685 6.54448 3.4259 6.31556C3.08329 6.08664 2.81627 5.76127 2.65859 5.38059C2.5009 4.99991 2.45965 4.58102 2.54003 4.17689C2.62042 3.77277 2.81884 3.40155 3.11019 3.11019C3.40155 2.81884 3.77277 2.62042 4.17689 2.54003C4.58102 2.45965 4.99991 2.5009 5.38059 2.65859C5.76127 2.81627 6.08664 3.08329 6.31556 3.4259C6.54448 3.7685 6.66666 4.17129 6.66666 4.58333C6.66666 5.13587 6.44717 5.66577 6.05647 6.05647C5.66577 6.44717 5.13587 6.66666 4.58333 6.66666ZM4.58333 3.33333C4.33611 3.33333 4.09443 3.40664 3.88887 3.544C3.68331 3.68135 3.52309 3.87657 3.42848 4.10498C3.33387 4.33339 3.30912 4.58472 3.35735 4.8272C3.40558 5.06967 3.52463 5.2924 3.69945 5.46722C3.87427 5.64203 4.09699 5.76108 4.33947 5.80931C4.58195 5.85754 4.83328 5.83279 5.06169 5.73818C5.29009 5.64357 5.48532 5.48336 5.62267 5.27779C5.76002 5.07223 5.83333 4.83056 5.83333 4.58333C5.83333 4.25181 5.70164 3.93387 5.46722 3.69945C5.2328 3.46503 4.91485 3.33333 4.58333 3.33333Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </label>
      </span>
      <span title="Инвертировать">
        <label for="invert" id="invert-label">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.91156 19.0896L19.0896 19.0884L19.0884 0.91036L0.91036 0.91156L0.91156 19.0896ZM0.907951 0H19.092C19.5935 0 20 0.398741 20 0.907951V19.092C20 19.5935 19.6013 20 19.092 20H0.907951C0.406503 20 0 19.6013 0 19.092V0.907951C0 0.406503 0.398741 0 0.907951 0Z"
              fill="#444444"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.8668 0.776003L19.224 0.133179L0.133057 19.2241L0.775881 19.8669L19.8668 0.776003Z"
              fill="#444444"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0001 16.8182C13.7656 16.8182 16.8182 13.7656 16.8182 10C16.8182 6.23443 13.7656 3.18182 10.0001 3.18182C6.23449 3.18182 3.18188 6.23443 3.18188 10C3.18188 13.7656 6.23449 16.8182 10.0001 16.8182ZM10.0001 15.9091C13.2636 15.9091 15.9092 13.2635 15.9092 10C15.9092 6.73651 13.2636 4.09091 10.0001 4.09091C6.73657 4.09091 4.09098 6.73651 4.09098 10C4.09098 13.2635 6.73657 15.9091 10.0001 15.9091Z"
              fill="#444444"
            />
            <path
              d="M2.2729 2.72727C2.52394 2.72727 2.72745 2.52376 2.72745 2.27272C2.72745 2.02168 2.52394 1.81818 2.2729 1.81818C2.02187 1.81818 1.81836 2.02168 1.81836 2.27272C1.81836 2.52376 2.02187 2.72727 2.2729 2.72727Z"
              fill="#444444"
            />
            <path
              d="M4.09102 4.5455C4.34206 4.5455 4.54557 4.342 4.54557 4.09096C4.54557 3.83992 4.34206 3.63641 4.09102 3.63641C3.83998 3.63641 3.63647 3.83992 3.63647 4.09096C3.63647 4.342 3.83998 4.5455 4.09102 4.5455Z"
              fill="#444444"
            />
            <path
              d="M5.90914 2.72727C6.16017 2.72727 6.36368 2.52376 6.36368 2.27272C6.36368 2.02168 6.16017 1.81818 5.90914 1.81818C5.6581 1.81818 5.45459 2.02168 5.45459 2.27272C5.45459 2.52376 5.6581 2.72727 5.90914 2.72727Z"
              fill="#444444"
            />
            <path
              d="M9.54561 2.72727C9.79665 2.72727 10.0002 2.52376 10.0002 2.27272C10.0002 2.02168 9.79665 1.81818 9.54561 1.81818C9.29457 1.81818 9.09106 2.02168 9.09106 2.27272C9.09106 2.52376 9.29457 2.72727 9.54561 2.72727Z"
              fill="#444444"
            />
            <path
              d="M13.1818 2.72727C13.4329 2.72727 13.6364 2.52376 13.6364 2.27272C13.6364 2.02168 13.4329 1.81818 13.1818 1.81818C12.9308 1.81818 12.7273 2.02168 12.7273 2.27272C12.7273 2.52376 12.9308 2.72727 13.1818 2.72727Z"
              fill="#444444"
            />
            <path
              d="M2.2729 6.36362C2.52394 6.36362 2.72745 6.16011 2.72745 5.90907C2.72745 5.65804 2.52394 5.45453 2.2729 5.45453C2.02187 5.45453 1.81836 5.65804 1.81836 5.90907C1.81836 6.16011 2.02187 6.36362 2.2729 6.36362Z"
              fill="#444444"
            />
            <path
              d="M2.2729 10C2.52394 10 2.72745 9.79653 2.72745 9.54549C2.72745 9.29445 2.52394 9.09094 2.2729 9.09094C2.02187 9.09094 1.81836 9.29445 1.81836 9.54549C1.81836 9.79653 2.02187 10 2.2729 10Z"
              fill="#444444"
            />
            <path
              d="M2.2729 13.6364C2.52394 13.6364 2.72745 13.4329 2.72745 13.1818C2.72745 12.9308 2.52394 12.7273 2.2729 12.7273C2.02187 12.7273 1.81836 12.9308 1.81836 13.1818C1.81836 13.4329 2.02187 13.6364 2.2729 13.6364Z"
              fill="#444444"
            />
            <path
              d="M14.091 9.09092C14.3421 9.09092 14.5456 8.88741 14.5456 8.63637C14.5456 8.38533 14.3421 8.18182 14.091 8.18182C13.84 8.18182 13.6365 8.38533 13.6365 8.63637C13.6365 8.88741 13.84 9.09092 14.091 9.09092Z"
              fill="#444444"
            />
            <path
              d="M12.2729 10.9091C12.5239 10.9091 12.7275 10.7056 12.7275 10.4545C12.7275 10.2035 12.5239 10 12.2729 10C12.0219 10 11.8184 10.2035 11.8184 10.4545C11.8184 10.7056 12.0219 10.9091 12.2729 10.9091Z"
              fill="#444444"
            />
            <path
              d="M14.091 12.7273C14.3421 12.7273 14.5456 12.5238 14.5456 12.2728C14.5456 12.0217 14.3421 11.8182 14.091 11.8182C13.84 11.8182 13.6365 12.0217 13.6365 12.2728C13.6365 12.5238 13.84 12.7273 14.091 12.7273Z"
              fill="#444444"
            />
            <path
              d="M10.4545 12.7273C10.7056 12.7273 10.9091 12.5238 10.9091 12.2728C10.9091 12.0217 10.7056 11.8182 10.4545 11.8182C10.2035 11.8182 10 12.0217 10 12.2728C10 12.5238 10.2035 12.7273 10.4545 12.7273Z"
              fill="#444444"
            />
            <path
              d="M8.63643 14.5454C8.88747 14.5454 9.09098 14.3419 9.09098 14.0909C9.09098 13.8399 8.88747 13.6364 8.63643 13.6364C8.38539 13.6364 8.18188 13.8399 8.18188 14.0909C8.18188 14.3419 8.38539 14.5454 8.63643 14.5454Z"
              fill="#444444"
            />
            <path
              d="M12.2729 14.5454C12.5239 14.5454 12.7275 14.3419 12.7275 14.0909C12.7275 13.8399 12.5239 13.6364 12.2729 13.6364C12.0219 13.6364 11.8184 13.8399 11.8184 14.0909C11.8184 14.3419 12.0219 14.5454 12.2729 14.5454Z"
              fill="#444444"
            />
          </svg>
          <div class="tick">
            <svg
              v-show="invert"
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M19.1599 2.76002C18.6799 2.28002 17.9199 2.28002 17.4599 2.76002L6.53993 13.58L3.01993 10.04C2.47993 9.50002 1.57993 9.46002 0.999926 9.98002C0.399926 10.52 0.339926 11.46 0.879926 12.06L5.31993 17.06C5.35993 17.1 5.39993 17.14 5.43993 17.18C6.09993 17.78 7.11993 17.72 7.71993 17.06L19.1799 4.42002C19.6199 3.94002 19.5999 3.22002 19.1599 2.76002Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              v-show="!invert"
              width="14"
              height="14"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.83551 0.164908C9.61608 -0.0549347 9.26009 -0.0549345 9.04066 0.1647L5.00022 4.20202L0.959365 0.1647C0.739939 -0.0549345 0.383944 -0.0549347 0.164518 0.164908C-0.0549086 0.384542 -0.0549085 0.740538 0.164934 0.959756L4.20475 4.99645L0.164934 9.03314C-0.0549085 9.25257 -0.0549086 9.60835 0.164518 9.82778C0.274231 9.9377 0.418294 9.99266 0.562149 9.99266C0.706005 9.99266 0.84986 9.9377 0.959365 9.8282L5.00001 5.79088L9.04045 9.8282C9.15017 9.9377 9.29402 9.99266 9.43767 9.99266C9.58173 9.99266 9.72559 9.9377 9.8353 9.82778C10.0547 9.60815 10.0547 9.25236 9.83488 9.03314L5.79507 4.99645L9.83488 0.959756C10.0549 0.740538 10.0549 0.384542 9.83551 0.164908Z"
                fill="#444444"
              />
            </svg>
          </div>
        </label>
        <input
          id="invert"
          type="checkbox"
          v-model="invert"
          @change="fillCanvas()"
        />
      </span>
      <span title="Размер символов">
        <label for="text-size">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 1H2C1.44772 1 1 1.44772 1 2V18C1 18.5523 1.44772 19 2 19H18C18.5523 19 19 18.5523 19 18V2C19 1.44772 18.5523 1 18 1ZM2 0C0.895431 0 0 0.895431 0 2V18C0 19.1046 0.895431 20 2 20H18C19.1046 20 20 19.1046 20 18V2C20 0.895431 19.1046 0 18 0H2Z"
              fill="#444444"
            />
            <path
              d="M4.33333 5.66669C4.51667 5.66669 4.66667 5.51669 4.66667 5.33335V4.33335H9.66667V15.6667H8C7.81667 15.6667 7.66667 15.8167 7.66667 16C7.66667 16.1834 7.81667 16.3334 8 16.3334H12C12.1833 16.3334 12.3333 16.1834 12.3333 16C12.3333 15.8167 12.1833 15.6667 12 15.6667H10.3333V4.33335H15.3333V5.33335C15.3333 5.51669 15.4833 5.66669 15.6667 5.66669C15.85 5.66669 16 5.51669 16 5.33335V4.00002C16 3.81669 15.85 3.66669 15.6667 3.66669H4.33333C4.15 3.66669 4 3.81669 4 4.00002V5.33335C4 5.51669 4.15 5.66669 4.33333 5.66669Z"
              fill="#444444"
            />
          </svg>
        </label>
        <select id="text-size" v-model="fontSize" @change="fillCanvas()">
          <option
            :value="i"
            v-for="i in [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]"
            :key="i"
            >{{ i }}px</option
          >
        </select>
      </span>
      <span title="Контрастность">
        <label for="contrast">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 1H2C1.44772 1 1 1.44772 1 2V18C1 18.5523 1.44772 19 2 19H18C18.5523 19 19 18.5523 19 18V2C19 1.44772 18.5523 1 18 1ZM2 0C0.895431 0 0 0.895431 0 2V18C0 19.1046 0.895431 20 2 20H18C19.1046 20 20 19.1046 20 18V2C20 0.895431 19.1046 0 18 0H2Z"
              fill="#444444"
            />
            <path
              d="M6.18161 13.8184C8.2905 15.9273 11.7095 15.9273 13.8184 13.8184C15.9272 11.7095 15.9272 8.29053 13.8184 6.18164L6.18161 13.8184Z"
              fill="#444444"
            />
            <path
              d="M5.16339 14.8366C2.49651 12.1697 2.49651 7.83027 5.16339 5.16339C7.83027 2.49651 12.1697 2.49651 14.8366 5.16339C17.5035 7.83027 17.5035 12.1697 14.8366 14.8366C12.1697 17.5035 7.83027 17.5035 5.16339 14.8366ZM14.3275 5.67251C11.9413 3.28628 8.05874 3.28628 5.67251 5.67251C3.28628 8.05874 3.28627 11.9413 5.67251 14.3275C8.05874 16.7137 11.9413 16.7137 14.3275 14.3275C16.7137 11.9413 16.7137 8.05874 14.3275 5.67251Z"
              fill="#444444"
            />
          </svg>
        </label>
        <select id="contrast" v-model="contrast" @change="fillCanvas()">
          <option
            :value="i"
            v-for="i in [
              -100,
              -90,
              -80,
              -70,
              -60,
              -50,
              -40,
              -30,
              -20,
              -10,
              0,
              10,
              20,
              30,
              40,
              50,
              60,
              70,
              80,
              90,
              100
            ]"
            :key="i"
            >{{ i }}%</option
          >
        </select>
      </span>
    </form>

    <div id="container">
      <textarea
        id="textbox"
        v-show="filename && output"
        spellcheck="false"
      ></textarea>
      <canvas id="image" v-show="filename && output"></canvas>
      <label v-show="!filename" for="file" id="file-icon">
        <!-- <svg
          viewBox="0 0 200 200"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M123.577 34.1064V-0.390625H42.3069C31.7768 -0.390625 23.0472 8.28705 23.0472 18.8156V180.403C23.0472 190.933 31.7768 199.609 42.3069 199.609H158.286C168.814 199.609 177.544 190.932 177.544 180.403V56.2225H145.745C133.471 56.2225 123.577 46.3287 123.577 34.1064ZM66.222 98.6038L97.2279 65.3244C98.0213 64.4775 99.1322 64.0015 100.348 64.0015C101.566 64.0015 102.623 64.4775 103.47 65.3244L134.476 98.6038C136.063 100.298 135.958 102.995 134.264 104.584C133.471 105.324 132.412 105.695 131.408 105.695C130.295 105.695 129.132 105.219 128.286 104.372L104.529 78.9749V139.45C104.529 141.779 102.625 143.683 100.296 143.683C97.9679 143.683 96.0636 141.779 96.0636 139.45V78.9749L72.4125 104.372C70.8256 106.064 68.1263 106.171 66.4341 104.584C64.7404 102.995 64.6351 100.351 66.222 98.6038ZM148.073 167.334C148.073 169.663 146.169 171.567 143.84 171.567H56.7509C54.4224 171.567 52.5181 169.663 52.5181 167.334C52.5181 165.006 54.4224 163.101 56.7509 163.101H143.894C146.222 163.101 148.073 165.007 148.073 167.334Z"
            fill="none"
          />
          <path
            d="M145.746 47.757H171.724L132.042 6.11731V34.1065C132.042 41.6733 138.126 47.757 145.746 47.757Z"
            fill="none"
          />
        </svg> -->
        <svg viewBox="0 0 202 268" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M101.132 0.792694C100.393 0.792694 99.7122 1.07074 99.3098 1.4805L52.1366 48.6537C51.0317 49.6927 51.0464 51.0683 52.1 52.1366V52.1512H52.1147C53.183 53.2195 54.6976 53.2195 55.7659 52.1512L98.4391 9.47806V148.817C98.4391 150.324 99.5439 151.429 101.051 151.429C102.559 151.429 103.663 150.324 103.663 148.817V9.55123L146.337 52.2244C146.885 52.7732 147.471 52.9927 148.195 52.9927C148.92 52.9927 149.505 52.7732 150.054 52.2244C151.122 51.1561 151.122 49.6415 150.054 48.5732L102.961 1.4805C102.559 1.07806 101.871 0.792694 101.139 0.792694H101.132ZM31.3415 93.4854C14.483 93.4854 0.7854 107.19 0.7854 124.056V236.659C0.7854 253.517 14.4756 267.229 31.3415 267.229H170.659C187.598 267.229 201.229 253.598 201.229 236.659V124.107C201.229 107.241 187.524 93.5366 170.659 93.5366H148.093C146.6 93.5366 145.481 94.6634 145.481 96.1634C145.481 97.6634 146.585 98.7756 148.093 98.7756H170.659C184.605 98.7756 196.056 110.205 196.056 124.159V236.761C196.056 250.715 184.605 262.144 170.659 262.144H31.3415C17.3952 262.144 5.95857 250.707 5.95857 236.761V124.107C5.95857 110.161 17.3952 98.7244 31.3415 98.7244H53.9074C55.4 98.7244 56.5195 97.5976 56.5195 96.0976C56.5195 94.5976 55.4147 93.4854 53.9074 93.4854H31.3415V93.4854Z"
            fill="#444444"
          />
        </svg>
      </label>
      <div id="file-icon" v-show="filename && !output" class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <canvas id="compressed" hidden></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixedWidth: null,
      filename: "",
      compressed: null,
      container: null,
      textbox: null,
      image: null,
      img: null,
      WIDTH: 500,
      oldWidth: 0,
      fontSize: 5,
      invert: false,
      contrast: 0,
      output: "",
      lightness: { r: 0.2126, g: 0.7152, b: 0.0722 },
      chars: `$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,"^\`'.\u00A0`
    };
  },
  mounted() {
    this.checkWidth();
    this.oldWidth = this.WIDTH;
    this.image = document.getElementById("image");
    this.compressed = document.getElementById("compressed");
    this.container = document.getElementById("container");
    this.textbox = document.getElementById("textbox");
    this.img = new Image();
    let cont = this;
    window.addEventListener("resize", () => {
      cont.onResize();
    });
  },
  watch: {
    output: function(val) {
      if (val) {
        this.$emit("showCopy");
      } else {
        this.$emit("hideCopy");
      }
    },
    filename: function(val) {
      if (val) {
        this.$emit("showCopy");
      } else {
        this.$emit("hideCopy");
      }
    }
  },
  methods: {
    copyIt: function() {
      this.textbox.select();
      document.execCommand("copy");
      this.textbox.blur();
      this.textbox.value = this.output;
    },

    checkWidth: function() {
      if (this.fixedWidth > 0) {
        this.oldWidth = this.fixedWidth;
        this.WIDTH = this.fixedWidth;
      } else if (window.innerWidth > 1024) {
        this.WIDTH = (window.innerWidth * 0.9) / 2 - 100;
      } else {
        this.WIDTH = window.innerWidth * 0.9 - 50;
      }
    },

    onResize: function() {
      this.checkWidth();
      if (this.WIDTH != this.oldWidth) this.fillCanvas();
      this.oldWidth = this.WIDTH;
    },

    onFileChange(e) {
      this.filename = "";
      this.output = "";
      this.textbox.value = "";
      this.checkWidth;
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.filename = files[0].name;
      this.createImage(files[0]);
    },

    createImage(file) {
      var reader = new FileReader();
      reader.onload = e => {
        this.img.src = e.target.result;
      };
      let cont = this;
      reader.onloadend = function() {
        setTimeout(() => {
          cont.fillCanvas();
        }, 500);
      };

      reader.readAsDataURL(file);
    },

    contrastImage: function(imageData, contrast) {
      // contrast as an integer percent
      var data = imageData.data; // original array modified, but canvas not updated
      contrast *= 2.55; // or *= 255 / 100; scale integer percent to full range
      var factor = (255 + contrast) / (255.01 - contrast); //add .1 to avoid /0 error

      for (var i = 0; i < data.length; i += 4) {
        data[i] = factor * (data[i] - 128) + 128; //r value
        data[i + 1] = factor * (data[i + 1] - 128) + 128; //g value
        data[i + 2] = factor * (data[i + 2] - 128) + 128; //b value
      }
      return imageData; //optional (e.g. for filter function chaining)
    },

    fillCanvas: function() {
      this.checkWidth();
      let context = this.image.getContext("2d");
      let ctx = this.compressed.getContext("2d");
      if (!this.img.src) {
        return;
      }

      this.image.style.width = this.WIDTH + "px";
      this.image.width = this.WIDTH;
      this.image.height = this.img.height * (this.WIDTH / this.img.width);
      context.scale(this.WIDTH / this.img.width, this.WIDTH / this.img.width);

      context.drawImage(this.img, 0, 0);

      this.textbox.style.fontSize = this.fontSize + "px";
      this.textbox.style.lineHeight = this.fontSize + "px";

      let cols = Math.round((context.canvas.width / this.fontSize) * 1.66);
      let rows = Math.round(context.canvas.height / (this.fontSize * 1));

      this.textbox.style.width = this.image.width + "px";
      this.textbox.style.height = context.canvas.height + "px";

      if (ctx) {
        this.compressed.width = cols; // DO NOT TOUCH
        this.compressed.height = rows; // DO NOT TOUCH
        this.image.style.filter = `contrast(${1 + this.contrast / 100})`;

        let scaleX = this.img.width / cols;
        let scaleY = this.img.height / rows;
        ctx.scale(1 / scaleX, 1 / scaleY);
        ctx.drawImage(this.img, 0, 0);

        let imageData = ctx.getImageData(0, 0, cols, rows);
        ctx.putImageData(this.contrastImage(imageData, this.contrast), 0, 0);

        let pixels = imageData.data;
        let col = 1;
        this.output = "";
        for (let i = 0; i < pixels.length; i += 4) {
          let r = pixels[i];
          let g = pixels[i + 1];
          let b = pixels[i + 2];
          let luminance =
            (r * this.lightness.r + //0.3
            g * this.lightness.g + //0.59
              b * this.lightness.b) / //0.11
            3.69;

          if (Math.round(luminance) > 69 || Math.round(luminance) < 0) {
            console.log("out of array");
          }

          let c = null;
          if (this.invert) {
            c = this.chars[this.chars.length - 1 - Math.round(luminance)];
          } else c = this.chars[Math.round(luminance)];

          this.output += c;
          if (col == cols) {
            col = 1;
            this.output += "\n";
          } else {
            col += 1;
          }
        }
        this.textbox.innerHTML = this.output;
        this.textbox.innerText = this.output;
        this.textbox.value = this.output;
      }
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.tick {
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  margin: 0 2px 0 0;
}

#file {
  display: flex;
  text-align: center;
  background: #888;
  width: 0;
  height: 0;
  padding: 0px;
  margin: 0px;
}

#form {
  display: flex;
  width: fit-content;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  position: fixed;
  top: 150px;
  left: 50%;
  padding: 0;
  transform: translate(-50%);
  background: var(--bgColor);
  border-radius: 4px;
  z-index: 1;
  transition: 0.4s;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Courier New Cyr", "Courier New", monospace;
    margin: 0 5px;
    color: var(--dark-text);
    border-radius: 4px;
    padding: -2px;
    background: var(--bgColor);
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: inset 0 0 0 1.1px var(--dark-text);

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      img,
      svg {
        height: 30px;
        float: left;
        margin-right: 5px;
        path {
          fill: var(--normal-text);
        }
      }

      &#invert-label {
        width: 100%;
        justify-content: space-between;
      }
    }

    input,
    select {
      border: 2px solid var(--dark-text);
      height: 20px;
      border: 0;
      background: transparent;
      font-family: "Courier New Cyr", "Courier New", Courier, monospace;
      font-size: 1em;
      color: var(--dark-text);
      outline: none;
      cursor: pointer;

      option {
        background-color: var(--bgColor);
        color: var(--dark-text);
      }
    }

    input[type="checkbox"] {
      visibility: hidden;
      width: 0;
    }

    &#file-span {
      padding: 0;
      border: 0;

      #file-button {
        width: 100%;
        padding: 0;
        border-radius: 4px;
        text-align: center;
        background: var(--bgColor);
        color: var(--dark-text);
        font-weight: bolder;

        svg {
          margin: 0;
        }

        cursor: pointer;
        transition: 0.3s;

        i {
          padding: 5px 0;
          text-align: center;
          overflow: hidden;
        }
      }
    }
  }
}

#container {
  width: 90%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 70px 0;

  #file-icon {
    user-select: none;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    svg {
      width: 140px;
      margin: 100px;
      transition: 0.3s;

      &:hover {
        width: 145px;
      }
      path {
        fill: rgba(0, 0, 0, 0.2);
      }
    }
  }
}

#image {
  margin: 2px 10px;
}

#textbox {
  font-family: "Courier New Cyr", "Courier New", monospace;
  margin: 2px 10px;
  overflow: hidden;
  outline: none;
  border: 0px;
  resize: none;
  background-color: transparent;

  &::selection {
    background: transparent;
  }
}

@media screen and (min-width: 1024px) {
  #container {
    flex-direction: row;
  }
  #form {
    font-size: 1.1em;
  }
}

@media screen and (max-width: 1024px) {
  #container {
    flex-direction: column;

    #file-icon svg {
      width: 90px;
      &:hover {
        width: 95px;
      }
    }
  }
  #form {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 414px) {
  #container {
    flex-direction: column;
    padding-top: 0;
    margin-top: 0;
  }
  #form {
    font-size: 0.9rem;
    top: 80px;
    padding: 10px 0;

    span {
      height: 25px;
      &#file-span label {
        height: 25px;
      }
      svg {
        width: 15px;
      }
    }
  }

  #file-icon svg {
    width: 80px;
    &:hover {
      width: 85px;
    }
  }
}

// spinner

.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--light-text);
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
