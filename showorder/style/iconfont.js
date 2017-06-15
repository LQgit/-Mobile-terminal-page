;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-weibo" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M407.859 574.347c-15.395 1.61-26.392 14.995-26.392 27.765 0 12.799 12.41 21.669 27.719 19.871 15.221-1.762 27.718-13.596 27.718-26.312C436.905 582.782 425.425 572.633 407.859 574.347zM446.197 478.184c-81.6 3.708-147.581 47.4-147.581 101.98 0 54.469 65.981 95.343 147.581 91.562 81.6-3.712 147.736-54.854 147.736-109.274C593.933 508.018 527.796 474.398 446.197 478.184zM501.715 615.269c-24.915 32.244-74.336 48.024-122.438 22.02-22.807-12.378-22.025-36.741-22.025-36.741s-9.447-76.924 72.618-86.526C512.104 504.454 526.785 582.979 501.715 615.269zM446.742 563.765c-5.315 3.871-6.321 11.09-3.516 15.667 2.735 4.604 9.062 5.187 14.296 1.318 5.073-4.021 7.102-11.019 4.368-15.659C459.16 560.563 452.833 559.276 446.742 563.765zM499.997 51.393c-246.834 0-446.896 200.066-446.896 446.896 0 246.875 200.062 446.905 446.896 446.905 246.841 0 446.902-200.03 446.902-446.905C946.899 251.459 746.838 51.393 499.997 51.393zM666.875 598.561c-33.661 71.478-144.543 106.237-226.844 99.796-78.096-6.125-178.508-32.026-188.978-126.664 0 0-5.464-42.746 35.999-98.185 0 0 59.737-83.487 129.389-107.219 69.662-23.703 77.7 16.399 77.7 40.094-3.666 20.107-10.7 31.855 15.457 23.779 0 0 68.494-31.741 96.597-3.599 22.807 22.766 3.753 54.037 3.753 54.037s-9.453 10.398 9.992 14.168C639.311 498.601 700.53 526.947 666.875 598.561zM599.405 401.071c-7.419 0-13.429-6.001-13.429-13.395 0-7.494 6.01-13.547 13.429-13.547 0 0 83.869-15.493 73.871 74.615 0 0.584-0.081 0.98-0.155 1.402-1.091 6.4-6.556 11.323-13.118 11.323-7.579 0-13.589-6.012-13.589-13.396C646.414 448.075 659.692 387.749 599.405 401.071zM741.212 463.892h-0.075c-2.264 32.577-9.837 21.163-18.898 21.163-10.773 0-19.365-5.382-19.365-16.248 0-9.331 3.821-17.207 3.821-17.207 1.092-3.908 10.309-27.576-6.004-64.157-29.839-50.082-89.96-50.405-97.069-47.513-7.027 2.763-17.727 4.416-17.727 4.416-10.774 0-19.519-8.669-19.519-19.366 0-9.066 5.93-16.482 14.21-18.828 0 0 0.23-0.024 0.545-0.115 0.546-0.109 1.173-0.233 1.873-0.307 8.281-1.563 38.109-13.002 67.162-6.216C702.086 311.584 773.236 366.548 741.212 463.892z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M570.625024 510.793728c-10.160128 0-20.32128 9.435136-20.32128 21.046272 0 9.435136 10.160128 18.869248 20.32128 18.869248 15.240192 0 26.126336-9.435136 26.126336-18.869248C596.75136 520.228864 585.865216 510.793728 570.625024 510.793728z"  ></path>' +
    '' +
    '<path d="M503.856128 412.818432c15.966208 0 26.126336-10.160128 26.126336-25.401344 0-15.966208-10.160128-25.401344-26.126336-25.401344-15.240192 0-29.755392 9.435136-29.755392 25.401344C474.100736 402.658304 488.615936 412.818432 503.856128 412.818432z"  ></path>' +
    '' +
    '<path d="M511.839232 65.717248c-246.009856 0-445.44 199.430144-445.44 445.44s199.430144 445.44 445.44 445.44 445.44-199.430144 445.44-445.44S757.849088 65.717248 511.839232 65.717248zM427.65312 624.01024c-26.852352 0-46.447616-4.354048-71.84896-11.61216l-73.299968 37.013504 21.046272-62.413824c-51.52768-36.287488-82.009088-82.009088-82.009088-137.89184 0-98.701312 92.895232-174.178304 206.111744-174.178304 100.15232 0 189.41952 59.510784 206.83776 143.69792-7.257088-1.451008-13.789184-2.177024-19.595264-2.177024-98.701312 0-174.90432 74.025984-174.90432 163.29216 0 15.240192 2.177024 29.029376 5.80608 43.544576C439.991296 624.01024 433.4592 624.01024 427.65312 624.01024zM730.289152 695.133184l14.5152 52.253696-55.156736-31.207424c-21.046272 4.354048-41.367552 10.886144-62.413824 10.886144-97.250304 0-174.178304-66.768896-174.178304-149.502976s76.929024-149.502976 174.178304-149.502976c92.169216 0 174.90432 66.768896 174.90432 149.502976C802.137088 624.01024 770.930688 665.377792 730.289152 695.133184z"  ></path>' +
    '' +
    '<path d="M360.159232 362.016768c-15.240192 0-31.207424 9.435136-31.207424 25.401344 0 15.240192 15.966208 25.401344 31.207424 25.401344 14.5152 0 26.126336-10.160128 26.126336-25.401344C386.285568 371.45088 374.673408 362.016768 360.159232 362.016768z"  ></path>' +
    '' +
    '<path d="M684.566528 510.793728c-10.886144 0-20.32128 9.435136-20.32128 21.046272 0 9.435136 9.435136 18.869248 20.32128 18.869248 14.5152 0 25.401344-9.435136 25.401344-18.869248C709.967872 520.228864 699.081728 510.793728 684.566528 510.793728z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qq" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.999998 0C229.232866 0 0.021487 229.220588 0.021487 512s229.211379 512 511.978511 512 511.978511-229.220588 511.978511-512S794.76713 0 511.999998 0zM793.886063 671.573345c-13.223163 12.342096-35.924187-1.102101-57.744145-31.296797-9.476839 25.566282-21.818935 49.149397-36.144198 70.309322 30.854728 11.019984 50.691519 28.211529 50.691519 47.608298 0 33.500998-59.287291 60.611449-132.457778 60.611449-43.417859 0-81.767282-9.476839-106.010429-24.24417-24.023136 14.767332-62.59257 24.24417-106.010429 24.24417-73.17151 0-132.457778-27.109428-132.457778-60.611449 0-19.174712 19.835767-36.586267 50.691519-47.608298-14.546298-21.158902-26.66736-44.742017-36.144198-70.309322-21.818935 29.974685-44.518936 43.639916-57.744145 31.296797-18.072611-16.97051-11.239995-76.921927 15.647375-133.785006 6.170536-13.004175 12.783141-24.685215 19.614733-34.82311 3.746324-165.30386 112.62201-297.986765 246.180865-297.986765l0.441045 0c133.558855 0 242.434541 132.462894 246.180865 297.986765 6.832615 10.138918 13.444197 21.819958 19.614733 34.82311C804.906048 594.652442 811.958674 654.602835 793.886063 671.573345z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-quxiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M513.43007 1019.262092c-280.20375 0-507.388982-227.207745-507.388982-507.410472 0-280.224216 227.185232-507.409448 507.388982-507.409448 280.247752 0 507.391029 227.185232 507.391029 507.409448C1020.821099 792.054347 793.678846 1019.262092 513.43007 1019.262092zM746.107387 363.903034c9.540284-9.53926 9.540284-25.021883 0-34.539654l-51.822272-51.800783c-9.535167-9.558703-24.977881-9.558703-34.518165 0L512.976746 424.334381 366.184495 277.562597c-9.53619-9.558703-24.977881-9.558703-34.518165 0l-51.822272 51.800783c-9.538237 9.517771-9.538237 25.001417 0 34.539654l146.793274 146.770761-146.793274 146.790204c-9.538237 9.518794-9.538237 25.004487 0 34.540677l51.822272 51.79976c9.540284 9.538237 24.981974 9.538237 34.518165 0L512.976746 597.014232l146.790204 146.790204c9.540284 9.538237 24.982998 9.538237 34.518165 0l51.822272-51.79976c9.540284-9.53619 9.540284-25.021883 0-34.540677L599.317183 510.674818 746.107387 363.903034z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.999488 47.886637C255.676635 47.886637 47.886125 255.677147 47.886125 512S255.676635 976.113363 511.999488 976.113363s464.113363-207.79051 464.113363-464.113363S768.322341 47.886637 511.999488 47.886637zM619.753631 308.950468c0 0 87.833441 39.407522 112.587218 135.108141l-112.587218 97.389074L619.753631 308.950468zM605.672938 302.738999l0 150.304238L444.663894 293.723671C531.379884 263.331477 605.672938 302.738999 605.672938 302.738999zM427.779342 298.789037l104.142895 105.83135L308.438303 404.620387C308.438303 404.621411 340.518952 332.588841 427.779342 298.789037zM298.849924 420.419212l152.568814 0L288.719192 571.842946C288.719192 571.842946 263.361665 490.793002 298.849924 420.419212zM402.452513 713.13288c0 0-66.998927-23.036669-110.929462-125.521808l110.929462-98.5362L402.452513 713.13288zM418.221662 721.575156 418.221662 580.285223l154.284899 153.138796C475.086787 757.63442 418.221662 721.575156 418.221662 721.575156zM587.643306 728.35763l-97.93245-100.19191 218.989573 0C708.700429 628.16572 682.258197 699.110515 587.643306 728.35763zM720.552361 609.019661 572.506561 609.019661l162.127518-150.910035C734.633055 458.109626 763.336794 504.270968 720.552361 609.019661z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dianhua" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M744.426607 959.264627 744.408187 959.264627l-4.619204-0.103354c-107.472733-5.497201-252.610298-106.652042-388.285351-270.595928l-50.115398-60.531632C165.713182 464.077547 94.631264 303.948547 111.25385 199.680808c11.732206-73.561389 121.098056-135.641283 183.590342-135.641283 30.780027 0 41.930995 15.31787 45.829791 24.464181 35.375695 62.86784 79.147618 172.198897 79.349209 211.411991l0.013303 2.790556-1.000793 2.605338c-7.801686 20.612457-25.25929 30.487362-40.661072 39.197744-20.290115 11.466146-31.82073 18.99461-33.228799 40.670282-0.418532 6.577812 5.254677 36.501332 94.765317 146.84137l38.268582 46.209438c89.75828 105.928564 117.998461 117.331265 124.610042 118.27373 21.644973 3.010567 31.837102-6.479575 47.40466-23.544229 11.850909-12.993942 25.295106-27.740808 47.478338-30.988782l2.808976-0.400113 2.761903 0.586354c39.08825 8.242731 139.142014 72.724325 195.942671 120.596635 8.200776 5.442966 22.512736 21.601994 11.17962 57.299007C892.588041 876.115881 815.084876 959.264627 744.426607 959.264627L744.426607 959.264627z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M399.729495 69.418023 624.127242 69.418023 624.127242 399.801638 954.579419 399.801638 954.579419 624.195292 624.127242 624.195292 624.127242 954.581977 399.729495 954.581977 399.729495 624.195292 69.419558 624.195292 69.419558 399.801638 399.729495 399.801638Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhifushibai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.230933 0 0 229.230933 0 512s229.230933 512 512 512 512-229.230933 512-512S794.769067 0 512 0zM677.7088 654.045867c6.536533 6.536533 6.536533 17.134933 0 23.671467s-17.134933 6.536533-23.671467 0L512 535.671467 369.954133 677.7088c-6.536533 6.536533-17.134933 6.536533-23.671467 0s-6.536533-17.134933 0-23.671467L488.337067 512 346.2912 369.954133c-6.536533-6.536533-6.536533-17.134933 0-23.671467s17.134933-6.536533 23.671467 0L512 488.32 654.037333 346.282667c6.536533-6.536533 17.134933-6.536533 23.671467 0s6.536533 17.134933 0 23.671467L535.671467 512 677.7088 654.045867z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wujiaoxingshi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M748.115114 931.784762c-10.288321 0-20.627806-2.540869-29.955242-7.344269l-206.233038-101.506858-208.043267 101.731986c-20.119223 10.624988-47.927569 8.762571-67.366294-5.424546-19.614733-13.963013-29.731138-38.774095-25.659403-62.963007l42.893926-220.306568L90.135368 484.845547c-17.972327-17.524119-24.358781-43.520189-16.731056-66.6377 7.40362-23.284309 27.299763-40.23947 51.829436-43.913139l227.084948-41.201377 101.788268-204.878181c11.07729-22.210861 33.288151-36.000935 57.876152-36.000935 24.470321 0 47.194882 14.186094 57.81987 36.172851l101.731986 204.593701 227.709165 40.015366c23.961738 3.558036 43.856857 20.400632 51.373041 43.913139 7.571443 22.99983 1.184989 49.001017-16.277732 66.011436L770.214435 635.971499l41.484833 219.909525c4.239558 24.418133-5.880941 49.229215-25.828248 63.584154C775.073092 927.3211 761.564427 931.784762 748.115114 931.784762L748.115114 931.784762zM511.983115 772.573667"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gou" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M511.974401 0c-282.75527 0-511.974401 229.219131-511.974401 511.974401 0 282.757318 229.219131 511.974401 511.974401 511.974401 282.757318 0 511.974401-229.217083 511.974401-511.974401C1023.948803 229.219131 794.729672 0 511.974401 0zM805.63063 379.174385 474.510162 710.296901c0 0-0.004096 0.004096-0.010239 0.010239-15.265029 15.269125-38.541433 17.652877-56.31104 7.157402-3.290971-1.945503-6.393536-4.333351-9.219635-7.157402-0.002048-0.004096-0.006144-0.006144-0.006144-0.006144l-190.642884-190.642884c-18.095223-18.095223-18.095223-47.4375 0-65.536819 18.095223-18.095223 47.4375-18.095223 65.532723 0l157.884714 157.884714 298.362298-298.362298c18.097271-18.095223 47.439548-18.095223 65.534771 0C823.725854 331.738933 823.725854 361.079162 805.63063 379.174385z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qq2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 21.2c-270.8 0-490.4 219.6-490.4 490.4S241.2 1002.2 512 1002.2s490.4-219.6 490.4-490.4S782.8 21.2 512 21.2zM718 618c-19 1.8-22.2-25.6-35-33.8-5.4 26.6-18.2 45.6-36.4 59.6 17 13 48.2 17.2 46.6 45.4-1.8 34.2-64 43.4-109 40.2-33-2.4-52.6-14.4-71.4-27.2-10.4 3.8-21.2 13.6-32.4 18.2-46 19-146.4 11.4-150.4-29.8-2.8-29.2 30.2-34.4 48-46.6-18.4-13.2-32.2-30.8-36.4-58.4-13.4 3.6-16.4 33-35 32.4-19.8-0.6-22.8-41.6-20.8-67.4 3-39.6 31.8-70.4 46.6-90.8-0.8-22.4 0.8-42.6 10.4-54.4 0.4-57.8 20.4-91.8 49.2-120.6 29.2-29.2 73.6-51.4 118-51.8 53-0.6 94.6 25.2 120.6 50.6 23.2 22.8 38.4 47 45.4 83 2.2 10.8 0.8 24 3.8 37.6 1.2 5.6 7.2 11.6 9 19.4 2.4 10-1.2 22.4 1.2 33.8 1.8 8.6 9.8 15 14.2 20.8 12.8 16.4 29.8 43.4 32.4 68.8C740.4 575 736.2 616.4 718 618z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiahao1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M867.370195 418.272315l-261.312494 0 0-261.21835c0-51.644217-41.908482-93.592608-93.592608-93.592608-51.683103 0-93.591585 41.948391-93.591585 93.592608l0 261.21835-261.488503 0c-51.691289 0-93.592608 41.948391-93.592608 93.591585 0 51.732222 41.901319 93.592608 93.592608 93.592608l261.488503 0 0 261.488503c0 51.732222 41.909505 93.592608 93.591585 93.592608 51.685149 0 93.592608-41.860387 93.592608-93.592608l0-261.488503 261.312494 0c51.684126 0 93.591585-41.860387 93.591585-93.592608C960.96178 460.22173 919.055344 418.272315 867.370195 418.272315z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiajiantou1-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M532.915867 648.339178c0.166799-0.165776 0.309038-0.346901 0.470721-0.51677L737.804281 445.028703c9.706059-9.624195 9.769504-25.28078 0.13917-34.983769-9.623171-9.708106-25.279756-9.770528-34.982746-0.13917L515.605619 595.766822 329.745584 408.416853c-9.629311-9.708106-25.285896-9.770528-34.986839-0.140193-4.851495 4.811586-7.296173 11.130502-7.321756 17.46272-0.024559 6.328126 2.368954 12.668531 7.182586 17.520025l202.800869 204.426903c0.156566 0.167822 0.295735 0.346901 0.458441 0.511653 4.820796 4.857635 11.150968 7.299243 17.489326 7.317663C521.705548 655.54837 528.056186 653.15895 532.915867 648.339178z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-rightarrow1f" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M669.121024 548.601856q0 7.428096-5.71392 13.142016l-266.268672 266.268672q-5.71392 5.71392-13.142016 5.71392t-13.142016-5.71392l-28.5696-28.5696q-5.71392-5.71392-5.71392-13.142016t5.71392-13.142016l224.557056-224.557056-224.557056-224.557056q-5.71392-5.71392-5.71392-13.142016t5.71392-13.142016l28.5696-28.5696q5.71392-5.71392 13.142016-5.71392t13.142016 5.71392l266.268672 266.268672q5.71392 5.71392 5.71392 13.142016z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-rightarrow2f" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M393.316 753.587c-4.553-4.553-7.408-11.402-7.408-18.229 0-3.415 0.56-6.831 1.698-10.264 1.157-2.835 3.433-5.692 5.71-7.966l184.402-202.845-184.402-203.404c-2.277-2.277-4.553-5.131-5.71-7.988-1.138-2.836-1.698-6.269-1.698-9.684 0-7.408 2.855-13.676 7.408-18.23l0 0c4.552-4.553 10.803-7.966 18.211-7.966 3.412 0 6.829 1.138 9.663 2.277 3.415 1.137 6.271 2.836 8.548 5.691l0 0 200.913 221.073c2.277 2.277 3.985 5.133 5.692 7.966 1.138 3.433 1.707 6.849 1.707 10.263 0 3.432-0.569 6.831-1.707 9.685-1.708 3.433-3.415 5.709-5.692 8.565l-200.914 221.056c-2.277 2.295-5.131 3.993-8.548 5.692-2.835 1.157-6.25 1.718-9.663 1.717l0 0c-7.408-0.001-13.658-2.837-18.209-7.409l0 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangdian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M259.45 617.176c-33.684-0.011-63.936-7.04-89.913-20.892-0.226-0.12-0.451-0.244-0.673-0.372l-0.889-0.509c-61.459-33.468-99.669-97.708-99.737-167.725 0-19.719 3.065-39.345 9.109-58.355l0.008 0.002c1.016-2.907 7.621-18.983 78.301-187.386 7.873-22.243 22.193-40.693 41.456-53.398 18.955-12.501 42.307-19.109 67.531-19.109l496.794 0c52.23 0.116 96.075 29.415 111.947 74.702 62.671 157.121 71.923 180.913 73.608 185.754l0.028-0.009c5.798 18.24 8.819 37.991 8.737 57.12l0 0.081c-0.006 69.973-38.146 134.276-99.535 167.819-26.158 14.338-56.845 21.706-91.179 21.885-0.043 0-0.087 0-0.13 0-46.584 0-91.301-16.745-125.981-47.15l-1.119-0.981-1.119 0.982c-34.253 30.074-78.335 46.851-124.128 47.24-0.196 0.003-0.393 0.001-0.589-0.002-45.997-0.327-90.249-17.058-124.631-47.12l-1.12-0.979-1.117 0.982c-34.634 30.439-79.232 47.28-125.578 47.421C259.506 617.176 259.478 617.176 259.45 617.176zM193.384 552.336c18.593 9.836 40.813 14.828 66.053 14.84 34.227-0.117 67.134-12.538 92.666-34.978l17.579-15.45c9.421-8.279 23.519-8.298 32.96-0.042l17.618 15.405c25.371 22.184 58.079 34.526 92.107 34.763 33.724-0.34 66.152-12.698 91.34-34.812l17.6-15.454c9.432-8.28 23.538-8.286 32.976-0.013l17.613 15.44c25.559 22.408 58.569 34.748 92.953 34.748 25.867-0.134 48.556-5.432 67.372-15.746 45.368-24.788 73.535-72.281 73.539-123.96l0-0.121c0-0.04 0-0.079 0-0.118 0.065-13.898-2.111-28.249-6.296-41.522-3.247-8.76-45.088-113.884-72.729-183.183-0.149-0.374-0.29-0.752-0.421-1.133-8.66-25.184-34.146-41.5-64.932-41.569L264.644 159.431c-30.705 0-53.308 14.451-62.013 39.648-0.176 0.51-0.369 1.014-0.578 1.512-29.255 69.703-73.233 174.612-77.293 184.635-4.328 13.868-6.521 28.139-6.521 42.427 0.05 51.76 28.347 99.263 73.848 123.946 0.173 0.094 0.344 0.189 0.515 0.287L193.384 552.336zM753.587 376.872 270.413 376.872c-13.807 0-25-11.193-25-25s11.193-25 25-25l483.174 0c13.807 0 25 11.193 25 25S767.394 376.872 753.587 376.872zM228.047 914.568c-56.469 0-102.397-45.869-102.397-102.251l-0.212-161.766c-0.018-13.808 11.16-25.015 24.967-25.033 0.011 0 0.022 0 0.033 0 13.792 0 24.981 11.171 25 24.967l0.212 161.799c0 28.845 23.498 52.284 52.381 52.284l568.278-0.359c28.795-0.062 52.253-23.588 52.253-52.441l-0.06-164.714c-0.005-13.807 11.184-25.004 24.991-25.009 0.002 0 0.007 0 0.009 0 13.804 0 24.995 11.187 25 24.991l0.06 164.723c0 56.372-45.839 102.327-102.183 102.45L228.047 914.568z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-leftarrow" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M265.772373 469.696853c0.40448-0.40448 0.960853-0.50688 1.36704-0.884053l404.304213-444.330667c24.420693-23.918933 63.79008-24.193707 87.87968-0.587093 24.093013 23.60832 23.837013 62.14144-0.607573 86.079147L392.76032 512.155307 759.4496 915.121493c24.420693 23.934293 24.44288 62.696107 0.052907 86.608213-24.425813 23.88992-63.993173 23.86432-88.436053-0.04608L265.79456 556.28288C241.375573 532.370773 241.35168 493.585067 265.772373 469.696853L265.772373 469.696853zM265.772373 469.696853"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiajiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M529.518 631.556c0.167-0.167 0.308-0.349 0.469-0.52l203.606-203.607c9.668-9.662 9.668-25.319 0-34.984-9.662-9.669-25.319-9.669-34.984 0L511.998 579.051 325.393 392.447c-9.667-9.669-25.325-9.669-34.987 0-4.833 4.831-7.252 11.159-7.252 17.492 0 6.328 2.419 12.659 7.252 17.491L494.02 631.046c0.158 0.167 0.297 0.346 0.461 0.51 4.84 4.839 11.182 7.254 17.519 7.248C518.338 638.81 524.679 636.394 529.518 631.556z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibo1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M455.254601 586.332962c-3.426029-0.463558-6.973832 0.678452-10.639315 3.431146l-2.058892 2.747577c-0.928139 0.453325-1.6158 1.14201-2.070148 2.069125l-1.385557 2.747577c-0.453325 0.908696-0.678452 2.054799-0.678452 3.432169l0 2.747577c0 0.906649 0.225127 1.825578 0.678452 2.747577l1.385557 2.747577c1.376347 2.75781 3.783163 4.241604 7.213285 4.461615 3.426029 0.224104 6.744611-0.810459 9.955746-3.099594l-0.005117 0.020466c1.833765-1.830695 3.323699-3.778046 4.465708-5.842055 1.14201-2.069125 1.830695-4.246721 2.064009-6.53074 0.239454-2.284019-0.335644-4.348028-1.713015-6.1777C461.086423 588.635401 458.685747 586.800613 455.254601 586.332962L455.254601 586.332962zM455.254601 586.332962"  ></path>' +
    '' +
    '<path d="M426.421926 612.056833c-2.065032-2.065032-4.471848-3.900843-7.209192-5.496178-2.742461-1.600451-6.062066-2.742461-9.960863-3.431146-3.898797-0.688685-7.906064-0.805342-12.024871-0.350994-5.948479 0.453325-11.326976 2.405793-16.134469 5.846148-4.806469 3.445472-8.584516 7.569396-11.341303 12.377912-2.75781 4.806469-4.133134 9.731642-4.133134 14.772448-0.01535 2.26867 0.326435 4.446265 1.034563 6.525624 0.701988 2.083451 1.6158 3.913123 2.747577 5.499248 1.12666 1.582031 2.391467 3.182482 3.78214 4.811586 1.38658 1.62501 3.104711 2.8847 5.140067 3.778046 2.039449 0.898463 4.099365 1.692548 6.1777 2.396583 2.083451 0.701988 4.372587 1.165546 6.881734 1.385557 2.50403 0.220011 5.139044 0.102331 7.890714-0.350994l0.020466-0.038886c5.953595-0.458441 11.44875-2.289136 16.490579-5.501294 5.040806-3.206018 9.048073-7.095605 12.024871-11.667737 2.971681-4.574179 4.460592-9.380648 4.460592-14.421454-0.013303-3.207042-0.478907-6.184863-1.385557-8.9263C429.973822 616.527658 428.485935 614.120842 426.421926 612.056833L426.421926 612.056833zM426.421926 612.056833"  ></path>' +
    '' +
    '<path d="M570.32743 511.424902c-34.347273-18.788925-76.479859-27.027563-126.390595-24.728194-49.910737 2.298346-92.043323 15.241123-126.390595 38.818097-34.347273 23.582091-51.526537 51.628868-51.526537 84.147492 0 32.965809 17.286712 60.2185 51.853995 81.744769 34.5724 21.527292 76.587306 31.151487 126.039601 28.862351l0.023536-0.024559c48.535413-2.284019 90.320075-16.59291 125.361149-42.926672 35.035958-26.333762 52.555983-55.988152 52.555983-88.958054C621.853967 555.85481 604.679819 530.20871 570.32743 511.424902L570.32743 511.424902zM523.248182 623.378693c-2.054799 11.453866-6.287193 21.078061-12.703323 28.858258-16.032138 20.60427-37.10099 33.771151-63.195298 39.500643-26.100448 5.729491-54.264904 1.264806-84.498486-13.386892-5.040806-2.752694-9.394974-6.193049-13.059434-10.311857-3.660366-4.113691-6.29231-7.895831-7.887644-11.336186-1.600451-3.445472-2.860141-7.227612-3.78214-11.346419s-1.38658-6.861268-1.38658-8.238638l0-2.752694-0.682545-5.495154c-0.01535-3.212158 0.213871-7.67275 0.682545-13.386892 0.473791-5.714142 1.50426-12.011568 3.104711-18.883069 1.590218-6.871501 4.455475-13.854543 8.594749-20.946055 4.133134-7.091512 9.169847-13.732769 15.123442-19.917632 5.944386-6.182816 14.18814-11.67797 24.728194-16.485463 10.536984-4.807493 22.440082-7.895831 35.719526-9.273201l-0.020466-0.023536c18.780739-2.284019 35.387975-0.796132 49.809429 4.460592 14.421454 5.260817 25.295106 12.70844 32.614815 22.337751 7.329942 9.624195 12.478196 20.271696 15.456017 31.936363C524.8384 600.35328 525.296841 611.914594 523.248182 623.378693L523.248182 623.378693zM523.248182 623.378693"  ></path>' +
    '' +
    '<path d="M511.373737 64.004733c-247.145843 0-447.496917 200.353121-447.496917 447.496917 0 247.145843 200.352097 447.496917 447.496917 447.496917 247.143797 0 447.495894-200.352097 447.495894-447.496917C958.86963 264.357853 758.517533 64.004733 511.373737 64.004733L511.373737 64.004733zM721.759351 586.254168c-0.233314 14.196327-4.240581 29.316699-12.024871 45.347814-12.81998 27.475771-34.918277 51.062979-66.293869 70.7606-31.376615 19.692504-65.265446 33.55114-101.667517 41.564651-36.397978 8.013511-71.546499 10.644431-105.440447 7.891737-20.60427-1.381463-40.184211-3.783163-58.734706-7.209192-18.554588-3.431146-37.904285-8.925277-58.055231-16.490579-20.145829-7.560186-37.666878-16.7198-52.557006-27.475771-14.890128-10.756995-27.710109-24.835641-38.467103-42.249243-10.755971-17.407462-17.509792-37.099966-20.263509-59.0857l0-14.421454c-0.453325-10.067286 2.981914-24.947182 10.30674-44.644803 7.325849-19.692504 18.545378-39.389102 33.655518-59.081607l7.560186-10.990309c5.495154-6.871501 13.284561-15.801894 23.367197-26.797319 10.082636-10.990309 21.190625-22.327518 33.322943-34.001395 12.132318-11.683087 26.441209-22.898523 42.926672-33.654494 16.485463-10.756995 32.746822-18.883069 48.773843-24.3772 13.279445-4.587482 25.187659-7.335059 35.724643-8.243755 10.536984-0.906649 19.1215-0.220011 25.762757 2.065032 6.638187 2.284019 12.132318 5.259794 16.485463 8.925277 4.349051 3.660366 7.667633 8.466835 9.955746 14.416338 2.284019 5.949502 3.77293 11.328 4.460592 16.134469 0.693802 4.812609 1.035586 9.960863 1.035586 15.456017-0.468674 2.284019-1.157359 5.373381-2.065032 9.277294-0.911766 3.894703-1.482771 6.764054-1.713015 8.594749-0.233314 1.830695-0.463558 4.006244-0.683569 6.525624-0.220011 2.52245 0.122797 4.122901 1.029446 4.816702 0.912789 0.688685 2.172479 1.376347 3.783163 2.064009 1.6158 0.688685 3.903913 0.806365 6.881734 0.352017 2.975774-0.454348 6.753821-1.372254 11.341303-2.7486l8.925277-4.133134c5.949502-2.284019 13.504572-4.689812 22.660092-7.209192 9.160637-2.517333 18.891256-4.582365 29.193903-6.1777 10.302647-1.595334 20.60427-1.479701 30.906917 0.350994 10.30367 1.835811 18.663058 5.959735 25.081235 12.377912 3.64604 3.674693 6.515391 7.803733 8.594749 12.375865 2.079358 4.568039 3.459798 8.804527 4.133134 12.703323 0.673335 3.898797 0.791016 8.023744 0.350994 12.375865-0.438998 4.353145-1.00898 8.013511-1.713015 10.990309-0.701988 2.976798-1.736551 5.949502-3.098571 8.925277-1.362021 2.972705-2.278903 4.920056-2.752694 5.842055-0.468674 0.927115-0.927115 1.610684-1.381463 2.069125l-2.069125 3.432169c-1.362021 2.292206-1.014096 4.816702 1.034563 7.55814 2.054799 2.738367 6.515391 4.797259 13.386892 6.179746l0-0.068562c5.491061 0.911766 11.786441 2.971681 18.882046 6.1777 7.091512 3.212158 14.646582 8.252964 22.660092 15.124466 8.018627 6.876618 14.544251 14.772448 19.585057 23.697725C719.587895 560.490388 721.993688 572.052724 721.759351 586.254168L721.759351 586.254168zM686.391842 428.29253c-2.738367-31.156604-21.971407-42.605354-57.700143-34.357506-4.573155-0.01535-8.461719-1.620917-11.668761-4.812609-3.211135-3.196809-4.816702-7.086395-4.816702-11.673877-0.01535-2.737344 0.785899-5.368264 2.396583-7.890714 1.610684-2.523473 3.562129-4.582365 5.846148-6.17463 2.284019-1.600451 5.03262-2.394537 8.242731-2.394537 10.536984-1.834788 21.99085-1.606591 34.357506 0.677429 42.132586 7.330966 60.44772 37.095873 54.951543 89.311095 0 0.921999-0.224104 1.6158-0.678452 2.069125-0.458441 2.298346-1.370207 4.469801-2.747577 6.525624-1.38044 2.048659-3.211135 3.76679-5.499248 5.143137-2.284019 1.376347-4.802376 2.069125-7.560186 2.069125l-0.019443-0.023536c-4.573155-0.01535-8.461719-1.619894-11.672854-4.817726-3.212158-3.187599-4.812609-7.081279-4.812609-11.668761C686.8554 443.401646 687.313841 436.07682 686.391842 428.29253L686.391842 428.29253zM809.029974 422.485267c-0.693802 16.252149-3.783163 33.307593-9.277294 51.170426-2.284019 15.57779-9.839089 23.367197-22.664186 23.367197-4.573155 0.005117-8.579399-0.565888-12.019755-1.707898-3.445472-1.147126-6.309706-3.093455-8.594749-5.851265-2.289136-2.753717-3.435239-6.188956-3.435239-10.307763 0-1.850138 0.230244-4.02671 0.688685-6.53074 0.453325-2.50403 0.913812-4.562922 1.381463-6.1777 0.468674-1.610684 0.932232-3.323699 1.385557-5.140067 0.453325-1.815345 0.796132-2.962471 1.034563-3.431146 0.234337-0.468674 0.350994-0.932232 0.350994-1.385557 7.325849-25.187659 5.03262-51.297316-6.880711-78.319763-5.934153-9.629311-12.918217-18.096147-20.947078-25.406646-8.032954-7.314593-16.046464-13.034874-24.049742-17.169031-7.998161-4.133134-16.016789-7.568373-24.045649-10.311857-8.032954-2.737344-15.358803-4.450359-21.98164-5.139044-6.627954-0.693802-12.239765-1.034563-16.841573-1.034563-4.597715 0-7.692193 0.340761-9.273201 1.034563-1.587148 0.688685-3.416819 1.376347-5.496178 2.064009-2.079358 0.688685-4.030803 1.147126-5.846148 1.38658-1.820462 0.233314-3.5345 0.576121-5.145184 1.029446-1.610684 0.458441-2.645247 0.683569-3.098571 0.683569l-2.064009 0c-6.407943-0.01535-11.899004-2.308579-16.486486-6.881734-4.587482-4.573155-6.880711-10.292414-6.880711-17.169031 0-5.040806 1.605567-9.736758 4.811586-14.08581 3.211135-4.353145 7.335059-7.222495 12.375865-8.597819l0.678452-0.678452 0.683569-1.38658c0.468674-0.453325 0.932232-0.678452 1.38658-0.678452 33.892925-6.421246 60.915371-7.340175 81.066317-2.752694l-0.01842 0c9.608845 2.289136 18.886139 5.260817 27.826765 8.9263 8.940626 3.659343 18.212804 8.584516 27.826765 14.767332 9.614985 6.182816 18.317181 13.059434 26.115797 20.61962 7.7935 7.560186 14.670118 16.7198 20.61962 27.475771 5.948479 10.761088 10.410094 22.317285 13.381775 34.69008C808.574602 391.924227 809.717635 406.233118 809.029974 422.485267L809.029974 422.485267zM809.029974 422.485267"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibo2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0zM512 1002.667c-270.988 0-490.667-219.679-490.667-490.667S241.012 21.333 512 21.333 1002.667 241.012 1002.667 512 782.988 1002.667 512 1002.667z"  ></path>' +
    '' +
    '<path d="M676.254 500.512c-26.555-5.158-13.651-19.469-13.651-19.469s25.984-42.883-5.14-74.059c-38.575-38.61-132.306 4.915-132.306 4.915-35.802 11.123-26.313-5.076-21.251-32.645 0-32.485-11.109-87.458-106.479-54.989-95.273 32.648-177.071 147.032-177.071 147.032-56.884 76.009-49.359 134.75-49.359 134.75 14.215 129.686 151.836 165.283 258.875 173.712 112.616 8.843 264.603-38.868 310.695-136.889C786.649 544.691 702.903 505.831 676.254 500.512zM438.204 743.191c-111.791 5.229-202.171-50.903-202.171-125.6 0-74.784 90.379-134.751 202.171-139.912 111.873-5.154 202.428 40.995 202.428 115.621C640.632 667.989 550.077 738.104 438.204 743.191z"  ></path>' +
    '' +
    '<path d="M415.904 526.937c-112.444 13.176-99.45 118.634-99.45 118.634s-1.151 33.388 30.149 50.399c65.792 35.68 133.532 14.076 167.769-30.175C548.61 621.523 528.509 513.852 415.904 526.937zM387.541 674.945c-20.994 2.463-37.911-9.651-37.911-27.24 0-17.507 15.029-35.844 36.033-38.042 24.119-2.294 39.808 11.617 39.808 29.207C425.471 656.377 408.457 672.568 387.541 674.945zM453.822 618.409c-7.108 5.323-15.861 4.586-19.617-1.798-3.915-6.223-2.448-16.202 4.745-21.439 8.336-6.212 16.995-4.425 20.751 1.806C463.463 603.354 460.772 612.923 453.822 618.409z"  ></path>' +
    '' +
    '<path d="M717.613 239.07c-39.725-9.318-80.584-1.29-92.032 0.908-0.885 0.082-1.714 0.92-2.528 1.08-0.4 0.082-0.645 0.494-0.645 0.494-11.281 3.195-19.538 13.657-19.538 26.014 0 14.73 11.927 26.848 26.802 26.848 0 0 14.465-1.944 24.271-5.786 9.723-3.921 92.01-2.919 132.877 65.805 22.304 50.152 9.807 83.72 8.246 89.114 0 0-5.305 13.033-5.305 25.861 0 14.813 11.935 24.119 26.709 24.119 12.351 0 22.729-1.685 25.756-22.606l0.164 0C886.271 324.482 788.698 255.676 717.613 239.07z"  ></path>' +
    '' +
    '<path d="M731.007 454.852c9.06 0 16.764-6.712 18.056-15.462 0.165-0.658 0.246-1.226 0.246-1.962 13.73-123.628-101.171-102.353-101.171-102.353-10.201 0-18.384 8.263-18.384 18.569 0 10.144 8.183 18.408 18.384 18.408 82.534-18.243 64.321 64.396 64.321 64.396C712.459 446.671 720.775 454.852 731.007 454.852z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-daohang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M894.185422 128.023792 129.814578 445.743994 445.99982 577.744353 571.860343 893.929596Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bottomArrow" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M165.888 346.112c-4.096 4.096-6.144 10.24-6.144 14.336s2.048 10.24 6.144 14.336l307.2 307.2c8.192 8.192 20.48 8.192 28.672 0l307.2-307.2c8.192-8.192 8.192-20.48 0-28.672s-20.48-8.192-28.672 0L487.424 638.976 194.56 346.112c-8.192-8.192-20.48-8.192-28.672 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)