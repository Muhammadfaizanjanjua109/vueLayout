<script>

</script>
<template>
    <div>
        <div class="main_content_iner overly_inner ">
            <div class="container-fluid p-0 ">

                <div class="row">
                    <div class="col-12">
                        <div class="page_title_box d-flex align-items-center justify-content-between">
                            <div class="page_title_left">
                                <h3 class="f_s_30 f_w_700 text_white">Dashboard</h3>
                                <ol class="breadcrumb page_bradcam mb-0">
                                    <li class="breadcrumb-item"><a href="javascript:void(0);">Salessa </a></li>
                                    <li class="breadcrumb-item"><a href="javascript:void(0);">Dashboard</a></li>
                                    <li class="breadcrumb-item active">Sales</li>
                                </ol>
                            </div>
                            <a href="#" class="white_btn3">Create Report</a>
                        </div>
                    </div>
                </div>
                <div class="row ">
                 
                  
                    <div class="col-lg-4">
                        <div class="white_card card_height_100 mb_20">
                            <div class="white_card_header">
                                <div class="box_header m-0">
                                    <div class="main-title">
                                        <h3 class="m-0">Daily Sales</h3>
                                    </div>
                                    <div class="header_more_tool">
                                        <div class="dropdown">
                                            <span class="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                                <i class="ti-more-alt"></i>
                                            </span>
                                            <div class="dropdown-menu dropdown-menu-right"
                                                aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#"> <i class="ti-eye"></i> Action</a>
                                                <a class="dropdown-item" href="#"> <i class="ti-trash"></i> Delete</a>
                                                <a class="dropdown-item" href="#"> <i class="fas fa-edit"></i> Edit</a>
                                                <a class="dropdown-item" href="#"> <i class="ti-printer"></i> Print</a>
                                                <a class="dropdown-item" href="#"> <i class="fa fa-download"></i>
                                                    Download</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="white_card_body" style="position: relative;">
                                <div id="chart-currently" style="min-height: 105px;">
                                    <div id="apexcharts8vkg7f9ig" class="apexcharts-canvas apexcharts8vkg7f9ig light"
                                        style="width: 267px; height: 90px;"><svg id="SvgjsSvg1292" width="267" height="90"
                                            xmlns="http://www.w3.org/2000/svg" version="1.1"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"
                                            class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)"
                                            style="background: transparent;">
                                            <g id="SvgjsG1294" class="apexcharts-inner apexcharts-graphical"
                                                transform="translate(0, 30)">
                                                <defs id="SvgjsDefs1293">
                                                    <clipPath id="gridRectMask8vkg7f9ig">
                                                        <rect id="SvgjsRect1298" width="271" height="24" x="-2" y="-2"
                                                            rx="0" ry="0" fill="#ffffff" opacity="1" stroke-width="0"
                                                            stroke="none" stroke-dasharray="0"></rect>
                                                    </clipPath>
                                                    <clipPath id="gridRectMarkerMask8vkg7f9ig">
                                                        <rect id="SvgjsRect1299" width="269" height="22" x="-1" y="-1"
                                                            rx="0" ry="0" fill="#ffffff" opacity="1" stroke-width="0"
                                                            stroke="none" stroke-dasharray="0"></rect>
                                                    </clipPath>
                                                    <linearGradient id="SvgjsLinearGradient1305" x1="0" y1="0" x2="0"
                                                        y2="1">
                                                        <stop id="SvgjsStop1306" stop-opacity="0.7"
                                                            stop-color="rgba(100,197,177,0.7)" offset="0"></stop>
                                                        <stop id="SvgjsStop1307" stop-opacity="0.5"
                                                            stop-color="rgba(255,255,255,0.5)" offset="0.8"></stop>
                                                        <stop id="SvgjsStop1308" stop-opacity="0.5"
                                                            stop-color="rgba(255,255,255,0.5)" offset="1"></stop>
                                                    </linearGradient>
                                                    <linearGradient id="SvgjsLinearGradient1314" x1="0" y1="0" x2="0"
                                                        y2="1">
                                                        <stop id="SvgjsStop1315" stop-opacity="0.7"
                                                            stop-color="rgba(214,255,249,0.7)" offset="0"></stop>
                                                        <stop id="SvgjsStop1316" stop-opacity="0.5"
                                                            stop-color="rgba(255,255,255,0.5)" offset="0.8"></stop>
                                                        <stop id="SvgjsStop1317" stop-opacity="0.5"
                                                            stop-color="rgba(255,255,255,0.5)" offset="1"></stop>
                                                    </linearGradient>
                                                </defs>
                                                <line id="SvgjsLine1297" x1="0" y1="0" x2="0" y2="20" stroke="#b6b6b6"
                                                    stroke-dasharray="3" class="apexcharts-xcrosshairs" x="0" y="0"
                                                    width="1" height="20" fill="#b1b9c4" filter="none" fill-opacity="0.9"
                                                    stroke-width="1"></line>
                                                <g id="SvgjsG1320" class="apexcharts-xaxis" transform="translate(0, 0)">
                                                    <g id="SvgjsG1321" class="apexcharts-xaxis-texts-g"
                                                        transform="translate(0, -4)"></g>
                                                </g>
                                                <g id="SvgjsG1323" class="apexcharts-grid">
                                                    <line id="SvgjsLine1325" x1="0" y1="20" x2="267" y2="20"
                                                        stroke="transparent" stroke-dasharray="0"></line>
                                                    <line id="SvgjsLine1324" x1="0" y1="1" x2="0" y2="20"
                                                        stroke="transparent" stroke-dasharray="0"></line>
                                                </g>
                                                <g id="SvgjsG1301" class="apexcharts-area-series apexcharts-plot-series">
                                                    <g id="SvgjsG1311" class="apexcharts-series" seriesName="series2"
                                                        data:longestSeries="true" rel="2" data:realIndex="1">
                                                        <path id="SvgjsPath1318"
                                                            d="M 0 20L 0 20C 7.7875 20 14.4625 12.666666666666668 22.25 12.666666666666668C 30.0375 12.666666666666668 36.7125 8.333333333333334 44.5 8.333333333333334C 52.2875 8.333333333333334 58.9625 9.333333333333334 66.75 9.333333333333334C 74.5375 9.333333333333334 81.2125 6.666666666666666 89 6.666666666666666C 96.7875 6.666666666666666 103.4625 11.666666666666666 111.25 11.666666666666666C 119.0375 11.666666666666666 125.7125 3.333333333333332 133.5 3.333333333333332C 141.2875 3.333333333333332 147.9625 7.333333333333334 155.75 7.333333333333334C 163.5375 7.333333333333334 170.2125 6 178 6C 185.7875 6 192.4625 10.666666666666666 200.25 10.666666666666666C 208.0375 10.666666666666666 214.7125 13.333333333333332 222.5 13.333333333333332C 230.2875 13.333333333333332 236.9625 5 244.75 5C 252.5375 5 259.2125 20 267 20C 267 20 267 20 267 20M 267 20z"
                                                            fill="url(#SvgjsLinearGradient1314)" fill-opacity="1"
                                                            stroke-opacity="1" stroke-linecap="butt" stroke-width="0"
                                                            stroke-dasharray="0" class="apexcharts-area" index="1"
                                                            clip-path="url(#gridRectMask8vkg7f9ig)"
                                                            pathTo="M 0 20L 0 20C 7.7875 20 14.4625 12.666666666666668 22.25 12.666666666666668C 30.0375 12.666666666666668 36.7125 8.333333333333334 44.5 8.333333333333334C 52.2875 8.333333333333334 58.9625 9.333333333333334 66.75 9.333333333333334C 74.5375 9.333333333333334 81.2125 6.666666666666666 89 6.666666666666666C 96.7875 6.666666666666666 103.4625 11.666666666666666 111.25 11.666666666666666C 119.0375 11.666666666666666 125.7125 3.333333333333332 133.5 3.333333333333332C 141.2875 3.333333333333332 147.9625 7.333333333333334 155.75 7.333333333333334C 163.5375 7.333333333333334 170.2125 6 178 6C 185.7875 6 192.4625 10.666666666666666 200.25 10.666666666666666C 208.0375 10.666666666666666 214.7125 13.333333333333332 222.5 13.333333333333332C 230.2875 13.333333333333332 236.9625 5 244.75 5C 252.5375 5 259.2125 20 267 20C 267 20 267 20 267 20M 267 20z"
                                                            pathFrom="M -1 20L -1 20L 22.25 20L 44.5 20L 66.75 20L 89 20L 111.25 20L 133.5 20L 155.75 20L 178 20L 200.25 20L 222.5 20L 244.75 20L 267 20">
                                                        </path>
                                                        <path id="SvgjsPath1319"
                                                            d="M 0 20C 7.7875 20 14.4625 12.666666666666668 22.25 12.666666666666668C 30.0375 12.666666666666668 36.7125 8.333333333333334 44.5 8.333333333333334C 52.2875 8.333333333333334 58.9625 9.333333333333334 66.75 9.333333333333334C 74.5375 9.333333333333334 81.2125 6.666666666666666 89 6.666666666666666C 96.7875 6.666666666666666 103.4625 11.666666666666666 111.25 11.666666666666666C 119.0375 11.666666666666666 125.7125 3.333333333333332 133.5 3.333333333333332C 141.2875 3.333333333333332 147.9625 7.333333333333334 155.75 7.333333333333334C 163.5375 7.333333333333334 170.2125 6 178 6C 185.7875 6 192.4625 10.666666666666666 200.25 10.666666666666666C 208.0375 10.666666666666666 214.7125 13.333333333333332 222.5 13.333333333333332C 230.2875 13.333333333333332 236.9625 5 244.75 5C 252.5375 5 259.2125 20 267 20"
                                                            fill="none" fill-opacity="1" stroke="#d6fff9" stroke-opacity="1"
                                                            stroke-linecap="butt" stroke-width="4" stroke-dasharray="0"
                                                            class="apexcharts-area" index="1"
                                                            clip-path="url(#gridRectMask8vkg7f9ig)"
                                                            pathTo="M 0 20C 7.7875 20 14.4625 12.666666666666668 22.25 12.666666666666668C 30.0375 12.666666666666668 36.7125 8.333333333333334 44.5 8.333333333333334C 52.2875 8.333333333333334 58.9625 9.333333333333334 66.75 9.333333333333334C 74.5375 9.333333333333334 81.2125 6.666666666666666 89 6.666666666666666C 96.7875 6.666666666666666 103.4625 11.666666666666666 111.25 11.666666666666666C 119.0375 11.666666666666666 125.7125 3.333333333333332 133.5 3.333333333333332C 141.2875 3.333333333333332 147.9625 7.333333333333334 155.75 7.333333333333334C 163.5375 7.333333333333334 170.2125 6 178 6C 185.7875 6 192.4625 10.666666666666666 200.25 10.666666666666666C 208.0375 10.666666666666666 214.7125 13.333333333333332 222.5 13.333333333333332C 230.2875 13.333333333333332 236.9625 5 244.75 5C 252.5375 5 259.2125 20 267 20"
                                                            pathFrom="M -1 20L -1 20L 22.25 20L 44.5 20L 66.75 20L 89 20L 111.25 20L 133.5 20L 155.75 20L 178 20L 200.25 20L 222.5 20L 244.75 20L 267 20">
                                                        </path>
                                                        <g id="SvgjsG1312" class="apexcharts-series-markers-wrap">
                                                            <g class="apexcharts-series-markers">
                                                                <circle id="SvgjsCircle1331" r="0" cx="0" cy="0"
                                                                    class="apexcharts-marker w8jlfbbmt no-pointer-events"
                                                                    stroke="#d6fff9" fill="#ffffff" fill-opacity="1"
                                                                    stroke-width="3" stroke-opacity="0.9"
                                                                    default-marker-size="0"></circle>
                                                            </g>
                                                        </g>
                                                        <g id="SvgjsG1313" class="apexcharts-datalabels"></g>
                                                    </g>
                                                    <g id="SvgjsG1302" class="apexcharts-series" seriesName="series1"
                                                        data:longestSeries="true" rel="1" data:realIndex="0">
                                                        <path id="SvgjsPath1309"
                                                            d="M 0 20L 0 20C 7.7875 20 14.4625 13.333333333333332 22.25 13.333333333333332C 30.0375 13.333333333333332 36.7125 15 44.5 15C 52.2875 15 58.9625 6.666666666666666 66.75 6.666666666666666C 74.5375 6.666666666666666 81.2125 14 89 14C 96.7875 14 103.4625 13.333333333333332 111.25 13.333333333333332C 119.0375 13.333333333333332 125.7125 14 133.5 14C 141.2875 14 147.9625 12.333333333333332 155.75 12.333333333333332C 163.5375 12.333333333333332 170.2125 14 178 14C 185.7875 14 192.4625 8.333333333333334 200.25 8.333333333333334C 208.0375 8.333333333333334 214.7125 10 222.5 10C 230.2875 10 236.9625 1.6666666666666679 244.75 1.6666666666666679C 252.5375 1.6666666666666679 259.2125 20 267 20C 267 20 267 20 267 20M 267 20z"
                                                            fill="url(#SvgjsLinearGradient1305)" fill-opacity="1"
                                                            stroke-opacity="1" stroke-linecap="butt" stroke-width="0"
                                                            stroke-dasharray="0" class="apexcharts-area" index="0"
                                                            clip-path="url(#gridRectMask8vkg7f9ig)"
                                                            pathTo="M 0 20L 0 20C 7.7875 20 14.4625 13.333333333333332 22.25 13.333333333333332C 30.0375 13.333333333333332 36.7125 15 44.5 15C 52.2875 15 58.9625 6.666666666666666 66.75 6.666666666666666C 74.5375 6.666666666666666 81.2125 14 89 14C 96.7875 14 103.4625 13.333333333333332 111.25 13.333333333333332C 119.0375 13.333333333333332 125.7125 14 133.5 14C 141.2875 14 147.9625 12.333333333333332 155.75 12.333333333333332C 163.5375 12.333333333333332 170.2125 14 178 14C 185.7875 14 192.4625 8.333333333333334 200.25 8.333333333333334C 208.0375 8.333333333333334 214.7125 10 222.5 10C 230.2875 10 236.9625 1.6666666666666679 244.75 1.6666666666666679C 252.5375 1.6666666666666679 259.2125 20 267 20C 267 20 267 20 267 20M 267 20z"
                                                            pathFrom="M -1 20L -1 20L 22.25 20L 44.5 20L 66.75 20L 89 20L 111.25 20L 133.5 20L 155.75 20L 178 20L 200.25 20L 222.5 20L 244.75 20L 267 20">
                                                        </path>
                                                        <path id="SvgjsPath1310"
                                                            d="M 0 20C 7.7875 20 14.4625 13.333333333333332 22.25 13.333333333333332C 30.0375 13.333333333333332 36.7125 15 44.5 15C 52.2875 15 58.9625 6.666666666666666 66.75 6.666666666666666C 74.5375 6.666666666666666 81.2125 14 89 14C 96.7875 14 103.4625 13.333333333333332 111.25 13.333333333333332C 119.0375 13.333333333333332 125.7125 14 133.5 14C 141.2875 14 147.9625 12.333333333333332 155.75 12.333333333333332C 163.5375 12.333333333333332 170.2125 14 178 14C 185.7875 14 192.4625 8.333333333333334 200.25 8.333333333333334C 208.0375 8.333333333333334 214.7125 10 222.5 10C 230.2875 10 236.9625 1.6666666666666679 244.75 1.6666666666666679C 252.5375 1.6666666666666679 259.2125 20 267 20"
                                                            fill="none" fill-opacity="1" stroke="#64c5b1" stroke-opacity="1"
                                                            stroke-linecap="butt" stroke-width="4" stroke-dasharray="0"
                                                            class="apexcharts-area" index="0"
                                                            clip-path="url(#gridRectMask8vkg7f9ig)"
                                                            pathTo="M 0 20C 7.7875 20 14.4625 13.333333333333332 22.25 13.333333333333332C 30.0375 13.333333333333332 36.7125 15 44.5 15C 52.2875 15 58.9625 6.666666666666666 66.75 6.666666666666666C 74.5375 6.666666666666666 81.2125 14 89 14C 96.7875 14 103.4625 13.333333333333332 111.25 13.333333333333332C 119.0375 13.333333333333332 125.7125 14 133.5 14C 141.2875 14 147.9625 12.333333333333332 155.75 12.333333333333332C 163.5375 12.333333333333332 170.2125 14 178 14C 185.7875 14 192.4625 8.333333333333334 200.25 8.333333333333334C 208.0375 8.333333333333334 214.7125 10 222.5 10C 230.2875 10 236.9625 1.6666666666666679 244.75 1.6666666666666679C 252.5375 1.6666666666666679 259.2125 20 267 20"
                                                            pathFrom="M -1 20L -1 20L 22.25 20L 44.5 20L 66.75 20L 89 20L 111.25 20L 133.5 20L 155.75 20L 178 20L 200.25 20L 222.5 20L 244.75 20L 267 20">
                                                        </path>
                                                        <g id="SvgjsG1303" class="apexcharts-series-markers-wrap">
                                                            <g class="apexcharts-series-markers">
                                                                <circle id="SvgjsCircle1332" r="0" cx="0" cy="0"
                                                                    class="apexcharts-marker wihjtn01z no-pointer-events"
                                                                    stroke="#64c5b1" fill="#ffffff" fill-opacity="1"
                                                                    stroke-width="3" stroke-opacity="0.9"
                                                                    default-marker-size="0"></circle>
                                                            </g>
                                                        </g>
                                                        <g id="SvgjsG1304" class="apexcharts-datalabels"></g>
                                                    </g>
                                                </g>
                                                <line id="SvgjsLine1326" x1="0" y1="0" x2="267" y2="0" stroke="#b6b6b6"
                                                    stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs">
                                                </line>
                                                <line id="SvgjsLine1327" x1="0" y1="0" x2="267" y2="0" stroke-dasharray="0"
                                                    stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line>
                                                <g id="SvgjsG1328" class="apexcharts-yaxis-annotations"></g>
                                                <g id="SvgjsG1329" class="apexcharts-xaxis-annotations"></g>
                                                <g id="SvgjsG1330" class="apexcharts-point-annotations"></g>
                                            </g>
                                            <rect id="SvgjsRect1296" width="0" height="0" x="0" y="0" rx="0" ry="0"
                                                fill="#fefefe" opacity="1" stroke-width="0" stroke="none"
                                                stroke-dasharray="0"></rect>
                                            <g id="SvgjsG1322" class="apexcharts-yaxis" rel="0"
                                                transform="translate(-21, 0)"></g>
                                        </svg>
                                        <div class="apexcharts-legend"></div>
                                        <div class="apexcharts-tooltip light">
                                            <div class="apexcharts-tooltip-title"
                                                style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div>
                                            <div class="apexcharts-tooltip-series-group"><span
                                                    class="apexcharts-tooltip-marker"
                                                    style="background-color: rgb(100, 197, 177);"></span>
                                                <div class="apexcharts-tooltip-text"
                                                    style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                                    <div class="apexcharts-tooltip-y-group"><span
                                                            class="apexcharts-tooltip-text-label"></span><span
                                                            class="apexcharts-tooltip-text-value"></span></div>
                                                    <div class="apexcharts-tooltip-z-group"><span
                                                            class="apexcharts-tooltip-text-z-label"></span><span
                                                            class="apexcharts-tooltip-text-z-value"></span></div>
                                                </div>
                                            </div>
                                            <div class="apexcharts-tooltip-series-group"><span
                                                    class="apexcharts-tooltip-marker"
                                                    style="background-color: rgb(214, 255, 249);"></span>
                                                <div class="apexcharts-tooltip-text"
                                                    style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                                    <div class="apexcharts-tooltip-y-group"><span
                                                            class="apexcharts-tooltip-text-label"></span><span
                                                            class="apexcharts-tooltip-text-value"></span></div>
                                                    <div class="apexcharts-tooltip-z-group"><span
                                                            class="apexcharts-tooltip-text-z-label"></span><span
                                                            class="apexcharts-tooltip-text-z-value"></span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom light">
                                            <div class="apexcharts-xaxistooltip-text"
                                                style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="resize-triggers">
                                    <div class="expand-trigger">
                                        <div ></div>
                                    </div>
                                    <div class="contract-trigger"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="white_card card_height_100 mb_20">
                            <div class="white_card_header">
                                <div class="box_header m-0">
                                    <div class="main-title">
                                        <h3 class="m-0">Summary</h3>
                                    </div>
                                    <div class="header_more_tool">
                                        <div class="dropdown">
                                            <span class="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                                <i class="ti-more-alt"></i>
                                            </span>
                                            <div class="dropdown-menu dropdown-menu-right"
                                                aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#"> <i class="ti-eye"></i> Action</a>
                                                <a class="dropdown-item" href="#"> <i class="ti-trash"></i> Delete</a>
                                                <a class="dropdown-item" href="#"> <i class="fas fa-edit"></i> Edit</a>
                                                <a class="dropdown-item" href="#"> <i class="ti-printer"></i> Print</a>
                                                <a class="dropdown-item" href="#"> <i class="fa fa-download"></i>
                                                    Download</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="white_card_body mt_30">
                                <div id="bar1" class="barfiller">
                                    <div class="tipWrap" style="display: inline;">
                                        <span class="tip"
                                            style="left: 43.2265px; transition: left 2s ease-in-out 0s;">25%</span>
                                    </div>
                                    <span class="fill" data-percentage="25"
                                        style="background: rgb(255, 191, 67); width: 66.664px; transition: width 2s ease-in-out 0s;"></span>
                                </div>
                                <div id="bar2" class="barfiller">
                                    <div class="tipWrap" style="display: inline;">
                                        <span class="tip"
                                            style="left: 176.554px; transition: left 2.1s ease-in-out 0s;">75%</span>
                                    </div>
                                    <span class="fill" data-percentage="75"
                                        style="background: rgb(80, 143, 244); width: 199.992px; transition: width 2.1s ease-in-out 0s;"></span>
                                </div>
                                <div id="bar3" class="barfiller mb-0">
                                    <div class="tipWrap" style="display: inline;">
                                        <span class="tip"
                                            style="left: 67.2255px; transition: left 2.2s ease-in-out 0s;">34%</span>
                                    </div>
                                    <span class="fill" data-percentage="34"
                                        style="background: rgb(75, 230, 157); width: 90.663px; transition: width 2.2s ease-in-out 0s;"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="white_card card_height_100 mb_20">
                            <div class="white_card_header">
                                <div class="box_header m-0">
                                    <div class="main-title">
                                        <h3 class="m-0">Total order</h3>
                                    </div>
                                    <div class="float-lg-right float-none sales_renew_btns justify-content-end">
                                        <ul class="nav">
                                            <li class="nav-item">
                                                <a class="nav-link active" href="#">Today</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">This week</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="white_card_body d-flex align-items-center" style="height:140px">
                                <h4 class="f_w_900 f_s_60 mb-0 me-2">356</h4>
                                <div class="w-100" style="height:100px">
                                    <div class="chartjs-size-monitor">
                                        <div class="chartjs-size-monitor-expand">
                                            <div class=""></div>
                                        </div>
                                        <div class="chartjs-size-monitor-shrink">
                                            <div class=""></div>
                                        </div>
                                    </div>
                                    <canvas width="151" id="page_views" height="100"
                                        style="display: block; width: 151px; height: 100px;"
                                        class="chartjs-render-monitor"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="white_card card_height_100  mb_20">
                            <div class="white_card_header">
                                <div class="box_header m-0">
                                    <div class="main-title">
                                        <h3 class="m-0">Transaction</h3>
                                    </div>
                                    <div class="header_more_tool">
                                        <div class="dropdown">
                                            <span class="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                                <i class="ti-more-alt"></i>
                                            </span>
                                            <div class="dropdown-menu dropdown-menu-right"
                                                aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#"> <i class="ti-eye"></i> Action</a>
                                                <a class="dropdown-item" href="#"> <i class="ti-trash"></i> Delete</a>
                                                <a class="dropdown-item" href="#"> <i class="fas fa-edit"></i> Edit</a>
                                                <a class="dropdown-item" href="#"> <i class="ti-printer"></i> Print</a>
                                                <a class="dropdown-item" href="#"> <i class="fa fa-download"></i>
                                                    Download</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="white_card_body">
                                <div class="table-responsive">
                                    <table class="table bayer_table m-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <!-- <img class="byder_thumb wh_56" src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png" alt=""> -->
                                                </td>
                                                <td>
                                                    <div class="payment_gatway">
                                                        <h5 class="byer_name  f_s_16 f_w_700 color_theme">Electricity Bill
                                                        </h5>
                                                        <p class="color_gray f_s_12 f_w_700 ">10 Aug 03:00PM</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="payment_gatway text-end">
                                                        <h5 class="byer_name  f_s_16 f_w_700 text_color_4">- $ 1254.00</h5>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <!-- <img class="byder_thumb wh_56" src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png" alt=""> -->
                                                </td>
                                                <td>
                                                    <div class="payment_gatway">
                                                        <h5 class="byer_name  f_s_16 f_w_700 color_theme">Showroom Rent</h5>
                                                        <p class="color_gray f_s_12 f_w_700 ">10 Aug 03:00PM</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="payment_gatway text-end">
                                                        <h5 class="byer_name  f_s_16 f_w_700 text_color_5">+ $ 1254.00</h5>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img class="byder_thumb wh_56" src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png" alt="">
                                                </td>
                                                <td>
                                                    <div class="payment_gatway">
                                                        <h5 class="byer_name  f_s_16 f_w_700 color_theme">Iron Costing</h5>
                                                        <p class="color_gray f_s_12 f_w_700 ">10 Aug 03:00PM</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="payment_gatway text-end">
                                                        <h5 class="byer_name  f_s_16 f_w_700 text_color_5">+ $ 1254.00</h5>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img class="byder_thumb wh_56" src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png" alt="">
                                                </td>
                                                <td>
                                                    <div class="payment_gatway">
                                                        <h5 class="byer_name  f_s_16 f_w_700 color_theme">Packeging Cost
                                                        </h5>
                                                        <p class="color_gray f_s_12 f_w_700 ">10 Aug 03:00PM</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="payment_gatway text-end">
                                                        <h5 class="byer_name  f_s_16 f_w_700 text_color_5">+ $ 1254.00</h5>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="white_card card_height_100  mb_20">
                            <div class="white_card_header">
                                <div class="box_header m-0">
                                    <div class="main-title">
                                        <h3 class="m-0">News &amp; Update</h3>
                                    </div>
                                    <div class="single_wrap_input">
                                        <select class="nice_Select2 wide" name="" id="" style="display: none;">
                                            <option value="1">Today</option>
                                            <option value="1">Tomorrow</option>
                                            <option value="1">Yesterday</option>
                                        </select>
                                        <div class="nice-select nice_Select2 wide" tabindex="0"><span
                                                class="current">Today</span>
                                            <div class="nice-select-search-box"><input type="text"
                                                    class="nice-select-search" placeholder="Search..."></div>
                                            <ul class="list">
                                                <li data-value="1" class="option selected">Today</li>
                                                <li data-value="1" class="option">Tomorrow</li>
                                                <li data-value="1" class="option">Yesterday</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="white_card_body">
                                <div class="single_update_news">
                                    <h5 class="byer_name  f_s_16 f_w_600 color_theme2">36% off For pixel lights Couslations
                                        Types.</h5>
                                    <p class="color_gray f_s_12 f_w_700 ">Sorem Kpsum is simply of the printing..</p>
                                </div>
                                <div class="single_update_news">
                                    <h5 class="byer_name  f_s_16 f_w_600 color_theme2">We are produce new product this</h5>
                                    <p class="color_gray f_s_12 f_w_700 ">Gorem Rpsum is simply text of the printing...</p>
                                </div>
                                <div class="single_update_news">
                                    <h5 class="byer_name  f_s_16 f_w_600 color_theme2">50% off For COVID Couslations Types.
                                    </h5>
                                    <p class="color_gray f_s_12 f_w_700 ">EoremHpsum is simply dummy...</p>
                                </div>
                                <div class="load_more_button text-center mt_30">
                                    <a class="theme_text_btn d-flex align-items-center justify-content-center" href="#">Load
                                        more <i class="ti-angle-down f_s_12 ms-2"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="white_card card_height_100  mb_20">
                            <div class="white_card_header">
                                <div class="box_header m-0">
                                    <div class="main-title">
                                        <h3 class="m-0">Account Info</h3>
                                    </div>
                                    <div class="header_more_tool">
                                        <div class="dropdown">
                                            <span class="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                                <i class="ti-more-alt"></i>
                                            </span>
                                            <div class="dropdown-menu dropdown-menu-right"
                                                aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#"> <i class="ti-eye"></i> Action</a>
                                                <a class="dropdown-item" href="#"> <i class="ti-trash"></i> Delete</a>
                                                <a class="dropdown-item" href="#"> <i class="fas fa-edit"></i> Edit</a>
                                                <a class="dropdown-item" href="#"> <i class="ti-printer"></i> Print</a>
                                                <a class="dropdown-item" href="#"> <i class="fa fa-download"></i>
                                                    Download</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="white_card_body">
                                <div class="monthly_plan_wraper">
                                    <div class="single_plan d-flex align-items-center justify-content-between">
                                        <h5 class="color_theme2 f_s_14 f_w_700 mb-0">Monthly Plan</h5>
                                        <span class="color_gray2 f_s_16 f_w_700">$25</span>
                                    </div>
                                    <div class="single_plan d-flex align-items-center justify-content-between">
                                        <h5 class="color_theme2 f_s_14 f_w_700 mb-0">Taxes</h5>
                                        <span class="color_gray2 f_s_16 f_w_700">$14</span>
                                    </div>
                                    <div class="single_plan d-flex align-items-start justify-content-between">
                                        <div>
                                            <h5 class="color_theme2 f_s_14 f_w_700 mb-0">Extera</h5>
                                            <p class="f_s_13 f_w_700">Netflix and other bills in this
                                                month.</p>
                                        </div>
                                        <span class="color_gray2 f_s_16 f_w_700">$25</span>
                                    </div>
                                    <div class="total_blance mt_20 mb_10">
                                        <span class="f_s_13 f_w_700 color_gray ">Total balance</span>
                                        <div
                                            class="total_blance_inner d-flex align-items-center flex-wrap justify-content-between">
                                            <div>
                                                <span class="f_s_40 f_w_700 color_text_3 d-block">$3650</span>
                                                <a class="badge_btn_5" href="#">+1235</a>
                                            </div>
                                            <div>
                                                <div><a class="badge_btn_6 mb_15" href="#">Today</a></div>
                                                <div><a class="badge_btn_7" href="#">This week</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="white_card card_height_100 mb_20">
                            <div class="date_picker_wrapper">
                                <div class="default-datepicker">
                                    <div class="datepicker-here" data-language="en">
                                        <div class="datepicker-inline">
                                            <div class="datepicker"><i class="datepicker--pointer"></i>
                                                <nav class="datepicker--nav">
                                                    <div class="datepicker--nav-action" data-action="prev"><svg>
                                                            <path d="M 17,12 l -5,5 l 5,5"></path>
                                                        </svg></div>
                                                    <div class="datepicker--nav-title">January, <i> 2024 </i></div>
                                                    <div class="datepicker--nav-action" data-action="next"><svg>
                                                            <path d="M 14,12 l 5,5 l -5,5"></path>
                                                        </svg></div>
                                                </nav>
                                                <div class="datepicker--content">
                                                    <div class="datepicker--days datepicker--body active">
                                                        <div class="datepicker--days-names">
                                                            <div class="datepicker--day-name -weekend-">Su</div>
                                                            <div class="datepicker--day-name">Mo</div>
                                                            <div class="datepicker--day-name">Tu</div>
                                                            <div class="datepicker--day-name">We</div>
                                                            <div class="datepicker--day-name">Th</div>
                                                            <div class="datepicker--day-name">Fr</div>
                                                            <div class="datepicker--day-name -weekend-">Sa</div>
                                                        </div>
                                                        <div class="datepicker--cells datepicker--cells-days">
                                                            <div class="datepicker--cell datepicker--cell-day -weekend- -other-month-"
                                                                data-date="31" data-month="11" data-year="2023">31</div>
                                                            <div class="datepicker--cell datepicker--cell-day" data-date="1"
                                                                data-month="0" data-year="2024">1</div>
                                                            <div class="datepicker--cell datepicker--cell-day" data-date="2"
                                                                data-month="0" data-year="2024">2</div>
                                                            <div class="datepicker--cell datepicker--cell-day" data-date="3"
                                                                data-month="0" data-year="2024">3</div>
                                                            <div class="datepicker--cell datepicker--cell-day" data-date="4"
                                                                data-month="0" data-year="2024">4</div>
                                                            <div class="datepicker--cell datepicker--cell-day" data-date="5"
                                                                data-month="0" data-year="2024">5</div>
                                                            <div class="datepicker--cell datepicker--cell-day -weekend-"
                                                                data-date="6" data-month="0" data-year="2024">6</div>
                                                            <div class="datepicker--cell datepicker--cell-day -weekend-"
                                                                data-date="7" data-month="0" data-year="2024">7</div>
                                                            <div class="datepicker--cell datepicker--cell-day" data-date="8"
                                                                data-month="0" data-year="2024">8</div>
                                                            <div class="datepicker--cell datepicker--cell-day" data-date="9"
                                                                data-month="0" data-year="2024">9</div>
                                                            <div class="datepicker--cell datepicker--cell-day"
                                                                data-date="10" data-month="0" data-year="2024">10</div>
                                                            <div class="datepicker--cell datepicker--cell-day"
                                                                data-date="11" data-month="0" data-year="2024">11</div>
                                                            <div class="datepicker--cell datepicker--cell-day"
                                                                data-date="12" data-month="0" data-year="2024">12</div>
                                                            <div class="datepicker--cell datepicker--cell-day -weekend-"
                                                                data-date="13" data-month="0" data-year="2024">13</div>
                                                            <div class="datepicker--cell datepicker--cell-day -weekend- -current-"
                                                                data-date="14" data-month="0" data-year="2024">14</div>
                                                            <div class="datepicker--cell datepicker--cell-day"
                                                                data-date="15" data-month="0" data-year="2024">15</div>
                                                            <div class="datepicker--cell datepicker--cell-day"
                                                                data-date="16" data-month="0" data-year="2024">16</div>
                                                            <div class="datepicker--cell datepicker--cell-day"
                                                                data-date="17" data-month="0" data-year="2024">17</div>
                                                            <div class="datepicker--cell datepicker--cell-day"
                                                                data-date="18" data-month="0" data-year="2024">18</div>
                                                            <div class="datepicker--cell datepicker--cell-day"
                                                                data-date="19" data-month="0" data-year="2024">19</div>
                                                            <div class="datepicker--cell datepicker--cell-day -weekend-"
                                                                data-date="20" data-month="0" data-year="2024">20</div>
                                                            <div class="datepicker--cell datepicker--cell-day -weekend-"
                                                                data-date="21" data-month="0" data-year="2024">21</div>
                                                            <div class="datepicker--cell datepicker--cell-day"
                                                                data-date="22" data-month="0" data-year="2024">22</div>
                                                            <div class="datepicker--cell datepicker--cell-day"
                                                                data-date="23" data-month="0" data-year="2024">23</div>
                                                            <div class="datepicker--cell datepicker--cell-day"
                                                                data-date="24" data-month="0" data-year="2024">24</div>
                                                            <div class="datepicker--cell datepicker--cell-day"
                                                                data-date="25" data-month="0" data-year="2024">25</div>
                                                            <div class="datepicker--cell datepicker--cell-day"
                                                                data-date="26" data-month="0" data-year="2024">26</div>
                                                            <div class="datepicker--cell datepicker--cell-day -weekend-"
                                                                data-date="27" data-month="0" data-year="2024">27</div>
                                                            <div class="datepicker--cell datepicker--cell-day -weekend-"
                                                                data-date="28" data-month="0" data-year="2024">28</div>
                                                            <div class="datepicker--cell datepicker--cell-day"
                                                                data-date="29" data-month="0" data-year="2024">29</div>
                                                            <div class="datepicker--cell datepicker--cell-day"
                                                                data-date="30" data-month="0" data-year="2024">30</div>
                                                            <div class="datepicker--cell datepicker--cell-day"
                                                                data-date="31" data-month="0" data-year="2024">31</div>
                                                            <div class="datepicker--cell datepicker--cell-day -other-month-"
                                                                data-date="1" data-month="1" data-year="2024">1</div>
                                                            <div class="datepicker--cell datepicker--cell-day -other-month-"
                                                                data-date="2" data-month="1" data-year="2024">2</div>
                                                            <div class="datepicker--cell datepicker--cell-day -weekend- -other-month-"
                                                                data-date="3" data-month="1" data-year="2024">3</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="white_card card_height_100  mb_20">
                            <div class="white_card_header">
                                <div class="box_header m-0">
                                    <div class="main-title">
                                        <h3 class="m-0">Top Global Sales</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="white_card_body pb-0">
                                <div id="world-map-markers" class="dashboard_w_map">
                                    <div class="jvectormap-container" style="background-color: transparent;"><svg
                                            width="617.328" height="270">
                                            <defs></defs>
                                            <g transform="scale(0.612652901530057) translate(53.81545444269273, 0)">
                                                <path
                                                    d="M651.84,230.21l-0.6,-2.0l-1.36,-1.71l-2.31,-0.11l-0.41,0.48l0.2,0.94l-0.53,0.99l-0.72,-0.36l-0.68,0.35l-1.2,-0.36l-0.37,-2.0l-0.81,-1.86l0.39,-1.46l-0.22,-0.47l-1.14,-0.53l0.29,-0.5l1.48,-0.94l0.03,-0.65l-1.55,-1.22l0.55,-1.14l1.61,0.94l1.04,0.15l0.18,1.54l0.34,0.35l5.64,0.63l-0.84,1.64l-1.22,0.34l-0.77,1.51l0.07,0.47l1.37,1.37l0.67,-0.19l0.42,-1.39l1.21,3.84l-0.03,1.21l-0.33,-0.15l-0.4,0.28Z"
                                                    data-code="BD" fill="#7474b126" fill-opacity="1" stroke="none"
                                                    stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                    class="jvectormap-region jvectormap-element"></path>
                                                <path
                                                    d="M429.29,144.05l1.91,0.24l2.1,-0.63l2.63,1.99l-0.21,1.66l-0.69,0.4l-0.18,1.2l-1.66,-1.13l-1.39,0.15l-2.73,-2.7l-1.17,-0.18l-0.16,-0.52l1.54,-0.5Z"
                                                    data-code="BE" fill="#7474b126" fill-opacity="1" stroke="none"
                                                    stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                    class="jvectormap-region jvectormap-element"></path>
                                                <path
                                                    d="M421.42,247.64l-0.11,0.95l0.34,1.16l1.4,1.71l0.07,1.1l0.32,0.37l2.55,0.51l-0.04,1.28l-0.38,0.53l-1.07,0.21l-0.72,1.18l-0.63,0.21l-3.22,-0.25l-0.94,0.39l-5.4,-0.05l-0.39,0.38l0.16,2.73l-1.23,-0.43l-1.17,0.1l-0.89,0.57l-2.27,-1.72l-0.13,-1.11l0.61,-0.96l0.02,-0.93l1.87,-1.98l0.44,-1.81l0.43,-0.39l1.28,0.26l1.05,-0.52l0.47,-0.73l1.84,-1.09l0.55,-0.83l2.2,-1.0l1.15,-0.3l0.72,0.45l1.13,-0.01Z"
                                                    data-code="BF" fill="#7474b126" fill-opacity="1" stroke="none"
                                                    stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                    class="jvectormap-region jvectormap-element"></path>
                                                <path
                                                    d="M491.65,168.18l-0.86,0.88l-0.91,2.17l0.48,1.34l-1.6,-0.24l-2.55,0.95l-0.28,1.51l-1.8,0.22l-2.0,-1.0l-1.92,0.79l-1.42,-0.07l-0.15,-1.63l-1.05,-0.97l0.0,-0.8l1.2,-1.57l0.01,-0.56l-1.14,-1.23l-0.05,-0.94l0.88,0.97l0.88,-0.2l1.91,0.47l3.68,0.16l1.42,-0.81l2.72,-0.66l2.55,1.24Z"
                                                    data-code="BG" fill="#7474b126" fill-opacity="1" stroke="none"
                                                    stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                    class="jvectormap-region jvectormap-element"></path>
                                                <path
                                                    d="M463.49,163.65l2.1,0.5l1.72,-0.03l1.52,0.68l-0.36,0.78l0.08,0.45l1.04,1.02l-0.25,0.98l-1.81,1.15l-0.38,1.38l-1.67,-0.87l-0.89,-1.2l-2.11,-1.83l-1.63,-2.22l0.23,-0.57l0.48,0.38l0.55,-0.06l0.43,-0.51l0.94,-0.06Z"
                                                    data-code="BA" fill="#7474b126" fill-opacity="1" stroke="none"
                                                    stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                    class="jvectormap-region jvectormap-element"></path>
                                                <path
                                                    d="M707.48,273.58l0.68,-0.65l1.41,-0.91l-0.15,1.63l-0.81,-0.05l-0.61,0.58l-0.53,-0.6Z"
                                                    data-code="BN" fill="#7474b126" fill-opacity="1" stroke="none"
                                                    stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                    class="jvectormap-region jvectormap-element"></path>
                                                <path
                                                    d="M263.83,340.69l-3.09,-0.23l-0.38,0.23l-0.7,1.52l-1.31,-1.53l-3.28,-0.64l-2.37,2.4l-1.31,0.26l-0.88,-3.26l-1.3,-2.86l0.74,-2.37l-0.13,-0.43l-1.2,-1.01l-0.37,-1.89l-1.08,-1.55l1.45,-2.56l-0.96,-2.33l0.47,-1.06l-0.34,-0.73l0.91,-1.32l0.16,-3.84l0.5,-1.18l-1.81,-3.41l2.46,0.07l0.8,-0.85l3.4,-1.91l2.66,-0.35l-0.19,1.38l0.3,1.07l-0.05,1.97l2.72,2.27l2.88,0.49l0.89,0.86l1.79,0.58l0.98,0.7l1.71,0.05l1.17,0.61l0.6,2.7l-0.7,0.54l0.96,2.99l0.37,0.28l4.3,0.1l-0.25,1.2l0.27,1.02l1.43,0.9l0.5,1.35l-0.41,1.86l-0.65,1.08l0.12,1.35l-2.69,-1.65l-2.4,-0.03l-4.36,0.76l-1.49,2.5l-0.11,1.52l-0.75,2.37Z"
                                                data-code="BO" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M781.12,166.87l1.81,0.68l1.62,-0.97l0.39,2.42l-3.35,0.75l-2.23,2.88l-3.63,-1.9l-0.56,0.2l-1.26,3.05l-2.16,0.03l-0.29,-2.51l1.08,-2.03l2.45,-0.16l0.37,-0.33l1.25,-5.94l2.47,2.71l2.03,1.12ZM773.56,187.34l-0.91,2.22l0.37,1.52l-1.14,1.75l-3.02,1.26l-4.58,0.27l-3.34,3.01l-1.25,-0.8l-0.09,-1.9l-0.46,-0.38l-4.35,0.62l-3.0,1.32l-2.85,0.05l-0.37,0.27l0.13,0.44l2.32,1.89l-1.54,4.34l-1.26,0.9l-0.79,-0.7l0.56,-2.27l-0.21,-0.45l-1.47,-0.75l-0.74,-1.4l2.12,-0.84l1.26,-1.7l2.45,-1.42l1.83,-1.91l4.78,-0.81l2.6,0.57l0.44,-0.21l2.39,-4.66l1.29,1.06l0.5,0.01l5.1,-4.02l1.69,-3.73l-0.38,-3.4l0.9,-1.61l2.14,-0.44l1.23,3.72l-0.07,2.18l-2.23,2.84l-0.04,3.16ZM757.78,196.26l0.19,0.56l-1.01,1.21l-1.16,-0.68l-1.28,0.65l-0.69,1.45l-1.02,-0.5l0.01,-0.93l1.14,-1.38l1.57,0.14l0.85,-0.98l1.4,0.46Z"
                                                data-code="JP" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M495.45,295.49l-1.08,-2.99l1.14,-0.11l0.64,-1.19l0.76,0.09l0.65,1.83l-2.1,2.36Z"
                                                data-code="BI" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M429.57,255.75l-0.05,0.8l0.5,1.34l-0.42,0.86l0.17,0.79l-1.81,2.12l-0.57,1.76l-0.08,5.42l-1.41,0.2l-0.48,-1.36l0.11,-5.71l-0.52,-0.7l-0.2,-1.35l-1.48,-1.48l0.21,-0.9l0.89,-0.43l0.42,-0.92l1.27,-0.36l1.22,-1.34l0.61,-0.0l1.62,1.24Z"
                                                data-code="BJ" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M650.32,213.86l0.84,0.71l-0.12,1.1l-3.76,-0.11l-1.57,0.4l-1.93,-0.87l1.48,-1.96l1.13,-0.57l1.63,0.57l1.33,0.08l0.99,0.65Z"
                                                data-code="BT" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M228.38,239.28l-0.8,0.4l-2.26,-1.06l0.84,-0.23l2.14,0.3l1.17,0.56l-1.08,0.03Z"
                                                data-code="JM" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M483.92,330.07l2.27,4.01l2.83,2.86l0.96,0.31l0.78,2.43l2.13,0.61l1.02,0.76l-3.0,1.64l-2.32,2.02l-1.54,2.69l-1.52,0.45l-0.64,1.94l-1.34,0.52l-1.85,-0.12l-1.21,-0.74l-1.35,-0.3l-1.22,0.62l-0.75,1.37l-2.31,1.9l-1.4,0.21l-0.35,-0.59l0.16,-1.75l-1.48,-2.54l-0.62,-0.43l-0.0,-7.1l2.08,-0.08l0.39,-0.4l0.07,-8.9l5.19,-0.93l0.8,0.89l0.51,0.07l1.5,-0.95l2.21,-0.49Z"
                                                data-code="BW" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M259.98,275.05l3.24,0.7l0.65,-0.53l4.55,-1.32l1.08,-1.06l-0.02,-0.63l0.55,-0.05l0.28,0.28l-0.26,0.87l0.22,0.48l0.73,0.32l0.4,0.81l-0.62,0.86l-0.4,2.13l0.82,2.56l1.69,1.43l1.43,0.2l3.17,-1.68l3.18,0.3l0.65,-0.75l-0.27,-0.92l1.9,-0.09l2.39,0.99l1.06,-0.61l0.84,0.78l1.2,-0.18l1.18,-1.06l0.84,-1.94l1.36,-2.11l0.37,-0.05l1.89,5.45l1.33,0.59l0.05,1.28l-1.77,1.94l0.02,0.56l1.02,0.87l4.07,0.36l0.08,2.16l0.66,0.29l1.74,-1.5l6.97,2.32l1.02,1.22l-0.35,1.18l0.49,0.5l2.81,-0.74l4.77,1.3l3.75,-0.08l3.57,2.0l3.29,2.86l1.93,0.72l2.12,0.12l0.71,0.62l1.21,4.51l-0.95,3.98l-4.72,5.06l-1.64,2.92l-1.72,2.05l-0.8,0.3l-0.72,2.03l0.18,4.75l-0.94,5.53l-0.81,1.13l-0.43,3.36l-2.55,3.5l-0.4,2.51l-1.86,1.04l-0.67,1.53l-2.54,0.01l-3.94,1.01l-1.83,1.2l-2.87,0.82l-3.03,2.19l-2.2,2.83l-0.36,2.0l0.4,1.58l-0.44,2.6l-0.51,1.2l-1.77,1.54l-2.75,4.78l-3.83,3.42l-1.24,2.74l-1.18,1.15l-0.36,-0.83l0.95,-1.14l0.01,-0.5l-1.52,-1.97l-4.56,-3.32l-1.03,-0.0l-2.38,-2.02l-0.81,-0.0l5.34,-5.45l3.77,-2.58l0.22,-2.46l-1.35,-1.81l-0.91,0.07l0.58,-2.33l0.01,-1.54l-1.11,-0.83l-1.75,0.3l-0.44,-3.11l-0.52,-0.95l-1.88,-0.88l-1.24,0.47l-2.17,-0.41l0.15,-3.21l-0.62,-1.34l0.66,-0.73l-0.22,-1.34l0.66,-1.13l0.44,-2.04l-0.61,-1.83l-1.4,-0.86l-0.2,-0.75l0.34,-1.39l-0.38,-0.5l-4.52,-0.1l-0.72,-2.22l0.59,-0.42l-0.03,-1.1l-0.5,-0.87l-0.32,-1.7l-1.45,-0.76l-1.63,-0.02l-1.05,-0.72l-1.6,-0.48l-1.13,-0.99l-2.69,-0.4l-2.47,-2.06l0.13,-4.35l-0.45,-0.45l-3.46,0.5l-3.44,1.94l-0.6,0.74l-2.9,-0.17l-1.47,0.42l-0.72,-0.18l0.15,-3.52l-0.63,-0.34l-1.94,1.41l-1.87,-0.06l-0.83,-1.18l-1.37,-0.26l0.21,-1.01l-1.35,-1.49l-0.88,-1.91l0.56,-0.6l-0.0,-0.81l1.29,-0.62l0.22,-0.43l-0.22,-1.19l0.61,-0.91l0.15,-0.99l2.65,-1.58l1.99,-0.47l0.42,-0.36l2.06,0.11l0.42,-0.33l1.19,-8.0l-0.41,-1.56l-1.1,-1.0l0.01,-1.33l1.91,-0.42l0.08,-0.96l-0.33,-0.43l-1.14,-0.2l-0.02,-0.83l4.47,0.05l0.82,-0.67l0.82,1.81l0.8,0.07l1.15,1.1l2.26,-0.05l0.71,-0.83l2.78,-0.96l0.48,-1.13l1.6,-0.64l0.24,-0.47l-0.48,-0.82l-1.83,-0.19l-0.36,-3.22Z"
                                                data-code="BR" fill="#868ff363" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M226.4,223.87l-0.48,-1.15l-0.84,-0.75l0.36,-1.11l0.95,1.95l0.01,1.06ZM225.56,216.43l-1.87,0.29l-0.04,-0.22l0.74,-0.14l1.17,0.06Z"
                                                data-code="BS" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M493.84,128.32l0.29,0.7l0.49,0.23l1.19,-0.38l2.09,0.72l0.19,1.26l-0.45,1.24l1.57,2.26l0.89,0.59l0.17,0.81l1.58,0.56l0.4,0.5l-0.53,0.41l-1.87,-0.11l-0.73,0.38l-0.13,0.52l1.04,2.74l-1.91,0.26l-0.89,0.99l-0.11,1.18l-2.73,-0.04l-0.53,-0.62l-0.52,-0.08l-0.75,0.46l-0.91,-0.42l-1.92,-0.07l-2.75,-0.79l-2.6,-0.28l-2.0,0.07l-1.5,0.92l-0.67,0.07l-0.08,-1.22l-0.59,-1.19l1.36,-0.88l0.01,-1.35l-0.7,-1.41l-0.07,-1.0l2.16,-0.02l2.72,-1.3l0.75,-2.04l1.91,-1.04l0.2,-0.41l-0.19,-1.25l3.8,-1.78l2.3,0.77Z"
                                                data-code="BY" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M198.03,244.38l0.1,-4.49l0.69,-0.06l0.74,-1.3l0.34,0.28l-0.4,1.3l0.17,0.58l-0.34,2.25l-1.3,1.42Z"
                                                data-code="BZ" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M491.55,115.25l2.55,-1.85l-0.01,-0.65l-2.2,-1.5l7.32,-6.76l1.03,-2.11l-0.13,-0.49l-3.46,-2.52l0.86,-2.7l-2.11,-2.81l1.56,-3.67l-2.77,-4.52l2.15,-2.99l-0.08,-0.55l-3.65,-2.73l0.3,-2.54l1.81,-0.37l4.26,-1.77l2.42,-1.45l4.06,2.61l6.79,1.04l9.34,4.85l1.78,1.88l0.14,2.46l-2.55,2.02l-3.9,1.06l-11.07,-3.14l-2.06,0.53l-0.13,0.7l3.94,2.94l0.31,5.86l0.26,0.36l5.14,2.24l0.58,-0.29l0.32,-1.94l-1.35,-1.78l1.13,-1.09l6.13,2.42l2.11,-0.98l0.18,-0.56l-1.51,-2.67l5.41,-3.76l2.07,0.22l2.26,1.41l0.57,-0.16l1.46,-2.87l-0.05,-0.44l-1.92,-2.32l1.12,-2.32l-1.32,-2.27l5.87,1.16l1.04,1.75l-2.59,0.43l-0.33,0.4l0.02,2.36l2.46,1.83l3.87,-0.91l0.86,-2.8l13.69,-5.65l0.99,0.11l-1.92,2.06l0.23,0.67l3.11,0.45l2.0,-1.48l4.56,-0.12l3.64,-1.73l2.65,2.44l0.56,-0.01l2.85,-2.88l-0.01,-0.57l-2.35,-2.29l0.9,-1.01l7.14,1.3l3.41,1.36l9.05,4.97l0.51,-0.11l1.67,-2.27l-0.05,-0.53l-2.43,-2.21l-0.06,-0.78l-0.34,-0.36l-2.52,-0.36l0.64,-1.93l-1.32,-3.46l-0.06,-1.21l4.48,-4.06l1.69,-4.29l1.6,-0.81l6.23,1.18l0.44,2.21l-2.29,3.64l0.06,0.5l1.47,1.39l0.76,3.0l-0.56,6.03l2.69,2.82l-0.96,2.57l-4.86,5.95l0.23,0.64l2.86,0.61l0.42,-0.17l0.93,-1.4l2.64,-1.03l0.87,-2.24l2.09,-1.96l0.07,-0.5l-1.36,-2.28l1.09,-2.69l-0.32,-0.55l-2.47,-0.33l-0.5,-2.06l1.94,-4.38l-0.06,-0.42l-2.96,-3.4l4.12,-2.88l0.16,-0.4l-0.51,-2.93l0.54,-0.05l1.13,2.25l-0.96,4.35l0.27,0.47l2.68,0.84l0.5,-0.51l-1.02,-2.99l3.79,-1.66l5.01,-0.24l4.53,2.61l0.48,-0.06l0.07,-0.48l-2.18,-3.82l-0.23,-4.67l3.98,-0.9l5.97,0.21l5.49,-0.64l0.27,-0.65l-1.83,-2.31l2.56,-2.9l2.87,-0.17l4.8,-2.47l6.54,-0.67l1.03,-1.42l6.25,-0.45l2.32,1.11l5.53,-2.7l4.5,0.08l0.39,-0.28l0.66,-2.15l2.26,-2.12l5.69,-2.11l3.21,1.29l-2.46,0.94l-0.25,0.42l0.34,0.35l5.41,0.77l0.61,2.33l0.58,0.25l2.2,-1.22l7.13,0.07l5.51,2.47l1.79,1.72l-0.53,2.24l-9.16,4.15l-1.97,1.52l0.16,0.71l6.77,1.91l2.16,-0.78l1.13,2.74l0.67,0.11l1.01,-1.15l3.81,-0.73l7.7,0.77l0.54,1.99l0.36,0.29l10.47,0.71l0.43,-0.38l0.13,-3.23l4.87,0.78l3.95,-0.02l3.83,2.4l1.03,2.71l-1.35,1.79l0.02,0.5l3.15,3.64l4.07,1.96l0.53,-0.18l2.23,-4.47l3.95,1.93l4.16,-1.21l4.73,1.39l2.05,-1.26l3.94,0.62l0.43,-0.55l-1.68,-4.02l2.89,-1.8l22.31,3.03l2.16,2.75l6.55,3.51l10.29,-0.81l4.82,0.73l1.85,1.66l-0.29,3.08l0.25,0.41l3.08,1.26l3.56,-0.88l4.35,-0.11l4.8,0.87l4.57,-0.47l4.23,3.79l0.43,0.07l3.1,-1.4l0.16,-0.6l-1.88,-2.62l0.85,-1.52l7.71,1.21l5.22,-0.26l7.09,2.09l9.59,5.22l6.35,4.11l-0.2,2.38l1.88,1.41l0.6,-0.42l-0.48,-2.53l6.15,0.57l4.4,3.51l-1.97,1.43l-4.0,0.41l-0.36,0.39l-0.06,3.79l-0.74,0.62l-2.07,-0.11l-1.91,-1.39l-3.14,-1.11l-0.78,-1.85l-2.72,-0.68l-2.63,0.49l-1.04,-1.1l0.46,-1.31l-0.5,-0.51l-3.0,0.98l-0.22,0.58l0.99,1.7l-1.21,1.48l-3.04,1.68l-3.12,-0.28l-0.4,0.23l0.09,0.46l2.2,2.09l1.46,3.2l1.15,1.1l0.24,1.33l-0.42,0.67l-4.63,-0.77l-6.96,2.9l-2.19,0.44l-7.6,5.06l-0.84,1.45l-3.61,-2.37l-6.24,2.82l-0.94,-1.15l-0.53,-0.08l-2.28,1.52l-3.2,-0.49l-0.44,0.27l-0.78,2.37l-3.05,3.78l0.09,1.47l0.29,0.36l2.54,0.72l-0.29,4.53l-1.97,0.11l-0.35,0.26l-1.07,2.94l0.8,1.45l-3.91,1.58l-1.05,3.95l-3.48,0.77l-0.3,0.3l-0.72,3.29l-3.09,2.65l-0.7,-1.74l-2.44,-12.44l1.16,-4.71l2.04,-2.06l0.22,-1.64l3.8,-0.86l4.46,-4.61l4.28,-3.81l4.48,-3.01l2.17,-5.63l-0.42,-0.54l-3.04,0.33l-1.77,3.31l-5.86,3.86l-1.86,-4.25l-0.45,-0.23l-6.46,1.3l-6.47,6.44l-0.01,0.55l1.58,1.74l-8.24,1.17l0.15,-2.2l-0.34,-0.42l-3.89,-0.56l-3.25,1.81l-7.62,-0.62l-8.45,1.19l-17.71,15.41l0.22,0.7l3.74,0.41l1.36,2.17l2.43,0.76l1.88,-1.68l2.4,0.2l3.4,3.54l0.08,2.6l-1.95,3.42l-0.21,3.9l-1.1,5.06l-3.71,4.54l-0.87,2.21l-8.29,8.89l-3.19,1.7l-1.32,0.03l-1.45,-1.36l-0.49,-0.04l-2.27,1.5l0.41,-3.65l-0.59,-2.47l1.75,-0.89l2.91,0.53l0.42,-0.2l1.68,-3.03l0.87,-3.46l0.97,-1.18l1.32,-2.88l-0.45,-0.56l-4.14,0.95l-2.19,1.25l-3.41,-0.0l-1.06,-2.93l-2.97,-2.3l-4.28,-1.06l-1.75,-5.07l-2.66,-5.01l-2.29,-1.29l-3.75,-1.01l-3.44,0.08l-3.18,0.62l-2.24,1.77l0.05,0.66l1.18,0.69l0.02,1.43l-1.33,1.05l-2.26,3.51l-0.04,1.43l-3.16,1.84l-2.82,-1.16l-3.01,0.23l-1.35,-1.07l-1.5,-0.35l-3.9,2.31l-3.22,0.52l-2.27,0.79l-3.05,-0.51l-2.21,0.03l-1.48,-1.6l-2.6,-1.63l-2.63,-0.43l-5.46,1.01l-3.23,-1.25l-0.72,-2.57l-5.2,-1.24l-2.75,-1.36l-0.5,0.12l-2.59,3.45l0.84,2.1l-2.06,1.93l-3.41,-0.77l-2.42,-0.12l-1.83,-1.54l-2.53,-0.05l-2.42,-0.98l-3.86,1.57l-4.72,2.78l-3.3,0.75l-1.55,-1.92l-3.0,0.41l-1.11,-1.33l-1.62,-0.59l-1.31,-1.94l-1.38,-0.6l-3.7,0.79l-3.31,-1.83l-0.51,0.11l-0.99,1.29l-5.29,-8.05l-2.96,-2.48l0.65,-0.77l0.01,-0.51l-0.5,-0.11l-6.2,3.21l-1.84,0.15l0.15,-1.39l-0.26,-0.42l-3.22,-1.17l-2.46,0.7l-0.69,-3.16l-0.32,-0.31l-4.5,-0.75l-2.47,1.47l-6.19,1.27l-1.29,0.86l-9.51,1.3l-1.15,1.17l-0.03,0.53l1.47,1.9l-1.89,0.69l-0.22,0.56l0.31,0.6l-2.11,1.44l0.03,0.68l3.75,2.12l-0.39,0.98l-3.23,-0.13l-0.86,0.86l-3.09,-1.59l-3.97,0.07l-2.66,1.35l-8.32,-3.56l-4.07,0.06l-5.39,3.68l-0.39,2.0l-2.03,-1.5l-0.59,0.13l-2.0,3.59l0.57,0.93l-1.28,2.16l0.06,0.48l2.13,2.17l1.95,0.04l1.37,1.82l-0.23,1.46l0.25,0.43l0.83,0.33l-0.8,1.31l-2.49,0.62l-2.49,3.2l0.0,0.49l2.17,2.78l-0.15,2.18l2.5,3.24l-1.58,1.59l-0.7,-0.13l-1.63,-1.72l-2.29,-0.84l-0.94,-1.31l-2.34,-0.63l-1.48,0.4l-0.43,-0.47l-3.51,-1.48l-5.76,-1.01l-0.45,0.19l-2.89,-2.34l-2.9,-1.2l-1.53,-1.29l1.29,-0.43l2.08,-2.61l-0.05,-0.55l-0.89,-0.79l3.05,-1.06l0.27,-0.42l-0.07,-0.69l-0.49,-0.35l-1.73,0.39l0.04,-0.68l1.04,-0.72l2.66,-0.48l0.4,-1.32l-0.5,-1.6l0.92,-1.54l0.03,-1.17l-0.29,-0.37l-3.69,-1.06l-1.41,0.02l-1.42,-1.41l-2.19,0.38l-2.77,-1.01l-0.03,-0.59l-0.89,-1.43l-2.0,-0.32l-0.11,-0.54l0.49,-0.53l0.01,-0.53l-1.6,-1.9l-3.58,0.02l-0.88,0.73l-0.46,-0.07l-1.0,-2.79l2.22,-0.02l0.97,-0.74l0.07,-0.57l-0.9,-1.04l-1.35,-0.48l-0.11,-0.7l-0.95,-0.58l-1.38,-1.99l0.46,-0.98l-0.51,-1.96l-2.45,-0.84l-1.21,0.3l-0.46,-0.76l-2.46,-0.83l-0.72,-1.87l-0.21,-1.69l-0.99,-0.85l0.85,-1.17l-0.7,-3.21l1.66,-1.97l-0.16,-0.79ZM749.2,170.72l-0.6,0.4l-0.13,0.16l-0.01,-0.51l0.74,-0.05ZM874.85,67.94l-5.63,0.48l-0.26,-0.84l3.15,-1.89l1.94,0.01l3.19,1.16l-2.39,1.09ZM797.39,48.49l-2.0,1.36l-3.8,-0.42l-4.25,-1.8l0.35,-0.97l9.69,1.83ZM783.67,46.12l-1.63,3.09l-8.98,-0.13l-4.09,1.14l-4.54,-2.97l1.16,-3.01l3.05,-0.89l6.5,0.22l8.54,2.56ZM778.2,134.98l-0.56,-0.9l0.27,-0.12l0.29,1.01ZM778.34,135.48l0.94,3.53l-0.05,3.38l1.05,3.39l2.18,5.0l-2.89,-0.83l-0.49,0.26l-1.54,4.65l2.42,3.5l-0.04,1.13l-1.24,-1.24l-0.61,0.06l-1.09,1.61l-0.28,-1.61l0.27,-3.1l-0.28,-3.4l0.58,-2.47l0.11,-4.39l-1.46,-3.36l0.21,-4.32l2.15,-1.46l0.07,-0.34ZM771.95,56.61l1.76,-1.42l2.89,-0.42l3.28,1.71l0.14,0.6l-3.27,0.03l-4.81,-0.5ZM683.76,31.09l-13.01,1.93l4.03,-6.35l1.82,-0.56l1.73,0.34l5.99,2.98l-0.56,1.66ZM670.85,27.93l-5.08,0.64l-6.86,-1.57l-3.99,-2.05l-2.1,-4.16l-2.6,-0.87l5.72,-3.5l5.2,-1.28l4.69,2.85l5.59,5.4l-0.56,4.53ZM564.15,68.94l-0.64,0.17l-7.85,-0.57l-0.86,-2.04l-4.28,-1.17l-0.28,-1.94l2.27,-0.89l0.25,-0.39l-0.08,-2.38l4.81,-3.97l-0.15,-0.7l-1.47,-0.38l5.3,-3.81l0.15,-0.44l-0.58,-1.94l5.28,-2.51l8.21,-3.27l8.28,-0.96l4.35,-1.94l4.6,-0.64l1.36,1.61l-1.34,1.28l-16.43,4.94l-7.97,4.88l-7.74,9.63l0.66,4.14l4.16,3.27ZM548.81,18.48l-5.5,1.18l-0.58,1.02l-2.59,0.84l-2.13,-1.07l1.12,-1.42l-0.3,-0.65l-2.33,-0.07l1.68,-0.36l3.47,-0.06l0.42,1.29l0.66,0.16l1.38,-1.34l2.15,-0.88l2.94,1.01l-0.39,0.36ZM477.37,133.15l-4.08,0.05l-2.56,-0.32l0.33,-0.87l3.17,-1.03l3.24,0.96l-0.09,1.23Z"
                                                data-code="RU" fill="#868ff363" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M497.0,288.25l0.71,1.01l-0.11,1.09l-1.63,0.03l-1.04,1.39l-0.83,-0.11l0.51,-1.2l0.08,-1.34l0.42,-0.41l0.7,0.14l1.19,-0.61Z"
                                                data-code="RW" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M469.4,163.99l0.42,-0.5l-0.01,-0.52l-1.15,-1.63l1.43,-0.62l1.33,0.12l1.17,1.06l0.46,1.13l1.34,0.64l0.35,1.35l1.46,0.9l0.76,-0.29l0.2,0.69l-0.48,0.78l0.22,1.12l1.05,1.22l-0.77,0.8l-0.37,1.52l-1.21,0.08l0.24,-0.64l-0.39,-0.54l-2.08,-1.64l-0.9,0.05l-0.48,0.94l-2.12,-1.37l0.53,-1.6l-1.11,-1.37l0.51,-1.1l-0.41,-0.57Z"
                                                data-code="RS" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M486.93,129.3l0.17,1.12l-1.81,0.98l-0.72,2.02l-2.47,1.18l-2.1,-0.02l-0.73,-1.05l-1.06,-0.3l-0.09,-1.87l-3.56,-1.13l-0.43,-2.36l2.48,-0.94l4.12,0.22l2.25,-0.31l0.52,0.69l1.24,0.21l2.19,1.56Z"
                                                data-code="LT" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path d="M436.08,149.45l-0.48,-0.07l0.3,-1.28l0.27,0.4l-0.09,0.96Z"
                                                data-code="LU" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M399.36,265.97l0.18,1.54l-0.48,0.99l0.08,0.47l2.47,1.8l-0.33,2.8l-2.65,-1.13l-5.78,-4.61l0.58,-1.32l2.1,-2.33l0.86,-0.22l0.77,1.14l-0.14,0.85l0.59,0.87l1.0,0.14l0.76,-0.99Z"
                                                data-code="LR" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M487.53,154.23l0.6,0.24l2.87,3.98l-0.17,2.69l0.45,1.42l1.32,0.81l1.35,-0.42l0.76,0.36l0.02,0.31l-0.83,0.45l-0.59,-0.22l-0.54,0.3l-0.62,3.3l-1.0,-0.22l-2.07,-1.13l-2.95,0.71l-1.25,0.76l-3.51,-0.15l-1.89,-0.47l-0.87,0.16l-0.82,-1.3l0.29,-0.26l-0.06,-0.64l-1.09,-0.34l-0.56,0.5l-1.05,-0.64l-0.39,-1.39l-1.36,-0.65l-0.35,-1.0l-0.83,-0.75l1.54,-0.54l2.66,-4.21l2.4,-1.24l2.96,0.34l1.48,0.73l0.79,-0.45l1.78,-0.3l0.75,-0.74l0.79,0.0Z"
                                                data-code="RO" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M386.23,253.6l-0.29,0.84l0.15,0.6l-2.21,0.59l-0.86,0.96l-1.04,-0.83l-1.09,-0.23l-0.54,-1.06l-0.66,-0.49l2.41,-0.48l4.13,0.1Z"
                                                data-code="GW" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M195.08,249.77l-2.48,-0.37l-1.03,-0.45l-1.14,-0.89l0.3,-0.99l-0.24,-0.68l0.96,-1.66l2.98,-0.01l0.4,-0.37l-0.19,-1.28l-1.67,-1.4l0.51,-0.4l0.0,-1.05l3.85,0.02l-0.21,4.53l0.4,0.43l1.46,0.38l-1.48,0.98l-0.35,0.7l0.12,0.57l-2.2,1.96Z"
                                                data-code="GT" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M487.07,174.59l-0.59,1.43l-0.37,0.21l-2.84,-0.35l-3.03,0.77l-0.18,0.68l1.28,1.23l-0.61,0.23l-1.14,0.0l-1.2,-1.39l-0.63,0.03l-0.53,1.01l0.56,1.76l1.03,1.19l-0.56,0.38l-0.05,0.62l2.52,2.12l0.02,0.87l-1.78,-0.59l-0.48,0.56l0.5,1.0l-1.07,0.2l-0.3,0.53l0.75,2.01l-0.98,0.02l-1.84,-1.12l-1.37,-4.2l-2.21,-2.95l-0.11,-0.56l1.04,-1.28l0.2,-0.95l0.85,-0.66l0.03,-0.46l1.32,-0.21l1.01,-0.64l1.22,0.05l0.65,-0.56l2.26,-0.0l1.82,-0.75l1.85,1.0l2.28,-0.28l0.35,-0.39l0.01,-0.77l0.34,0.22ZM480.49,192.16l0.58,0.4l-0.68,-0.12l0.11,-0.28ZM482.52,192.82l2.51,0.06l0.24,0.32l-1.99,0.13l-0.77,-0.51Z"
                                                data-code="GR" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path d="M448.79,279.62l0.02,2.22l-4.09,0.0l0.69,-2.27l3.38,0.05Z"
                                                data-code="GQ" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M277.42,270.07l-0.32,1.83l-1.32,0.57l-0.23,0.46l-0.28,2.0l1.11,1.82l0.83,0.19l0.32,1.25l1.13,1.62l-1.21,-0.19l-1.08,0.71l-1.77,0.5l-0.44,0.46l-0.86,-0.09l-1.32,-1.01l-0.77,-2.27l0.36,-1.9l0.68,-1.23l-0.57,-1.17l-0.74,-0.43l0.12,-1.16l-0.9,-0.69l-1.1,0.09l-1.31,-1.48l0.53,-0.72l-0.04,-0.84l1.99,-0.86l0.05,-0.59l-0.71,-0.78l0.14,-0.57l1.66,-1.24l1.36,0.77l1.41,1.49l0.06,1.15l0.37,0.38l0.8,0.05l2.06,1.86Z"
                                                data-code="GY" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M521.71,168.93l5.29,0.89l4.07,2.01l1.41,-0.44l2.07,0.56l0.68,1.1l1.07,0.55l-0.12,0.59l0.98,1.29l-1.01,-0.13l-1.81,-0.83l-0.94,0.47l-3.23,0.43l-2.29,-1.39l-2.33,0.05l0.21,-0.97l-0.76,-2.26l-1.45,-1.12l-1.43,-0.39l-0.41,-0.42Z"
                                                data-code="GE" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M412.61,118.72l-2.19,3.22l-0.0,0.45l5.13,-0.3l-0.53,2.37l-2.2,3.12l0.29,0.63l2.37,0.21l2.33,4.3l1.76,0.69l2.2,5.12l2.94,0.77l-0.23,1.62l-1.15,0.88l-0.1,0.52l0.82,1.42l-1.86,1.43l-3.3,-0.02l-4.12,0.87l-1.04,-0.58l-0.47,0.06l-1.51,1.41l-2.12,-0.34l-1.86,1.18l-0.6,-0.29l3.19,-3.0l2.16,-0.69l0.28,-0.41l-0.34,-0.36l-3.73,-0.53l-0.4,-0.76l2.2,-0.87l0.17,-0.61l-1.26,-1.67l0.36,-1.7l3.38,0.28l0.43,-0.33l0.37,-1.99l-1.79,-2.49l-3.11,-0.72l-0.38,-0.59l0.79,-1.35l-0.04,-0.46l-0.82,-0.97l-0.61,0.01l-0.68,0.84l-0.1,-2.34l-1.23,-1.88l0.85,-3.47l1.77,-2.68l1.85,0.26l2.17,-0.22ZM406.26,132.86l-1.01,1.77l-1.57,-0.59l-1.16,0.01l0.37,-1.54l-0.39,-1.39l1.45,-0.1l2.3,1.84Z"
                                                data-code="GB" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M453.24,279.52l-0.08,0.98l0.7,1.29l2.36,0.24l-0.98,2.63l1.18,1.79l0.25,1.78l-0.29,1.52l-0.6,0.93l-1.84,-0.09l-1.23,-1.11l-0.66,0.23l-0.15,0.84l-1.42,0.26l-1.02,0.7l-0.11,0.52l0.77,1.35l-1.34,0.97l-3.94,-4.3l-1.44,-2.45l0.06,-0.6l0.54,-0.81l1.05,-3.46l4.17,-0.07l0.4,-0.4l-0.02,-2.66l2.39,0.21l1.25,-0.27Z"
                                                data-code="GA" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M391.8,254.11l0.47,0.8l1.11,-0.32l0.98,0.7l1.07,0.2l2.26,-1.22l0.64,0.44l1.13,1.56l-0.48,1.4l0.8,0.3l-0.08,0.48l0.46,0.68l-0.35,1.36l1.05,2.61l-1.0,0.69l0.03,1.41l-0.72,-0.06l-1.08,1.0l-0.24,-0.27l0.07,-1.11l-1.05,-1.54l-1.79,0.21l-0.35,-2.01l-1.6,-2.18l-2.0,-0.0l-1.31,0.54l-1.95,2.18l-1.86,-2.19l-1.2,-0.78l-0.3,-1.11l-0.8,-0.85l0.65,-0.72l0.81,-0.03l1.64,-0.8l0.23,-1.87l2.67,0.64l0.89,-0.3l1.21,0.15Z"
                                                data-code="GN" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M379.31,251.39l0.1,-0.35l2.43,-0.07l0.74,-0.61l0.51,-0.03l0.77,0.49l-1.03,-0.3l-1.87,0.9l-1.65,-0.04ZM384.03,250.91l0.91,0.05l0.75,-0.24l-0.59,0.31l-1.08,-0.13Z"
                                                data-code="GM" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M353.02,1.2l14.69,4.67l-3.68,1.89l-22.97,0.86l-0.36,0.27l0.12,0.43l1.55,1.18l8.79,-0.66l7.48,2.07l4.86,-1.77l1.66,1.73l-2.53,3.19l-0.01,0.48l0.46,0.15l6.35,-2.2l12.06,-2.31l7.24,1.13l1.09,1.99l-9.79,4.01l-1.44,1.32l-7.87,0.98l-0.35,0.41l0.38,0.38l5.07,0.24l-2.53,3.58l-2.07,3.81l0.08,6.05l2.57,3.11l-3.22,0.2l-4.12,1.66l-0.05,0.72l4.45,2.65l0.51,3.75l-2.3,0.4l-0.25,0.64l2.79,3.69l-4.82,0.31l-0.36,0.29l0.16,0.44l2.62,1.8l-0.59,1.22l-3.3,0.7l-3.45,0.01l-0.29,0.68l3.03,3.12l0.02,1.34l-4.4,-1.73l-1.72,1.35l0.15,0.66l3.31,1.15l3.13,2.71l0.81,3.16l-3.85,0.75l-4.89,-4.26l-0.47,-0.03l-0.17,0.44l0.79,2.86l-2.71,2.21l-0.13,0.44l0.37,0.27l8.73,0.34l-12.32,6.64l-7.24,1.48l-2.94,0.08l-2.69,1.75l-3.43,4.41l-5.24,2.84l-1.73,0.18l-7.12,2.1l-2.15,2.52l-0.13,2.99l-1.19,2.45l-4.01,3.09l-0.14,0.44l0.97,2.9l-2.28,6.48l-3.1,0.2l-3.83,-3.07l-4.86,-0.02l-2.25,-1.93l-1.7,-3.79l-4.3,-4.84l-1.21,-2.49l-0.44,-3.8l-3.32,-3.63l0.84,-2.86l-1.56,-1.7l2.28,-4.6l3.83,-1.74l1.03,-1.96l0.52,-3.47l-0.59,-0.41l-4.17,2.21l-2.07,0.58l-2.72,-1.28l-0.15,-2.71l0.85,-2.09l2.01,-0.06l5.06,1.2l0.46,-0.23l-0.14,-0.49l-6.54,-4.47l-2.67,0.55l-1.58,-0.86l2.56,-4.01l-0.03,-0.48l-1.5,-1.74l-4.98,-8.5l-3.13,-1.96l0.03,-1.88l-0.24,-0.37l-6.85,-3.02l-5.36,-0.38l-12.7,0.58l-2.78,-1.57l-3.66,-2.77l5.73,-1.45l5.0,-0.28l0.38,-0.38l-0.35,-0.41l-10.67,-1.38l-5.3,-2.06l0.25,-1.54l18.41,-5.26l1.22,-2.27l-0.25,-0.55l-6.14,-1.86l1.68,-1.77l8.55,-4.03l3.59,-0.63l0.3,-0.54l-0.88,-2.27l5.47,-1.47l7.65,-0.95l7.55,-0.05l3.04,1.85l6.48,-3.27l5.81,2.22l3.56,0.5l5.16,1.94l0.5,-0.21l-0.17,-0.52l-5.71,-3.13l0.28,-2.13l8.12,-3.6l8.7,0.28l3.35,-2.34l8.71,-0.6l19.93,0.8Z"
                                                data-code="GL" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M540.81,207.91l0.37,0.86l-0.17,0.76l0.6,1.53l-0.95,0.04l-0.82,-1.28l-1.57,-0.18l1.31,-1.88l1.22,0.17Z"
                                                data-code="KW" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M420.53,257.51l-0.01,0.72l0.96,1.2l0.24,3.73l0.59,0.95l-0.51,2.1l0.19,1.41l1.02,2.21l-6.97,2.84l-1.8,-0.57l0.04,-0.89l-1.02,-2.04l0.61,-2.65l1.07,-2.32l-0.96,-6.47l5.01,0.07l0.94,-0.39l0.61,0.11Z"
                                                data-code="GH" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M568.09,230.93l-0.91,1.67l-1.22,0.04l-0.6,0.76l-0.41,1.51l0.27,1.58l-1.16,0.05l-1.56,0.97l-0.76,1.74l-1.62,0.05l-0.98,0.65l-0.17,1.15l-0.89,0.52l-1.49,-0.18l-2.4,0.94l-2.47,-5.4l7.35,-2.71l1.67,-5.23l-1.12,-2.09l0.05,-0.83l0.67,-1.0l0.07,-1.05l0.9,-0.42l-0.05,-2.07l0.7,-0.01l1.0,1.62l1.51,1.08l3.3,0.84l1.73,2.29l0.81,0.37l-1.23,2.35l-0.99,0.79Z"
                                                data-code="OM" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M531.15,258.94l1.51,0.12l5.13,-0.95l5.3,-1.48l-0.01,4.4l-2.67,3.39l-1.85,0.01l-8.04,-2.94l-2.55,-3.17l1.12,-1.71l2.04,2.34Z"
                                                data-code="_1" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M472.77,172.64l-1.08,-1.29l0.96,-0.77l0.29,-0.83l1.98,1.64l-0.36,0.67l-1.79,0.58Z"
                                                data-code="_0" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M518.64,201.38l-5.14,1.56l-0.19,0.65l2.16,2.39l-0.89,1.14l-1.71,0.34l-1.71,1.8l-2.34,-0.37l1.21,-4.32l0.56,-4.07l2.8,0.94l4.46,-2.71l0.79,2.66Z"
                                                data-code="JO" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M455.59,162.84l1.09,0.07l-0.82,0.94l-0.27,-1.01ZM456.96,162.92l0.62,-0.41l1.73,0.45l0.42,-0.4l-0.01,-0.59l0.86,-0.52l0.2,-1.05l1.63,-0.68l2.57,1.68l2.07,0.6l0.87,-0.31l1.05,1.57l-0.52,0.63l-1.05,-0.56l-1.68,0.04l-2.1,-0.5l-1.29,0.06l-0.57,0.49l-0.59,-0.47l-0.62,0.16l-0.46,1.7l1.79,2.42l2.79,2.75l-1.18,-0.87l-2.21,-0.87l-1.67,-1.78l0.13,-0.63l-1.05,-1.19l-0.32,-1.27l-1.42,-0.43Z"
                                                data-code="HR" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M237.05,238.38l-1.16,0.43l-0.91,-0.55l0.05,-0.2l2.02,0.31ZM237.53,238.43l1.06,0.12l-0.05,0.01l-1.01,-0.12ZM239.25,238.45l0.79,-0.51l0.06,-0.62l-1.02,-1.0l0.02,-0.82l-0.3,-0.4l-0.93,-0.32l3.16,0.45l0.02,1.84l-0.48,0.34l-0.08,0.58l0.54,0.72l-1.78,-0.26Z"
                                                data-code="HT" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M462.08,157.89l0.65,-1.59l-0.09,-0.44l0.64,-0.0l0.39,-0.34l0.1,-0.69l1.75,0.87l2.32,-0.37l0.43,-0.66l3.49,-0.78l0.69,-0.78l0.57,-0.14l2.57,0.93l0.67,-0.23l1.03,0.65l0.08,0.37l-1.42,0.71l-2.59,4.14l-1.8,0.53l-1.68,-0.1l-2.74,1.23l-1.85,-0.54l-2.54,-1.66l-0.66,-1.1Z"
                                                data-code="HU" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M199.6,249.52l-1.7,-1.21l0.06,-0.94l3.04,-2.14l2.37,0.28l1.27,-0.09l1.1,-0.52l1.3,0.28l1.14,-0.25l1.38,0.37l2.23,1.37l-2.36,0.93l-1.23,-0.39l-0.88,1.3l-1.28,0.99l-0.98,-0.22l-0.42,0.52l-0.96,0.05l-0.36,0.41l0.04,0.88l-0.52,0.6l-0.3,0.04l-0.3,-0.55l-0.66,-0.31l0.11,-0.67l-0.48,-0.65l-0.87,-0.26l-0.73,0.2Z"
                                                data-code="HN" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M256.17,238.73l-0.26,0.27l-2.83,0.05l-0.07,-0.55l1.95,-0.1l1.22,0.33Z"
                                                data-code="PR" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M509.21,203.07l0.1,-0.06l-0.02,0.03l-0.09,0.03ZM509.36,202.91l-0.02,-0.63l-0.33,-0.16l0.31,-1.09l0.24,0.1l-0.2,1.78Z"
                                                data-code="PS" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M401.84,187.38l-0.64,0.47l-1.13,-0.35l-0.91,0.17l0.28,-1.78l-0.24,-1.78l-1.25,-0.56l-0.45,-0.84l0.17,-1.66l1.01,-1.18l0.69,-2.92l-0.04,-1.39l-0.59,-1.9l1.3,-0.85l0.84,1.35l3.1,-0.3l0.46,0.99l-1.05,0.94l-0.03,2.16l-0.41,0.57l-0.08,1.1l-0.79,0.18l-0.26,0.59l0.91,1.6l-0.63,1.75l0.76,1.09l-1.1,1.52l0.07,1.05Z"
                                                data-code="PT" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M274.9,336.12l0.74,1.52l-0.16,3.45l0.32,0.41l2.64,0.5l1.11,-0.47l1.4,0.59l0.36,0.6l0.53,3.42l1.27,0.4l0.98,-0.38l0.51,0.27l-0.0,1.18l-1.21,5.32l-2.09,1.9l-1.8,0.4l-4.71,-0.98l2.2,-3.63l-0.32,-1.5l-2.78,-1.28l-3.03,-1.94l-2.07,-0.44l-4.34,-4.06l0.91,-2.9l0.08,-1.42l1.07,-2.04l4.13,-0.72l2.18,0.03l2.05,1.17l0.03,0.59Z"
                                                data-code="PY" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M213.8,263.68l0.26,-1.52l-0.36,-0.26l-0.01,-0.49l0.44,-0.1l0.93,1.4l1.26,0.03l0.77,0.49l1.38,-0.23l2.51,-1.11l0.86,-0.72l3.45,0.85l1.4,1.18l0.41,1.74l-0.21,0.34l-0.53,-0.12l-0.47,0.29l-0.16,0.6l-0.68,-1.28l0.45,-0.49l-0.19,-0.66l-0.47,-0.13l-0.54,-0.84l-1.5,-0.75l-1.1,0.16l-0.75,0.99l-1.62,0.84l-0.18,0.96l0.85,0.97l-0.58,0.45l-0.69,0.08l-0.34,-1.18l-1.27,0.03l-0.71,-1.05l-2.59,-0.46Z"
                                                data-code="PA" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M808.58,298.86l2.54,2.56l-0.13,0.26l-0.33,0.12l-0.87,-0.78l-1.22,-2.16ZM801.41,293.04l0.5,0.29l0.26,0.27l-0.49,-0.35l-0.27,-0.21ZM803.17,294.58l0.59,0.5l0.08,1.06l-0.29,-0.91l-0.38,-0.65ZM796.68,298.41l0.52,0.75l1.43,-0.19l2.27,-1.81l-0.01,-1.43l1.12,0.16l-0.04,1.1l-0.7,1.28l-1.12,0.18l-0.62,0.79l-2.46,1.11l-1.17,-0.0l-3.08,-1.25l3.41,0.0l0.45,-0.68ZM789.15,303.55l2.31,1.8l1.59,2.61l1.34,0.13l-0.06,0.66l0.31,0.43l1.06,0.24l0.06,0.65l2.25,1.05l-1.22,0.13l-0.72,-0.63l-4.56,-0.65l-3.22,-2.87l-1.49,-2.34l-3.27,-1.1l-2.38,0.72l-1.59,0.86l-0.2,0.42l0.27,1.55l-1.55,0.68l-1.36,-0.4l-2.21,-0.09l-0.08,-15.41l8.39,2.93l2.95,2.4l0.6,1.64l4.02,1.49l0.31,0.68l-1.76,0.21l-0.33,0.52l0.55,1.68Z"
                                                data-code="PG" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M244.96,295.21l-1.26,-0.07l-0.57,0.42l-1.93,0.45l-2.98,1.75l-0.36,1.36l-0.58,0.8l0.12,1.37l-1.24,0.59l-0.22,1.22l-0.62,0.84l1.04,2.27l1.28,1.44l-0.41,0.84l0.32,0.57l1.48,0.13l1.16,1.37l2.21,0.07l1.63,-1.08l-0.13,3.02l0.3,0.4l1.14,0.29l1.31,-0.34l1.9,3.59l-0.48,0.85l-0.17,3.85l-0.94,1.59l0.35,0.75l-0.47,1.07l0.98,1.97l-2.1,3.82l-0.98,0.5l-2.17,-1.28l-0.39,-1.16l-4.95,-2.58l-4.46,-2.79l-1.84,-1.51l-0.91,-1.84l0.3,-0.96l-2.11,-3.33l-4.82,-9.68l-1.04,-1.2l-0.87,-1.94l-3.4,-2.48l0.58,-1.18l-1.13,-2.23l0.66,-1.49l1.45,-1.15l-0.6,0.98l0.07,0.92l0.47,0.36l1.74,0.03l0.97,1.17l0.54,0.07l1.42,-1.03l0.6,-1.84l1.42,-2.02l3.04,-1.04l2.73,-2.62l0.86,-1.74l-0.1,-1.87l1.44,1.02l0.9,1.25l1.06,0.59l1.7,2.73l1.86,0.31l1.45,-0.61l0.96,0.39l1.36,-0.19l1.45,0.89l-1.4,2.21l0.31,0.61l0.59,0.05l0.47,0.5Z"
                                                data-code="PE" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M615.09,192.34l-1.83,1.81l-2.6,0.39l-3.73,-0.68l-1.58,1.33l-0.09,0.42l1.77,4.39l1.7,1.23l-1.69,1.27l-0.12,2.14l-2.33,2.64l-1.6,2.8l-2.46,2.67l-3.03,-0.07l-2.76,2.83l0.05,0.6l1.5,1.11l0.26,1.9l1.44,1.5l0.37,1.68l-5.01,-0.01l-1.78,1.7l-1.42,-0.52l-0.76,-1.87l-2.27,-2.15l-11.61,0.86l0.71,-2.34l3.43,-1.32l0.25,-0.44l-0.21,-1.24l-1.2,-0.65l-0.28,-2.46l-2.29,-1.14l-1.28,-1.94l2.82,0.94l2.62,-0.38l1.42,0.33l0.76,-0.56l1.71,0.19l3.25,-1.14l0.27,-0.36l0.08,-2.19l1.18,-1.32l1.68,0.0l0.58,-0.82l1.6,-0.3l1.19,0.16l0.98,-0.78l0.02,-1.88l0.93,-1.47l1.48,-0.66l0.19,-0.55l-0.66,-1.25l2.04,-0.11l0.69,-1.01l-0.02,-1.16l1.11,-1.06l-0.17,-1.78l-0.49,-1.03l1.15,-0.98l5.42,-0.91l2.6,-0.82l1.6,1.16l0.97,2.34l3.45,0.97Z"
                                                data-code="PK" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M737.01,263.84l0.39,2.97l-0.44,1.18l-0.55,-1.53l-0.67,-0.14l-1.17,1.28l0.65,2.09l-0.42,0.69l-2.48,-1.23l-0.57,-1.49l0.65,-1.03l-0.1,-0.54l-1.59,-1.19l-0.56,0.08l-0.65,0.87l-1.23,0.0l-1.58,0.97l0.83,-1.8l2.56,-1.42l0.65,0.84l0.45,0.13l1.9,-0.69l0.56,-1.11l1.5,-0.06l0.38,-0.43l-0.09,-1.19l1.21,0.71l0.36,2.02ZM733.59,256.58l0.05,0.75l0.08,0.26l-0.8,-0.42l-0.18,-0.71l0.85,0.12ZM734.08,256.1l-0.12,-1.12l-1.0,-1.27l1.36,0.03l0.53,0.73l0.51,2.04l-1.27,-0.4ZM733.76,257.68l0.38,0.98l-0.32,0.15l-0.07,-1.13ZM724.65,238.43l1.46,0.7l0.72,-0.31l-0.32,1.17l0.79,1.71l-0.57,1.84l-1.53,1.04l-0.39,2.25l0.56,2.04l1.63,0.57l1.16,-0.27l2.71,1.23l-0.19,1.08l0.76,0.84l-0.08,0.36l-1.4,-0.9l-0.88,-1.27l-0.66,0.0l-0.38,0.55l-1.6,-1.31l-2.15,0.36l-0.87,-0.39l0.07,-0.61l0.66,-0.55l-0.01,-0.62l-0.75,-0.59l-0.72,0.44l-0.74,-0.87l-0.39,-2.49l0.32,0.27l0.66,-0.28l0.26,-3.97l0.7,-2.02l1.14,0.0ZM731.03,258.87l-0.88,0.85l-1.19,1.94l-1.05,-1.19l0.93,-1.1l0.32,-1.47l0.52,-0.06l-0.27,1.15l0.22,0.45l0.49,-0.12l1.0,-1.32l-0.08,0.85ZM726.83,255.78l0.83,0.38l1.17,-0.0l-0.02,0.48l-2.0,1.4l0.03,-2.26ZM724.81,252.09l-0.38,1.27l-1.42,-1.95l1.2,0.05l0.6,0.63ZM716.55,261.82l1.1,-0.95l0.03,-0.03l-0.28,0.36l-0.85,0.61ZM719.22,259.06l0.04,-0.06l0.8,-1.53l0.16,0.75l-1.0,0.84Z"
                                                data-code="PH" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M468.44,149.42l-1.11,-1.54l-1.86,-0.33l-0.48,-1.05l-1.72,-0.37l-0.65,0.69l-0.72,-0.36l0.11,-0.61l-0.33,-0.46l-1.75,-0.27l-1.04,-0.93l-0.94,-1.94l0.16,-1.22l-0.62,-1.8l-0.78,-1.07l0.57,-1.04l-0.48,-1.43l1.41,-0.83l6.91,-2.71l2.14,0.5l0.52,0.91l5.51,0.44l4.55,-0.05l1.07,0.31l0.48,0.84l0.15,1.58l0.65,1.2l-0.01,0.99l-1.27,0.58l-0.19,0.54l0.73,1.48l0.08,1.55l1.2,2.76l-0.17,0.58l-1.23,0.44l-2.27,2.72l0.18,0.95l-1.97,-1.03l-1.98,0.4l-1.36,-0.28l-1.24,0.58l-1.07,-0.97l-1.16,0.24Z"
                                                data-code="PL" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path d="M504.91,192.87l0.34,0.01l0.27,-0.07l-0.29,0.26l-0.31,-0.2Z"
                                                data-code="-99" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M481.47,313.3l0.39,0.31l2.52,0.14l0.99,1.17l2.01,0.35l1.4,-0.64l0.69,1.17l1.78,0.33l1.84,2.35l2.23,0.18l0.4,-0.43l-0.21,-2.74l-0.62,-0.3l-0.48,0.32l-1.98,-1.17l0.72,-5.29l-0.51,-1.18l0.57,-1.3l3.68,-0.62l0.26,0.63l1.21,0.63l0.9,-0.22l2.16,0.67l1.33,0.71l1.07,1.02l0.56,1.87l-0.88,2.7l0.43,2.09l-0.73,0.87l-0.76,2.37l0.59,0.68l-6.6,1.83l-0.29,0.44l0.19,1.45l-1.68,0.35l-1.43,1.02l-0.38,0.87l-0.87,0.26l-3.48,3.69l-4.16,-0.53l-1.52,-1.0l-1.77,-0.13l-1.83,0.52l-3.04,-3.4l0.11,-7.59l4.82,0.03l0.39,-0.49l-0.18,-0.76l0.33,-0.83l-0.4,-1.36l0.24,-1.05Z"
                                                data-code="ZM" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M384.42,230.28l0.25,-0.79l1.06,-1.29l0.8,-3.51l3.38,-2.78l0.7,-1.81l0.06,4.84l-1.98,0.2l-0.94,1.59l0.39,3.56l-3.7,-0.01ZM392.01,218.1l0.7,-1.8l1.77,-0.24l2.09,0.34l0.95,-0.62l1.28,-0.07l-0.0,2.51l-6.79,-0.12Z"
                                                data-code="EH" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M485.71,115.04l2.64,0.6l2.56,0.11l-1.6,1.91l0.61,3.54l-0.81,0.87l-1.78,-0.01l-3.22,-1.76l-1.8,0.45l0.21,-1.53l-0.58,-0.41l-0.69,0.34l-1.26,-1.03l-0.17,-1.63l2.83,-0.92l3.05,-0.52Z"
                                                data-code="EE" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M492.06,205.03l1.46,0.42l2.95,-1.64l2.04,-0.21l1.53,0.3l0.59,1.19l0.69,0.04l0.41,-0.64l1.81,0.58l1.95,0.16l1.04,-0.51l1.42,4.08l-2.03,4.54l-1.66,-1.77l-1.76,-3.85l-0.64,-0.12l-0.36,0.67l1.04,2.88l3.44,6.95l1.78,3.04l2.03,2.65l-0.36,0.53l0.23,2.01l2.7,2.19l-28.41,0.0l0.0,-18.96l-0.73,-2.2l0.59,-1.56l-0.32,-1.26l0.68,-0.99l3.06,-0.04l4.82,1.52Z"
                                                data-code="EG" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M467.14,373.21l-0.13,-1.96l-0.68,-1.56l0.7,-0.68l-0.13,-2.33l-4.56,-8.19l0.77,-0.86l0.6,0.45l0.69,1.31l2.83,0.72l1.5,-0.26l2.24,-1.39l0.19,-9.55l1.35,2.3l-0.21,1.5l0.61,1.2l0.4,0.19l1.79,-0.27l2.6,-2.07l0.69,-1.32l0.96,-0.48l2.19,1.04l2.04,0.13l1.77,-0.65l0.85,-2.12l1.38,-0.33l1.59,-2.76l2.15,-1.89l3.41,-1.87l2.0,0.45l1.02,-0.28l0.99,0.2l1.75,5.29l-0.38,3.25l-0.81,-0.23l-1.0,0.46l-0.87,1.68l-0.05,1.16l1.97,1.84l1.47,-0.29l0.69,-1.18l1.09,0.01l-0.76,3.69l-0.58,1.09l-2.2,1.79l-3.17,4.76l-2.8,2.83l-3.57,2.88l-2.53,1.05l-1.22,0.14l-0.51,0.7l-1.18,-0.32l-1.39,0.5l-2.59,-0.52l-1.61,0.33l-1.18,-0.11l-2.55,1.1l-2.1,0.44l-1.6,1.07l-0.85,0.05l-0.93,-0.89l-0.93,-0.15l-0.97,-1.13l-0.25,0.05ZM491.45,364.19l0.62,-0.93l1.48,-0.59l1.18,-2.19l-0.07,-0.49l-1.99,-1.69l-1.66,0.56l-1.43,1.14l-1.34,1.73l0.02,0.51l1.88,2.11l1.31,-0.16Z"
                                                data-code="ZA" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M231.86,285.53l0.29,1.59l-0.69,1.45l-2.61,2.51l-3.13,1.11l-1.53,2.18l-0.49,1.68l-1.0,0.73l-1.02,-1.11l-1.78,-0.16l0.67,-1.15l-0.24,-0.86l1.25,-2.13l-0.54,-1.09l-0.67,-0.08l-0.72,0.87l-0.87,-0.64l0.35,-0.69l-0.36,-1.96l0.81,-0.51l0.45,-1.51l0.92,-1.57l-0.07,-0.97l2.65,-1.33l2.75,1.35l0.77,1.05l2.12,0.35l0.76,-0.32l1.96,1.21Z"
                                                data-code="EC" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M470.32,171.8l0.74,0.03l0.92,0.89l-0.17,1.95l0.36,1.28l1.01,0.82l-1.82,2.83l-0.19,-0.61l-1.25,-0.89l-0.18,-1.2l0.53,-2.82l-0.54,-1.47l0.6,-0.83Z"
                                                data-code="AL" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M461.55,300.03l1.26,3.15l1.94,2.36l2.47,-0.53l1.25,0.32l0.44,-0.18l0.93,-1.92l1.31,-0.08l0.41,-0.44l0.47,-0.0l-0.1,0.41l0.39,0.49l2.65,-0.02l0.03,1.19l0.48,1.01l-0.34,1.52l0.18,1.55l0.83,1.04l-0.13,2.85l0.54,0.39l3.96,-0.41l-0.1,1.79l0.39,1.05l-0.24,1.43l-4.7,-0.03l-0.4,0.39l-0.12,8.13l2.92,3.49l-3.83,0.88l-5.89,-0.36l-1.88,-1.24l-10.47,0.22l-1.3,-1.01l-1.85,-0.16l-2.4,0.77l-0.15,-1.06l0.33,-2.16l1.0,-3.45l1.35,-3.2l2.24,-2.8l0.33,-2.06l-0.13,-1.53l-0.8,-1.08l-1.21,-2.87l0.87,-1.62l-1.27,-4.12l-1.17,-1.53l2.47,-0.63l7.03,0.03ZM451.71,298.87l-0.47,-1.25l1.25,-1.11l0.32,0.3l-0.99,1.03l-0.12,1.03Z"
                                                data-code="AO" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M552.8,172.89l0.46,-1.27l-0.48,-1.05l-2.96,-1.19l-1.06,-2.58l-1.37,-0.87l-0.03,-0.3l1.95,0.23l0.45,-0.38l0.08,-1.96l1.75,-0.41l2.1,0.45l0.48,-0.33l0.45,-3.04l-0.45,-2.09l-0.41,-0.31l-2.42,0.15l-2.36,-0.73l-2.87,1.37l-2.17,0.61l-0.85,-0.34l0.13,-1.61l-1.6,-2.12l-2.02,-0.08l-1.78,-1.82l1.29,-2.18l-0.57,-0.95l1.62,-2.91l2.21,1.63l0.63,-0.27l0.29,-2.22l4.92,-3.43l3.71,-0.08l8.4,3.6l2.92,-1.36l3.77,-0.06l3.11,1.66l0.51,-0.11l0.6,-0.81l3.31,0.13l0.39,-0.25l0.63,-1.57l-0.17,-0.5l-3.5,-1.98l1.87,-1.27l-0.13,-1.03l1.98,-0.72l0.18,-0.62l-1.59,-2.06l0.81,-0.82l9.23,-1.18l1.33,-0.88l6.18,-1.26l2.26,-1.42l4.08,0.68l0.73,3.33l0.51,0.3l2.48,-0.8l2.79,1.02l-0.17,1.56l0.43,0.44l2.55,-0.24l4.89,-2.53l0.03,0.32l3.15,2.61l5.56,8.47l0.65,0.02l1.12,-1.46l3.15,1.74l3.76,-0.78l1.15,0.49l1.14,1.8l1.84,0.76l0.99,1.29l3.35,-0.25l1.02,1.52l-1.6,1.81l-1.93,0.28l-0.34,0.38l-0.11,3.05l-1.13,1.16l-4.75,-1.0l-0.46,0.27l-1.76,5.47l-1.1,0.59l-4.91,1.23l-0.27,0.54l2.1,4.97l-1.37,0.63l-0.23,0.41l0.13,1.13l-0.88,-0.25l-1.42,-1.13l-7.89,-0.4l-0.92,0.31l-3.73,-1.22l-1.42,0.63l-0.53,1.66l-3.72,-0.94l-1.85,0.43l-0.76,1.4l-4.65,2.62l-1.13,2.08l-0.44,0.01l-0.92,-1.4l-2.87,-0.09l-0.45,-2.14l-0.38,-0.32l-0.8,-0.01l0.0,-2.96l-3.0,-2.22l-7.31,0.58l-2.35,-2.68l-6.71,-3.69l-6.45,1.83l-0.29,0.39l0.1,10.85l-0.7,0.08l-1.62,-2.17l-1.83,-0.96l-3.11,0.59l-0.64,0.51Z"
                                                data-code="KZ" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M516.04,247.79l1.1,0.84l1.63,-0.45l0.68,0.47l1.63,0.03l2.01,0.94l1.73,1.66l1.64,2.07l-1.52,2.04l0.16,1.72l0.39,0.38l2.05,0.0l-0.36,1.03l2.86,3.58l8.32,3.08l1.31,0.02l-6.32,6.75l-3.1,0.11l-2.36,1.77l-1.47,0.04l-0.86,0.79l-1.38,-0.0l-1.32,-0.81l-2.29,1.05l-0.76,0.98l-3.29,-0.41l-3.07,-2.07l-1.8,-0.07l-0.62,-0.6l0.0,-1.24l-0.28,-0.38l-1.15,-0.37l-1.4,-2.59l-1.19,-0.68l-0.47,-1.0l-1.27,-1.23l-1.16,-0.22l0.43,-0.72l1.45,-0.28l0.41,-0.95l-0.03,-2.21l0.68,-2.44l1.05,-0.63l1.43,-3.06l1.57,-1.37l1.02,-2.51l0.35,-1.88l2.52,0.46l0.44,-0.24l0.58,-1.43Z"
                                                data-code="ET" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M498.91,341.09l-1.11,-0.22l-0.92,0.28l-2.09,-0.44l-1.5,-1.11l-1.89,-0.43l-0.62,-1.4l-0.01,-0.84l-0.3,-0.38l-0.97,-0.25l-2.71,-2.74l-1.92,-3.32l3.83,0.45l3.73,-3.82l1.08,-0.44l0.26,-0.77l1.25,-0.9l1.41,-0.26l0.5,0.89l1.99,-0.05l1.72,1.17l1.11,0.17l1.05,0.66l0.01,2.99l-0.59,3.76l0.38,0.86l-0.23,1.23l-0.39,0.35l-0.63,1.81l-2.43,2.75Z"
                                                data-code="ZW" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M416.0,169.21l1.07,1.17l4.61,1.38l1.06,-0.57l2.6,1.26l2.71,-0.3l0.09,1.12l-2.14,1.8l-3.11,0.61l-0.31,0.31l-0.2,0.89l-1.54,1.69l-0.97,2.4l0.84,1.74l-1.32,1.27l-0.48,1.68l-1.88,0.65l-1.66,2.07l-5.36,-0.01l-1.79,1.08l-0.89,0.98l-0.88,-0.17l-0.79,-0.82l-0.68,-1.59l-2.37,-0.63l-0.11,-0.5l1.21,-1.82l-0.77,-1.13l0.61,-1.68l-0.76,-1.62l0.87,-0.49l0.09,-1.25l0.42,-0.6l0.03,-2.11l0.99,-0.69l0.13,-0.5l-1.03,-1.73l-1.46,-0.11l-0.61,0.38l-1.06,0.0l-0.52,-1.23l-0.53,-0.21l-1.32,0.67l-0.01,-1.49l-0.75,-0.96l3.03,-1.88l2.99,0.53l3.32,-0.02l2.63,0.51l6.01,-0.06Z"
                                                data-code="ES" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M520.38,246.23l3.42,2.43l3.5,3.77l0.84,0.54l-0.95,-0.01l-3.51,-3.89l-2.33,-1.15l-1.73,-0.07l-0.91,-0.51l-1.26,0.51l-1.34,-1.02l-0.61,0.17l-0.66,1.61l-2.35,-0.43l-0.17,-0.67l1.29,-5.29l0.61,-0.61l1.95,-0.53l0.87,-1.01l1.17,2.41l0.68,2.33l1.49,1.43Z"
                                                data-code="ER" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M468.91,172.53l-1.22,-1.02l0.47,-1.81l0.89,-0.72l2.26,1.51l-0.5,0.57l-0.75,-0.27l-1.14,1.73Z"
                                                data-code="ME" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M488.41,153.73l1.4,-0.27l1.72,0.93l1.07,0.15l0.85,0.65l-0.14,0.84l0.96,0.85l1.12,2.47l-1.15,-0.07l-0.66,-0.41l-0.52,0.25l-0.09,0.86l-1.08,1.89l-0.27,-0.86l0.25,-1.34l-0.16,-1.6l-3.29,-4.34Z"
                                                data-code="MD" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M545.91,319.14l0.4,3.03l0.62,1.21l-0.21,1.02l-0.57,-0.8l-0.69,-0.01l-0.47,0.76l0.41,2.12l-0.18,0.87l-0.73,0.78l-0.15,2.14l-4.71,15.2l-1.06,2.88l-3.92,1.64l-3.12,-1.49l-0.6,-1.21l-0.19,-2.4l-0.86,-2.05l-0.21,-1.77l0.38,-1.62l1.21,-0.75l0.01,-0.76l1.19,-2.04l0.23,-1.66l-1.06,-2.99l-0.19,-2.21l0.81,-1.33l0.32,-1.46l4.63,-1.22l3.44,-3.0l0.85,-1.4l-0.08,-0.7l0.78,-0.04l1.38,-1.77l0.13,-1.64l0.45,-0.61l1.16,1.69l0.59,1.6Z"
                                                data-code="MG" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M378.78,230.02l0.06,-0.59l0.92,-0.73l0.82,-1.37l-0.09,-1.04l0.79,-1.7l1.31,-1.58l0.96,-0.59l0.66,-1.55l0.09,-1.47l0.81,-1.48l1.72,-1.07l1.55,-2.69l1.16,-0.96l2.44,-0.39l1.94,-1.82l1.31,-0.78l2.09,-2.28l-0.51,-3.65l1.24,-3.7l1.5,-1.75l4.46,-2.57l2.37,-4.47l1.44,0.01l1.68,1.21l2.32,-0.19l3.47,0.65l0.8,1.54l0.16,1.71l0.86,2.96l0.56,0.59l-0.26,0.61l-3.05,0.44l-1.26,1.05l-1.33,0.22l-0.33,0.37l-0.09,1.78l-2.68,1.0l-1.07,1.42l-4.47,1.13l-4.04,2.01l-0.54,4.64l-1.15,0.06l-0.92,0.61l-1.96,-0.35l-2.42,0.54l-0.74,1.9l-0.86,0.4l-1.14,3.26l-3.53,3.01l-0.8,3.55l-0.96,1.1l-0.29,0.82l-4.95,0.18Z"
                                                data-code="MA" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M598.64,172.75l-1.63,1.52l0.06,0.64l1.85,1.12l1.97,-0.64l2.21,1.17l-2.52,1.68l-2.59,-0.22l-0.18,-0.41l0.46,-1.23l-0.45,-0.53l-3.35,0.69l-2.1,3.51l-1.87,-0.12l-1.03,1.51l0.22,0.55l1.64,0.62l0.46,1.83l-1.19,2.49l-2.66,-0.53l0.05,-1.36l-0.26,-0.39l-3.3,-1.23l-2.56,-1.4l-4.4,-3.34l-1.34,-3.14l-1.08,-0.6l-2.58,0.13l-0.69,-0.44l-0.47,-2.52l-3.37,-1.6l-0.43,0.05l-2.07,1.72l-2.1,1.01l-0.21,0.47l0.28,1.01l-1.91,0.03l-0.09,-10.5l5.99,-1.7l6.19,3.54l2.71,2.84l7.05,-0.67l2.71,2.01l-0.17,2.81l0.39,0.42l0.9,0.02l0.44,2.14l0.38,0.32l2.94,0.09l0.95,1.42l1.28,-0.24l1.05,-2.04l4.43,-2.5Z"
                                                data-code="UZ" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M673.9,230.21l-1.97,1.57l-0.57,0.96l-1.4,0.6l-1.36,1.05l-1.99,0.36l-1.08,2.66l-0.91,0.4l-0.19,0.55l1.21,2.27l2.52,3.43l-0.79,1.91l-0.74,0.41l-0.17,0.52l0.65,1.37l1.61,1.95l0.25,2.58l0.9,2.13l-1.92,3.57l0.68,-2.25l-0.81,-1.74l0.19,-2.65l-1.05,-1.53l-1.24,-6.17l-1.12,-2.26l-0.6,-0.13l-4.34,3.02l-2.39,-0.65l0.77,-2.84l-0.52,-2.61l-1.91,-2.96l0.25,-0.75l-0.29,-0.51l-1.33,-0.3l-1.61,-1.93l-0.1,-1.3l0.82,-0.24l0.04,-1.64l1.02,-0.52l0.21,-0.45l-0.23,-0.95l0.54,-0.96l0.08,-2.22l1.46,0.45l0.47,-0.2l1.12,-2.19l0.16,-1.35l1.33,-2.16l-0.0,-1.52l2.89,-1.66l1.63,0.44l0.5,-0.44l-0.17,-1.4l0.64,-0.36l0.08,-1.04l0.77,-0.11l0.71,1.35l1.06,0.69l-0.03,3.86l-2.38,2.37l-0.3,3.15l0.46,0.43l2.28,-0.38l0.51,2.08l1.47,0.67l-0.6,1.8l0.19,0.48l2.97,1.48l1.64,-0.55l0.02,0.32Z"
                                                data-code="MM" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M392.61,254.08l-0.19,-2.37l-0.99,-0.87l-0.44,-1.3l-0.09,-1.28l0.81,-0.58l0.35,-1.24l2.37,0.65l1.31,-0.47l0.86,0.15l0.66,-0.56l9.83,-0.04l0.38,-0.28l0.56,-1.8l-0.44,-0.65l-2.35,-21.95l3.27,-0.04l16.7,11.38l0.74,1.31l2.5,1.09l0.02,1.38l0.44,0.39l2.34,-0.21l0.01,5.38l-1.28,1.61l-0.26,1.49l-5.31,0.57l-1.07,0.92l-2.9,0.1l-0.86,-0.48l-1.38,0.36l-2.4,1.08l-0.6,0.87l-1.85,1.09l-0.43,0.7l-0.79,0.39l-1.44,-0.21l-0.81,0.84l-0.34,1.64l-1.91,2.02l-0.06,1.03l-0.67,1.22l0.13,1.16l-0.97,0.39l-0.23,-0.64l-0.52,-0.24l-1.35,0.4l-0.34,0.55l-2.69,-0.28l-0.37,-0.35l-0.02,-0.9l-0.65,-0.35l0.45,-0.64l-0.03,-0.53l-2.12,-2.44l-0.76,-0.01l-2.0,1.16l-0.78,-0.15l-0.8,-0.67l-1.21,0.23Z"
                                                data-code="ML" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M676.61,146.48l3.81,1.68l5.67,-1.0l2.37,0.41l2.34,1.5l1.79,1.75l2.29,-0.03l3.12,0.52l2.47,-0.81l3.41,-0.59l3.53,-2.21l1.25,0.29l1.53,1.13l2.27,-0.21l-2.66,5.01l0.64,1.68l0.47,0.21l1.32,-0.38l2.38,0.48l2.02,-1.11l1.76,0.89l2.06,2.02l-0.13,0.53l-1.72,-0.29l-3.77,0.46l-1.88,0.99l-1.76,1.99l-3.71,1.17l-2.45,1.6l-3.83,-0.87l-0.41,0.17l-1.31,1.99l1.04,2.24l-1.52,0.9l-1.74,1.57l-2.79,1.02l-3.78,0.13l-4.05,1.05l-2.77,1.52l-1.16,-0.85l-2.94,0.0l-3.62,-1.79l-2.58,-0.49l-3.4,0.41l-5.12,-0.67l-2.63,0.06l-1.31,-1.6l-1.4,-3.0l-1.48,-0.33l-3.13,-1.94l-6.16,-0.93l-0.71,-1.06l0.86,-3.82l-1.93,-2.71l-3.5,-1.18l-1.95,-1.58l-0.5,-1.72l2.34,-0.52l4.75,-2.8l3.62,-1.47l2.18,0.97l2.46,0.05l1.81,1.53l2.46,0.12l3.95,0.71l2.43,-2.28l0.08,-0.48l-0.9,-1.72l2.24,-2.98l2.62,1.27l4.94,1.17l0.43,2.24Z"
                                                data-code="MN" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M472.8,173.98l0.49,-0.71l3.57,-0.71l1.0,0.77l0.13,1.45l-0.65,0.53l-1.15,-0.05l-1.12,0.67l-1.39,0.22l-0.79,-0.55l-0.29,-1.03l0.19,-0.6Z"
                                                data-code="MK" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M505.5,309.31l0.85,1.95l0.15,2.86l-0.69,1.65l0.71,1.8l0.06,1.28l0.49,0.64l0.07,1.06l0.4,0.55l0.8,-0.23l0.55,0.61l0.69,-0.21l0.34,0.6l0.19,2.94l-1.04,0.62l-0.54,1.25l-1.11,-1.08l-0.16,-1.56l0.51,-1.31l-0.32,-1.3l-0.99,-0.65l-0.82,0.12l-2.36,-1.64l0.63,-1.96l0.82,-1.18l-0.46,-2.01l0.9,-2.86l-0.94,-2.51l0.96,0.18l0.29,0.4Z"
                                                data-code="MW" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M407.36,220.66l-2.58,0.03l-0.39,0.44l2.42,22.56l0.36,0.43l-0.39,1.24l-9.75,0.04l-0.56,0.53l-0.91,-0.11l-1.27,0.45l-1.61,-0.66l-0.97,0.03l-0.36,0.29l-0.38,1.35l-0.42,0.23l-2.93,-3.4l-2.96,-1.52l-1.62,-0.03l-1.27,0.54l-1.12,-0.2l-0.65,0.4l-0.08,-0.49l0.68,-1.29l0.31,-2.43l-0.57,-3.91l0.23,-1.21l-0.69,-1.5l-1.15,-1.02l0.25,-0.39l9.58,0.02l0.4,-0.45l-0.46,-3.68l0.47,-1.04l2.12,-0.21l0.36,-0.4l-0.08,-6.4l7.81,0.13l0.41,-0.4l0.01,-3.31l7.76,5.35Z"
                                                data-code="MR" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M498.55,276.32l0.7,-0.46l1.65,0.5l1.96,-0.57l1.7,0.01l1.45,-0.98l0.91,1.33l1.33,3.95l-2.57,4.03l-1.46,-0.4l-2.54,0.91l-1.37,1.61l-0.01,0.81l-2.42,-0.01l-2.26,1.01l-0.17,-1.59l0.58,-1.04l0.14,-1.94l1.37,-2.28l1.78,-1.58l-0.17,-0.65l-0.72,-0.24l0.13,-2.43Z"
                                                data-code="UG" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M717.47,273.46l-1.39,0.65l-2.12,-0.41l-2.88,-0.0l-0.38,0.28l-0.84,2.75l-0.99,0.96l-1.21,3.29l-1.73,0.45l-2.45,-0.68l-1.39,0.31l-1.33,1.15l-1.59,-0.14l-1.41,0.44l-1.44,-1.19l-0.18,-0.73l1.34,0.53l1.93,-0.47l0.75,-2.22l4.02,-1.03l2.75,-3.21l0.82,0.94l0.64,-0.05l0.4,-0.65l0.96,0.06l0.42,-0.36l0.24,-2.68l1.81,-1.64l1.21,-1.86l0.63,-0.01l1.07,1.05l0.34,1.28l3.44,1.35l-0.06,0.35l-1.37,0.1l-0.35,0.54l0.32,0.88ZM673.68,269.59l0.17,1.09l0.47,0.33l1.65,-0.3l0.87,-0.94l1.61,1.52l0.98,1.56l-0.12,2.81l0.41,2.29l0.95,0.9l0.88,2.44l-1.27,0.12l-5.1,-3.67l-0.34,-1.29l-1.37,-1.59l-0.33,-1.97l-0.88,-1.4l0.25,-1.68l-0.46,-1.05l1.63,0.84Z"
                                                data-code="MY" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M133.12,200.41l0.2,0.47l9.63,3.33l6.96,-0.02l0.4,-0.4l0.0,-0.74l3.77,0.0l3.55,2.93l1.39,2.83l1.52,1.04l2.08,0.82l0.47,-0.14l1.46,-2.0l1.73,-0.04l1.59,0.98l2.05,3.35l1.47,1.56l1.26,3.14l2.18,1.02l2.26,0.58l-1.18,3.72l-0.42,5.04l1.79,4.89l1.62,1.89l0.61,1.52l1.2,1.42l2.55,0.66l1.37,1.1l7.54,-1.89l1.86,-1.3l1.14,-4.3l4.1,-1.21l3.57,-0.11l0.32,0.3l-0.06,0.94l-1.26,1.45l-0.67,1.71l0.38,0.7l-0.72,2.27l-0.49,-0.3l-1.0,0.08l-1.0,1.39l-0.47,-0.11l-0.53,0.47l-4.26,-0.02l-0.4,0.4l-0.0,1.06l-1.1,0.26l0.1,0.44l1.82,1.44l0.56,0.91l-3.19,0.21l-1.21,2.09l0.24,0.72l-0.2,0.44l-2.24,-2.18l-1.45,-0.93l-2.22,-0.69l-1.52,0.22l-3.07,1.16l-10.55,-3.85l-2.86,-1.96l-3.78,-0.92l-1.08,-1.19l-2.62,-1.43l-1.18,-1.54l-0.38,-0.81l0.66,-0.63l-0.18,-0.53l0.52,-0.76l0.01,-0.91l-2.0,-3.82l-2.21,-2.63l-2.53,-2.09l-1.19,-1.62l-2.2,-1.17l-0.3,-0.43l0.34,-1.48l-0.21,-0.45l-1.23,-0.6l-1.36,-1.2l-0.59,-1.78l-1.54,-0.47l-2.44,-2.55l-0.16,-0.9l-1.33,-2.03l-0.84,-1.99l-0.16,-1.33l-1.81,-1.1l-0.97,0.05l-1.31,-0.7l-0.57,0.22l-0.4,1.12l0.72,3.77l3.51,3.89l0.28,0.78l0.53,0.26l0.41,1.43l1.33,1.73l1.58,1.41l0.8,2.39l1.43,2.41l0.13,1.32l0.37,0.36l1.04,0.08l1.67,2.28l-0.85,0.76l-0.66,-1.51l-1.68,-1.54l-2.91,-1.87l0.06,-1.82l-0.54,-1.68l-2.91,-2.03l-0.55,0.09l-1.95,-1.1l-0.88,-0.94l0.68,-0.08l0.93,-1.01l0.08,-1.78l-1.93,-1.94l-1.46,-0.77l-3.75,-7.56l4.88,-0.42Z"
                                                data-code="MX" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path d="M839.04,322.8l0.22,1.14l-0.44,0.03l-0.2,-1.45l0.42,0.27Z"
                                                data-code="VU" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M444.48,172.62l-0.64,1.78l-0.58,-0.31l-0.49,-1.72l0.4,-0.89l1.0,-0.72l0.3,1.85ZM429.64,147.1l1.78,1.58l1.46,-0.13l2.1,1.42l1.35,0.27l1.23,0.83l3.04,0.5l-1.03,1.85l-0.3,2.12l-0.41,0.32l-0.95,-0.24l-0.5,0.43l0.06,0.61l-1.81,1.92l-0.04,1.42l0.55,0.38l0.88,-0.36l0.61,0.97l-0.03,1.0l0.57,0.91l-0.75,1.09l0.65,2.39l1.27,0.57l-0.18,0.82l-2.01,1.53l-4.77,-0.8l-3.82,1.0l-0.53,1.85l-2.49,0.34l-2.71,-1.31l-1.16,0.57l-4.31,-1.29l-0.72,-0.86l1.19,-1.78l0.39,-6.45l-2.58,-3.3l-1.9,-1.66l-3.72,-1.23l-0.19,-1.72l2.81,-0.61l4.12,0.81l0.47,-0.48l-0.6,-2.77l1.94,0.95l5.83,-2.54l0.92,-2.74l1.6,-0.49l0.24,0.78l1.36,0.33l1.05,1.19ZM289.01,278.39l-0.81,0.8l-0.78,0.12l-0.5,-0.66l-0.56,-0.1l-0.91,0.6l-0.46,-0.22l1.09,-2.96l-0.96,-1.77l-0.17,-1.49l1.07,-1.77l2.32,0.75l2.51,2.01l0.3,0.74l-2.14,3.96Z"
                                                data-code="FR" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M492.17,76.39l-0.23,3.5l3.52,2.63l-2.08,2.88l-0.02,0.44l2.8,4.56l-1.59,3.31l2.16,3.24l-0.94,2.39l0.14,0.47l3.44,2.51l-0.77,1.62l-7.52,6.95l-4.5,0.31l-4.38,1.37l-3.8,0.74l-1.44,-1.96l-2.17,-1.11l0.5,-3.66l-1.16,-3.33l1.09,-2.08l2.21,-2.42l5.67,-4.32l1.64,-0.83l0.21,-0.42l-0.46,-2.02l-3.38,-1.89l-0.75,-1.43l-0.22,-6.74l-6.79,-4.8l0.8,-0.62l2.54,2.12l3.46,-0.12l3.0,0.96l2.51,-2.11l1.17,-3.08l3.55,-1.38l2.76,1.53l-0.95,2.79Z"
                                                data-code="FI" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M871.53,326.34l-2.8,1.05l-0.08,-0.23l2.97,-1.21l-0.1,0.39ZM867.58,329.25l0.43,0.37l-0.27,0.88l-1.24,0.28l-1.04,-0.24l-0.14,-0.66l0.63,-0.58l0.92,0.26l0.7,-0.31Z"
                                                data-code="FJ" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M274.36,425.85l1.44,1.08l-0.47,0.73l-3.0,0.89l-0.96,-1.0l-0.52,-0.05l-1.83,1.29l-0.73,-0.88l2.46,-1.64l1.93,0.76l1.67,-1.19Z"
                                                data-code="FK" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M202.33,252.67l0.81,-0.18l1.03,-1.02l-0.04,-0.88l0.68,-0.0l0.63,-0.54l0.97,0.22l1.53,-1.26l0.58,-0.99l1.17,0.34l2.41,-0.94l0.13,1.32l-0.81,1.94l0.1,2.74l-0.36,0.37l-0.11,1.75l-0.47,0.81l0.18,1.14l-1.73,-0.85l-0.71,0.27l-1.47,-0.6l-0.52,0.16l-4.01,-3.81Z"
                                                data-code="NI" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M430.31,143.39l0.6,-0.5l2.13,-4.8l3.2,-1.33l1.74,0.08l0.33,0.8l-0.59,2.92l-0.5,0.99l-1.26,0.0l-0.4,0.45l0.33,2.7l-2.2,-1.78l-2.62,0.58l-0.75,-0.11Z"
                                                data-code="NL" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M491.44,67.41l6.8,2.89l-2.29,0.86l-0.15,0.65l2.33,2.38l-4.98,1.79l0.84,-2.45l-0.18,-0.48l-3.55,-1.8l-3.89,1.52l-1.42,3.38l-2.12,1.72l-2.64,-1.0l-3.11,0.21l-2.66,-2.22l-0.5,-0.01l-1.41,1.1l-1.44,0.17l-0.35,0.35l-0.32,2.47l-4.32,-0.64l-0.44,0.29l-0.58,2.11l-2.45,0.2l-4.15,7.68l-3.88,5.76l0.78,1.62l-0.64,1.16l-2.24,-0.06l-0.38,0.24l-1.66,3.89l0.15,5.17l1.57,2.04l-0.78,4.16l-2.02,2.48l-0.85,1.63l-1.3,-1.75l-0.58,-0.07l-4.87,4.19l-3.1,0.79l-3.16,-1.7l-0.85,-3.77l-0.77,-8.55l2.14,-2.31l6.55,-3.27l5.02,-4.17l10.63,-13.84l10.98,-8.7l5.35,-1.91l4.34,0.12l3.69,-3.64l4.49,0.19l4.37,-0.89ZM484.55,20.04l4.26,1.75l-3.1,2.55l-7.1,0.65l-7.08,-0.9l-0.37,-1.31l-0.37,-0.29l-3.44,-0.1l-2.08,-2.0l6.87,-1.44l3.9,1.31l2.39,-1.64l6.13,1.4ZM481.69,33.93l-4.45,1.74l-3.54,-0.99l1.12,-0.9l0.05,-0.58l-1.06,-1.22l4.22,-0.89l1.09,1.97l2.57,0.87ZM466.44,24.04l7.43,3.77l-5.41,1.86l-1.58,4.08l-2.26,1.2l-1.12,4.11l-2.61,0.18l-4.79,-2.86l1.84,-1.54l-0.1,-0.68l-3.69,-1.53l-4.77,-4.51l-1.73,-3.89l6.11,-1.82l1.54,1.92l3.57,-0.08l1.2,-1.96l3.32,-0.18l3.05,1.92Z"
                                                data-code="NO" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M474.26,330.66l-0.97,0.04l-0.38,0.4l-0.07,8.9l-2.09,0.08l-0.39,0.4l-0.0,17.42l-1.98,1.23l-1.17,0.17l-2.44,-0.66l-0.48,-1.13l-0.99,-0.74l-0.54,0.05l-0.9,1.01l-1.53,-1.68l-0.93,-1.88l-1.99,-8.56l-0.06,-3.12l-0.33,-1.52l-2.3,-3.34l-1.91,-4.83l-1.96,-2.43l-0.12,-1.57l2.33,-0.79l1.43,0.07l1.81,1.13l10.23,-0.25l1.84,1.23l5.87,0.35ZM474.66,330.64l6.51,-1.6l1.9,0.39l-1.69,0.4l-1.31,0.83l-1.12,-0.94l-4.29,0.92Z"
                                                data-code="NA" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M838.78,341.24l-0.33,0.22l-2.9,-1.75l-3.26,-3.37l1.65,0.83l4.85,4.07Z"
                                                data-code="NC" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M454.75,226.53l1.33,1.37l0.48,0.07l1.27,-0.7l0.53,3.52l0.94,0.83l0.17,0.92l0.81,0.69l-0.44,0.95l-0.96,5.26l-0.13,3.22l-3.04,2.31l-1.22,3.57l1.02,1.24l-0.0,1.46l0.39,0.4l1.13,0.04l-0.9,1.25l-1.47,-2.42l-0.86,-0.29l-2.09,1.37l-1.74,-0.67l-1.45,-0.17l-0.85,0.35l-1.36,-0.07l-1.64,1.09l-1.06,0.05l-2.94,-1.28l-1.44,0.59l-1.01,-0.03l-0.97,-0.94l-2.7,-0.98l-2.69,0.3l-0.87,0.64l-0.47,1.6l-0.75,1.16l-0.12,1.53l-1.57,-1.1l-1.31,0.24l0.03,-0.81l-0.32,-0.41l-2.59,-0.52l-0.15,-1.16l-1.35,-1.6l-0.29,-1.0l0.13,-0.84l1.29,-0.08l1.08,-0.92l3.31,-0.22l2.22,-0.41l0.32,-0.34l0.2,-1.47l1.39,-1.88l-0.01,-5.66l3.36,-1.12l7.24,-5.12l8.42,-4.92l3.69,1.06Z"
                                                data-code="NE" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M456.32,253.89l0.64,0.65l-0.28,1.04l-2.11,2.01l-2.03,5.18l-1.37,1.16l-1.15,3.18l-1.33,0.66l-1.46,-0.97l-1.21,0.16l-1.38,1.36l-0.91,0.24l-1.79,4.06l-2.33,0.81l-1.11,-0.07l-0.86,0.5l-1.71,-0.05l-1.19,-1.39l-0.89,-1.89l-1.77,-1.66l-3.95,-0.08l0.07,-5.21l0.42,-1.43l1.95,-2.3l-0.14,-0.91l0.43,-1.18l-0.53,-1.41l0.25,-2.92l0.72,-1.07l0.32,-1.34l0.46,-0.39l2.47,-0.28l2.34,0.89l1.15,1.02l1.28,0.04l1.22,-0.58l3.03,1.27l1.49,-0.14l1.36,-1.0l1.33,0.07l0.82,-0.35l3.45,0.8l1.82,-1.32l1.84,2.67l0.66,0.16Z"
                                                data-code="NG" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M857.8,379.65l1.86,3.12l0.44,0.18l0.3,-0.38l0.03,-1.23l0.38,0.27l0.57,2.31l2.02,0.94l1.81,0.27l1.57,-1.06l0.7,0.18l-1.15,3.59l-1.98,0.11l-0.74,1.2l0.2,1.11l-2.42,3.98l-1.49,0.92l-1.04,-0.85l1.21,-2.05l-0.81,-2.01l-2.63,-1.25l0.04,-0.57l1.82,-1.19l0.43,-2.34l-0.16,-2.03l-0.95,-1.82l-0.06,-0.72l-3.11,-3.64l-0.79,-1.52l1.56,1.45l1.76,0.66l0.65,2.34ZM853.83,393.59l0.57,1.24l0.59,0.16l1.42,-0.97l0.46,0.79l0.0,1.03l-2.47,3.48l-1.26,1.2l-0.06,0.5l0.55,0.87l-1.41,0.07l-2.33,1.38l-2.03,5.02l-3.02,2.16l-2.06,-0.06l-1.71,-1.04l-2.47,-0.2l-0.27,-0.73l1.22,-2.1l3.05,-2.94l1.62,-0.59l4.02,-2.82l1.57,-1.67l1.07,-2.16l0.88,-0.7l0.48,-1.75l1.24,-0.97l0.35,0.79Z"
                                                data-code="NZ" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M641.14,213.62l0.01,3.19l-1.74,0.04l-4.8,-0.86l-1.58,-1.39l-3.37,-0.34l-7.65,-3.7l0.8,-2.09l2.33,-1.7l1.77,0.75l2.49,1.76l1.38,0.41l0.99,1.35l1.9,0.52l1.99,1.17l5.49,0.9Z"
                                                data-code="NP" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M407.4,259.27l0.86,0.42l0.56,0.9l1.13,0.53l1.19,-0.61l0.97,-0.08l1.42,0.54l0.6,3.24l-1.03,2.08l-0.65,2.84l1.06,2.33l-0.06,0.53l-2.54,-0.47l-1.66,0.03l-3.06,0.46l-4.11,1.6l0.32,-3.06l-1.18,-1.31l-1.32,-0.66l0.42,-0.85l-0.2,-1.4l0.5,-0.67l0.01,-1.59l0.84,-0.32l0.26,-0.5l-1.15,-3.01l0.12,-0.5l0.51,-0.25l0.66,0.31l1.93,0.02l0.67,-0.71l0.71,-0.14l0.25,0.69l0.57,0.22l1.4,-0.61Z"
                                                data-code="CI" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M444.62,156.35l-0.29,0.87l0.18,0.53l1.13,0.58l1.0,0.1l-0.1,0.65l-0.79,0.38l-1.72,-0.37l-0.45,0.23l-0.45,1.04l-0.75,0.06l-0.84,-0.4l-1.32,1.0l-0.96,0.12l-0.88,-0.55l-0.81,-1.3l-0.49,-0.16l-0.63,0.26l0.02,-0.65l1.71,-1.66l0.1,-0.56l0.93,0.08l0.58,-0.46l1.99,0.02l0.66,-0.61l2.19,0.79Z"
                                                data-code="CH" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M242.07,254.93l-1.7,0.59l-0.59,1.18l-1.7,1.69l-0.38,1.93l-0.67,1.43l0.31,0.57l1.03,0.13l0.25,0.9l0.57,0.64l-0.04,2.34l1.64,1.42l3.16,-0.24l1.26,0.28l1.67,2.06l0.41,0.13l4.09,-0.39l0.45,0.22l-0.92,1.95l-0.2,1.8l0.52,1.83l0.75,1.05l-1.12,1.1l0.07,0.63l0.84,0.51l0.74,1.29l-0.39,-0.45l-0.59,-0.01l-0.71,0.74l-4.71,-0.05l-0.4,0.41l0.03,1.57l0.33,0.39l1.11,0.2l-1.68,0.4l-0.29,0.38l-0.01,1.82l1.16,1.14l0.34,1.25l-1.05,7.05l-1.04,-0.87l1.26,-1.99l-0.13,-0.56l-2.18,-1.23l-1.38,0.2l-1.14,-0.38l-1.27,0.61l-1.55,-0.26l-1.38,-2.46l-1.23,-0.75l-0.85,-1.2l-1.67,-1.19l-0.86,0.13l-2.11,-1.32l-1.01,0.31l-1.8,-0.29l-0.52,-0.91l-3.09,-1.68l0.77,-0.52l-0.1,-1.12l0.41,-0.64l1.34,-0.32l2.0,-2.88l-0.11,-0.57l-0.66,-0.43l0.39,-1.38l-0.52,-2.1l0.49,-0.83l-0.4,-2.13l-0.97,-1.35l0.17,-0.66l0.86,-0.08l0.47,-0.75l-0.46,-1.63l1.41,-0.07l1.8,-1.69l0.93,-0.24l0.3,-0.38l0.45,-2.76l1.22,-1.0l1.44,-0.04l0.45,-0.5l1.91,0.12l2.93,-1.84l1.15,-1.14l0.91,0.46l-0.25,0.45Z"
                                                data-code="CO" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M740.23,148.97l4.57,1.3l2.8,2.17l0.98,2.9l0.38,0.27l3.8,0.0l2.32,-1.28l3.29,-0.75l-0.96,2.09l-1.02,1.28l-0.85,3.4l-1.52,2.73l-2.76,-0.5l-2.4,1.13l-0.21,0.45l0.64,2.57l-0.32,3.2l-0.94,0.06l-0.37,0.89l-0.91,-1.01l-0.64,0.07l-0.92,1.57l-3.73,1.25l-0.26,0.48l0.26,1.06l-1.5,-0.08l-1.09,-0.86l-0.56,0.06l-1.67,2.06l-2.7,1.56l-2.03,1.88l-3.4,0.83l-1.93,1.4l-1.15,0.34l0.33,-0.7l-0.41,-0.89l1.79,-1.79l0.02,-0.54l-1.32,-1.56l-0.48,-0.1l-2.24,1.09l-2.83,2.06l-1.51,1.83l-2.28,0.13l-1.55,1.49l-0.04,0.5l1.32,1.97l2.0,0.58l0.31,1.35l1.98,0.84l3.0,-1.96l2.0,1.02l1.49,0.11l0.22,0.83l-3.37,0.86l-1.12,1.48l-2.5,1.52l-1.29,1.99l0.14,0.56l2.57,1.48l0.97,2.7l3.17,4.63l-0.03,1.66l-1.35,0.65l-0.2,0.51l0.6,1.47l1.4,0.91l-0.89,3.82l-1.43,0.38l-3.85,6.44l-2.27,3.11l-6.78,4.57l-2.73,0.29l-1.45,1.04l-0.62,-0.61l-0.55,-0.01l-1.36,1.25l-3.39,1.27l-2.61,0.4l-1.1,2.79l-0.81,0.09l-0.49,-1.42l0.5,-0.85l-0.25,-0.59l-3.36,-0.84l-1.3,0.4l-2.31,-0.62l-0.94,-0.84l0.33,-1.28l-0.3,-0.49l-2.19,-0.46l-1.13,-0.93l-0.47,-0.02l-2.06,1.36l-4.29,0.28l-2.76,1.05l-0.28,0.43l0.32,2.53l-0.59,-0.03l-0.19,-1.34l-0.55,-0.34l-1.68,0.7l-2.46,-1.23l0.62,-1.87l-0.26,-0.51l-1.37,-0.44l-0.54,-2.22l-0.45,-0.3l-2.13,0.35l0.24,-2.48l2.39,-2.4l0.03,-4.31l-1.19,-0.92l-0.78,-1.49l-0.41,-0.21l-1.41,0.19l-1.98,-0.3l0.46,-1.07l-1.17,-1.7l-0.55,-0.11l-1.63,1.05l-2.25,-0.57l-2.89,1.73l-2.25,1.98l-1.75,0.29l-1.17,-0.71l-3.31,-0.65l-1.48,0.79l-1.04,1.27l-0.12,-1.17l-0.54,-0.34l-1.44,0.54l-5.55,-0.86l-1.98,-1.16l-1.89,-0.54l-0.99,-1.35l-1.34,-0.37l-2.55,-1.79l-2.01,-0.84l-1.21,0.56l-5.57,-3.45l-0.53,-2.31l1.19,0.25l0.48,-0.37l0.08,-1.42l-0.98,-1.56l0.15,-2.44l-2.69,-3.32l-4.12,-1.23l-0.67,-2.0l-1.92,-1.48l-0.38,-0.7l-0.51,-3.01l-1.52,-0.66l-0.7,0.13l-0.48,-2.05l0.55,-0.51l-0.09,-0.82l2.03,-1.19l1.6,-0.54l2.56,0.38l0.42,-0.22l0.85,-1.7l3.0,-0.33l1.1,-1.26l4.05,-1.77l0.39,-0.91l-0.17,-1.44l1.45,-0.67l0.2,-0.52l-2.07,-4.9l4.51,-1.12l1.37,-0.73l1.89,-5.51l4.98,0.86l1.51,-1.7l0.11,-2.87l1.99,-0.38l1.83,-2.06l0.49,-0.13l0.68,2.08l2.23,1.77l3.44,1.16l1.55,2.29l-0.92,3.49l0.96,1.67l6.54,1.13l2.95,1.87l1.47,0.35l1.06,2.62l1.53,1.91l3.05,0.08l5.14,0.67l3.37,-0.41l2.36,0.43l3.65,1.8l3.06,0.04l1.45,0.88l2.87,-1.59l3.95,-1.02l3.83,-0.14l3.06,-1.14l1.77,-1.6l1.72,-1.01l0.17,-0.49l-1.1,-2.05l1.02,-1.54l4.02,0.8l2.45,-1.61l3.76,-1.19l1.96,-2.13l1.63,-0.83l3.51,-0.4l1.92,0.34l0.46,-0.3l0.17,-1.5l-2.27,-2.22l-2.11,-1.09l-2.18,1.11l-2.32,-0.47l-1.29,0.32l-0.4,-0.82l2.73,-5.16l3.02,1.06l3.53,-2.06l0.18,-1.68l2.16,-3.35l1.49,-1.35l-0.03,-1.85l-1.07,-0.85l1.54,-1.26l2.98,-0.59l3.23,-0.09l3.64,0.99l2.04,1.16l3.29,6.71l0.92,3.19ZM696.92,237.31l-1.87,1.08l-1.63,-0.64l-0.06,-1.79l1.03,-0.98l2.58,-0.69l1.16,0.05l0.3,0.54l-0.98,1.06l-0.53,1.37Z"
                                                data-code="CN" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M457.92,257.49l1.05,1.91l-1.4,0.16l-1.05,-0.23l-0.45,0.22l-0.54,1.19l0.08,0.45l1.48,1.47l1.05,0.45l1.01,2.46l-1.52,2.99l-0.68,0.68l-0.13,3.69l2.38,3.84l1.09,0.8l0.24,2.48l-3.67,-1.14l-11.27,-0.13l0.23,-1.79l-0.98,-1.66l-1.19,-0.54l-0.44,-0.97l-0.6,-0.42l1.71,-4.27l0.75,-0.13l1.38,-1.36l0.65,-0.03l1.71,0.99l1.93,-1.12l1.14,-3.18l1.38,-1.17l2.0,-5.14l2.17,-2.13l0.3,-1.64l-0.86,-0.88l0.03,-0.33l0.94,1.28l0.07,3.22Z"
                                                data-code="CM" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M246.5,429.18l-3.14,1.83l-0.57,3.16l-0.64,0.05l-2.68,-1.06l-2.82,-2.33l-3.04,-1.89l-0.69,-1.85l0.63,-2.14l-1.21,-2.11l-0.31,-5.37l1.01,-2.91l2.57,-2.38l-0.18,-0.68l-3.16,-0.77l2.05,-2.47l0.77,-4.65l2.32,0.9l0.54,-0.29l1.31,-6.31l-0.22,-0.44l-1.68,-0.8l-0.56,0.28l-0.7,3.36l-0.81,-0.22l1.56,-9.41l1.15,-2.24l-0.71,-2.82l-0.18,-2.84l1.01,-0.33l3.26,-9.14l1.07,-4.22l-0.56,-4.21l0.74,-2.34l-0.29,-3.27l1.46,-3.34l2.04,-16.59l-0.66,-7.76l1.03,-0.53l0.54,-0.9l0.79,1.14l0.32,1.78l1.25,1.16l-0.69,2.55l1.33,2.9l0.97,3.59l0.46,0.29l1.5,-0.3l0.11,0.23l-0.76,2.44l-2.57,1.23l-0.23,0.37l0.08,4.33l-0.46,0.77l0.56,1.21l-1.58,1.51l-1.68,2.62l-0.89,2.47l0.2,2.7l-1.48,2.73l1.12,5.09l0.64,0.61l-0.01,2.29l-1.38,2.68l0.01,2.4l-1.89,2.04l0.02,2.75l0.69,2.57l-1.43,1.13l-1.26,5.68l0.39,3.51l-0.97,0.89l0.58,3.5l1.02,1.14l-0.65,1.02l0.15,0.57l1.0,0.53l0.16,0.69l-1.03,0.85l0.26,1.75l-0.89,4.03l-1.31,2.66l0.24,1.75l-0.71,1.83l-1.99,1.7l0.3,3.67l0.88,1.19l1.58,0.01l0.01,2.21l1.04,1.95l5.98,0.63ZM248.69,430.79l0.0,7.33l0.4,0.4l3.52,0.05l-0.44,0.75l-1.94,0.98l-2.49,-0.37l-1.88,-1.06l-2.55,-0.49l-5.59,-3.71l-2.38,-2.63l4.1,2.48l3.32,1.23l0.45,-0.12l1.29,-1.57l0.83,-2.32l2.05,-1.24l1.31,0.29Z"
                                                data-code="CL" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M280.06,145.6l-1.67,2.88l0.07,0.49l0.5,0.04l1.46,-0.98l1.0,0.42l-0.56,0.72l0.17,0.62l2.22,0.89l1.35,-0.71l1.95,0.78l-0.66,2.01l0.5,0.51l1.32,-0.42l0.98,3.17l-0.91,2.41l-0.8,0.08l-1.23,-0.45l0.47,-2.25l-0.89,-0.83l-0.48,0.06l-2.78,2.63l-0.34,-0.02l1.02,-0.85l-0.14,-0.69l-2.4,-0.77l-7.4,0.08l-0.17,-0.41l1.3,-0.94l0.02,-0.64l-0.73,-0.58l1.85,-1.74l2.57,-5.16l1.47,-1.79l1.99,-1.05l0.46,0.06l-1.53,2.45ZM68.32,74.16l4.13,0.95l4.02,2.14l2.61,0.4l2.47,-1.89l2.88,-1.31l3.85,0.48l3.71,-1.94l3.82,-1.04l1.56,1.68l0.49,0.08l1.87,-1.04l0.65,-1.98l1.24,0.35l4.16,3.94l0.54,0.01l2.75,-2.49l0.26,2.59l0.49,0.35l3.08,-0.73l1.04,-1.27l2.73,0.23l3.83,1.86l5.86,1.61l3.47,0.75l2.44,-0.26l2.73,1.78l-2.98,1.81l-0.19,0.41l0.31,0.32l4.53,0.92l6.87,-0.5l2.0,-0.69l2.49,2.39l0.53,0.02l2.72,-2.16l-0.02,-0.64l-2.16,-1.54l1.15,-1.06l4.83,-0.61l1.84,0.95l2.48,2.31l3.01,-0.23l4.55,1.92l3.85,-0.67l3.61,0.1l0.41,-0.44l-0.25,-2.36l1.79,-0.61l3.49,1.32l-0.01,3.77l0.31,0.39l0.45,-0.22l1.48,-3.16l1.74,0.1l0.41,-0.3l1.13,-4.37l-2.78,-3.11l-2.8,-1.74l0.19,-4.64l2.71,-3.07l2.98,0.67l2.41,1.95l3.19,4.8l-1.99,1.97l0.21,0.68l4.33,0.84l-0.01,4.15l0.25,0.37l0.44,-0.09l3.07,-3.15l2.54,2.39l-0.61,3.33l2.42,2.88l0.61,0.0l2.61,-3.08l1.88,-3.82l0.17,-4.58l6.72,0.94l3.13,2.04l0.13,1.82l-1.76,2.19l-0.01,0.49l1.66,2.16l-0.26,1.71l-4.68,2.8l-3.28,0.61l-2.47,-1.2l-0.55,0.23l-0.73,2.04l-2.38,3.43l-0.74,1.77l-2.74,2.57l-3.44,0.25l-2.21,1.78l-0.28,2.53l-2.82,0.55l-3.12,3.22l-2.72,4.31l-1.03,3.17l-0.14,4.31l0.33,0.41l3.44,0.57l2.24,5.95l0.45,0.23l3.4,-0.69l4.52,1.51l2.43,1.31l1.91,1.73l3.1,0.96l2.62,1.46l6.6,0.54l-0.35,2.74l0.81,3.53l1.81,3.78l3.83,3.3l0.45,0.04l2.1,-1.28l1.37,-3.69l-1.31,-5.38l-1.45,-1.58l3.57,-1.47l2.84,-2.46l1.52,-2.8l-0.25,-2.55l-1.7,-3.07l-2.85,-2.61l2.8,-3.95l-1.08,-3.37l-0.79,-5.67l1.36,-0.7l6.76,1.41l2.12,-0.96l5.12,3.36l1.05,1.61l4.08,0.26l-0.06,2.87l0.83,4.7l0.3,0.32l2.16,0.54l1.73,2.06l0.5,0.09l3.63,-2.03l2.52,-4.19l1.26,-1.32l7.6,11.72l-0.92,2.04l0.16,0.51l3.3,1.97l2.22,1.98l4.1,0.98l1.43,0.99l0.95,2.79l2.1,0.68l0.84,1.08l0.17,3.45l-3.37,2.26l-4.22,1.24l-3.06,2.63l-4.06,0.51l-5.35,-0.69l-6.39,0.2l-2.3,2.41l-3.26,1.51l-6.47,7.15l-0.06,0.48l0.44,0.19l2.13,-0.52l4.17,-4.24l5.12,-2.62l3.52,-0.3l1.69,1.21l-2.12,2.21l0.81,3.47l1.02,2.61l3.47,1.6l4.14,-0.45l2.15,-2.8l0.26,1.48l1.14,0.8l-2.56,1.69l-5.5,1.82l-2.54,1.27l-2.74,2.15l-1.4,-0.16l-0.07,-2.01l4.14,-2.44l0.18,-0.45l-0.39,-0.29l-6.63,0.45l-1.39,-1.49l-0.14,-4.43l-1.11,-0.91l-1.82,0.39l-0.66,-0.66l-0.6,0.03l-1.91,2.39l-0.82,2.52l-0.8,1.27l-1.67,0.56l-0.46,0.76l-8.31,0.07l-1.21,0.62l-2.35,1.97l-0.71,-0.14l-1.37,0.96l-1.12,-0.48l-4.74,1.26l-0.9,1.17l0.21,0.62l1.73,0.3l-1.81,0.31l-1.85,0.81l-2.11,-0.13l-2.95,1.78l-0.69,-0.09l1.39,-2.1l1.73,-1.21l0.1,-2.29l1.16,-1.99l0.49,0.53l2.03,0.42l1.2,-1.16l0.02,-0.47l-2.66,-3.51l-2.28,-0.61l-5.64,-0.71l-0.4,-0.57l-0.79,0.13l0.2,-0.41l-0.22,-0.55l-0.68,-0.26l0.19,-1.26l-0.78,-0.73l0.31,-0.64l-0.29,-0.57l-2.6,-0.44l-0.75,-1.63l-0.94,-0.66l-4.31,-0.65l-1.13,1.19l-1.48,0.59l-0.85,1.06l-2.83,-0.76l-2.09,0.39l-2.39,-0.97l-4.24,-0.7l-0.57,-0.4l-0.41,-1.63l-0.4,-0.3l-0.85,0.02l-0.39,0.4l-0.01,0.85l-69.13,-0.01l-6.51,-4.52l-4.5,-1.38l-1.26,-2.66l0.33,-1.93l-0.23,-0.43l-3.01,-1.35l-0.55,-2.77l-2.89,-2.38l-0.04,-1.45l1.39,-1.83l-0.28,-2.55l-4.16,-2.2l-4.07,-6.6l-4.02,-3.22l-1.3,-1.88l-0.5,-0.13l-2.51,1.21l-2.23,1.87l-3.85,-3.88l-2.44,-1.04l-2.22,-0.13l0.03,-37.49ZM260.37,148.65l3.04,0.76l2.26,1.2l-3.78,-0.95l-1.53,-1.01ZM249.4,3.81l6.68,0.49l5.32,0.79l4.26,1.57l-0.07,1.1l-5.85,2.53l-6.02,1.21l-2.39,1.39l-0.18,0.45l0.39,0.29l4.01,-0.02l-4.65,2.82l-4.2,1.74l-4.19,4.59l-5.03,0.92l-1.67,1.15l-7.47,0.59l-0.37,0.37l0.32,0.42l2.41,0.49l-0.81,0.47l-0.12,0.59l1.83,2.41l-2.02,1.59l-3.81,1.51l-1.32,2.16l-3.38,1.53l-0.22,0.48l0.35,1.19l0.4,0.29l3.88,-0.18l0.03,0.61l-6.33,2.95l-6.41,-1.4l-7.43,0.79l-3.72,-0.62l-4.4,-0.25l-0.23,-1.83l4.29,-1.11l0.28,-0.51l-1.1,-3.45l1.0,-0.25l6.58,2.28l0.47,-0.16l-0.05,-0.49l-3.41,-3.45l-3.58,-0.98l1.48,-1.55l4.34,-1.29l0.97,-2.19l-0.16,-0.48l-3.42,-2.13l-0.81,-2.26l6.2,0.22l2.24,0.58l3.91,-2.1l0.2,-0.43l-0.35,-0.32l-5.64,-0.67l-8.73,0.36l-4.26,-1.9l-2.12,-2.4l-2.78,-1.66l-0.41,-1.52l3.31,-1.03l2.93,-0.2l4.91,-0.99l3.7,-2.27l2.87,0.3l2.62,1.67l0.56,-0.14l1.82,-3.2l3.13,-0.94l4.44,-0.69l7.53,-0.26l1.48,0.67l7.19,-1.06l10.8,0.79ZM203.85,57.54l0.01,0.42l1.97,2.97l0.68,-0.02l2.24,-3.72l5.95,-1.86l4.01,4.64l-0.35,2.91l0.5,0.43l4.95,-1.36l2.32,-1.8l5.31,2.28l3.27,2.11l0.3,1.84l0.48,0.33l4.42,-0.99l2.64,2.87l5.97,1.77l2.06,1.72l2.11,3.71l-4.19,1.86l-0.01,0.73l5.9,2.83l3.94,0.94l3.78,3.95l3.46,0.25l-0.63,2.37l-4.11,4.47l-2.76,-1.56l-3.9,-3.94l-3.59,0.41l-0.33,0.34l-0.19,2.72l2.63,2.38l3.42,1.89l0.94,0.97l1.55,3.75l-0.7,2.29l-2.74,-0.92l-6.25,-3.15l-0.51,0.13l0.05,0.52l6.07,5.69l0.18,0.59l-6.09,-1.39l-5.31,-2.24l-2.63,-1.66l0.6,-0.77l-0.12,-0.6l-7.39,-4.01l-0.59,0.37l0.03,0.79l-6.73,0.6l-1.69,-1.1l1.36,-2.46l4.51,-0.07l5.15,-0.52l0.31,-0.6l-0.74,-1.3l0.78,-1.84l3.21,-4.05l-0.67,-2.35l-1.11,-1.6l-3.84,-2.1l-4.35,-1.28l0.91,-0.63l0.06,-0.61l-2.65,-2.75l-2.34,-0.36l-1.89,-1.46l-0.53,0.03l-1.24,1.23l-4.36,0.55l-9.04,-0.99l-9.26,-1.98l-1.6,-1.22l2.22,-1.77l0.13,-0.44l-0.38,-0.27l-3.22,-0.02l-0.72,-4.25l1.83,-4.04l2.42,-1.85l5.5,-1.1l-1.39,2.35ZM261.19,159.33l2.07,0.61l1.44,-0.04l-1.15,0.63l-2.94,-1.23l-0.4,-0.68l0.36,-0.37l0.61,1.07ZM230.83,84.39l-2.37,0.18l-0.49,-1.63l0.93,-2.09l1.94,-0.51l1.62,0.99l0.02,1.52l-1.66,1.54ZM229.43,58.25l0.11,0.65l-4.87,-0.21l-2.72,0.62l-3.1,-2.57l0.08,-1.26l0.86,-0.23l5.57,0.51l4.08,2.5ZM222.0,105.02l-0.72,1.49l-0.63,-0.19l-0.48,-0.84l0.81,-0.99l0.65,0.05l0.37,0.46ZM183.74,38.32l2.9,1.7l4.79,-0.01l1.84,1.46l-0.49,1.68l0.23,0.48l2.82,1.14l1.76,1.26l7.01,0.65l4.1,-1.1l5.03,-0.43l3.93,0.35l2.48,1.77l0.46,1.7l-1.3,1.1l-3.56,1.01l-3.23,-0.59l-7.17,0.76l-5.09,0.09l-3.99,-0.6l-6.42,-1.54l-0.79,-2.51l-0.3,-2.49l-2.64,-2.5l-5.32,-0.72l-2.52,-1.4l0.68,-1.57l4.78,0.31ZM207.38,91.35l0.4,1.56l0.56,0.26l1.06,-0.52l1.32,0.96l5.42,2.57l0.2,1.68l0.46,0.35l1.68,-0.28l1.15,0.85l-1.55,0.87l-3.61,-0.88l-1.32,-1.69l-0.57,-0.06l-2.45,2.1l-3.12,1.79l-0.7,-1.87l-0.42,-0.26l-2.16,0.24l1.39,-1.39l0.32,-3.14l0.76,-3.35l1.18,0.22ZM215.49,102.6l-2.67,1.95l-1.4,-0.07l-0.3,-0.58l1.53,-1.48l2.84,0.18ZM202.7,24.12l2.53,1.59l-2.87,1.4l-4.53,4.05l-4.25,0.38l-5.03,-0.68l-2.45,-2.04l0.03,-1.62l1.82,-1.37l0.14,-0.45l-0.38,-0.27l-4.45,0.04l-2.59,-1.76l-1.41,-2.29l1.57,-2.32l1.62,-1.66l2.44,-0.39l0.25,-0.65l-0.6,-0.74l4.86,-0.25l3.24,3.11l8.16,2.3l1.9,3.61ZM187.47,59.2l-2.76,3.49l-2.38,-0.15l-1.44,-3.84l0.04,-2.2l1.19,-1.88l2.3,-1.23l5.07,0.17l4.11,1.02l-3.24,3.72l-2.88,0.89ZM186.07,48.79l-1.08,1.53l-3.34,-0.34l-2.56,-1.1l1.03,-1.75l3.25,-1.23l1.95,1.58l0.75,1.3ZM185.71,35.32l-5.3,-0.2l-0.32,-0.71l4.31,0.07l1.3,0.84ZM180.68,32.48l-3.34,1.0l-1.79,-1.1l-0.98,-1.87l-0.15,-1.73l4.1,0.53l2.67,1.7l-0.51,1.47ZM180.9,76.31l-1.1,1.08l-3.13,-1.23l-2.12,0.43l-2.71,-1.57l1.72,-1.09l1.55,-1.72l3.81,1.9l1.98,2.2ZM169.74,54.87l2.96,0.97l4.17,-0.57l0.41,0.88l-2.14,2.11l0.09,0.64l3.55,1.92l-0.4,3.72l-3.79,1.65l-2.17,-0.35l-1.72,-1.74l-6.02,-3.5l0.03,-0.85l4.68,0.54l0.4,-0.21l-0.05,-0.45l-2.48,-2.81l2.46,-1.95ZM174.45,40.74l1.37,1.73l0.07,2.44l-1.05,3.45l-3.79,0.47l-2.32,-0.69l0.05,-2.64l-0.44,-0.41l-3.68,0.35l-0.12,-3.1l2.45,0.1l3.67,-1.73l3.41,0.29l0.37,-0.26ZM170.05,31.55l0.67,1.56l-3.33,-0.49l-4.22,-1.77l-4.35,-0.16l1.4,-0.94l-0.06,-0.7l-2.81,-1.23l-0.12,-1.39l4.39,0.68l6.62,1.98l1.81,2.47ZM134.5,58.13l-1.02,1.82l0.45,0.58l5.4,-1.39l3.33,2.29l0.49,-0.03l2.6,-2.23l1.94,1.32l2.0,4.5l0.7,0.06l1.3,-2.29l-1.63,-4.46l1.69,-0.54l2.31,0.71l2.65,1.81l2.49,7.92l8.48,4.27l-0.19,1.35l-3.79,0.33l-0.26,0.67l1.4,1.49l-0.58,1.1l-4.23,-0.64l-4.43,-1.19l-3.0,0.28l-4.66,1.47l-10.52,1.04l-1.43,-2.02l-3.42,-1.2l-2.21,0.43l-2.51,-2.86l4.84,-1.05l3.6,0.19l3.27,-0.78l0.31,-0.39l-0.31,-0.39l-4.84,-1.06l-8.79,0.27l-0.85,-1.07l5.26,-1.66l0.27,-0.45l-0.4,-0.34l-3.8,0.06l-3.81,-1.06l1.81,-3.01l1.66,-1.79l6.48,-2.81l1.97,0.71ZM158.7,56.61l-1.7,2.44l-3.2,-2.75l0.37,-0.3l3.11,-0.18l1.42,0.79ZM149.61,42.73l1.01,1.89l0.5,0.18l2.14,-0.82l2.23,0.19l0.36,2.04l-1.33,2.09l-8.28,0.76l-6.35,2.15l-3.41,0.1l-0.19,-0.96l4.9,-2.08l0.23,-0.46l-0.41,-0.31l-11.25,0.59l-2.89,-0.74l3.04,-4.44l2.14,-1.32l6.81,1.69l4.58,3.06l4.37,0.39l0.36,-0.63l-3.36,-4.6l1.85,-1.53l2.18,0.51l0.77,2.26ZM144.76,34.41l-4.36,1.44l-3.0,-1.4l1.46,-1.24l3.47,-0.52l2.96,0.71l-0.52,1.01ZM145.13,29.83l-1.9,0.66l-3.67,-0.0l2.27,-1.61l3.3,0.95ZM118.92,65.79l-6.03,2.02l-1.33,-1.9l-5.38,-2.28l2.59,-5.05l2.16,-3.14l-0.02,-0.48l-1.97,-2.41l7.64,-0.7l3.6,1.02l6.3,0.27l4.42,2.95l-2.53,0.98l-6.24,3.43l-3.1,3.28l-0.11,2.01ZM129.54,35.53l-0.28,3.37l-1.72,1.62l-2.33,0.28l-4.61,2.19l-3.86,0.76l-2.64,-0.87l3.72,-3.4l5.01,-3.34l3.72,0.07l3.0,-0.67ZM111.09,152.69l-0.67,0.24l-3.85,-1.37l-0.83,-1.17l-2.12,-1.07l-0.66,-1.02l-2.4,-0.55l-0.74,-1.71l6.02,1.45l2.0,2.55l2.52,1.39l0.73,1.27ZM87.8,134.64l0.89,0.29l1.86,-0.21l-0.65,3.34l1.69,2.33l-1.31,-1.33l-0.99,-1.62l-1.17,-0.98l-0.33,-1.82Z"
                                                data-code="CA" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M466.72,276.48l-0.1,1.03l-1.25,2.97l-0.19,3.62l-0.46,1.78l-0.23,0.63l-1.61,1.19l-1.21,1.39l-1.09,2.43l0.04,2.09l-3.25,3.24l-0.5,-0.24l-0.5,-0.83l-1.36,-0.02l-0.98,0.89l-1.68,-0.99l-1.54,1.24l-1.52,-1.96l1.57,-1.14l0.11,-0.52l-0.77,-1.35l2.1,-0.66l0.39,-0.73l1.05,0.82l2.21,0.11l1.12,-1.37l0.37,-1.81l-0.27,-2.09l-1.13,-1.5l1.0,-2.69l-0.13,-0.45l-0.92,-0.58l-1.6,0.17l-0.51,-0.94l0.1,-0.61l2.75,0.09l3.97,1.24l0.51,-0.33l0.17,-1.28l1.24,-2.21l1.28,-1.14l2.76,0.49Z"
                                                data-code="CG" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M461.16,278.2l-0.26,-1.19l-1.09,-0.77l-0.84,-1.17l-0.29,-1.0l-1.04,-1.15l0.08,-3.43l0.58,-0.49l1.16,-2.35l1.85,-0.17l0.61,-0.62l0.97,0.58l3.15,-0.96l2.48,-1.92l0.02,-0.96l2.81,0.02l2.36,-1.17l1.93,-2.85l1.16,-0.93l1.11,-0.3l0.27,0.86l1.34,1.47l-0.39,2.01l0.3,1.01l4.01,2.75l0.17,0.93l2.63,2.31l0.6,1.44l2.08,1.4l-3.84,-0.21l-1.94,0.88l-1.23,-0.49l-2.67,1.2l-1.29,-0.18l-0.51,0.36l-0.6,1.22l-3.35,-0.65l-1.57,-0.91l-2.42,-0.83l-1.45,0.91l-0.97,1.27l-0.26,1.56l-3.22,-0.43l-1.49,1.33l-0.94,1.62Z"
                                                data-code="CF" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M487.01,272.38l2.34,-0.14l1.35,1.84l1.34,0.45l0.86,-0.39l1.21,0.12l1.07,-0.41l0.54,0.89l2.04,1.54l-0.14,2.72l0.7,0.54l-1.38,1.13l-1.53,2.54l-0.17,2.05l-0.59,1.08l-0.02,1.72l-0.72,0.84l-0.66,3.01l0.63,1.32l-0.44,4.26l0.64,1.47l-0.37,1.22l0.86,1.8l1.53,1.41l0.3,1.26l0.44,0.5l-4.08,0.75l-0.92,1.81l0.51,1.34l-0.74,5.43l0.17,0.38l2.45,1.46l0.54,-0.1l0.12,1.62l-1.28,-0.01l-1.85,-2.35l-1.94,-0.45l-0.48,-1.13l-0.55,-0.2l-1.41,0.74l-1.71,-0.3l-1.01,-1.18l-2.49,-0.19l-0.44,-0.77l-1.98,-0.21l-2.88,0.36l0.11,-2.41l-0.85,-1.13l-0.16,-1.36l0.32,-1.73l-0.46,-0.89l-0.04,-1.49l-0.4,-0.39l-2.53,0.02l0.1,-0.41l-0.39,-0.49l-1.28,0.01l-0.43,0.45l-1.62,0.32l-0.83,1.79l-1.09,-0.28l-2.4,0.52l-1.37,-1.91l-1.3,-3.3l-0.38,-0.27l-7.39,-0.03l-2.46,0.42l0.5,-0.45l0.37,-1.47l0.66,-0.38l0.92,0.08l0.73,-0.82l0.87,0.02l0.31,0.68l1.4,0.36l3.59,-3.63l0.01,-2.23l1.02,-2.29l2.69,-2.39l0.43,-0.99l0.49,-1.96l0.17,-3.51l1.25,-2.95l0.36,-3.14l0.86,-1.13l1.1,-0.66l3.57,1.73l3.65,0.73l0.46,-0.21l0.8,-1.46l1.24,0.19l2.61,-1.17l0.81,0.44l1.04,-0.03l0.59,-0.66l0.7,-0.16l1.81,0.25Z"
                                                data-code="CD" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M458.46,144.88l1.22,1.01l1.47,0.23l0.13,0.93l1.36,0.68l0.54,-0.2l0.24,-0.55l1.15,0.25l0.53,1.09l1.68,0.18l0.6,0.84l-1.04,0.73l-0.96,1.28l-1.6,0.17l-0.55,0.56l-1.04,-0.46l-1.05,0.15l-2.12,-0.96l-1.05,0.34l-1.2,1.12l-1.56,-0.87l-2.57,-2.1l-0.53,-1.88l4.7,-2.52l0.71,0.26l0.9,-0.28Z"
                                                data-code="CZ" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M504.36,193.47l0.43,0.28l-1.28,0.57l-0.92,-0.28l-0.24,-0.46l2.01,-0.13Z"
                                                data-code="CY" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M211.34,258.05l0.48,0.99l1.6,1.6l-0.54,0.45l0.29,1.42l-0.25,1.19l-1.09,-0.59l-0.05,-1.25l-2.46,-1.42l-0.28,-0.77l-0.66,-0.45l-0.45,-0.0l-0.11,1.04l-1.32,-0.95l0.31,-1.3l-0.36,-0.6l0.31,-0.27l1.42,0.58l1.29,-0.14l0.56,0.56l0.74,0.17l0.55,-0.27Z"
                                                data-code="CR" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M221.21,227.25l1.27,1.02l2.19,-0.28l4.43,3.33l2.08,0.43l-0.1,0.38l0.36,0.5l1.75,0.1l1.48,0.84l-3.11,0.51l-4.15,-0.03l0.77,-0.67l-0.04,-0.64l-1.2,-0.74l-1.49,-0.16l-0.7,-0.61l-0.56,-1.4l-0.4,-0.25l-1.34,0.1l-2.2,-0.66l-0.88,-0.58l-3.18,-0.4l-0.27,-0.16l0.58,-0.74l-0.36,-0.29l-2.72,-0.05l-1.7,1.29l-0.91,0.03l-0.61,0.69l-1.01,0.22l1.11,-1.29l1.01,-0.52l3.69,-1.01l3.98,0.21l2.21,0.84Z"
                                                data-code="CU" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M500.35,351.36l0.5,2.04l-0.38,0.89l-1.05,0.21l-1.23,-1.2l-0.02,-0.64l0.83,-1.57l1.34,0.27Z"
                                                data-code="SZ" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M511.0,199.79l0.05,-1.33l0.54,-1.36l1.28,-0.99l0.13,-0.45l-0.41,-1.11l-1.14,-0.36l-0.19,-1.74l0.52,-1.0l1.29,-1.21l0.2,-1.18l0.59,0.23l2.62,-0.76l1.36,0.52l2.06,-0.01l2.95,-1.08l3.25,-0.26l-0.67,0.94l-1.28,0.66l-0.21,0.4l0.23,2.01l-0.88,3.19l-10.15,5.73l-2.15,-0.85Z"
                                                data-code="SY" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M621.35,172.32l-3.87,1.69l-0.96,1.18l-3.04,0.34l-1.13,1.86l-2.36,-0.35l-1.99,0.63l-2.39,1.4l0.06,0.95l-0.4,0.37l-4.52,0.43l-3.02,-0.93l-2.37,0.17l0.11,-0.79l2.32,0.42l1.13,-0.88l1.99,0.2l3.21,-2.14l-0.03,-0.69l-2.97,-1.57l-1.94,0.65l-1.22,-0.74l1.71,-1.58l-0.12,-0.67l-0.36,-0.15l0.32,-0.77l1.36,-0.35l4.02,1.02l0.49,-0.3l0.35,-1.59l1.09,-0.48l3.42,1.22l1.11,-0.31l7.64,0.39l1.16,1.0l1.23,0.39Z"
                                                data-code="KG" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M506.26,284.69l1.87,-2.56l0.93,-2.15l-1.38,-4.08l-1.06,-1.6l2.82,-2.75l0.79,0.26l0.12,1.41l0.86,0.83l1.9,0.11l3.28,2.13l3.57,0.44l1.05,-1.12l1.96,-0.9l0.82,0.68l1.16,0.09l-1.78,2.45l0.03,9.12l1.3,1.94l-1.37,0.78l-0.67,1.03l-1.08,0.46l-0.34,1.67l-0.81,1.07l-0.45,1.55l-0.68,0.56l-3.2,-2.23l-0.35,-1.58l-8.86,-4.98l0.14,-1.6l-0.57,-1.04Z"
                                                data-code="KE" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M481.71,263.34l1.07,-0.72l1.2,-3.18l1.36,-0.26l1.61,1.99l0.87,0.34l1.1,-0.41l1.5,0.07l0.57,0.53l2.49,0.0l0.44,-0.63l1.07,-0.4l0.45,-0.84l0.59,-0.33l1.9,1.33l1.6,-0.2l2.83,-3.33l-0.32,-2.21l1.59,-0.52l-0.24,1.6l0.3,1.83l1.35,1.18l0.2,1.87l0.35,0.41l0.02,1.53l-0.23,0.47l-1.42,0.25l-0.85,1.44l0.3,0.6l1.4,0.16l1.11,1.08l0.59,1.13l1.03,0.53l1.28,2.36l-4.41,3.98l-1.74,0.01l-1.89,0.55l-1.47,-0.52l-1.15,0.57l-2.96,-2.62l-1.3,0.49l-1.06,-0.15l-0.79,0.39l-0.82,-0.22l-1.8,-2.7l-1.91,-1.1l-0.66,-1.5l-2.62,-2.32l-0.18,-0.94l-2.37,-1.6Z"
                                                data-code="SS" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M283.12,270.19l2.1,0.53l-1.08,1.95l0.2,1.72l0.93,1.49l-0.59,2.03l-0.43,0.71l-1.12,-0.42l-1.32,0.22l-0.93,-0.2l-0.46,0.26l-0.25,0.73l0.33,0.7l-0.89,-0.13l-1.39,-1.97l-0.31,-1.34l-0.97,-0.31l-0.89,-1.47l0.35,-1.61l1.45,-0.82l0.33,-1.87l2.61,0.44l0.57,-0.47l1.75,-0.16Z"
                                                data-code="SR" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M689.52,249.39l0.49,1.45l-0.28,2.74l-4.0,1.86l-0.16,0.6l0.68,0.95l-2.06,0.17l-2.05,0.97l-1.82,-0.32l-2.12,-3.7l-0.55,-2.85l1.4,-1.85l3.02,-0.45l2.23,0.35l2.01,0.98l0.51,-0.14l0.95,-1.48l1.74,0.74Z"
                                                data-code="KH" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M195.8,250.13l1.4,-1.19l2.24,1.45l0.98,-0.27l0.44,0.2l-0.27,1.05l-1.14,-0.03l-3.64,-1.21Z"
                                                data-code="SV" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M476.82,151.17l-1.14,1.9l-2.73,-0.92l-0.82,0.2l-0.74,0.8l-3.46,0.73l-0.47,0.69l-1.76,0.33l-1.88,-1.0l-0.18,-0.81l0.38,-0.75l1.87,-0.32l1.74,-1.89l0.83,0.16l0.79,-0.34l1.51,1.04l1.34,-0.63l1.25,0.3l1.65,-0.42l1.81,0.95Z"
                                                data-code="SK" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M737.51,185.84l0.98,-0.1l0.87,-1.17l2.69,-0.32l0.33,-0.29l1.76,2.79l0.58,1.76l0.02,3.12l-0.8,1.32l-2.21,0.55l-1.93,1.13l-1.8,0.19l-0.2,-1.1l0.43,-2.28l-0.95,-2.56l1.43,-0.37l0.23,-0.62l-1.43,-2.06Z"
                                                data-code="KR" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M456.18,162.07l-0.51,-1.32l0.18,-1.05l1.69,0.2l1.42,-0.71l2.09,-0.07l0.62,-0.51l0.21,0.47l-1.61,0.67l-0.44,1.34l-0.66,0.24l-0.26,0.82l-1.22,-0.49l-0.84,0.46l-0.69,-0.04Z"
                                                data-code="SI" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M736.77,185.16l-0.92,-0.42l-0.88,0.62l-1.21,-0.88l0.96,-1.15l0.59,-2.59l-0.46,-0.74l-2.09,-0.77l1.64,-1.52l2.72,-1.58l1.58,-1.91l1.11,0.78l2.17,0.11l0.41,-0.5l-0.3,-1.22l3.52,-1.18l0.94,-1.4l0.98,1.08l-2.19,2.18l0.01,2.14l-1.06,0.54l-1.41,1.4l-1.7,0.52l-1.25,1.09l-0.14,1.98l0.94,0.45l1.15,1.04l-0.13,0.26l-2.6,0.29l-1.13,1.29l-1.22,0.08Z"
                                                data-code="KP" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M525.13,288.48l-1.13,-1.57l-0.03,-8.86l2.66,-3.38l1.67,-0.13l2.13,-1.69l3.41,-0.23l7.08,-7.55l2.91,-3.69l0.08,-4.82l2.98,-0.67l1.24,-0.86l0.45,-0.0l-0.2,3.0l-1.21,3.62l-2.73,5.97l-2.13,3.65l-5.03,6.16l-8.56,6.4l-2.78,3.08l-0.8,1.56Z"
                                                data-code="SO" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M390.09,248.21l0.12,1.55l0.49,1.46l0.96,0.82l0.05,1.28l-1.26,-0.19l-0.75,0.33l-1.84,-0.61l-5.84,-0.13l-2.54,0.51l-0.22,-1.03l1.77,0.04l2.01,-0.91l1.03,0.48l1.09,0.04l1.29,-0.62l0.14,-0.58l-0.51,-0.74l-1.81,0.25l-1.13,-0.63l-0.79,0.04l-0.72,0.61l-2.31,0.06l-0.92,-1.77l-0.81,-0.64l0.64,-0.35l2.46,-3.74l1.04,0.19l1.38,-0.56l1.19,-0.02l2.72,1.37l3.03,3.48Z"
                                                data-code="SN" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M394.46,264.11l-1.73,1.98l-0.58,1.33l-2.07,-1.06l-1.22,-1.26l-0.65,-2.39l1.16,-0.96l0.67,-1.17l1.21,-0.52l1.66,0.0l1.03,1.64l0.52,2.41Z"
                                                data-code="SL" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M826.69,311.6l-0.61,0.09l-0.2,-0.33l0.37,0.15l0.44,0.09ZM824.18,307.38l-0.26,-0.3l-0.31,-0.91l0.03,0.0l0.54,1.21ZM823.04,309.33l-1.66,-0.22l-0.2,-0.52l1.16,0.28l0.69,0.46ZM819.28,304.68l1.14,0.65l0.02,0.03l-0.81,-0.44l-0.35,-0.23Z"
                                                data-code="SB" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M537.53,210.34l2.0,0.24l0.9,1.32l1.49,-0.06l0.87,2.08l1.29,0.76l0.51,0.99l1.56,1.03l-0.1,1.9l0.32,0.9l1.58,2.47l0.76,0.53l0.7,-0.04l1.68,4.23l7.53,1.33l0.51,-0.29l0.77,1.25l-1.55,4.87l-7.29,2.52l-7.3,1.03l-2.34,1.17l-1.88,2.74l-0.76,0.28l-0.82,-0.78l-0.91,0.12l-2.88,-0.51l-3.51,0.25l-0.86,-0.56l-0.57,0.15l-0.66,1.27l0.16,1.11l-0.43,0.32l-0.93,-1.4l-0.33,-1.16l-1.23,-0.88l-1.27,-2.06l-0.78,-2.22l-1.73,-1.79l-1.14,-0.48l-1.54,-2.31l-0.21,-3.41l-1.44,-2.93l-1.27,-1.16l-1.33,-0.57l-1.31,-3.37l-0.77,-0.67l-0.97,-1.97l-2.8,-4.03l-1.06,-0.17l0.37,-1.96l0.2,-0.72l2.74,0.3l1.08,-0.84l0.6,-0.94l1.74,-0.35l0.65,-1.03l0.71,-0.4l0.1,-0.62l-2.06,-2.28l4.39,-1.22l0.48,-0.37l2.77,0.69l3.66,1.9l7.03,5.5l4.87,0.3Z"
                                                data-code="SA" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M480.22,89.3l-4.03,1.17l-2.43,2.86l0.26,2.57l-8.77,6.64l-1.78,5.79l1.78,2.68l2.22,1.96l-2.07,3.77l-2.72,1.13l-0.95,6.04l-1.29,3.01l-2.74,-0.31l-0.4,0.22l-1.31,2.59l-2.34,0.13l-0.75,-3.09l-2.08,-4.03l-1.83,-4.96l1.0,-1.93l2.14,-2.7l0.83,-4.45l-1.6,-2.17l-0.15,-4.94l1.48,-3.39l2.58,-0.15l0.87,-1.59l-0.78,-1.57l3.76,-5.59l4.04,-7.48l2.17,0.01l0.39,-0.29l0.57,-2.07l4.37,0.64l0.46,-0.34l0.33,-2.56l1.1,-0.13l6.94,4.87l0.06,6.32l0.66,1.36Z"
                                                data-code="SE" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M505.98,259.4l-0.34,-0.77l-1.17,-0.9l-0.26,-1.61l0.29,-1.81l-0.34,-0.46l-1.16,-0.17l-0.54,0.59l-1.23,0.11l-0.28,0.65l0.53,0.65l0.17,1.22l-2.44,3.0l-0.96,0.19l-2.39,-1.4l-0.95,0.52l-0.38,0.78l-1.11,0.41l-0.29,0.5l-1.94,0.0l-0.54,-0.52l-1.81,-0.09l-0.95,0.4l-2.45,-2.35l-2.07,0.54l-0.73,1.26l-0.6,2.1l-1.25,0.58l-0.75,-0.62l0.27,-2.65l-1.48,-1.78l-0.22,-1.48l-0.92,-0.96l-0.02,-1.29l-0.57,-1.16l-0.68,-0.16l0.69,-1.29l-0.18,-1.14l0.65,-0.62l0.03,-0.55l-0.36,-0.41l1.55,-2.97l1.91,0.16l0.43,-0.4l-0.1,-10.94l2.49,-0.01l0.4,-0.4l-0.0,-4.82l29.02,0.0l0.64,2.04l-0.49,0.66l0.36,2.69l0.93,3.16l2.12,1.55l-0.89,1.04l-1.72,0.39l-0.98,0.9l-1.43,5.65l0.24,1.15l-0.38,2.06l-0.96,2.38l-1.53,1.31l-1.32,2.91l-1.22,0.86l-0.37,1.34Z"
                                                data-code="SD" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M241.8,239.2l0.05,-0.65l-0.46,-0.73l0.42,-0.44l0.19,-1.0l-0.09,-1.53l1.66,0.01l1.99,0.63l0.33,0.67l1.28,0.19l0.33,0.76l1.0,0.08l0.8,0.62l-0.45,0.51l-1.13,-0.47l-1.88,-0.01l-1.27,0.59l-0.75,-0.55l-1.01,0.54l-0.79,1.4l-0.23,-0.61Z"
                                                data-code="DO" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M528.43,256.18l-0.45,0.66l-0.58,-0.25l-1.51,0.13l-0.18,-1.01l1.45,-1.95l0.83,0.17l0.77,-0.44l0.2,1.0l-1.2,0.51l-0.06,0.7l0.73,0.47Z"
                                                data-code="DJ" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M452.28,129.07l-1.19,2.24l-2.13,-1.6l-0.23,-0.95l2.98,-0.95l0.57,1.26ZM447.74,126.31l-0.26,0.57l-0.88,-0.07l-1.8,2.53l0.48,1.69l-1.09,0.36l-1.61,-0.39l-0.89,-1.69l-0.07,-3.43l0.96,-1.73l2.02,-0.2l1.09,-1.07l1.33,-0.67l-0.05,1.06l-0.73,1.41l0.3,1.0l1.2,0.64Z"
                                                data-code="DK" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M453.14,155.55l-0.55,-0.36l-1.2,-0.1l-1.87,0.57l-2.13,-0.13l-0.56,0.63l-0.86,-0.6l-0.96,0.09l-2.57,-0.93l-0.85,0.67l-1.47,-0.02l0.24,-1.75l1.23,-2.14l-0.28,-0.59l-3.52,-0.58l-0.92,-0.66l0.12,-1.2l-0.48,-0.88l0.27,-2.17l-0.37,-3.03l1.41,-0.22l0.63,-1.26l0.66,-3.19l-0.41,-1.18l0.26,-0.39l1.66,-0.15l0.33,0.54l0.62,0.07l1.7,-1.69l-0.54,-3.02l1.37,0.33l1.31,-0.37l0.31,1.18l2.25,0.71l-0.02,0.92l0.5,0.4l2.55,-0.65l1.34,-0.87l2.57,1.24l1.06,0.98l0.48,1.44l-0.57,0.74l-0.0,0.48l0.87,1.15l0.57,1.64l-0.14,1.29l0.82,1.7l-1.5,-0.07l-0.56,0.57l-4.47,2.15l-0.22,0.54l0.68,2.26l2.58,2.16l-0.66,1.11l-0.79,0.36l-0.23,0.43l0.32,1.87Z"
                                                data-code="DE" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M528.27,246.72l0.26,-0.42l-0.22,-1.01l0.19,-1.5l0.92,-0.69l-0.07,-1.35l0.39,-0.75l1.01,0.47l3.34,-0.27l3.76,0.41l0.95,0.81l1.36,-0.58l1.74,-2.62l2.18,-1.09l6.86,-0.94l2.48,5.41l-1.64,0.76l-0.56,1.9l-6.23,2.16l-2.29,1.8l-1.93,0.05l-1.41,1.02l-4.24,0.74l-1.72,1.49l-3.28,0.19l-0.52,-1.18l0.02,-1.51l-1.34,-3.29Z"
                                                data-code="YE" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M462.89,152.8l0.04,2.25l-1.07,0.0l-0.33,0.63l0.36,0.51l-1.04,2.13l-2.02,0.07l-1.33,0.7l-5.29,-0.99l-0.47,-0.93l-0.44,-0.21l-2.47,0.55l-0.42,0.51l-3.18,-0.81l0.43,-0.91l1.12,0.78l0.6,-0.17l0.25,-0.58l1.93,0.12l1.86,-0.56l1.0,0.08l0.68,0.57l0.62,-0.15l0.26,-0.77l-0.3,-1.78l0.8,-0.44l0.68,-1.15l1.52,0.85l0.47,-0.06l1.34,-1.25l0.64,-0.17l1.81,0.92l1.28,-0.11l0.7,0.37Z"
                                                data-code="AT" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M441.46,188.44l-0.32,1.07l0.39,2.64l-0.54,2.16l-1.58,1.82l0.37,2.39l1.91,1.55l0.18,0.8l1.42,1.03l1.84,7.23l0.12,1.16l-0.57,5.0l0.2,1.51l-0.87,0.99l-0.02,0.51l1.41,1.86l0.14,1.2l0.89,1.48l0.5,0.16l0.98,-0.41l1.73,1.08l0.82,1.23l-8.22,4.81l-7.23,5.11l-3.43,1.13l-2.3,0.21l-0.28,-1.59l-2.56,-1.09l-0.67,-1.25l-26.12,-17.86l0.01,-3.47l3.77,-1.88l2.44,-0.41l2.12,-0.75l1.08,-1.42l2.81,-1.05l0.35,-2.08l1.33,-0.29l1.04,-0.94l3.47,-0.69l0.46,-1.08l-0.1,-0.45l-0.58,-0.52l-0.82,-2.81l-0.19,-1.83l-0.78,-1.49l2.03,-1.31l2.63,-0.48l1.7,-1.22l2.31,-0.84l8.24,-0.73l1.49,0.38l2.28,-1.1l2.46,-0.02l0.92,0.6l1.35,-0.05Z"
                                                data-code="DZ" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M892.72,99.2l1.31,0.53l1.41,-0.37l1.89,0.98l1.89,0.42l-1.32,0.58l-2.9,-1.53l-2.08,0.22l-0.26,-0.15l0.07,-0.67ZM183.22,150.47l0.37,1.47l1.12,0.85l4.23,0.7l2.39,0.98l2.17,-0.38l1.85,0.5l-1.55,0.65l-3.49,2.61l-0.16,0.77l0.5,0.39l2.33,-0.61l1.77,1.02l5.15,-2.4l-0.31,0.65l0.25,0.56l1.36,0.38l1.71,1.16l4.7,-0.88l0.67,0.85l1.31,0.21l0.58,0.58l-1.34,0.17l-2.18,-0.32l-3.6,0.89l-2.71,3.25l0.35,0.9l0.59,-0.0l0.55,-0.6l-1.36,4.65l0.29,3.09l0.67,1.58l0.61,0.45l1.77,-0.44l1.6,-1.96l0.14,-2.21l-0.82,-1.96l0.11,-1.13l1.19,-2.37l0.44,-0.33l0.48,0.75l0.4,-0.29l0.4,-1.37l0.6,-0.47l0.24,-0.8l1.69,0.49l1.65,1.08l-0.03,2.37l-1.27,1.13l-0.0,1.13l0.87,0.36l1.66,-1.29l0.5,0.17l0.5,2.6l-2.49,3.75l0.17,0.61l1.54,0.62l1.48,0.17l1.92,-0.44l4.72,-2.15l2.16,-1.8l-0.05,-1.24l0.75,-0.22l3.92,0.36l2.12,-1.05l0.21,-0.4l-0.28,-1.48l3.27,-2.4l8.32,-0.02l0.56,-0.82l1.9,-0.77l0.93,-1.51l0.74,-2.37l1.58,-1.98l0.92,0.62l1.47,-0.47l0.8,0.66l-0.0,4.09l1.96,2.6l-2.34,1.31l-5.37,2.09l-1.83,2.72l0.02,1.79l0.83,1.59l0.54,0.23l-6.19,0.94l-2.2,0.89l-0.23,0.48l0.45,0.29l2.99,-0.46l-2.19,0.56l-1.13,0.0l-0.15,-0.32l-0.48,0.08l-0.76,0.82l0.22,0.67l0.32,0.06l-0.41,1.62l-1.27,1.58l-1.48,-1.07l-0.49,-0.04l-0.16,0.46l0.52,1.58l0.61,0.59l0.03,0.79l-0.95,1.38l-1.21,-1.22l-0.27,-2.27l-0.35,-0.35l-0.42,0.25l-0.48,1.27l0.33,1.41l-0.97,-0.27l-0.48,0.24l0.18,0.5l1.52,0.83l0.1,2.52l0.79,0.51l0.52,3.42l-1.42,1.88l-2.47,0.8l-1.71,1.66l-1.31,0.25l-1.27,1.03l-0.43,0.99l-2.69,1.78l-2.64,3.03l-0.45,2.12l0.45,2.08l0.85,2.38l1.09,1.9l0.04,1.2l1.16,3.06l-0.18,2.69l-0.55,1.43l-0.47,0.21l-0.89,-0.23l-0.49,-1.18l-0.87,-0.56l-2.75,-5.16l0.48,-1.68l-0.72,-1.78l-2.01,-2.38l-1.12,-0.53l-2.72,1.18l-1.47,-1.35l-1.57,-0.68l-2.99,0.31l-2.17,-0.3l-2.0,0.19l-1.15,0.46l-0.19,0.58l0.39,0.63l0.14,1.34l-0.84,-0.2l-0.84,0.46l-1.58,-0.07l-2.08,-1.44l-2.09,0.33l-1.91,-0.62l-3.73,0.84l-2.39,2.07l-2.54,1.22l-1.45,1.41l-0.61,1.38l0.34,3.71l-0.29,0.02l-3.5,-1.33l-1.25,-3.11l-1.44,-1.5l-2.24,-3.56l-1.76,-1.09l-2.27,-0.01l-1.71,2.07l-1.76,-0.69l-1.16,-0.74l-1.52,-2.98l-3.93,-3.16l-4.34,-0.0l-0.4,0.4l-0.0,0.74l-6.5,0.02l-9.02,-3.14l-0.34,-0.71l-5.7,0.49l-0.43,-1.29l-1.62,-1.61l-1.14,-0.38l-0.55,-0.88l-1.28,-0.13l-1.01,-0.77l-2.22,-0.27l-0.43,-0.3l-0.36,-1.58l-2.4,-2.83l-2.01,-3.85l-0.06,-0.9l-2.92,-3.26l-0.33,-2.29l-1.3,-1.66l0.52,-2.37l-0.09,-2.57l-0.78,-2.3l0.95,-2.82l0.61,-5.68l-0.47,-4.27l-1.46,-4.08l3.19,0.79l1.26,2.83l0.69,0.08l0.69,-1.14l-1.1,-4.79l68.76,-0.0l0.4,-0.4l0.14,-0.86ZM32.44,67.52l1.73,1.97l0.55,0.05l0.99,-0.79l3.65,0.24l-0.09,0.62l0.32,0.45l3.83,0.77l2.61,-0.43l5.19,1.4l4.84,0.43l1.89,0.57l3.42,-0.7l6.14,1.87l-0.03,38.06l0.38,0.4l2.39,0.11l2.31,0.98l3.9,3.99l0.55,0.04l2.4,-2.03l2.16,-1.04l1.2,1.71l3.95,3.14l4.09,6.63l4.2,2.29l0.06,1.83l-1.02,1.23l-1.16,-1.08l-2.04,-1.03l-0.67,-2.89l-3.28,-3.03l-1.65,-3.57l-6.35,-0.32l-2.82,-1.01l-5.26,-3.85l-6.77,-2.04l-3.53,0.3l-4.81,-1.69l-3.25,-1.63l-2.78,0.8l-0.28,0.46l0.44,2.21l-3.91,0.96l-2.26,1.27l-2.3,0.65l-0.27,-1.65l1.05,-3.42l2.49,-1.09l0.16,-0.6l-0.69,-0.96l-0.55,-0.1l-3.19,2.12l-1.78,2.56l-3.55,2.61l-0.04,0.61l1.56,1.52l-2.07,2.29l-5.11,2.57l-0.77,1.66l-3.76,1.77l-0.92,1.73l-2.69,1.38l-1.81,-0.22l-6.95,3.32l-3.97,0.91l4.85,-2.5l2.59,-1.86l3.26,-0.52l1.19,-1.4l3.42,-2.1l2.59,-2.27l0.42,-2.68l1.23,-2.1l-0.04,-0.46l-0.45,-0.11l-2.68,1.03l-0.63,-0.49l-0.53,0.03l-1.05,1.04l-1.36,-1.54l-0.66,0.08l-0.32,0.62l-0.58,-1.14l-0.56,-0.16l-2.41,1.42l-1.07,-0.0l-0.17,-1.75l0.3,-1.71l-1.61,-1.33l-3.41,0.59l-1.96,-1.63l-1.57,-0.84l-0.15,-2.21l-1.7,-1.43l0.82,-1.88l1.99,-2.12l0.88,-1.92l1.71,-0.24l2.04,0.51l1.87,-1.77l1.91,0.25l1.91,-1.23l0.17,-0.43l-0.47,-1.82l-1.07,-0.7l1.39,-1.17l0.12,-0.45l-0.39,-0.26l-1.65,0.07l-2.66,0.88l-0.75,0.78l-1.92,-0.8l-3.46,0.44l-3.44,-0.91l-1.06,-1.61l-2.65,-1.99l2.91,-1.43l5.5,-2.0l1.52,0.0l-0.26,1.62l0.41,0.46l5.29,-0.16l0.3,-0.65l-2.03,-2.59l-3.14,-1.68l-1.79,-2.12l-2.4,-1.83l-3.09,-1.24l1.04,-1.69l4.23,-0.14l3.36,-2.07l0.73,-2.27l2.39,-1.99l2.42,-0.52l4.65,-1.97l2.46,0.23l3.71,-2.35l3.5,0.89ZM37.6,123.41l-2.25,1.23l-0.95,-0.69l-0.29,-1.24l3.21,-1.63l1.42,0.21l0.67,0.7l-1.8,1.42ZM31.06,234.03l0.98,0.47l0.74,0.87l-1.77,1.07l-0.44,-1.53l0.49,-0.89ZM29.34,232.07l0.18,0.05l0.08,0.05l-0.16,0.03l-0.11,-0.14ZM25.16,230.17l0.05,-0.03l0.18,0.22l-0.13,-0.01l-0.1,-0.18ZM5.89,113.26l-1.08,0.41l-2.21,-1.12l1.53,-0.4l1.62,0.28l0.14,0.83Z"
                                                data-code="US" fill="#868ff363" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M489.16,122.85l0.96,0.66l0.22,1.65l0.68,1.76l-3.65,1.7l-2.23,-1.58l-1.29,-0.26l-0.68,-0.77l-2.42,0.34l-4.16,-0.23l-2.47,0.9l0.06,-1.98l1.13,-2.06l1.95,-1.02l2.12,2.58l2.01,-0.07l0.38,-0.33l0.44,-2.52l1.76,-0.53l3.06,1.7l2.15,0.07Z"
                                                data-code="LV" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M286.85,372.74l-0.92,1.5l-2.59,1.44l-1.69,-0.52l-1.42,0.26l-2.39,-1.19l-1.52,0.08l-1.27,-1.3l0.16,-1.5l0.56,-0.79l-0.02,-2.73l1.21,-4.74l1.19,-0.21l2.37,2.0l1.08,0.03l4.36,3.17l1.22,1.6l-0.96,1.5l0.61,1.4Z"
                                                data-code="UY" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M510.37,198.01l-0.88,0.51l1.82,-3.54l0.62,0.08l0.22,0.61l-1.13,0.88l-0.65,1.47Z"
                                                data-code="LB" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M689.54,248.53l-1.76,-0.74l-0.49,0.15l-0.94,1.46l-1.32,-0.64l0.62,-0.98l0.11,-2.17l-2.04,-2.42l-0.25,-2.65l-1.9,-2.1l-2.15,-0.31l-0.78,0.91l-1.12,0.06l-1.05,-0.4l-2.06,1.2l-0.04,-1.59l0.61,-2.68l-0.36,-0.49l-1.35,-0.1l-0.11,-1.23l-0.96,-0.88l1.96,-1.89l0.39,0.36l1.33,0.07l0.42,-0.45l-0.34,-2.66l0.7,-0.21l1.28,1.81l1.11,2.35l0.36,0.23l2.82,0.02l0.71,1.67l-1.39,0.65l-0.72,0.93l0.13,0.6l2.91,1.51l3.6,5.25l1.88,1.78l0.56,1.62l-0.35,1.96Z"
                                                data-code="LA" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M724.01,226.68l-0.74,1.48l-0.9,-1.52l-0.25,-1.74l1.38,-2.44l1.73,-1.74l0.64,0.44l-1.85,5.52Z"
                                                data-code="TW" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path d="M266.64,259.32l0.28,-1.16l1.13,-0.22l-0.06,1.2l-1.35,0.18Z"
                                                data-code="TT" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M513.21,175.47l3.64,1.17l3.05,-0.44l2.1,0.26l3.11,-1.56l2.46,-0.13l2.19,1.33l0.33,0.82l-0.22,1.33l0.25,0.44l2.28,1.13l-1.17,0.57l-0.21,0.45l0.75,3.2l-0.41,1.16l1.13,1.92l-0.55,0.22l-0.9,-0.67l-2.91,-0.37l-1.24,0.46l-4.23,0.41l-2.81,1.05l-1.91,0.01l-1.52,-0.53l-2.58,0.75l-0.66,-0.45l-0.62,0.3l-0.12,1.45l-0.89,0.84l-0.47,-0.67l0.79,-1.3l-0.41,-0.2l-1.43,0.23l-2.0,-0.63l-2.02,1.65l-3.51,0.3l-2.13,-1.53l-2.7,-0.1l-0.86,1.24l-1.38,0.27l-2.29,-1.44l-2.71,-0.01l-1.37,-2.65l-1.68,-1.52l1.07,-1.99l-0.09,-0.49l-1.27,-1.12l2.37,-2.41l3.7,-0.11l1.28,-2.24l4.49,0.37l3.21,-1.97l2.81,-0.82l3.99,-0.06l4.29,2.07ZM488.79,176.72l-1.72,1.31l-0.5,-0.88l1.37,-2.57l-0.7,-0.85l1.7,-0.63l1.8,0.34l0.46,1.17l1.76,0.78l-2.87,0.32l-1.3,1.01Z"
                                                data-code="TR" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M624.16,268.99l-1.82,0.48l-0.99,-1.67l-0.42,-3.46l0.95,-3.43l1.21,0.98l2.26,4.19l-0.34,2.33l-0.85,0.58Z"
                                                data-code="LK" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M448.1,188.24l-1.0,1.27l-0.02,1.32l0.84,0.88l-0.28,2.09l-1.53,1.32l-0.12,0.42l0.48,1.54l1.42,0.32l0.53,1.11l0.9,0.52l-0.11,1.67l-3.54,2.64l-0.1,2.38l-0.58,0.3l-0.96,-4.45l-1.54,-1.25l-0.16,-0.78l-1.92,-1.56l-0.18,-1.76l1.51,-1.62l0.59,-2.34l-0.38,-2.78l0.42,-1.21l2.45,-1.05l1.29,0.26l-0.06,1.11l0.58,0.38l1.47,-0.73Z"
                                                data-code="TN" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path d="M734.55,307.93l-0.1,-0.97l4.5,-0.86l-2.82,1.28l-1.59,0.55Z"
                                                data-code="TL" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M553.03,173.76l-0.04,0.34l-0.09,-0.22l0.13,-0.12ZM555.87,172.66l0.45,-0.1l1.48,0.74l2.06,2.43l4.07,-0.18l0.38,-0.51l-0.32,-1.19l1.92,-0.94l1.91,-1.59l2.94,1.39l0.43,2.47l1.19,0.67l2.58,-0.13l0.62,0.4l1.32,3.12l4.54,3.44l2.67,1.45l3.06,1.14l-0.04,1.05l-1.33,-0.75l-0.59,0.19l-0.32,0.84l-2.2,0.81l-0.46,2.13l-1.21,0.74l-1.91,0.42l-0.73,1.33l-1.56,0.31l-2.22,-0.94l-0.2,-2.17l-0.38,-0.36l-1.73,-0.09l-2.76,-2.46l-2.14,-0.4l-2.84,-1.48l-1.78,-0.27l-1.24,0.53l-1.57,-0.08l-2.0,1.69l-1.7,0.43l-0.36,-1.58l0.36,-2.98l-0.22,-0.4l-1.65,-0.84l0.54,-1.69l-0.34,-0.52l-1.22,-0.13l0.36,-1.64l2.22,0.59l2.2,-0.95l0.12,-0.65l-1.77,-1.74l-0.66,-1.57Z"
                                                data-code="TM" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M597.75,178.82l-2.54,-0.44l-0.47,0.34l-0.24,1.7l0.43,0.45l2.64,-0.22l3.18,0.95l4.39,-0.41l0.56,2.37l0.52,0.29l0.67,-0.24l1.11,0.49l0.21,2.13l-3.76,-0.21l-1.8,1.32l-1.76,0.74l-0.61,-0.58l0.21,-2.23l-0.64,-0.49l-0.07,-0.93l-1.36,-0.66l-0.45,0.07l-1.08,1.01l-0.55,1.48l-1.31,-0.05l-0.95,1.16l-0.9,-0.35l-1.86,0.74l1.26,-2.83l-0.54,-2.17l-1.67,-0.82l0.33,-0.66l2.18,-0.04l1.19,-1.63l0.76,-1.79l2.43,-0.5l-0.26,1.0l0.73,1.05Z"
                                                data-code="TJ" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M491.06,363.48l-0.49,0.15l-1.49,-1.67l1.1,-1.43l2.19,-1.44l1.51,1.27l-0.98,1.82l-1.23,0.38l-0.62,0.93Z"
                                                data-code="LS" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M670.27,255.86l-1.41,3.87l0.15,2.0l0.38,0.36l1.38,0.07l0.9,2.04l0.55,2.34l1.4,1.44l1.61,0.38l0.96,0.97l-0.5,0.64l-1.1,0.2l-0.34,-1.18l-2.04,-1.1l-0.63,0.23l-0.63,-0.62l-0.48,-1.3l-2.56,-2.63l-0.73,0.41l0.95,-3.89l2.16,-4.22ZM670.67,254.77l-0.92,-2.18l-0.26,-2.61l-2.14,-3.06l0.71,-0.49l0.89,-2.59l-3.61,-5.45l0.87,-0.51l1.05,-2.58l1.74,-0.18l2.6,-1.59l0.76,0.56l0.13,1.39l0.37,0.36l1.23,0.09l-0.51,2.28l0.05,2.42l0.6,0.34l2.43,-1.42l0.77,0.39l1.47,-0.07l0.71,-0.88l1.48,0.14l1.71,1.88l0.25,2.65l1.92,2.11l-0.1,1.89l-0.61,0.86l-2.22,-0.33l-3.5,0.64l-1.6,2.12l0.36,2.58l-1.51,-0.79l-1.84,-0.01l0.28,-1.52l-0.4,-0.47l-2.21,0.01l-0.4,0.37l-0.19,2.74l-0.34,0.93Z"
                                                data-code="TH" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M596.68,420.38l-3.2,0.18l-0.05,-1.26l0.39,-1.41l1.3,0.78l2.08,0.35l-0.52,1.36Z"
                                                data-code="TF" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M422.7,257.63l-0.09,1.23l1.53,1.52l0.08,1.09l0.5,0.65l-0.11,5.62l0.49,1.47l-1.31,0.35l-1.02,-2.13l-0.18,-1.12l0.53,-2.19l-0.63,-1.16l-0.22,-3.68l-1.01,-1.4l0.07,-0.28l1.37,0.03Z"
                                                data-code="TG" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M480.25,235.49l0.12,9.57l-2.1,0.05l-1.14,1.89l-0.69,1.63l0.34,0.73l-0.66,0.91l0.24,0.89l-0.86,1.95l0.45,0.5l0.6,-0.1l0.34,0.64l0.03,1.38l0.9,1.04l-1.45,0.43l-1.27,1.03l-1.83,2.76l-2.16,1.07l-2.31,-0.15l-0.86,0.25l-0.26,0.49l0.17,0.61l-2.11,1.68l-2.85,0.87l-1.09,-0.57l-0.73,0.66l-1.12,0.1l-1.1,-3.12l-1.25,-0.64l-1.22,-1.22l0.29,-0.64l3.01,0.04l0.35,-0.6l-1.3,-2.2l-0.08,-3.31l-0.97,-1.66l0.22,-1.04l-0.38,-0.48l-1.22,-0.04l0.0,-1.25l-0.98,-1.07l0.96,-3.01l3.25,-2.65l0.13,-3.33l0.95,-5.18l0.52,-1.07l-0.1,-0.48l-0.91,-0.78l-0.2,-0.96l-0.8,-0.58l-0.55,-3.65l2.1,-1.2l19.57,9.83Z"
                                                data-code="TD" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M483.48,203.15l-0.75,1.1l0.29,1.39l-0.6,1.83l0.73,2.14l0.0,24.12l-2.48,0.01l-0.41,0.85l-19.41,-9.76l-4.41,2.28l-1.37,-1.33l-3.82,-1.1l-1.14,-1.65l-1.98,-1.23l-1.22,0.32l-0.66,-1.11l-0.17,-1.26l-1.28,-1.69l0.87,-1.19l-0.07,-4.34l0.43,-2.27l-0.86,-3.45l1.13,-0.76l0.22,-1.16l-0.2,-1.03l3.48,-2.61l0.29,-1.94l2.45,0.8l1.18,-0.21l1.98,0.44l3.15,1.18l1.37,2.54l5.72,1.67l2.64,1.35l1.61,-0.72l1.29,-1.34l-0.44,-2.34l0.66,-1.13l1.67,-1.21l1.57,-0.35l3.14,0.53l1.08,1.28l3.99,0.78l0.36,0.54Z"
                                                data-code="LY" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M550.76,223.97l1.88,-0.4l3.84,0.02l4.78,-4.75l0.19,0.36l0.26,1.58l-0.81,0.01l-0.39,0.35l-0.08,2.04l-0.81,0.63l-0.01,0.96l-0.66,0.99l-0.39,1.41l-7.08,-1.25l-0.7,-1.96Z"
                                                data-code="AE" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M240.68,256.69l0.53,0.75l-0.02,1.06l-1.07,1.78l0.95,2.0l0.42,0.22l1.4,-0.44l0.56,-1.83l-0.77,-1.17l-0.1,-1.47l2.82,-0.93l0.26,-0.49l-0.28,-0.96l0.3,-0.28l0.66,1.31l1.96,0.26l1.4,1.22l0.08,0.68l0.39,0.35l4.81,-0.22l1.49,1.11l1.92,0.31l1.67,-0.84l0.22,-0.6l3.44,-0.14l-0.17,0.55l0.86,1.19l2.19,0.35l1.67,1.1l0.37,1.86l0.41,0.32l1.55,0.17l-1.66,1.35l-0.22,0.92l0.65,0.97l-1.67,0.54l-0.3,0.4l0.04,0.99l-0.56,0.57l-0.01,0.55l1.85,2.27l-0.66,0.69l-4.47,1.29l-0.72,0.54l-3.69,-0.9l-0.71,0.27l-0.02,0.7l0.91,0.53l-0.08,1.54l0.35,1.58l0.35,0.31l1.66,0.17l-1.3,0.52l-0.48,1.13l-2.68,0.91l-0.6,0.77l-1.57,0.13l-1.17,-1.13l-0.8,-2.52l-1.25,-1.26l1.02,-1.23l-1.29,-2.95l0.18,-1.62l1.0,-2.21l-0.2,-0.49l-1.14,-0.46l-4.02,0.36l-1.82,-2.1l-1.57,-0.33l-2.99,0.22l-1.06,-0.97l0.25,-1.23l-0.2,-1.01l-0.59,-0.69l-0.29,-1.06l-1.08,-0.39l0.78,-2.79l1.9,-2.11Z"
                                                data-code="VE" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M600.7,188.88l-1.57,1.3l-0.1,0.48l0.8,2.31l-1.09,1.04l-0.03,1.27l-0.48,0.71l-2.16,-0.08l-0.37,0.59l0.78,1.48l-1.38,0.69l-1.06,1.69l0.06,1.7l-0.65,0.52l-0.91,-0.21l-1.91,0.36l-0.48,0.77l-1.88,0.13l-1.4,1.56l-0.18,2.32l-2.91,1.02l-1.65,-0.23l-0.71,0.55l-1.41,-0.3l-2.41,0.39l-3.52,-1.17l1.96,-2.35l-0.21,-1.78l-0.3,-0.34l-1.63,-0.4l-0.19,-1.58l-0.75,-2.03l0.95,-1.36l-0.19,-0.6l-0.73,-0.28l1.47,-4.8l2.14,0.9l2.12,-0.36l0.74,-1.34l1.77,-0.39l1.54,-0.92l0.63,-2.31l1.87,-0.5l0.49,-0.81l0.94,0.56l2.13,0.11l2.55,0.92l1.95,-0.83l0.65,0.43l0.56,-0.13l0.69,-1.12l1.57,-0.08l0.72,-1.66l0.79,-0.74l0.8,0.39l-0.17,0.56l0.71,0.58l-0.08,2.39l1.11,0.95ZM601.37,188.71l1.73,-0.71l1.43,-1.18l4.03,0.35l-2.23,0.74l-4.95,0.8Z"
                                                data-code="AF" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M530.82,187.47l0.79,0.66l1.26,-0.28l1.46,3.08l1.63,0.94l0.14,1.23l-1.22,1.05l-0.53,2.52l1.73,2.67l3.12,1.62l1.15,1.88l-0.38,1.85l0.39,0.48l0.41,-0.0l0.02,1.07l0.76,0.94l-2.47,-0.1l-1.71,2.44l-4.31,-0.2l-7.02,-5.48l-3.73,-1.94l-2.88,-0.73l-0.85,-2.87l5.45,-3.02l0.95,-3.43l-0.19,-1.96l1.27,-0.7l1.22,-1.7l0.87,-0.36l2.69,0.34Z"
                                                data-code="IQ" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M384.14,88.06l-0.37,2.61l2.54,2.51l-2.9,2.75l-9.19,3.4l-9.25,-1.66l1.7,-1.22l-0.1,-0.7l-4.05,-1.47l2.96,-0.53l0.33,-0.43l-0.11,-1.2l-0.33,-0.36l-4.67,-0.85l1.28,-2.04l3.45,-0.56l3.77,2.72l0.44,0.02l3.64,-2.16l3.3,1.08l3.98,-2.16l3.58,0.26Z"
                                                data-code="IS" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M533.43,187.16l-1.27,-2.15l0.42,-0.98l-0.71,-3.04l1.03,-0.5l0.33,0.83l1.26,1.35l2.05,0.51l1.11,-0.16l2.89,-2.11l0.62,-0.14l0.39,0.46l-0.72,1.2l0.06,0.49l1.56,1.53l0.65,0.04l0.67,1.81l2.56,0.83l1.87,1.48l3.69,0.49l3.91,-0.76l0.47,-0.73l2.17,-0.6l1.66,-1.54l1.51,0.08l1.18,-0.53l1.59,0.24l2.83,1.48l1.88,0.3l2.77,2.47l1.77,0.18l0.18,1.99l-1.68,5.49l0.24,0.5l0.61,0.23l-0.82,1.48l0.8,2.18l0.19,1.71l0.3,0.34l1.63,0.4l0.15,1.32l-2.15,2.35l-0.01,0.53l2.21,3.03l2.34,1.24l0.06,2.14l1.24,0.72l0.11,0.69l-3.31,1.27l-1.08,3.03l-9.68,-1.68l-0.99,-3.05l-1.43,-0.73l-2.17,0.46l-2.47,1.26l-2.83,-0.82l-2.46,-2.02l-2.41,-0.8l-3.42,-6.06l-0.48,-0.2l-1.18,0.39l-1.44,-0.82l-0.5,0.08l-0.65,0.74l-0.97,-1.01l-0.02,-1.31l-0.71,-0.39l0.26,-1.81l-1.29,-2.11l-3.13,-1.63l-1.58,-2.43l0.5,-1.9l1.31,-1.26l-0.19,-1.66l-1.74,-1.1l-1.57,-3.3Z"
                                                data-code="IR" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M536.99,182.33l-0.28,0.03l-1.23,-2.13l-0.93,0.01l-0.62,-0.66l-0.69,-0.07l-0.96,-0.81l-1.56,-0.62l0.19,-1.12l-0.26,-0.79l2.72,-0.36l1.09,1.01l-0.17,0.92l1.02,0.78l-0.47,0.62l0.08,0.56l2.04,1.23l0.04,1.4Z"
                                                data-code="AM" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M451.59,158.63l3.48,0.94l-0.21,1.17l0.3,0.83l-1.49,-0.24l-2.04,1.1l-0.21,0.39l0.13,1.45l-0.25,1.12l0.82,1.57l2.39,1.63l1.31,2.54l2.79,2.43l2.05,0.08l0.21,0.23l-0.39,0.33l0.09,0.67l4.05,1.97l2.17,1.76l-0.16,0.36l-1.17,-1.08l-2.18,-0.49l-0.44,0.2l-1.05,1.91l0.14,0.54l1.57,0.95l-0.19,0.98l-1.06,0.33l-1.25,2.34l-0.37,0.08l0.0,-0.33l1.0,-2.45l-1.73,-3.17l-1.12,-0.51l-0.88,-1.33l-1.51,-0.51l-1.27,-1.25l-1.75,-0.18l-4.12,-3.21l-1.62,-1.65l-1.03,-3.19l-3.53,-1.36l-1.3,0.51l-1.69,1.41l0.16,-0.72l-0.28,-0.47l-1.14,-0.33l-0.53,-1.96l0.72,-0.78l0.04,-0.48l-0.65,-1.17l0.8,0.39l1.4,-0.23l1.11,-0.84l0.52,0.35l1.19,-0.1l0.75,-1.2l1.53,0.33l1.36,-0.56l0.35,-1.14l1.08,0.32l0.68,-0.64l1.98,-0.44l0.42,0.82ZM459.19,184.75l-0.65,1.65l0.32,1.05l-0.31,0.89l-1.5,-0.85l-4.5,-1.67l0.19,-0.82l2.67,0.23l3.78,-0.48ZM443.93,176.05l1.18,1.66l-0.3,3.32l-1.06,-0.01l-0.77,0.73l-0.53,-0.44l-0.1,-3.37l-0.39,-1.22l1.04,0.01l0.92,-0.68Z"
                                                data-code="IT" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M690.56,230.25l-2.7,1.82l-2.09,2.46l-0.63,1.95l4.31,6.45l2.32,1.65l1.43,1.94l1.11,4.59l-0.32,4.24l-1.93,1.54l-2.84,1.61l-2.11,2.15l-2.73,2.06l-0.59,-1.05l0.63,-1.53l-0.13,-0.47l-1.34,-1.04l1.51,-0.71l2.55,-0.18l0.3,-0.63l-0.82,-1.14l4.0,-2.07l0.31,-3.05l-0.57,-1.77l0.42,-2.66l-0.73,-1.97l-1.86,-1.76l-3.63,-5.29l-2.72,-1.46l0.36,-0.47l1.5,-0.64l0.21,-0.52l-0.97,-2.27l-0.37,-0.24l-2.83,-0.02l-2.24,-3.9l0.83,-0.4l4.39,-0.29l2.06,-1.31l1.15,0.89l1.88,0.4l-0.17,1.51l1.35,1.16l1.67,0.45Z"
                                                data-code="VN" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M249.29,428.93l-2.33,-0.52l-5.83,-0.43l-0.89,-1.66l0.05,-2.37l-0.45,-0.4l-1.43,0.18l-0.67,-0.91l-0.2,-3.13l1.88,-1.47l0.79,-2.04l-0.25,-1.7l1.3,-2.68l0.91,-4.15l-0.22,-1.69l0.85,-0.45l0.2,-0.44l-0.27,-1.16l-0.98,-0.68l0.59,-0.92l-0.05,-0.5l-1.04,-1.07l-0.52,-3.1l0.97,-0.86l-0.42,-3.58l1.2,-5.43l1.38,-0.98l0.16,-0.43l-0.75,-2.79l-0.01,-2.43l1.78,-1.75l0.06,-2.57l1.43,-2.85l0.01,-2.58l-0.69,-0.74l-1.09,-4.52l1.47,-2.7l-0.18,-2.79l0.85,-2.35l1.59,-2.46l1.73,-1.64l0.05,-0.52l-0.6,-0.84l0.44,-0.85l-0.07,-4.19l2.7,-1.44l0.86,-2.75l-0.21,-0.71l1.76,-2.01l2.9,0.57l1.38,1.78l0.68,-0.08l0.87,-1.87l2.39,0.09l4.95,4.77l2.17,0.49l3.0,1.92l2.47,1.0l0.25,0.82l-2.37,3.93l0.23,0.59l5.39,1.16l2.12,-0.44l2.45,-2.16l0.5,-2.38l0.76,-0.31l0.98,1.2l-0.04,1.8l-3.67,2.51l-2.85,2.66l-3.43,3.88l-1.3,5.07l0.01,2.72l-0.54,0.73l-0.36,3.28l3.14,2.64l-0.16,2.11l1.4,1.11l-0.1,1.09l-2.29,3.52l-3.55,1.49l-4.92,0.6l-2.71,-0.29l-0.43,0.51l0.5,1.65l-0.49,2.1l0.38,1.42l-1.19,0.83l-2.36,0.38l-2.3,-1.04l-1.38,0.83l0.41,3.64l1.69,0.91l1.4,-0.71l0.36,0.76l-2.04,0.86l-2.01,1.89l-0.97,4.63l-2.34,0.1l-2.09,1.78l-0.61,2.75l2.46,2.31l2.17,0.63l-0.7,2.32l-2.83,1.73l-1.73,3.86l-2.17,1.22l-1.16,1.67l0.75,3.76l1.04,1.28ZM256.71,438.88l-2.0,0.15l-1.4,-1.22l-3.82,-0.1l-0.0,-5.83l1.6,3.05l3.26,2.07l3.08,0.78l-0.71,1.1Z"
                                                data-code="AR" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M705.8,353.26l0.26,0.04l0.17,-0.47l-0.48,-1.42l0.92,1.11l0.45,0.15l0.27,-0.39l-0.1,-1.56l-1.98,-3.63l1.09,-3.31l-0.24,-1.57l0.34,-0.62l0.38,1.06l0.43,-0.19l0.99,-1.7l1.91,-0.83l1.29,-1.15l1.81,-0.91l0.96,-0.17l0.92,0.26l1.92,-0.95l1.47,-0.28l1.03,-0.8l1.43,0.04l2.78,-0.84l1.36,-1.15l0.71,-1.45l1.41,-1.26l0.3,-2.58l1.27,-1.59l0.78,1.65l0.54,0.19l1.07,-0.51l0.15,-0.6l-0.73,-1.0l0.45,-0.71l0.78,0.39l0.58,-0.3l0.28,-1.82l1.87,-2.14l1.12,-0.39l0.28,-0.58l0.62,0.17l0.53,-0.73l1.87,-0.57l1.65,1.05l1.35,1.48l3.39,0.38l0.43,-0.54l-0.46,-1.23l1.05,-1.79l1.04,-0.61l0.14,-0.55l-0.25,-0.41l0.88,-1.17l1.31,-0.77l1.3,0.27l2.1,-0.48l0.31,-0.4l-0.05,-1.3l-0.92,-0.77l1.48,0.56l1.41,1.07l2.11,0.65l0.81,-0.2l1.4,0.7l1.69,-0.66l0.8,0.19l0.64,-0.33l0.71,0.77l-1.33,1.94l-0.71,0.07l-0.35,0.51l0.24,0.86l-1.52,2.35l0.12,1.05l2.15,1.65l1.97,0.85l3.04,2.36l1.97,0.65l0.55,0.88l2.72,0.85l1.84,-1.1l2.07,-5.97l-0.42,-3.59l0.3,-1.73l0.47,-0.87l-0.31,-0.68l1.09,-3.28l0.46,-0.47l0.4,0.71l0.16,1.51l0.65,0.52l0.16,1.04l0.85,1.21l0.12,2.38l0.9,2.0l0.57,0.18l1.3,-0.78l1.69,1.7l-0.2,1.08l0.53,2.2l0.39,1.3l0.68,0.48l0.6,1.95l-0.19,1.48l0.81,1.76l6.01,3.69l-0.11,0.76l1.38,1.58l0.95,2.77l0.58,0.22l0.72,-0.41l0.8,0.9l0.61,0.01l0.46,2.41l4.81,4.71l0.66,2.02l-0.07,3.31l1.14,2.2l-0.13,2.24l-1.1,3.68l0.03,1.64l-0.47,1.89l-1.05,2.4l-1.9,1.47l-1.72,3.51l-2.38,6.09l-0.24,2.82l-1.14,0.8l-2.85,0.15l-2.31,1.19l-2.51,2.25l-3.09,-1.57l0.3,-1.15l-0.54,-0.47l-1.5,0.63l-2.01,1.94l-7.12,-2.18l-1.48,-1.63l-1.14,-3.74l-1.45,-1.26l-1.81,-0.26l0.56,-1.18l-0.61,-2.1l-0.72,-0.1l-1.14,1.82l-0.9,0.21l0.63,-0.82l0.36,-1.55l0.92,-1.31l-0.13,-2.34l-0.7,-0.22l-2.0,2.34l-1.51,0.93l-0.94,2.01l-1.35,-0.81l-0.02,-1.52l-1.57,-2.04l-1.09,-0.88l0.24,-0.33l-0.14,-0.59l-3.21,-1.69l-1.83,-0.12l-2.54,-1.35l-4.58,0.28l-6.02,1.9l-2.53,-0.13l-2.62,1.41l-2.13,0.63l-1.49,2.6l-3.49,0.31l-2.29,-0.5l-3.48,0.43l-1.6,1.47l-0.81,-0.04l-2.37,1.63l-3.26,-0.1l-3.72,-2.21l0.04,-1.05l1.19,-0.46l0.49,-0.89l0.21,-2.97l-0.28,-1.64l-1.34,-2.86l-0.38,-1.47l0.05,-1.72l-0.95,-1.7l-0.18,-0.97l-1.01,-0.99l-0.29,-1.98l-1.13,-1.75ZM784.92,393.44l2.65,1.02l3.23,-0.96l1.09,0.14l0.15,3.06l-0.85,1.13l-0.17,1.63l-0.87,-0.24l-1.57,1.91l-1.68,-0.18l-1.4,-2.36l-0.37,-2.04l-1.39,-2.51l0.04,-0.8l1.15,0.18Z"
                                                data-code="AU" fill="#868ff363" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M507.76,203.05l0.4,-0.78l0.18,0.4l-0.33,1.03l0.52,0.44l0.68,-0.22l-0.86,3.6l-1.16,-3.32l0.59,-0.74l-0.03,-0.41ZM508.73,200.34l0.37,-1.02l0.64,0.0l0.52,-0.51l-0.49,1.53l-0.56,-0.24l-0.48,0.23Z"
                                                data-code="IL" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M623.34,207.03l-1.24,1.04l-0.97,2.55l0.22,0.51l8.04,3.87l3.42,0.37l1.57,1.38l4.92,0.88l2.18,-0.04l0.38,-0.3l0.29,-1.24l-0.32,-1.64l0.14,-0.87l0.82,-0.31l0.45,2.48l2.28,1.02l1.77,-0.38l4.14,0.1l0.38,-0.36l0.18,-1.66l-0.5,-0.65l1.37,-0.29l2.25,-1.99l2.7,-1.62l1.93,0.62l1.8,-0.98l0.79,1.14l-0.68,0.91l0.26,0.63l2.42,0.36l0.09,0.47l-0.83,0.75l0.13,1.07l-1.52,-0.29l-3.24,1.86l-0.13,1.78l-1.32,2.14l-0.18,1.39l-0.93,1.82l-1.64,-0.5l-0.52,0.37l-0.09,2.63l-0.56,1.11l0.19,0.81l-0.53,0.27l-1.18,-3.73l-1.08,-0.27l-0.38,0.31l-0.24,1.0l-0.66,-0.66l0.54,-1.06l1.22,-0.34l1.15,-2.25l-0.24,-0.56l-1.57,-0.47l-4.34,-0.28l-0.18,-1.56l-0.35,-0.35l-1.11,-0.12l-1.91,-1.12l-0.56,0.17l-0.88,1.82l0.11,0.49l1.36,1.07l-1.09,0.69l-0.69,1.11l0.18,0.56l1.24,0.57l-0.32,1.54l0.85,1.94l0.36,2.01l-0.22,0.59l-4.58,0.52l-0.33,0.42l0.13,1.8l-1.17,1.36l-3.65,1.81l-2.79,3.03l-4.32,3.28l-0.18,1.27l-4.65,1.79l-0.77,2.16l0.64,5.3l-1.06,2.49l-0.01,3.94l-1.24,0.28l-1.14,1.93l0.39,0.84l-1.68,0.53l-1.04,1.83l-0.65,0.47l-2.06,-2.05l-2.1,-6.02l-2.2,-3.64l-1.05,-4.75l-2.29,-3.57l-1.76,-8.2l0.01,-3.11l-0.49,-2.53l-0.55,-0.29l-3.53,1.52l-1.53,-0.27l-2.86,-2.77l0.85,-0.67l0.08,-0.55l-0.74,-1.03l-2.67,-2.06l1.24,-1.32l5.34,0.01l0.39,-0.49l-0.5,-2.29l-1.42,-1.46l-0.27,-1.93l-1.43,-1.2l2.31,-2.37l3.05,0.06l2.62,-2.85l1.6,-2.81l2.4,-2.73l0.07,-2.04l1.97,-1.48l-0.02,-0.65l-1.93,-1.31l-0.82,-1.78l-0.8,-2.21l0.9,-0.89l3.59,0.65l2.92,-0.42l2.33,-2.19l2.31,2.85l-0.24,2.13l0.99,1.59l-0.05,0.82l-1.34,-0.28l-0.47,0.48l0.7,3.06l2.62,1.99l2.99,1.65Z"
                                                data-code="IN" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M495.56,296.42l2.8,-3.12l-0.02,-0.81l-0.64,-1.3l0.68,-0.52l0.14,-1.47l-0.76,-1.25l0.31,-0.11l2.26,0.03l-0.51,2.76l0.76,1.3l0.5,0.12l1.05,-0.53l1.19,-0.12l0.61,0.24l1.43,-0.62l0.1,-0.67l-0.71,-0.62l1.57,-1.7l8.65,4.86l0.32,1.53l3.34,2.33l-1.05,2.8l0.13,1.61l1.63,1.12l-0.6,1.76l-0.01,2.33l1.89,4.03l0.57,0.43l-1.46,1.08l-2.61,0.94l-1.43,-0.04l-1.06,0.77l-2.29,0.36l-2.87,-0.68l-0.83,0.07l-0.63,-0.75l-0.31,-2.78l-1.32,-1.35l-3.25,-0.77l-3.96,-1.58l-1.18,-2.41l-0.32,-1.75l-1.76,-1.49l0.42,-1.05l-0.44,-0.89l0.08,-0.96l-0.46,-0.58l0.06,-0.56Z"
                                                data-code="TZ" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M539.29,175.73l1.33,0.32l1.94,-1.8l2.3,3.34l1.43,0.43l-1.26,0.15l-0.35,0.32l-0.8,3.14l-0.99,0.96l0.05,1.11l-1.26,-1.13l0.7,-1.18l-0.04,-0.47l-0.74,-0.86l-1.48,0.15l-2.34,1.71l-0.03,-1.27l-2.03,-1.35l0.47,-0.62l-0.08,-0.56l-1.03,-0.79l0.29,-0.43l-0.14,-0.58l-1.13,-0.86l1.89,0.68l1.69,0.06l0.37,-0.87l-0.81,-1.37l0.42,0.06l1.63,1.72ZM533.78,180.57l0.61,0.46l0.69,-0.0l0.59,1.15l-0.68,-0.15l-1.21,-1.45Z"
                                                data-code="AZ" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M405.08,135.42l0.35,2.06l-1.75,2.78l-4.22,1.88l-2.84,-0.4l1.73,-3.0l-1.18,-3.53l4.6,-3.74l0.32,1.15l-0.49,1.74l0.4,0.51l1.47,-0.04l1.6,0.6Z"
                                                data-code="IE" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M756.47,287.89l0.69,4.01l2.79,1.78l0.51,-0.1l2.04,-2.59l2.71,-1.43l2.05,-0.0l3.9,1.73l2.46,0.45l0.08,15.12l-1.75,-1.54l-2.54,-0.51l-0.88,0.71l-2.32,0.06l0.69,-1.33l1.45,-0.64l0.23,-0.46l-0.65,-2.74l-1.24,-2.21l-5.04,-2.29l-2.09,-0.23l-3.68,-2.27l-0.55,0.13l-0.65,1.07l-0.52,0.12l-0.55,-1.89l-1.21,-0.78l1.84,-0.62l1.72,0.05l0.39,-0.52l-0.21,-0.66l-0.38,-0.28l-3.45,-0.0l-1.13,-1.48l-2.1,-0.43l-0.52,-0.6l2.69,-0.48l1.28,-0.78l3.66,0.94l0.3,0.71ZM757.91,300.34l-0.62,0.82l-0.1,-0.8l0.59,-1.12l0.13,1.1ZM747.38,292.98l0.34,0.72l-1.22,-0.57l-4.68,-0.1l0.27,-0.62l2.78,-0.09l2.52,0.67ZM741.05,285.25l-0.67,-2.88l0.64,-2.01l0.41,0.86l1.21,0.18l0.16,0.7l-0.1,1.68l-0.84,-0.16l-0.46,0.3l-0.34,1.34ZM739.05,293.5l-0.5,0.44l-1.34,-0.36l-0.17,-0.37l1.73,-0.08l0.27,0.36ZM721.45,284.51l-0.19,1.97l2.24,2.23l0.54,0.02l1.27,-1.07l2.75,-0.5l-0.9,1.21l-2.11,0.93l-0.16,0.6l2.22,3.01l-0.3,1.07l1.36,1.74l-2.26,0.85l-0.28,-0.31l0.12,-1.19l-1.64,-1.34l0.17,-2.23l-0.56,-0.39l-1.67,0.76l-0.23,0.39l0.3,6.17l-1.1,0.25l-0.69,-0.47l0.64,-2.21l-0.39,-2.42l-0.39,-0.34l-0.8,-0.01l-0.58,-1.29l0.98,-1.6l0.35,-1.96l1.32,-3.87ZM728.59,296.27l0.38,0.49l-0.02,1.28l-0.88,0.49l-0.53,-0.47l1.04,-1.79ZM729.04,286.98l0.27,-0.05l-0.02,0.13l-0.24,-0.08ZM721.68,284.05l0.16,-0.32l1.89,-1.65l1.83,0.68l3.16,0.35l2.94,-0.1l2.39,-1.66l-1.73,2.13l-1.66,0.43l-2.41,-0.48l-4.17,0.13l-2.39,0.51ZM730.55,310.47l1.11,-1.93l2.03,-0.82l0.08,0.62l-1.45,1.67l-1.77,0.46ZM728.12,305.88l-0.1,0.38l-3.46,0.66l-2.91,-0.27l-0.0,-0.25l1.54,-0.41l1.66,0.73l1.67,-0.19l1.61,-0.65ZM722.9,310.24l-0.64,0.03l-2.26,-1.2l1.11,-0.24l1.78,1.41ZM716.26,305.77l0.88,0.51l1.28,-0.17l0.2,0.35l-4.65,0.73l0.39,-0.67l1.15,-0.02l0.75,-0.73ZM711.66,293.84l-0.38,-0.16l-2.54,1.01l-1.12,-1.44l-1.69,-0.13l-1.16,-0.75l-3.04,0.77l-1.1,-1.15l-3.31,-0.11l-0.35,-3.05l-1.35,-0.95l-1.11,-1.98l-0.33,-2.06l0.27,-2.14l0.9,-1.01l0.37,1.15l2.09,1.49l1.53,-0.48l1.82,0.08l1.38,-1.19l1.0,-0.18l2.28,0.67l2.26,-0.53l1.52,-3.64l1.01,-0.99l0.78,-2.57l4.1,0.3l-1.11,1.77l0.02,0.46l1.7,2.2l-0.23,1.39l2.07,1.71l-2.33,0.42l-0.88,1.9l0.1,2.05l-2.4,1.9l-0.06,2.45l-0.7,2.79ZM692.58,302.03l0.35,0.26l4.8,0.25l0.78,-0.97l4.17,1.09l1.13,1.68l3.69,0.45l2.13,1.04l-1.8,0.6l-2.77,-0.99l-4.8,-0.12l-5.24,-1.41l-1.84,-0.25l-1.11,0.3l-4.26,-0.97l-0.7,-1.14l-1.59,-0.13l1.18,-1.65l2.74,0.13l2.87,1.13l0.26,0.68ZM685.53,299.17l-2.22,0.04l-2.06,-2.03l-3.15,-2.01l-2.93,-3.51l-3.11,-5.33l-2.2,-2.12l-1.64,-4.06l-2.32,-1.69l-1.27,-2.07l-1.96,-1.5l-2.51,-2.65l-0.11,-0.66l4.81,0.53l2.15,2.38l3.31,2.74l2.35,2.66l2.7,0.17l1.95,1.59l1.54,2.17l1.59,0.95l-0.84,1.71l0.15,0.52l1.44,0.87l0.79,0.1l0.4,1.58l0.87,1.4l1.96,0.39l1.0,1.31l-0.6,3.01l-0.09,3.5Z"
                                                data-code="ID" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M492.5,162.44l1.28,-2.49l1.82,0.19l0.66,-0.23l0.09,-0.71l-0.25,-0.75l-0.79,-0.72l-0.33,-1.21l-0.86,-0.62l-0.02,-1.19l-1.13,-0.86l-1.15,-0.19l-2.04,-1.0l-1.66,0.32l-0.66,0.47l-0.92,-0.0l-0.84,0.78l-2.48,0.7l-1.18,-0.71l-3.07,-0.36l-0.89,0.43l-0.24,-0.55l-1.11,-0.7l0.35,-0.93l1.26,-1.02l-0.54,-1.23l2.04,-2.43l1.4,-0.62l0.25,-1.19l-1.04,-2.39l0.83,-0.13l1.28,-0.84l1.8,-0.07l2.47,0.26l2.86,0.81l1.88,0.06l0.86,0.44l1.04,-0.41l0.77,0.66l2.18,-0.15l0.92,0.3l0.52,-0.34l0.15,-1.53l0.56,-0.54l2.85,-0.05l0.84,-0.72l3.04,-0.18l1.23,1.46l-0.48,0.77l0.21,1.03l0.36,0.32l1.8,0.14l0.93,2.08l3.18,1.15l1.94,-0.45l1.67,1.49l1.4,-0.03l3.35,0.96l0.02,0.54l-0.96,1.59l0.47,1.97l-0.26,0.7l-2.36,0.28l-1.29,0.89l-0.23,1.38l-1.83,0.27l-1.58,0.97l-2.41,0.21l-2.16,1.17l-0.21,0.38l0.34,2.26l1.23,0.75l2.13,-0.08l-0.14,0.31l-2.65,0.53l-3.23,1.69l-0.87,-0.39l0.42,-1.1l-0.25,-0.52l-2.21,-0.73l2.35,-1.06l0.12,-0.65l-0.93,-0.82l-3.62,-0.74l-0.13,-0.89l-0.46,-0.34l-2.61,0.59l-0.91,1.69l-1.71,2.04l-0.86,-0.4l-1.62,0.27Z"
                                                data-code="UA" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M549.33,221.64l-0.76,-0.23l-0.14,-1.64l0.84,-1.29l0.47,0.52l0.04,1.34l-0.45,1.3Z"
                                                data-code="QA" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                            <path
                                                d="M508.58,318.75l-0.34,-2.57l0.51,-2.05l3.55,0.63l2.5,-0.38l1.02,-0.76l1.49,0.01l2.74,-0.98l1.66,-1.2l0.5,9.24l0.41,1.23l-0.68,1.67l-0.93,1.71l-1.5,1.5l-5.16,2.28l-2.78,2.73l-1.02,0.53l-1.71,1.8l-0.98,0.57l-0.35,2.41l1.16,1.94l0.49,2.17l0.43,0.31l-0.06,2.06l-0.39,1.17l0.5,0.72l-0.25,0.73l-0.92,0.83l-5.12,2.39l-1.22,1.36l0.21,1.13l0.58,0.39l-0.11,0.72l-1.22,-0.01l-0.73,-2.97l0.42,-3.09l-1.78,-5.37l2.49,-2.81l0.69,-1.89l0.44,-0.43l0.28,-1.53l-0.39,-0.93l0.59,-3.65l-0.01,-3.26l-1.49,-1.16l-1.2,-0.22l-1.74,-1.17l-1.92,0.01l-0.29,-2.08l7.06,-1.96l1.28,1.09l0.89,-0.1l0.67,0.44l0.1,0.73l-0.51,1.29l0.19,1.81l1.75,1.83l0.65,-0.13l0.71,-1.65l1.17,-0.86l-0.26,-3.47l-1.05,-1.85l-1.04,-0.94Z"
                                                data-code="MZ" fill="#7474b126" fill-opacity="1" stroke="none"
                                                stroke-width="0" stroke-opacity="1" fill-rule="evenodd"
                                                class="jvectormap-region jvectormap-element"></path>
                                        </g>
                                        <g></g>
                                        <g>
                                            <circle data-index="0" cx="144.03539200545887" cy="114.9117998670238"
                                                fill="#f93b7a" stroke="#7474b126" fill-opacity="1" stroke-width="1"
                                                stroke-opacity="1" r="5" class="jvectormap-marker jvectormap-element">
                                            </circle>
                                            <circle data-index="1" cx="348.581882143263" cy="78.7744935197417"
                                                fill="#0aafff" stroke="#7474b126" fill-opacity="1" stroke-width="1"
                                                stroke-opacity="1" r="5" class="jvectormap-marker jvectormap-element">
                                            </circle>
                                            <circle data-index="2" cx="479.71941929278535" cy="208.7430520920175"
                                                fill="#7551e9" stroke="#7474b126" fill-opacity="1" stroke-width="1"
                                                stroke-opacity="1" r="5" class="jvectormap-marker jvectormap-element">
                                            </circle>
                                            <circle data-index="3" cx="227.5395254272664" cy="192.11875502372956"
                                                fill="#ffc212" stroke="#7474b126" fill-opacity="1" stroke-width="1"
                                                stroke-opacity="1" r="5" class="jvectormap-marker jvectormap-element">
                                            </circle>
                                        </g>
                                        <g></g>
                                    </svg>
                                    <div class="jvectormap-zoomin">+</div>
                                    <div class="jvectormap-zoomout">−</div>
                                    <div class="jvectormap-legend-cnt jvectormap-legend-cnt-h"></div>
                                    <div class="jvectormap-legend-cnt jvectormap-legend-cnt-v"></div>
                                </div>
                            </div>
                            <div class="row justify-content-center mt_30">
                                <div class="col-lg-9">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="single_progressbar">
                                                <h6 class="f_s_14 f_w_400">USA</h6>
                                                <div id="bar4" class="barfiller">
                                                    <div class="tipWrap" style="display: inline;">
                                                        <span class="tip"
                                                            style="left: 151.915px; transition: left 2.2s ease-in-out 0s;">81%</span>
                                                    </div>
                                                    <span class="fill" data-percentage="81"
                                                        style="background: rgb(253, 60, 151); width: 175.352px; transition: width 2.2s ease-in-out 0s;"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="single_progressbar">
                                                <h6>Australia</h6>
                                                <div id="bar5" class="barfiller">
                                                    <div class="tipWrap" style="display: inline;">
                                                        <span class="tip"
                                                            style="left: 102.123px; transition: left 2.2s ease-in-out 0s;">58%</span>
                                                    </div>
                                                    <span class="fill" data-percentage="58"
                                                        style="background: rgb(109, 129, 245); width: 125.561px; transition: width 2.2s ease-in-out 0s;"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="single_progressbar">
                                                <h6>Brazil</h6>
                                                <div id="bar6" class="barfiller">
                                                    <div class="tipWrap" style="display: inline;">
                                                        <span class="tip"
                                                            style="left: 67.4858px; transition: left 2.2s ease-in-out 0s;">42%</span>
                                                    </div>
                                                    <span class="fill" data-percentage="42"
                                                        style="background: rgb(13, 200, 222); width: 90.9233px; transition: width 2.2s ease-in-out 0s;"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="single_progressbar">
                                                <h6>Latvia</h6>
                                                <div id="bar7" class="barfiller">
                                                    <div class="tipWrap" style="display: inline;">
                                                        <span class="tip"
                                                            style="left: 95.6287px; transition: left 2.2s ease-in-out 0s;">55%</span>
                                                    </div>
                                                    <span class="fill" data-percentage="55"
                                                        style="background: rgb(255, 184, 34); width: 119.066px; transition: width 2.2s ease-in-out 0s;"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="white_card card_height_100 mb_30 ">
                        <div class="white_card_header">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <h3 class="m-0">Monthly Invoices</h3>
                                </div>
                                <div class="header_more_tool">
                                    <div class="dropdown">
                                        <span class="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                            <i class="ti-more-alt"></i>
                                        </span>
                                        <div class="dropdown-menu dropdown-menu-right"
                                            aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#"> <i class="ti-eye"></i> Action</a>
                                            <a class="dropdown-item" href="#"> <i class="ti-trash"></i> Delete</a>
                                            <a class="dropdown-item" href="#"> <i class="fas fa-edit"></i> Edit</a>
                                            <a class="dropdown-item" href="#"> <i class="ti-printer"></i> Print</a>
                                            <a class="dropdown-item" href="#"> <i class="fa fa-download"></i>
                                                Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="white_card_body QA_section">
                            <div class="QA_table ">

                                <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper no-footer">
                                    <table class="table lms_table_active2 p-0 dataTable no-footer dtr-inline collapsed"
                                        id="DataTables_Table_0" role="grid" style="width: 443px;">
                                        <thead>
                                            <tr role="row">
                                                <th scope="col" class="sorting_asc" tabindex="0"
                                                    aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                                    style="width: 132px;" aria-sort="ascending"
                                                    aria-label="Customer: activate to sort column descending">Customer
                                                </th>
                                                <th scope="col" class="sorting" tabindex="0"
                                                    aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                                    style="width: 72px;"
                                                    aria-label="Product: activate to sort column ascending">Product</th>
                                                <th scope="col" class="sorting" tabindex="0"
                                                    aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                                    style="width: 75px;"
                                                    aria-label="Invoice: activate to sort column ascending">Invoice</th>
                                                <th scope="col" class="sorting" tabindex="0"
                                                    aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                                    style="width: 44px;"
                                                    aria-label="Price: activate to sort column ascending">Price</th>
                                                <th scope="col" class="sorting" tabindex="0"
                                                    aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                                    style="width: 0px; display: none;"
                                                    aria-label="Status: activate to sort column ascending">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>






                                            <tr role="row" class="odd">
                                                <td tabindex="0" class="sorting_1">
                                                    <div class="customer d-flex align-items-center">
                                                        <div class="thumb_34 mr_15 mt-0"><img
                                                                class="img-fluid radius_50" src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png"
                                                                alt=""></div>
                                                        <span class="f_s_14 f_w_400 color_text_1">Customer</span>
                                                    </div>
                                                </td>
                                                <td class="f_s_14 f_w_400 color_text_2">Sunglass</td>
                                                <td class="f_s_14 f_w_400 color_text_3">#DE2548</td>
                                                <td class="f_s_14 f_w_400 color_text_4">$350</td>
                                                <td class="f_s_14 f_w_400 text-end" style="display: none;"><a href="#"
                                                        class="badge_btn_1">Pending</a></td>
                                            </tr>
                                            <tr role="row" class="even">
                                                <td tabindex="0" class="sorting_1">
                                                    <div class="customer d-flex align-items-center">
                                                        <div class="thumb_34 mr_15 mt-0"><img
                                                                class="img-fluid radius_50" src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png"
                                                                alt=""></div>
                                                        <span class="f_s_14 f_w_400 color_text_1">Customer</span>
                                                    </div>
                                                </td>
                                                <td class="f_s_14 f_w_400 color_text_2">Sunglass</td>
                                                <td class="f_s_14 f_w_400 color_text_3">#DE2548</td>
                                                <td class="f_s_14 f_w_400 color_text_4">$350</td>
                                                <td class="f_s_14 f_w_400 text-end" style="display: none;"><a href="#"
                                                        class="badge_btn_2">Paid</a></td>
                                            </tr>
                                            <tr role="row" class="odd">
                                                <td tabindex="0" class="sorting_1">
                                                    <div class="customer d-flex align-items-center">
                                                        <div class="thumb_34 mr_15 mt-0"><img
                                                                class="img-fluid radius_50" src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png"
                                                                alt=""></div>
                                                        <span class="f_s_14 f_w_400 color_text_1">Customer</span>
                                                    </div>
                                                </td>
                                                <td class="f_s_14 f_w_400 color_text_2">Sunglass</td>
                                                <td class="f_s_14 f_w_400 color_text_3">#DE2548</td>
                                                <td class="f_s_14 f_w_400 color_text_4">$350</td>
                                                <td class="f_s_14 f_w_400 text-end" style="display: none;"><a href="#"
                                                        class="badge_btn_3">Shipped</a></td>
                                            </tr>
                                            <tr role="row" class="even">
                                                <td tabindex="0" class="sorting_1">
                                                    <div class="customer d-flex align-items-center">
                                                        <div class="thumb_34 mr_15 mt-0"><img
                                                                class="img-fluid radius_50" src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png"
                                                                alt=""></div>
                                                        <span class="f_s_14 f_w_400 color_text_1">Customer</span>
                                                    </div>
                                                </td>
                                                <td class="f_s_14 f_w_400 color_text_2">Sunglass</td>
                                                <td class="f_s_14 f_w_400 color_text_3">#DE2548</td>
                                                <td class="f_s_14 f_w_400 color_text_4">$350</td>
                                                <td class="f_s_14 f_w_400 text-end" style="display: none;"><a href="#"
                                                        class="badge_btn_3">Shipped</a></td>
                                            </tr>
                                            <tr role="row" class="odd">
                                                <td tabindex="0" class="sorting_1">
                                                    <div class="customer d-flex align-items-center">
                                                        <div class="thumb_34 mr_15 mt-0"><img
                                                                class="img-fluid radius_50" src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png"
                                                                alt=""></div>
                                                        <span class="f_s_14 f_w_400 color_text_1">Customer</span>
                                                    </div>
                                                </td>
                                                <td class="f_s_14 f_w_400 color_text_2">Sunglass</td>
                                                <td class="f_s_14 f_w_400 color_text_3">#DE2548</td>
                                                <td class="f_s_14 f_w_400 color_text_4">$350</td>
                                                <td class="f_s_14 f_w_400 text-end" style="display: none;"><a href="#"
                                                        class="badge_btn_2">Paid</a></td>
                                            </tr>
                                            <tr role="row" class="even">
                                                <td tabindex="0" class="sorting_1">
                                                    <div class="customer d-flex align-items-center">
                                                        <div class="thumb_34 mr_15 mt-0"><img
                                                                class="img-fluid radius_50" src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png"
                                                                alt=""></div>
                                                        <span class="f_s_14 f_w_400 color_text_1">Customer</span>
                                                    </div>
                                                </td>
                                                <td class="f_s_14 f_w_400 color_text_2">Sunglass</td>
                                                <td class="f_s_14 f_w_400 color_text_3">#DE2548</td>
                                                <td class="f_s_14 f_w_400 color_text_4">$350</td>
                                                <td class="f_s_14 f_w_400 text-end" style="display: none;"><a href="#"
                                                        class="badge_btn_4 ">Delivered</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="white_card card_height_100 mb_20 ">
                        <div class="white_card_header">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <h3 class="m-0">Top Selling Product</h3>
                                </div>
                                <div class="header_more_tool">
                                    <div class="dropdown">
                                        <span class="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                            <i class="ti-more-alt"></i>
                                        </span>
                                        <div class="dropdown-menu dropdown-menu-right"
                                            aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#"> <i class="ti-eye"></i> Action</a>
                                            <a class="dropdown-item" href="#"> <i class="ti-trash"></i> Delete</a>
                                            <a class="dropdown-item" href="#"> <i class="fas fa-edit"></i> Edit</a>
                                            <a class="dropdown-item" href="#"> <i class="ti-printer"></i> Print</a>
                                            <a class="dropdown-item" href="#"> <i class="fa fa-download"></i>
                                                Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="white_card_body QA_section">
                            <div class="QA_table ">

                                <div id="DataTables_Table_1_wrapper" class="dataTables_wrapper no-footer">
                                    <table class="table lms_table_active2 p-0 dataTable no-footer dtr-inline"
                                        id="DataTables_Table_1" role="grid" style="width: 445px;">
                                        <thead>
                                            <tr role="row">
                                                <th scope="col" class="sorting_asc" tabindex="0"
                                                    aria-controls="DataTables_Table_1" rowspan="1" colspan="1"
                                                    style="width: 117px;" aria-sort="ascending"
                                                    aria-label="Product 1: activate to sort column descending">Product 1
                                                </th>
                                                <th scope="col" class="sorting" tabindex="0"
                                                    aria-controls="DataTables_Table_1" rowspan="1" colspan="1"
                                                    style="width: 37px;"
                                                    aria-label="Price: activate to sort column ascending">Price</th>
                                                <th scope="col" class="sorting" tabindex="0"
                                                    aria-controls="DataTables_Table_1" rowspan="1" colspan="1"
                                                    style="width: 65px;"
                                                    aria-label="Discount: activate to sort column ascending">Discount
                                                </th>
                                                <th scope="col" class="sorting" tabindex="0"
                                                    aria-controls="DataTables_Table_1" rowspan="1" colspan="1"
                                                    style="width: 31px;"
                                                    aria-label="Sold: activate to sort column ascending">Sold</th>
                                                <th scope="col" class="sorting" tabindex="0"
                                                    aria-controls="DataTables_Table_1" rowspan="1" colspan="1"
                                                    style="width: 45px;"
                                                    aria-label="Source: activate to sort column ascending">Source</th>
                                            </tr>
                                        </thead>
                                        <tbody>






                                            <tr role="row" class="odd">
                                                <td tabindex="0" class="sorting_1">
                                                    <div class="customer d-flex align-items-center">
                                                        <div class="thumb_34 mr_15 mt-0"><img
                                                                class="img-fluid radius_50"
                                                                src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png" alt=""></div>
                                                        <span class="f_s_14 f_w_400 color_text_1">Product 1</span>
                                                    </div>
                                                </td>
                                                <td class="f_s_14 f_w_400 color_text_2">$564</td>
                                                <td class="f_s_14 f_w_400 color_text_3">#DE2548</td>
                                                <td class="f_s_14 f_w_400 color_text_4">60</td>
                                                <td class="f_s_14 f_w_400 text-end"><a href="#"
                                                        class="text_color_1">Google</a></td>
                                            </tr>
                                            <tr role="row" class="even">
                                                <td tabindex="0" class="sorting_1">
                                                    <div class="customer d-flex align-items-center">
                                                        <div class="thumb_34 mr_15 mt-0"><img
                                                                class="img-fluid radius_50"
                                                                src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png" alt=""></div>
                                                        <span class="f_s_14 f_w_400 color_text_1">Product 1</span>
                                                    </div>
                                                </td>
                                                <td class="f_s_14 f_w_400 color_text_2">$564</td>
                                                <td class="f_s_14 f_w_400 color_text_3">#DE2548</td>
                                                <td class="f_s_14 f_w_400 color_text_4">60</td>
                                                <td class="f_s_14 f_w_400 text-end"><a href="#"
                                                        class="text_color_2">Direct</a></td>
                                            </tr>
                                            <tr role="row" class="odd">
                                                <td tabindex="0" class="sorting_1">
                                                    <div class="customer d-flex align-items-center">
                                                        <div class="thumb_34 mr_15 mt-0"><img
                                                                class="img-fluid radius_50"
                                                                src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png" alt=""></div>
                                                        <span class="f_s_14 f_w_400 color_text_1">Product 1</span>
                                                    </div>
                                                </td>
                                                <td class="f_s_14 f_w_400 color_text_2">$564</td>
                                                <td class="f_s_14 f_w_400 color_text_3">#DE2548</td>
                                                <td class="f_s_14 f_w_400 color_text_4">60</td>
                                                <td class="f_s_14 f_w_400 text-end"><a href="#"
                                                        class="text_color_1">Email</a></td>
                                            </tr>
                                            <tr role="row" class="even">
                                                <td tabindex="0" class="sorting_1">
                                                    <div class="customer d-flex align-items-center">
                                                        <div class="thumb_34 mr_15 mt-0"><img
                                                                class="img-fluid radius_50"
                                                                src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png" alt=""></div>
                                                        <span class="f_s_14 f_w_400 color_text_1">Product 1</span>
                                                    </div>
                                                </td>
                                                <td class="f_s_14 f_w_400 color_text_2">$564</td>
                                                <td class="f_s_14 f_w_400 color_text_3">#DE2548</td>
                                                <td class="f_s_14 f_w_400 color_text_4">60</td>
                                                <td class="f_s_14 f_w_400 text-end"><a href="#"
                                                        class="text_color_3">Refferal</a></td>
                                            </tr>
                                            <tr role="row" class="odd">
                                                <td tabindex="0" class="sorting_1">
                                                    <div class="customer d-flex align-items-center">
                                                        <div class="thumb_34 mr_15 mt-0"><img
                                                                class="img-fluid radius_50"
                                                                src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png" alt=""></div>
                                                        <span class="f_s_14 f_w_400 color_text_1">Product 1</span>
                                                    </div>
                                                </td>
                                                <td class="f_s_14 f_w_400 color_text_2">$564</td>
                                                <td class="f_s_14 f_w_400 color_text_3">#DE2548</td>
                                                <td class="f_s_14 f_w_400 color_text_4">60</td>
                                                <td class="f_s_14 f_w_400 text-end"><a href="#"
                                                        class="text_color_2">Direct</a></td>
                                            </tr>
                                            <tr role="row" class="even">
                                                <td tabindex="0" class="sorting_1">
                                                    <div class="customer d-flex align-items-center">
                                                        <div class="thumb_34 mr_15 mt-0"><img
                                                                class="img-fluid radius_50"
                                                                src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png" alt=""></div>
                                                        <span class="f_s_14 f_w_400 color_text_1">Product 1</span>
                                                    </div>
                                                </td>
                                                <td class="f_s_14 f_w_400 color_text_2">$564</td>
                                                <td class="f_s_14 f_w_400 color_text_3">#DE2548</td>
                                                <td class="f_s_14 f_w_400 color_text_4">60</td>
                                                <td class="f_s_14 f_w_400 text-end"><a href="#"
                                                        class="text_color_3">Refferal</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="white_card card_height_100 mb_20 ">
                        <div class="white_card_header">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <h3 class="m-0">Popular Products</h3>
                                </div>
                                <div class="header_more_tool">
                                    <div class="dropdown">
                                        <span class="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                            <i class="ti-more-alt"></i>
                                        </span>
                                        <div class="dropdown-menu dropdown-menu-right"
                                            aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#"> <i class="ti-eye"></i> Action</a>
                                            <a class="dropdown-item" href="#"> <i class="ti-trash"></i> Delete</a>
                                            <a class="dropdown-item" href="#"> <i class="fas fa-edit"></i> Edit</a>
                                            <a class="dropdown-item" href="#"> <i class="ti-printer"></i> Print</a>
                                            <a class="dropdown-item" href="#"> <i class="fa fa-download"></i>
                                                Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="white_card_body QA_section">
                            <div class="QA_table ">

                                <div id="DataTables_Table_2_wrapper" class="dataTables_wrapper no-footer">
                                    <table class="table lms_table_active2 p-0 dataTable no-footer dtr-inline"
                                        id="DataTables_Table_2" role="grid" style="width: 620px;">
                                        <thead>
                                            <tr role="row">
                                                <th scope="col" class="sorting_asc" tabindex="0"
                                                    aria-controls="DataTables_Table_2" rowspan="1" colspan="1"
                                                    style="width: 280px;" aria-sort="ascending"
                                                    aria-label="Product: activate to sort column descending">Product
                                                </th>
                                                <th scope="col" class="sorting" tabindex="0"
                                                    aria-controls="DataTables_Table_2" rowspan="1" colspan="1"
                                                    style="width: 87px;"
                                                    aria-label="Product Code: activate to sort column ascending">Product
                                                    Code</th>
                                                <th scope="col" class="sorting" tabindex="0"
                                                    aria-controls="DataTables_Table_2" rowspan="1" colspan="1"
                                                    style="width: 49px;"
                                                    aria-label="Price: activate to sort column ascending">Price</th>
                                                <th scope="col" class="sorting" tabindex="0"
                                                    aria-controls="DataTables_Table_2" rowspan="1" colspan="1"
                                                    style="width: 84px;"
                                                    aria-label="Status: activate to sort column ascending">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>



                                            <tr role="row" class="odd">
                                                <td tabindex="0" class="sorting_1">
                                                    <div class="customer d-flex align-items-center">
                                                        <div class="thumb_62 mr_15 mt-0"><img
                                                                class="img-fluid radius_50"
                                                                src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png" alt=""></div>
                                                        <span class="f_s_20 f_w_400 color_text_3">Sport Shoe</span>
                                                    </div>
                                                </td>
                                                <td class="f_s_14 f_w_400 color_text_4">#DE2548</td>
                                                <td class="f_s_14 f_w_400 color_text_3">$99.00</td>
                                                <td class="f_s_14 f_w_400 text-end"><a href="#" class="badge_btn_1">354
                                                        sold</a></td>
                                            </tr>
                                            <tr role="row" class="even">
                                                <td tabindex="0" class="sorting_1">
                                                    <div class="customer d-flex align-items-center">
                                                        <div class="thumb_62 mr_15 mt-0"><img
                                                                class="img-fluid radius_50"
                                                                src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png" alt=""></div>
                                                        <span class="f_s_20 f_w_400 color_text_3">Unique Watch</span>
                                                    </div>
                                                </td>
                                                <td class="f_s_14 f_w_400 color_text_4">#DE2548</td>
                                                <td class="f_s_14 f_w_400 color_text_3">$99.00</td>
                                                <td class="f_s_14 f_w_400 text-end"><a href="#" class="badge_btn_1">354
                                                        sold</a></td>
                                            </tr>
                                            <tr role="row" class="odd">
                                                <td tabindex="0" class="sorting_1">
                                                    <div class="customer d-flex align-items-center">
                                                        <div class="thumb_62 mr_15 mt-0"><img
                                                                class="img-fluid radius_50"
                                                                src="https://demo.dashboardpack.com/sales-html/img/Payment/1.png" alt=""></div>
                                                        <span class="f_s_20 f_w_400 color_text_3">Wireless
                                                            Headphone</span>
                                                    </div>
                                                </td>
                                                <td class="f_s_14 f_w_400 color_text_4">#DE2548</td>
                                                <td class="f_s_14 f_w_400 color_text_3">$99.00</td>
                                                <td class="f_s_14 f_w_400 text-end"><a href="#" class="badge_btn_1">354
                                                        sold</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <a href="#" class="badge_btn_semi mt_30 ml_15">View All</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="white_card card_height_100 mb_20 ">
                        <div class="white_card_header">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <h3 class="m-0">Market valus</h3>
                                </div>
                                <div class="single_wrap_input">
                                    <select class="nice_Select2 wide" name="" id="" style="display: none;">
                                        <option value="1">year</option>
                                        <option value="1">month</option>
                                        <option value="1">day</option>
                                    </select>
                                    <div class="nice-select nice_Select2 wide" tabindex="0"><span
                                            class="current">year</span>
                                        <div class="nice-select-search-box"><input type="text"
                                                class="nice-select-search" placeholder="Search..."></div>
                                        <ul class="list">
                                            <li data-value="1" class="option selected">year</li>
                                            <li data-value="1" class="option">month</li>
                                            <li data-value="1" class="option">day</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="white_card_body QA_section">
                            <div class="radar-chart" style="position: relative;">
                                <div id="marketchart" style="min-height: 395px;">
                                    <div id="apexchartsepfzpf0c" class="apexcharts-canvas apexchartsepfzpf0c light"
                                        style="width: 267px; height: 380px;"><svg id="SvgjsSvg1224" width="267"
                                            height="380" xmlns="http://www.w3.org/2000/svg" version="1.1"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg"
                                            xmlns:data="ApexChartsNS" transform="translate(0, 0)"
                                            style="background: transparent;">
                                            <g id="SvgjsG1226" class="apexcharts-inner apexcharts-graphical"
                                                transform="translate(12, 30)">
                                                <defs id="SvgjsDefs1225">
                                                    <clipPath id="gridRectMaskepfzpf0c">
                                                        <rect id="SvgjsRect1230" width="248" height="318" x="-1.5"
                                                            y="-1.5" rx="0" ry="0" fill="#ffffff" opacity="1"
                                                            stroke-width="0" stroke="none" stroke-dasharray="0"></rect>
                                                    </clipPath>
                                                    <clipPath id="gridRectMarkerMaskepfzpf0c">
                                                        <rect id="SvgjsRect1231" width="259" height="329" x="-7" y="-7"
                                                            rx="0" ry="0" fill="#ffffff" opacity="1" stroke-width="0"
                                                            stroke="none" stroke-dasharray="0"></rect>
                                                    </clipPath>
                                                </defs>
                                                <g id="SvgjsG1280" class="apexcharts-grid">
                                                    <line id="SvgjsLine1282" x1="0" y1="315" x2="245" y2="315"
                                                        stroke="transparent" stroke-dasharray="0"></line>
                                                    <line id="SvgjsLine1281" x1="0" y1="1" x2="0" y2="315"
                                                        stroke="transparent" stroke-dasharray="0"></line>
                                                </g>
                                                <g id="SvgjsG1233" class="apexcharts-radar-series"
                                                    data:innerTranslateX="122.5" data:innerTranslateY="132.5"
                                                    transform="translate(122.5, 157.5)">
                                                    <polygon id="SvgjsPolygon1260"
                                                        points="0,-140 109.45640754552417,-87.28857226022271 136.4899077054553,31.152930753884007 60.74372347645815,126.13564150633866 -60.74372347645812,126.13564150633869 -136.4899077054553,31.152930753884043 -109.45640754552419,-87.28857226022268 "
                                                        fill="#fcf8ff" stroke="#e8e8e8"></polygon>
                                                    <polygon id="SvgjsPolygon1261"
                                                        points="0,-112 87.56512603641934,-69.83085780817817 109.19192616436425,24.922344603107206 48.594978781166525,100.90851320507093 -48.594978781166496,100.90851320507095 -109.19192616436425,24.922344603107234 -87.56512603641934,-69.83085780817814 "
                                                        fill="#f7eeff" stroke="#e8e8e8"></polygon>
                                                    <polygon id="SvgjsPolygon1262"
                                                        points="0,-84 65.6738445273145,-52.373143356133625 81.89394462327319,18.691758452330404 36.44623408587489,75.6813849038032 -36.44623408587487,75.6813849038032 -81.89394462327319,18.691758452330426 -65.67384452731451,-52.3731433561336 "
                                                        fill="#fcf8ff" stroke="#e8e8e8"></polygon>
                                                    <polygon id="SvgjsPolygon1263"
                                                        points="0,-56 43.78256301820967,-34.91542890408908 54.595963082182124,12.461172301553603 24.297489390583262,50.454256602535466 -24.297489390583248,50.45425660253547 -54.595963082182124,12.461172301553617 -43.78256301820967,-34.91542890408907 "
                                                        fill="#f7eeff" stroke="#e8e8e8"></polygon>
                                                    <polygon id="SvgjsPolygon1264"
                                                        points="0,-28 21.891281509104836,-17.45771445204454 27.297981541091062,6.2305861507768014 12.148744695291631,25.227128301267733 -12.148744695291624,25.227128301267737 -27.297981541091062,6.2305861507768086 -21.891281509104836,-17.457714452044534 "
                                                        fill="#fcf8ff" stroke="#e8e8e8"></polygon>
                                                    <polygon id="SvgjsPolygon1265" points="0,0 0,0 0,0 0,0 0,0 0,0 0,0 "
                                                        fill="#f7eeff" stroke="#e8e8e8"></polygon>
                                                    <line id="SvgjsLine1253" x1="0" y1="-140" x2="0" y2="0"
                                                        stroke="#e8e8e8" stroke-dasharray="0"></line>
                                                    <line id="SvgjsLine1254" x1="109.45640754552417"
                                                        y1="-87.28857226022271" x2="0" y2="0" stroke="#e8e8e8"
                                                        stroke-dasharray="0"></line>
                                                    <line id="SvgjsLine1255" x1="136.4899077054553"
                                                        y1="31.152930753884007" x2="0" y2="0" stroke="#e8e8e8"
                                                        stroke-dasharray="0"></line>
                                                    <line id="SvgjsLine1256" x1="60.74372347645815"
                                                        y1="126.13564150633866" x2="0" y2="0" stroke="#e8e8e8"
                                                        stroke-dasharray="0"></line>
                                                    <line id="SvgjsLine1257" x1="-60.74372347645812"
                                                        y1="126.13564150633869" x2="0" y2="0" stroke="#e8e8e8"
                                                        stroke-dasharray="0"></line>
                                                    <line id="SvgjsLine1258" x1="-136.4899077054553"
                                                        y1="31.152930753884043" x2="0" y2="0" stroke="#e8e8e8"
                                                        stroke-dasharray="0"></line>
                                                    <line id="SvgjsLine1259" x1="-109.45640754552419"
                                                        y1="-87.28857226022268" x2="0" y2="0" stroke="#e8e8e8"
                                                        stroke-dasharray="0"></line>
                                                    <g id="SvgjsG1272" class="apexcharts-datalabels"><text
                                                            id="SvgjsText1273"
                                                            font-family="Helvetica, Arial, sans-serif" x="0" y="-150"
                                                            text-anchor="middle" dominant-baseline="auto"
                                                            font-size="11px" font-weight="regular" fill="#a8a8a8"
                                                            class="apexcharts-datalabel" cx="0" cy="-150"
                                                            style="font-family: Helvetica, Arial, sans-serif;">Sunday</text><text
                                                            id="SvgjsText1274"
                                                            font-family="Helvetica, Arial, sans-serif"
                                                            x="119.45640754552417" y="-87.28857226022271"
                                                            text-anchor="start" dominant-baseline="auto"
                                                            font-size="11px" font-weight="regular" fill="#a8a8a8"
                                                            class="apexcharts-datalabel" cx="119.45640754552417"
                                                            cy="-87.28857226022271"
                                                            style="font-family: Helvetica, Arial, sans-serif;">Monday</text><text
                                                            id="SvgjsText1275"
                                                            font-family="Helvetica, Arial, sans-serif"
                                                            x="146.4899077054553" y="31.152930753884007"
                                                            text-anchor="start" dominant-baseline="auto"
                                                            font-size="11px" font-weight="regular" fill="#a8a8a8"
                                                            class="apexcharts-datalabel" cx="146.4899077054553"
                                                            cy="31.152930753884007"
                                                            style="font-family: Helvetica, Arial, sans-serif;">Tuesday</text><text
                                                            id="SvgjsText1276"
                                                            font-family="Helvetica, Arial, sans-serif"
                                                            x="70.74372347645814" y="126.13564150633866"
                                                            text-anchor="start" dominant-baseline="auto"
                                                            font-size="11px" font-weight="regular" fill="#a8a8a8"
                                                            class="apexcharts-datalabel" cx="70.74372347645814"
                                                            cy="126.13564150633866"
                                                            style="font-family: Helvetica, Arial, sans-serif;">Wednesday</text><text
                                                            id="SvgjsText1277"
                                                            font-family="Helvetica, Arial, sans-serif"
                                                            x="-70.74372347645811" y="126.13564150633869"
                                                            text-anchor="end" dominant-baseline="auto" font-size="11px"
                                                            font-weight="regular" fill="#a8a8a8"
                                                            class="apexcharts-datalabel" cx="-70.74372347645811"
                                                            cy="126.13564150633869"
                                                            style="font-family: Helvetica, Arial, sans-serif;">Thursday</text><text
                                                            id="SvgjsText1278"
                                                            font-family="Helvetica, Arial, sans-serif"
                                                            x="-146.4899077054553" y="31.152930753884043"
                                                            text-anchor="end" dominant-baseline="auto" font-size="11px"
                                                            font-weight="regular" fill="#a8a8a8"
                                                            class="apexcharts-datalabel" cx="-146.4899077054553"
                                                            cy="31.152930753884043"
                                                            style="font-family: Helvetica, Arial, sans-serif;">Friday</text><text
                                                            id="SvgjsText1279"
                                                            font-family="Helvetica, Arial, sans-serif"
                                                            x="-119.45640754552419" y="-87.28857226022268"
                                                            text-anchor="end" dominant-baseline="auto" font-size="11px"
                                                            font-weight="regular" fill="#a8a8a8"
                                                            class="apexcharts-datalabel" cx="-119.45640754552419"
                                                            cy="-87.28857226022268"
                                                            style="font-family: Helvetica, Arial, sans-serif;">Saturday</text>
                                                    </g>
                                                    <g id="SvgjsG1234" class="apexcharts-yaxis"><text id="SvgjsText1266"
                                                            font-family="Helvetica, Arial, sans-serif" x="0" y="-134"
                                                            text-anchor="middle" dominant-baseline="auto"
                                                            font-size="13px" font-weight="regular" fill="#373d3f"
                                                            style="font-family: Helvetica, Arial, sans-serif;">100</text><text
                                                            id="SvgjsText1267"
                                                            font-family="Helvetica, Arial, sans-serif" x="0" y="-106"
                                                            text-anchor="middle" dominant-baseline="auto"
                                                            font-size="13px" font-weight="regular" fill="#373d3f"
                                                            style="font-family: Helvetica, Arial, sans-serif;"></text><text
                                                            id="SvgjsText1268"
                                                            font-family="Helvetica, Arial, sans-serif" x="0" y="-78"
                                                            text-anchor="middle" dominant-baseline="auto"
                                                            font-size="13px" font-weight="regular" fill="#373d3f"
                                                            style="font-family: Helvetica, Arial, sans-serif;">60</text><text
                                                            id="SvgjsText1269"
                                                            font-family="Helvetica, Arial, sans-serif" x="0" y="-50"
                                                            text-anchor="middle" dominant-baseline="auto"
                                                            font-size="13px" font-weight="regular" fill="#373d3f"
                                                            style="font-family: Helvetica, Arial, sans-serif;"></text><text
                                                            id="SvgjsText1270"
                                                            font-family="Helvetica, Arial, sans-serif" x="0" y="-22"
                                                            text-anchor="middle" dominant-baseline="auto"
                                                            font-size="13px" font-weight="regular" fill="#373d3f"
                                                            style="font-family: Helvetica, Arial, sans-serif;">20</text><text
                                                            id="SvgjsText1271"
                                                            font-family="Helvetica, Arial, sans-serif" x="0" y="6"
                                                            text-anchor="middle" dominant-baseline="auto"
                                                            font-size="13px" font-weight="regular" fill="#373d3f"
                                                            style="font-family: Helvetica, Arial, sans-serif;"></text>
                                                    </g>
                                                    <g id="SvgjsG1235" class="apexcharts-series"
                                                        seriesName="Marketxvalue" rel="1" data:realIndex="0">
                                                        <path id="SvgjsPath1237"
                                                            d="M 0 -28L 0 -28L 109.45640754552417 -87.28857226022271L 54.595963082182124 12.461172301553603L 18.223117042937446 37.8406924519016L -30.37186173822906 63.06782075316934L -109.19192616436425 24.922344603107234L -36.12061449002299 -28.805228845873483Z"
                                                            fill="none" fill-opacity="1" stroke="#64c5b1"
                                                            stroke-opacity="1" stroke-linecap="butt" stroke-width="3"
                                                            stroke-dasharray="0" class="apexcharts-radar" index="0"
                                                            pathTo="M 0 -28L 0 -28L 109.45640754552417 -87.28857226022271L 54.595963082182124 12.461172301553603L 18.223117042937446 37.8406924519016L -30.37186173822906 63.06782075316934L -109.19192616436425 24.922344603107234L -36.12061449002299 -28.805228845873483Z"
                                                            pathFrom="M 0 0"></path>
                                                        <path id="SvgjsPath1238"
                                                            d="M 0 -28L 0 -28L 109.45640754552417 -87.28857226022271L 54.595963082182124 12.461172301553603L 18.223117042937446 37.8406924519016L -30.37186173822906 63.06782075316934L -109.19192616436425 24.922344603107234L -36.12061449002299 -28.805228845873483Z"
                                                            fill="rgba(100,197,177,0.2)" fill-opacity="1"
                                                            stroke-opacity="1" stroke-linecap="butt" stroke-width="0"
                                                            stroke-dasharray="0" class="apexcharts-radar" index="0"
                                                            pathTo="M 0 -28L 0 -28L 109.45640754552417 -87.28857226022271L 54.595963082182124 12.461172301553603L 18.223117042937446 37.8406924519016L -30.37186173822906 63.06782075316934L -109.19192616436425 24.922344603107234L -36.12061449002299 -28.805228845873483Z"
                                                            pathFrom="M 0 0"></path>
                                                        <g id="SvgjsG1236" class="apexcharts-series-markers-wrap">
                                                            <g id="SvgjsG1240" class="apexcharts-series-markers">
                                                                <circle id="SvgjsCircle1239" r="6" cx="0" cy="-28"
                                                                    class="apexcharts-marker" stroke="#64c5b1"
                                                                    fill="#ffffff" fill-opacity="1" stroke-width="3"
                                                                    stroke-opacity="1" rel="0" j="0" index="0"
                                                                    default-marker-size="6"></circle>
                                                            </g>
                                                            <g id="SvgjsG1242" class="apexcharts-series-markers">
                                                                <circle id="SvgjsCircle1241" r="6"
                                                                    cx="109.45640754552417" cy="-87.28857226022271"
                                                                    class="apexcharts-marker" stroke="#64c5b1"
                                                                    fill="#ffffff" fill-opacity="1" stroke-width="3"
                                                                    stroke-opacity="1" rel="1" j="1" index="0"
                                                                    default-marker-size="6"></circle>
                                                            </g>
                                                            <g id="SvgjsG1244" class="apexcharts-series-markers">
                                                                <circle id="SvgjsCircle1243" r="6"
                                                                    cx="54.595963082182124" cy="12.461172301553603"
                                                                    class="apexcharts-marker" stroke="#64c5b1"
                                                                    fill="#ffffff" fill-opacity="1" stroke-width="3"
                                                                    stroke-opacity="1" rel="2" j="2" index="0"
                                                                    default-marker-size="6"></circle>
                                                            </g>
                                                            <g id="SvgjsG1246" class="apexcharts-series-markers">
                                                                <circle id="SvgjsCircle1245" r="6"
                                                                    cx="18.223117042937446" cy="37.8406924519016"
                                                                    class="apexcharts-marker" stroke="#64c5b1"
                                                                    fill="#ffffff" fill-opacity="1" stroke-width="3"
                                                                    stroke-opacity="1" rel="3" j="3" index="0"
                                                                    default-marker-size="6"></circle>
                                                            </g>
                                                            <g id="SvgjsG1248" class="apexcharts-series-markers">
                                                                <circle id="SvgjsCircle1247" r="6"
                                                                    cx="-30.37186173822906" cy="63.06782075316934"
                                                                    class="apexcharts-marker" stroke="#64c5b1"
                                                                    fill="#ffffff" fill-opacity="1" stroke-width="3"
                                                                    stroke-opacity="1" rel="4" j="4" index="0"
                                                                    default-marker-size="6"></circle>
                                                            </g>
                                                            <g id="SvgjsG1250" class="apexcharts-series-markers">
                                                                <circle id="SvgjsCircle1249" r="6"
                                                                    cx="-109.19192616436425" cy="24.922344603107234"
                                                                    class="apexcharts-marker" stroke="#64c5b1"
                                                                    fill="#ffffff" fill-opacity="1" stroke-width="3"
                                                                    stroke-opacity="1" rel="5" j="5" index="0"
                                                                    default-marker-size="6"></circle>
                                                            </g>
                                                            <g id="SvgjsG1252" class="apexcharts-series-markers">
                                                                <circle id="SvgjsCircle1251" r="6"
                                                                    cx="-36.12061449002299" cy="-28.805228845873483"
                                                                    class="apexcharts-marker" stroke="#64c5b1"
                                                                    fill="#ffffff" fill-opacity="1" stroke-width="3"
                                                                    stroke-opacity="1" rel="6" j="6" index="0"
                                                                    default-marker-size="6"></circle>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                                <line id="SvgjsLine1283" x1="0" y1="0" x2="245" y2="0" stroke="#b6b6b6"
                                                    stroke-dasharray="0" stroke-width="1"
                                                    class="apexcharts-ycrosshairs"></line>
                                                <line id="SvgjsLine1284" x1="0" y1="0" x2="245" y2="0"
                                                    stroke-dasharray="0" stroke-width="0"
                                                    class="apexcharts-ycrosshairs-hidden"></line>
                                                <g id="SvgjsG1285" class="apexcharts-yaxis-annotations"></g>
                                                <g id="SvgjsG1286" class="apexcharts-xaxis-annotations"></g>
                                                <g id="SvgjsG1287" class="apexcharts-point-annotations"></g>
                                            </g>
                                        </svg>
                                        <div class="apexcharts-legend"></div>
                                        <div class="apexcharts-tooltip light">
                                            <div class="apexcharts-tooltip-title"
                                                style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                            </div>
                                            <div class="apexcharts-tooltip-series-group"><span
                                                    class="apexcharts-tooltip-marker"
                                                    style="background-color: rgb(100, 197, 177);"></span>
                                                <div class="apexcharts-tooltip-text"
                                                    style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                                    <div class="apexcharts-tooltip-y-group"><span
                                                            class="apexcharts-tooltip-text-label"></span><span
                                                            class="apexcharts-tooltip-text-value"></span></div>
                                                    <div class="apexcharts-tooltip-z-group"><span
                                                            class="apexcharts-tooltip-text-z-label"></span><span
                                                            class="apexcharts-tooltip-text-z-value"></span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></template>
<style scoped>

@import "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200&display=swap";.CRM_dropdown.dropdown .dropdown-toggle:hover,.CRM_dropdown.dropdown .dropdown-toggle:focus {
    background: -webkit-gradient(linear,left top,right top,from(#7C32FF),color-stop(70%,#A235EC),to(#C738D8));
    background: -o-linear-gradient(left,#7C32FF 0%,#A235EC 70%,#C738D8 100%);
    background: linear-gradient(90deg,#7C32FF 0%,#A235EC 70%,#C738D8 100%)
}

.profile_info .profile_info_iner .profile_author_name {
    background-image: linear-gradient(to bottom right,#863ee2,#571f9e)
}

body {
    font-family: nunito,sans-serif;
    padding: 0;
    margin: 0;
    font-size: 14px;
    background: #fff
}

@media(min-width: 1200px) {
    .container {
        max-width:1310px
    }
}

.body_white_bg {
    background: #fff
}

.br_5 {
    border-radius: 5px
}

.border_bottom_1px {
    border-bottom: 1px solid #e0e2e8
}

.message_submit_form:focus {
    outline: none
}

input:hover,input:focus {
    outline: none!important;
    box-shadow: 0 0 0 0 transparent!important
}

:focus {
    outline: -webkit-focus-ring-color auto 0
}

.custom-file-input:focus~.custom-file-label {
    border-color: transparent;
    box-shadow: none
}

.form-control {
    border-color: #bbc1c9
}

.form-control:focus {
    box-shadow: 0 0 0 0 transparent!important;
    border-color: #bbc1c9
}

.dropdown-menu {
    margin: 0;
    padding: 0
}

.section_padding {
    padding: 120px 0
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .section_padding {
        padding:80px 0
    }
}

@media only screen and (min-width: 768px) and (max-width:991px) {
    .section_padding {
        padding:70px 0
    }
}

@media(max-width: 575.98px) {
    .section_padding {
        padding:70px 0
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .section_padding {
        padding:70px 0
    }
}

.padding_top {
    padding-top: 120px
}

@media(max-width: 991px) {
    .padding_top {
        padding-top:70px
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .padding_top {
        padding-top:80px
    }
}

.padding_bottom {
    padding-bottom: 120px
}

@media(max-width: 991px) {
    .padding_bottom {
        padding-bottom:70px
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .padding_bottom {
        padding-bottom:80px
    }
}

a {
    text-decoration: none;
    -webkit-transition: .5s;
    transition: .5s
}

a:hover {
    text-decoration: none
}

h1,h2,h3,h4,h5,h6 {
    color: #14256a;
    font-family: nunito,sans-serif;
    font-weight: 600;
    line-height: 1.2
}

h2 {
    font-size: 30px
}

h3 {
    font-size: 26px
}

h4 {
    font-size: 20px
}

h5 {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.8
}

li {
    list-style: none
}

ul,ol {
    margin: 0;
    padding: 0
}

p {
    line-height: 24px;
    font-size: 14px;
    margin-bottom: 0;
    color: #828bb2;
    font-family: nunito,sans-serif;
    font-weight: 300
}

a:focus,.button:focus,button:focus,.btn:focus {
    text-decoration: none;
    outline: none;
    box-shadow: none;
    -webkit-transition: 1s;
    transition: 1s
}

.p_30 {
    padding: 30px
}

@media(max-width: 991px) {
    .p_30 {
        padding:20px
    }
}

.p_20 {
    padding: 20px
}

.p_15 {
    padding: 20px 20px 15px
}

.pb_20 {
    padding-bottom: 20px
}

.mt_60 {
    margin-top: 60px
}

@media(max-width: 991px) {
    .mt_60 {
        margin-top:30px
    }
}

.mt_25 {
    margin-top: 25px
}

.mt_30 {
    margin-top: 30px
}

@media(max-width: 991px) {
    .mt_30 {
        margin-top:15px
    }
}

.mt_10 {
    margin-top: 10px
}

.mb_15 {
    margin-bottom: 15px
}

.mb_15_imp {
    margin-bottom: 13px!important
}

.mb_20 {
    margin-bottom: 20px!important
}

.mb_20_imp {
    margin-bottom: 20px
}

.mb_25 {
    margin-bottom: 20px
}

.mb_50 {
    margin-bottom: 50px
}

@media(max-width: 575.98px) {
    .mb_50 {
        margin-bottom:30px
    }
}

.mt_50 {
    margin-top: 50px
}

@media(max-width: 575.98px) {
    .mt_50 {
        margin-top:25px
    }
}

.mt_20 {
    margin-top: 20px
}

.mb_10 {
    margin-bottom: 10px!important
}

th:focus,td:focus {
    outline: -webkit-focus-ring-color auto 0
}

table.dataTable tbody th,table.dataTable tbody td {
    vertical-align: middle
}

.mt_40 {
    margin-top: 40px
}

.section_bg {
    background-color: #fef1f2
}

.cs_checkbox {
    display: block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.cs_checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0
}

.cs_checkbox .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: transparent;
    border: 1px solid #e4e8ec
}

.section_tittle {
    text-align: center
}

.section_tittle h2 {
    font-size: 36px;
    margin-bottom: 25px;
    line-height: 33px
}

@media(max-width: 991px) {
    .section_tittle h2 {
        margin-bottom:15px;
        font-size: 25px
    }
}

@media(max-width: 991px) {
    .section_tittle h2 {
        font-size:30px
    }
}

.section_tittle p {
    margin-bottom: 72px
}

@media(max-width: 991px) {
    .section_tittle p {
        margin-bottom:40px
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .section_tittle p {
        margin-bottom:50px
    }
}

.cs_checkbox:after {
    content: "";
    position: absolute;
    display: none
}

.cs_checkbox input:checked~.checkmark:after {
    display: block;
    left: 6px;
    top: 1px;
    width: 5px;
    height: 9px;
    border: solid #7e7172;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    content: ""
}

.cs_checkbox span {
    padding: 0!important
}

.custom_checkbox tr th:first-child,.custom_checkbox tr td:first-child {
    padding: 16px 0!important
}

.border_1px {
    border-right: 1px solid rgba(130,139,178,.3);
    height: 40px;
    margin-right: 20px;
    margin-left: 8px
}

.nice_Select {
    border: 0;
    border-radius: 0;
    padding-left: 0;
    padding-right: 30px;
    color: #415094
}

.nice_Select .nice-select-search-box {
    width: 200px!important
}

.nice_Select.bgLess {
    background: 0 0;
    border: 0!important
}

.nice_Select:after {
    content: "\e62a";
    font-family: themify;
    border: 0;
    transform: rotate(0deg);
    margin-top: -16px;
    font-size: 12px;
    font-weight: 500;
    right: 18px;
    transform-origin: none;
    -webkit-transition: all .1s ease-in-out;
    -moz-transition: all .1s ease-in-out;
    -o-transition: all .1s ease-in-out;
    transition: all .1s ease-in-out;
    margin-top: -22px
}

.nice_Select.open::after {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
    margin-top: 15px;
    margin-top: 12px;
    right: 12px
}

.nice_Select:focus {
    box-shadow: none;
    border: 0!important
}

.nice_Select:hover {
    border: 0
}

.nice_Select.open .list {
    min-width: 200px;
    left: 0;
    overflow-y: auto
}

.nice_Select.open .list li:first-child {
    color: #000
}

.nice_Select .current {
    -webkit-transition: all .4s ease 0s;
    -moz-transition: all .4s ease 0s;
    -o-transition: all .4s ease 0s;
    transition: all .4s ease 0s
}

.nice_Select .list {
    width: 100%;
    left: auto;
    right: 0;
    border-radius: 0 0 10px 10px;
    margin-top: 1px;
    z-index: 9999!important;
    box-shadow: 0 10px 20px rgba(108,39,255,.3)
}

.nice_Select .list li {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase
}

.nice_Select2 {
    border: 0;
    border-radius: 0;
    padding-left: 0;
    padding-right: 5px;
    color: #0fc171;
    background: #e4fffa;
    border: 0;
    padding-left: 18px;
    padding-right: 38px;
    border-radius: 3px;
    height: 30px;
    line-height: 30px;
    font-size: 10px;
    text-transform: capitalize
}

.nice_Select2 .nice-select-search-box {
    width: 100%!important;
    margin-top: 5px;
    display: none!important
}

.nice_Select2:after {
    content: "\e64b";
    font-family: themify;
    border: 0;
    transform: rotate(0deg);
    margin-top: -16px;
    font-size: 12px;
    font-weight: 500;
    right: 18px;
    transform-origin: none;
    -webkit-transition: all .1s ease-in-out;
    -moz-transition: all .1s ease-in-out;
    -o-transition: all .1s ease-in-out;
    transition: all .1s ease-in-out;
    margin-top: -16px;
    right: 20px;
    margin-top: -15px;
    right: 25px;
    color: #0fc171
}

.nice_Select2:active,.nice_Select2.open,.nice_Select2:focus {
    border-color: none;
    border: 0
}

.nice_Select2.open::after {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
    margin-top: 8px;
    right: 20px
}

.nice_Select2:focus {
    box-shadow: none;
    border: 0
}

.nice_Select2:hover {
    border: 0
}

.nice_Select2.open .list {
    min-width: 100%;
    margin-top: 5px;
    padding-top: 0!important;
    left: 0;
    overflow-y: auto
}

.nice_Select2.open .list li:first-child {
    color: #000
}

.nice_Select2 .current {
    -webkit-transition: all .4s ease 0s;
    -moz-transition: all .4s ease 0s;
    -o-transition: all .4s ease 0s;
    transition: all .4s ease 0s
}

.nice_Select2 .list {
    width: 100%;
    left: auto;
    right: 0;
    border-radius: 0 0 10px 10px;
    margin-top: 1px;
    z-index: 9999!important;
    box-shadow: 0 10px 20px rgba(108,39,255,.3)
}

.nice_Select2 .list li {
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase
}

.white_box {
    background-color: #fff;
    padding: 20px
}

@media(max-width: 991px) {
    .white_box {
        padding:20px
    }
}

@media(max-width: 575.98px) {
    .white_box {
        padding:25px 15px
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .white_box {
        padding:30px 20px
    }
}

@media only screen and (min-width: 1200px) and (max-width:1439px) {
    .white_box {
        padding:30px 20px
    }
}

.white_box h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    margin-bottom: 22px;
    font-family: nunito,sans-serif
}

@media(max-width: 991px) {
    .white_box h3 {
        margin-bottom:10px
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .white_box h3 {
        margin-bottom:10px
    }
}

.white_box h3 span {
    font-weight: 300;
    color: #7e7172
}

.progress-bar {
    text-align: right;
    padding-right: 8px
}

.white_box_p_30 {
    padding: 30px;
    background-color: #fff
}

@media(max-width: 991px) {
    .white_box_p_30 {
        padding:25px 15px
    }
}

.cu_dropdown .btn {
    border: 1px solid #f1f2f3;
    background-color: #fef1f2;
    color: #7e7172;
    font-size: 12px;
    font-weight: 300;
    padding: 5px 15px
}

.cu_dropdown .btn_1 {
    padding: 11px 20px
}

.cu_dropdown .dropdown-toggle::after {
    display: inline-block;
    margin-left: 10px;
    vertical-align: 0;
    content: "\e64b";
    border-top: none;
    font-family: themify;
    font-size: 10px
}

.cu_dropdown .dropdown-menu {
    min-width: auto;
    background-color: #14256a;
    min-width: 102px;
    left: 0!important;
    border-radius: 0 0 5px 5px;
    top: -2px!important;
    padding: 17px 0
}

.cu_dropdown .dropdown-menu .dropdown-item {
    font-size: 12px;
    font-weight: 300;
    text-transform: capitalize;
    padding: 7px 20px;
    padding: 7px 20px;
    color: #fff
}

.cu_dropdown .left_arrow:hover {
    background-color: transparent;
    padding-left: 38px
}

.cu_dropdown .left_arrow:after {
    left: 18px;
    top: 11px
}

.switch {
    -webkit-appearance: none;
    background-color: gray;
    border-radius: 43px;
    position: relative;
    cursor: pointer;
    padding: 14px 25px!important;
    margin-right: 20px;
    height: 30px
}

.switch::after {
    top: 6px;
    left: 6px;
    content: '';
    width: 15px;
    height: 15px;
    background-color: #2e4765;
    position: absolute;
    border-radius: 100%;
    transition: 1s
}

.switch:checked {
    background-color: #2e4765!important
}

.switch:checked::after {
    background-color: #fff!important
}

.switch:checked::after {
    transform: translateX(25px)
}

.switch:focus {
    outline-color: transparent
}

.menu_bropdown {
    display: inline-block
}

.menu_bropdown .dropdown-menu {
    min-width: 168px!important;
    right: 0
}

@media(max-width: 991px) {
    .sidebar_widget {
        margin-top:30px
    }
}

@media only screen and (min-width: 768px) and (max-width:991px) {
    .sidebar_widget {
        margin-top:0
    }
}

.text_underline {
    color: #14256a;
    text-decoration: underline;
    -webkit-transition: .5s;
    transition: .5s
}

.text_underline:hover {
    color: #14256a;
    text-decoration: underline
}

.check_box_item {
    margin-top: 11px
}

.check_box_item .single_check_box {
    padding: 15px 0;
    border-bottom: 1px solid #e4e8ec
}

.check_box_item .single_check_box .switch {
    -webkit-appearance: none;
    background-color: transparent;
    padding: 14px 27px!important;
    margin-right: 0;
    border: 1px solid #e4e8ec
}

.check_box_item .single_check_box .switch:after {
    top: 4px;
    width: 20px;
    height: 20px
}

.check_box_item .single_check_box .switch:checked::after {
    background-color: #7e7172!important;
    left: 4px
}

.check_box_item .single_check_box .switch:checked {
    background-color: transparent!important
}

.list_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    align-items: center
}

@media(max-width: 575.98px) {
    .list_header {
        display:block
    }
}

.list_header p {
    color: #14256a;
    font-weight: 400;
    font-size: 14px;
    color: #7f8b9f;
    font-weight: 400
}

.list_header .nice_Select {
    margin-left: 15px
}

@media(max-width: 575.98px) {
    .list_header .nice_Select {
        margin-left:10px
    }
}

.list_header .list_header_filter {
    display: flex;
    align-items: center
}

@media(max-width: 575.98px) {
    .list_header .list_header_filter {
        margin-top:15px
    }
}

.list_header .list_header_filter img {
    width: 17px;
    margin-right: 8px
}

.cs_modal .modal-content {
    background-color: #fef1f2;
    padding: 0 30px
}

@media(max-width: 575.98px) {
    .cs_modal .modal-content {
        padding:0 20px
    }
}

.cs_modal .modal-header {
    padding: 34px 0 30px 0;
    align-items: center;
    border-bottom: 0 solid transparent
}

.cs_modal .modal-header h5 {
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 500;
    line-height: 25px
}

.cs_modal .modal-header .close {
    padding: 0;
    margin: 0;
    opacity: 1
}

.cs_modal .modal-header .close i {
    font-size: 14px;
    color: #707070
}

.cs_modal .modal-body {
    padding: 35px 30px!important;
    background: #fff;
    border-radius: 5px
}

@media(max-width: 575.98px) {
    .cs_modal .modal-body {
        padding:25px 20px!important
    }
}

.cs_modal .modal-body .chose_thumb_title {
    font-size: 12px;
    font-weight: 300;
    color: #222;
    text-align: left;
    margin: 0;
    margin-bottom: 0;
    display: block;
    margin-bottom: 8px
}

.cs_modal .modal-body .input_wrap label {
    font-size: 12px;
    font-weight: 300;
    color: #222;
    text-align: left;
    margin: 0;
    margin-bottom: 0;
    display: block;
    margin-bottom: 8px
}

.cs_modal .modal-body .input_wrap textarea {
    height: 100px;
    padding: 0;
    line-height: 28px;
    padding: 13px 25px
}

.cs_modal .modal-body .nice_Select,.cs_modal .modal-body input,.cs_modal .modal-body textarea {
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border: 1px solid #eee1e2;
    padding: 10px 25px;
    color: #7e7172;
    font-weight: 500;
    font-size: 13px;
    width: 100%;
    display: block;
    margin-bottom: 21px;
    font-weight: 300;
    border-radius: 3px
}

.cs_modal .modal-body .nice_Select::placeholder,.cs_modal .modal-body input::placeholder,.cs_modal .modal-body textarea::placeholder {
    color: #7e7172;
    font-weight: 300;
    opacity: 1
}

.cs_modal .modal-body .nice_Select {
    line-height: 30px
}

.cs_modal .modal-body .nice_Select :after {
    left: 22px
}

.cs_modal .modal-body ::placeholder {
    color: #14256a
}

.cs_modal .modal_btn {
    display: flex;
    justify-content: start;
    align-items: center
}

.cs_modal .modal_btn .btn_1 {
    padding: 16px 26px!important;
    margin: 0 5px;
    text-align: center
}

.cs_modal .modal-footer {
    border-top: 0 solid transparent;
    padding: 30px 0 40px
}

.form_box .from_group {
    display: block;
    width: 100%;
    margin-bottom: 23px
}

.form_box .from_group label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 13px;
    color: #707070
}

.form_box .from_group .nice_Select,.form_box .from_group input,.form_box .from_group textarea {
    width: 100%;
    display: block;
    background-color: #fef1f2;
    border: 1px solid #f1f2f3;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    padding: 10px 20px
}

.form_box .from_group textarea {
    height: 115px;
    line-height: 27px
}

.form_box .from_group .bootstrap-tagsinput input {
    border: none!important;
    width: auto!important;
    display: inline-block!important;
    background-color: transparent!important
}

.form_box .from_group .bootstrap-tagsinput .badge [data-role=remove]:after {
    background-color: transparent!important
}

.form_box .from_group .bootstrap-tagsinput .badge {
    margin: 0 5px;
    padding: 9px 8px;
    line-height: 12px;
    font-weight: 500;
    font-size: 13px
}

.form_box .from_group .badge-info {
    color: #fff;
    background-color: #2ec9b8
}

.form_box .from_group .nice_Select {
    line-height: 30px
}

.note-editable {
    background-color: #fef1f2
}

.note-btn-group.note-style {
    display: none
}

.plr_30 {
    padding: 0 30px!important
}

@media(max-width: 767.98px) {
    .plr_30 {
        padding:0 15px!important
    }
}

.mb_8 {
    margin-bottom: 8px!important
}

.mb_7 {
    margin-bottom: 7px!important
}

.ml-10 {
    margin-left: 10px
}

.mb_30 {
    margin-bottom: 30px!important
}

@media(max-width: 575.98px) {
    .lms_block {
        display:block!important
    }
}

@media(max-width: 575.98px) {
    .add_button {
        margin-top:15px;
        margin-left: 0
    }
}

.lms_pagination_wrap {
    margin-top: 30px
}

.lms_pagination_wrap ul li {
    display: inline-block;
    margin: 0 .8px
}

.lms_pagination_wrap ul li a {
    width: 40px;
    height: 40px;
    display: inline-block;
    background: #fff;
    line-height: 40px;
    color: #cec1c2;
    text-align: center;
    border-radius: 3px;
    font-size: 14px
}

.lms_pagination_wrap ul li a.active {
    background: #fe1724;
    color: #fff
}

.lms_pagination_wrap ul li a:hover {
    background: #fe1724;
    color: #fff
}

@media(min-width: 768px) {
    .modal-dialog.custom-modal-dialog {
        max-width:650px
    }
}

@media(min-width: 992px) {
    .modal-dialog.custom-modal-dialog {
        max-width:950px
    }
}

@media(min-width: 1200px) {
    .modal-dialog.custom-modal-dialog {
        max-width:1050px
    }
}

.file_upload {
    border: 1px solid #eee1e2!important;
    padding: 9px 24px;
    border-radius: 3px
}

.file_upload label {
    margin-bottom: 0!important
}

.file_upload .form-group {
    padding: 0;
    margin-bottom: 0
}

.file_upload .btn_file_upload {
    color: #fff;
    padding: 0;
    height: 30px;
    line-height: 30px;
    border: 0;
    display: inline-block
}

.file_upload .btn_file_upload:hover,.file_upload .btn_file_upload:focus {
    color: #888;
    border-color: #888
}

.file_upload .input-file,.file_upload .input-file2 {
    width: .1px;
    height: .1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1
}

.file_upload .input-file+.js-labelFile,.file_upload .input-file+.js-labelFile2,.file_upload .input-file2+.js-labelFile,.file_upload .input-file2+.js-labelFile2 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 10px;
    cursor: pointer
}

.file_upload .btn {
    padding: 0 16px!important;
    border-radius: 5px;
    background-color: #fe1724;
    display: inline-block!important;
    font-size: 14px;
    color: #fff!important;
    border-radius: 30px;
    bottom: 0;
    margin-bottom: 0
}

.file_upload .btn:hover {
    background-color: #2e4765;
    color: #fff;
    border: 0
}

.file_upload .form-group {
    background-color: #fff;
    width: 100%;
    padding: 0;
    border-radius: 5px
}

td:focus,th:focus {
    outline: none!important
}

.mb_20 {
    margin-bottom: 20px
}

.mr_10 {
    margin-right: 10px!important
}

.checkbox_wrap p {
    font-size: 13px;
    font-weight: 300;
    color: #7e7172;
    margin-bottom: 0
}

.lms_checkbox_1 {
    display: inline-block;
    height: 30px;
    position: relative;
    width: 50px;
    margin-bottom: 0;
    margin-right: 15px
}

.lms_checkbox_1 input {
    display: none!important
}

.lms_checkbox_1 .slider-check {
    background-color: #7e7172;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s
}

.lms_checkbox_1 .slider-check.round {
    border-radius: 34px
}

.lms_checkbox_1 .slider-check::before {
    background-color: #222;
    bottom: 5px;
    content: "";
    height: 20px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 20px
}

.lms_checkbox_1 .slider-check.round:before {
    border-radius: 50%
}

.lms_checkbox_1 input:checked+.slider-check {
    background-color: #fef1f2;
    color: #fff;
    content: "oui"
}

.lms_checkbox_1 input:checked+.slider-check:before {
    transform: translateX(20px);
    background: #fe1724
}

.input_wrap label {
    font-size: 12px;
    font-weight: 300;
    color: #222;
    text-align: left;
    margin: 0;
    margin-bottom: 0;
    display: block;
    margin-bottom: 8px
}

@media(min-width: 991px) {
    .medium_modal_width .modal-dialog {
        max-width:780px
    }
}

.list_header_btn_wrapper {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    -ms-justify-content: space-between;
    justify-content: space-between;
    -ms-flex-pack: space-between;
    width: 100%;
    margin-right: 60px
}

@media(max-width: 575.98px) {
    .list_header_btn_wrapper {
        display:block;
        margin-bottom: 15px;
        margin-right: 0
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .list_header_btn_wrapper {
        margin-right:0;
        margin-bottom: 15px
    }
}

@media only screen and (min-width: 768px) and (max-width:991px) {
    .list_header_btn_wrapper {
        margin-right:0;
        display: block
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .list_header_btn_wrapper {
        margin-right:0;
        display: block
    }
}

@media only screen and (min-width: 1200px) and (max-width:1439px) {
    .list_header_btn_wrapper {
        margin-right:30px
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .list_header_block {
        display:block
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .list_header_block .success_faild_btn {
        margin-top:15px
    }
}

@media only screen and (min-width: 1200px) and (max-width:1439px) {
    .list_header_block .serach_field_2 {
        width:300px
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .list_header_block .serach_field_2 {
        width:380%
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .list_header_block .box_right {
        justify-content:space-between
    }
}

.gj-datepicker .fa-calendar-alt {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 14px;
    color: #cec1c2;
    right: 25px
}

.white_box_border {
    border: 1px solid rgba(202,206,213,.7)
}

.nowrap {
    white-space: nowrap
}

.mb-25 {
    margin-bottom: 25px
}

.mb_15 {
    margin-bottom: 15px
}

.mr-10 {
    margin-right: 10px
}

.mr_5 {
    margin-right: 5px
}

.mb_30 {
    margin-bottom: 30px
}

.mt_10px {
    margin-top: 10px
}

.pt_30 {
    padding-top: 30px!important
}

.wrapper .progress {
    margin-bottom: 15px
}

.apexcharts-datalabels-group {
    position: relative;
    top: -13px!important
}

.cs_modal {
    background-color: #fef1f2
}

.cs_modal .modal-header {
    background-color: #f7faff;
    padding: 23px 30px;
    border-bottom: 0 solid transparent
}

.cs_modal .modal-header h5 {
    font-size: 22px;
    font-weight: 600
}

.cs_modal .modal-header span {
    font-size: 14px;
    color: #707070;
    opacity: 1
}

.cs_modal .modal-body {
    padding: 35px 30px
}

.cs_modal .modal-body input,.cs_modal .modal-body .nice_Select {
    height: 50px;
    line-height: 50px;
    padding: 10px 20px;
    border: 1px solid #f1f3f5;
    color: #707070;
    font-size: 14px;
    font-weight: 500;
    background-color: #fff;
    width: 100%
}

.cs_modal .modal-body .nice_Select {
    line-height: 29px
}

.cs_modal .modal-body .nice_Select:after {
    right: 22px
}

.cs_modal .modal-body .nice_Select .list {
    width: 100%
}

.cs_modal .modal-body .form-group {
    margin-bottom: 12px
}

.cs_modal .modal-body textarea {
    height: 168px;
    padding: 15px 20px;
    border: 1px solid #f1f3f5;
    color: #707070;
    font-size: 14px;
    font-weight: 500
}

.cs_modal .modal-body p {
    font-size: 16px;
    font-weight: 500;
    margin-top: 25px;
    color: #707070;
    text-align: center
}

.cs_modal .modal-body p a {
    color: #2e4765
}

.cs_modal .modal-body .btn_1 {
    width: 100%;
    display: block;
    margin-top: 20px
}

.cs_modal .modal-body .social_login_btn .btn_1 {
    color: #fff;
    background-color: #3b5998;
    border: 1px solid #3b5998;
    margin-top: 0
}

.cs_modal .modal-body .social_login_btn .btn_1:hover {
    color: #fff!important
}

.cs_modal .modal-body .social_login_btn .btn_1 i {
    margin-right: 10px
}

.cs_modal .modal-body .social_login_btn .form-group:last-child .btn_1 {
    background-color: #4285f4;
    border: 1px solid #4285f4
}

.cs_modal .modal-body .pass_forget_btn {
    color: #707070;
    margin-top: 20px;
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    display: inline-block
}

.cs_modal .modal-body .pass_forget_btn:hover {
    color: #2e4765
}

.border_style {
    width: 100%;
    display: block;
    text-align: center;
    padding: 13px 0 17px;
    position: relative;
    z-index: 1
}

.border_style span {
    padding: 0 25px;
    text-align: center;
    display: inline-block;
    background-color: #fff
}

.border_style:after {
    position: absolute;
    content: "";
    height: 1px;
    width: 100%;
    background-color: #bbc1c9;
    top: 24px;
    left: 0;
    z-index: -1
}

p a {
    color: #7e7172
}

p a:hover {
    color: #2e4765
}

.cs_check_box {
    display: flex;
    margin-top: 20px
}

.cs_check_box input,.cs_check_box label {
    line-height: 20px!important;
    height: auto!important;
    width: auto!important;
    max-width: auto
}

.cs_check_box .common_checkbox {
    display: none
}

.cs_check_box label {
    position: relative;
    padding-left: 34px;
    margin-bottom: 0
}

.cs_check_box .common_checkbox+label {
    display: block;
    cursor: pointer;
    color: #7e7172
}

.cs_check_box .common_checkbox+label:after {
    position: absolute;
    left: 0;
    top: 0;
    height: 20px;
    width: 20px;
    border: 1px solid #7e7172;
    border-radius: 5px;
    content: ""
}

.cs_check_box .common_checkbox:checked+label:after {
    content: '\f00c';
    font-family: 'font awesome\ 5 free';
    font-weight: 900;
    padding: 2px;
    font-size: 12px;
    line-height: 15px;
    text-align: center
}

.cs_check_box .common_checkbox {
    display: none!important
}

.hide_pils.dropdown-toggle::after {
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
    border: 0!important
}

.mr_20 {
    margin-right: 20px
}

@media(max-width: 575.98px) {
    .mb-sm-15 {
        margin-bottom:15px
    }
}

.heading_6 {
    font-size: 14px;
    font-weight: 600;
    font-family: nunito,sans-serif;
    color: #2e4765;
    margin-bottom: 0
}

.card_height_100 {
    height: calc(100% - 20px)
}

.card_height_50 {
    height: calc(50% - 30px)
}

.page-item.active .page-link {
    background-color: #2d1967;
    border-color: #2d1967
}

.page-item.active .page-link:hover {
    color: #fff;
    background-color: #2d1967e6;
    border-color: #2d1967e6
}

.page-link {
    color: #2d1967
}

.page-link:hover {
    color: #fff;
    background-color: #2d1967e6;
    border-color: #2d1967e6
}

.btn-primary {
    color: #fff;
    background-color: #2d1967;
    border-color: #2d1967
}

.btn-primary:hover {
    color: #fff;
    background-color: #2d1967e6;
    border-color: #2d1967e6
}

@media(max-width: 991px) {
    .sm_padding_15px {
        padding:15px!important
    }
}

.dashboard_header .dashboard_header_title h3 {
    font-size: 33px;
    font-weight: 600;
    color: #2e4765;
    margin-bottom: 7px
}

.dashboard_header .dashboard_header_title h3 span {
    color: #2d1967
}

.dashboard_header .dashboard_header_title p {
    font-size: 20px;
    font-weight: 400;
    color: #7f8b9f
}

@media(max-width: 991px) {
    .dashboard_breadcam {
        text-align:left!important;
        padding-top: 10px!important
    }
}

.dashboard_breadcam ul {
    display: flex;
    align-items: center;
    justify-content: flex-end
}

.dashboard_breadcam ul li {
    font-size: 17px;
    font-weight: 400;
    color: #2d1967;
    padding-left: 14px;
    position: relative
}

.dashboard_breadcam ul li:first-child {
    padding-left: 0
}

.dashboard_breadcam ul li:first-child::before {
    display: none
}

.dashboard_breadcam ul li::before {
    color: #2d1967;
    content: "/";
    position: absolute;
    left: 4px;
    top: 50%;
    transform: translateY(-50%)
}

.dashboard_breadcam ul li a {
    width: 30px;
    height: 30px;
    background: #ffe7df;
    border-radius: 50%;
    display: inline-block;
    line-height: 26px;
    text-align: center;
    margin-right: 10px
}

.dashboard_breadcam ul li a img {
    line-height: 30px
}

.header_prise h4 {
    font-size: 18px;
    font-weight: 700;
    color: #000;
    margin-bottom: 0
}

.header_prise h5 {
    font-size: 16px;
    font-weight: 500;
    color: #2d1967;
    margin-bottom: 0
}

.pink_bg {
    background: #fe80b2!important
}

.parpel_bg {
    background: #833cdf!important
}

.map-js-height {
    height: 450px
}

@media(max-width: 1365.98px) {
    .map-js-height {
        height:350px
    }
}

.border_radius_0 {
    border-radius: 0!important
}

.white_bg {
    background: #fff
}

.border_1px {
    border: 1px solid #eee
}

.card_footer {
    padding: 50px;
    border-top: 1px solid #f2f4ff;
    position: relative;
    overflow: hidden
}

.SubTitle {
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding-bottom: 5px;
    margin-bottom: 8px;
    font-size: 18px
}

.p-20 {
    padding: 20px
}

.bg-primary {
    background-color: #4c2fbf!important;
    color: #fff
}

.bg-secondary {
    background-color: #2e9de4!important;
    color: #fff
}

.bg-success {
    background-color: #80cf00!important;
    color: #fff
}

.bg-info {
    background-color: #06b5dd!important;
    color: #fff
}

.bg-warning {
    background-color: #ffc717!important;
    color: #fff
}

.bg-danger {
    background-color: #fd517d!important;
    color: #fff
}

.bg-light {
    background-color: #f8f5fd!important;
    color: #fff
}

.bg-dark {
    background-color: #2c323f!important;
    color: #fff
}

.color-box>div>div {
    border-radius: 15px
}

.m-b-10 {
    margin-bottom: 10px
}

.btn-light {
    border: 1px solid #e8ecf4
}

.font-size-10 {
    font-size: 10px!important
}

.text-primary {
    color: #5664d2!important
}

.font-size-14 {
    font-size: 14px!important
}

.line-height-2 {
    line-height: 2
}

.text_white {
    color: #fff
}

.f_w_400 {
    font-weight: 400
}

.f_w_700 {
    font-weight: 700
}

.f_s_11 {
    font-size: 11px
}

.f_s_12 {
    font-size: 12px
}

.f_s_13 {
    font-size: 13px
}

.f_s_14 {
    font-size: 14px
}

.f_s_15 {
    font-size: 15px
}

.f_s_16 {
    font-size: 16px
}

.f_s_18 {
    font-size: 18px
}

.f_s_19 {
    font-size: 19px
}

.f_s_20 {
    font-size: 20px!important
}

.f_s_17 {
    font-size: 17px
}

.f_s_28 {
    font-size: 28px
}

.f_s_40 {
    font-size: 40px
}

.f_s_60 {
    font-size: 60px
}

.ml_25 {
    margin-left: 25px
}

.ml_15 {
    margin-left: 15px
}

.color_theme {
    color: #14256a
}

.color_theme2 {
    color: #101038
}

.color_gray {
    color: #8890b5
}

.color_gray2 {
    color: #b1b6c9
}

.pulse .pulse-ring {
    display: block;
    border-radius: 40px;
    height: 40px;
    width: 40px;
    position: absolute;
    -webkit-animation: animation-pulse 3.5s ease-out;
    animation: animation-pulse 3.5s ease-out;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    opacity: 0;
    border-width: 3px;
    border-style: solid;
    border-color: #e4e6ef
}

.pulse .pulse-ring.notification_count_pulse {
    right: -18px;
    top: -14px
}

.pulse.pulse-primary .pulse-ring {
    border-color: rgba(54,153,255,.75)
}

.pulse.pulse-secondary .pulse-ring {
    border-color: rgba(228,230,239,.75)
}

.pulse.pulse-success .pulse-ring {
    border-color: rgba(27,197,189,.75)
}

.pulse.pulse-info .pulse-ring {
    border-color: rgba(137,80,252,.75)
}

.pulse.pulse-warning .pulse-ring {
    border-color: rgba(255,168,0,.75)
}

.pulse.pulse-danger .pulse-ring {
    border-color: rgba(246,78,96,.75)
}

.pulse.pulse-light .pulse-ring {
    border-color: rgba(243,246,249,.75)
}

.pulse.pulse-dark .pulse-ring {
    border-color: rgba(24,28,50,.75)
}

.pulse.pulse-white .pulse-ring {
    border-color: rgba(255,255,255,.75)
}

.pulse.theme_color .pulse-ring {
    border-color: rgba(255,255,255,.75)
}

@-webkit-keyframes animation-pulse {
    0% {
        -webkit-transform: scale(.1,.1);
        opacity: 0
    }

    60% {
        -webkit-transform: scale(.1,.1);
        opacity: 0
    }

    65% {
        opacity: 1
    }

    100% {
        -webkit-transform: scale(1.2,1.2);
        opacity: 0
    }
}

@keyframes animation-pulse {
    0% {
        -webkit-transform: scale(.1,.1);
        opacity: 0
    }

    60% {
        -webkit-transform: scale(.1,.1);
        opacity: 0
    }

    65% {
        opacity: 1
    }

    100% {
        -webkit-transform: scale(1.2,1.2);
        opacity: 0
    }
}

.header_more_tool .dropdown .dropdown-toggle::after {
    display: none!important
}

.header_more_tool .dropdown span {
    padding-left: 0
}

.header_more_tool .dropdown span i {
    font-size: 12px;
    font-weight: 400;
    display: inline-block;
    color: #9aa5ce;
    position: relative;
    top: -1px;
    margin-right: 0
}

.header_more_tool .dropdown .dropdown-menu {
    border: 0;
    margin: 0;
    padding: 0;
    font-size: 13px;
    top: 5px!important;
    border-radius: 5px;
    -webkit-box-shadow: 0 0 20px 0 rgba(80,143,244,.2);
    -moz-box-shadow: 0 0 20px 0 rgba(80,143,244,.2);
    box-shadow: 0 0 20px 0 rgba(80,143,244,.2)
}

.header_more_tool .dropdown .dropdown-menu a {
    padding: 8px 15px;
    font-size: 13px
}

.header_more_tool .dropdown .dropdown-menu a:hover {
    color: #59748a
}

.header_more_tool .dropdown .dropdown-menu a:hover i {
    color: #59748a
}

.header_more_tool .dropdown .dropdown-menu a i {
    font-size: 13px;
    vertical-align: middle;
    position: relative;
    top: -3px;
    margin-right: 5px
}

.common_input input {
    height: 40px;
    line-height: 40px;
    background-color: #f5f6ff;
    border: 0;
    padding: 10px 25px;
    color: #8890b5;
    font-weight: 700;
    font-size: 14px;
    width: 100%;
    display: block;
    border-radius: 5px
}

.common_input input::placeholder {
    color: #7e7172;
    font-weight: 300;
    opacity: 1;
    background: #f5f6ff
}

.nav-link-notify {
    position: relative
}

.nav-link-notify:before {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    right: -7px;
    border-radius: 50%;
    top: -10px;
    background-color: #64c5b1;
    -webkit-animation: notify-pulse 1s infinite
}

@-webkit-keyframes notify-pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(100,197,177,.7)
    }

    100% {
        box-shadow: 0 0 0 10px transparent
    }
}

@keyframes notify-pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(100,197,177,.7)
    }

    100% {
        box-shadow: 0 0 0 10px transparent
    }
}

#back-top {
    position: fixed;
    right: 20px;
    bottom: 30px;
    cursor: pointer;
    z-index: 9999999;
    display: none
}

#back-top a {
    display: inline-block;
    height: 40px;
    width: 40px;
    text-align: center;
    display: block;
    color: #fff;
    line-height: 40px;
    background: #4c6ef8;
    font-size: 15px;
    border-radius: 30px;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    -webkit-box-shadow: 0 10px 20px 0 rgba(76,110,248,.4);
    -moz-box-shadow: 0 10px 20px 0 rgba(76,110,248,.4);
    box-shadow: 0 10px 20px 0 rgba(76,110,248,.4)
}

.img-thumbnail {
    background-color: #f5f6ff!important;
    border: 1px solid #f5f6ff!important;
    border-radius: 20px!important
}

.default_border_1px {
    border: 1px solid #e0e2e8;
    box-shadow: none!important
}

.shadow_none {
    box-shadow: none!important
}

@media(max-width: 575.98px) {
    .sm_w_100 {
        width:100%
    }
}

.btn_1 {
    background-color: #567aed;
    border: 1px solid #567aed;
    color: #fff;
    display: inline-block;
    padding: 11px 25px;
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 400;
    border-radius: 5px;
    white-space: nowrap;
    -webkit-transition: .5s;
    transition: .5s
}

.btn_1 i {
    font-size: 15px;
    padding-right: 7px
}

.btn_1:hover {
    color: #fff;
    background-color: #567aed;
    box-shadow: 0 3px 11px #508ff4
}

.btn_1.light {
    background-color: rgba(46,71,101,.1);
    border: 1px solid transparent;
    color: #2e4765
}

.btn_1.green {
    background-color: rgba(46,201,184,.1);
    border: 1px solid transparent;
    color: #2ec9b8
}

.btn_1.orange_btn {
    background: #2d1967;
    font-size: 16px;
    border: 0;
    font-weight: 400;
    padding: 22px 29px
}

.btn_1.orange_btn:hover {
    background: #2d1967;
    color: #fff
}

.btn_1.sm {
    font-size: 12px;
    padding: 6px 15px
}

.btn_1.big_btn {
    padding: 11px 36px
}

.btn_1.form_big_btn_1 {
    padding: 16px 62px!important
}

@media(max-width: 575.98px) {
    .btn_1.form_big_btn_1 {
        padding:16px 30px!important
    }
}

.btn_1.big_btn2 {
    padding: 11px 37px
}

.Euro_btn {
    background-color: #f5f6ff;
    color: #fff;
    display: inline-block;
    padding: 11px 43px;
    text-transform: capitalize;
    line-height: 16px;
    font-size: 23px;
    font-weight: 700;
    border-radius: 5px;
    white-space: nowrap;
    -webkit-transition: .5s;
    transition: .5s;
    color: #9267ff
}

.Euro_btn:hover {
    background-color: #9267ff;
    color: #000
}

.btn_2 {
    color: #64c5b1;
    border: 1px solid #64c5b1;
    display: inline-block;
    padding: 11px 23px;
    text-transform: capitalize;
    line-height: 16px;
    font-size: 13px;
    font-weight: 500;
    border-radius: 5px;
    background-color: transparent;
    white-space: nowrap;
    -webkit-transition: .5s;
    transition: .5s
}

.btn_2:hover {
    background-color: #64c5b1;
    border: 1px solid #64c5b1;
    color: #fff
}

.btn_3 {
    color: #14256a;
    border: 1px solid #e4e8ec;
    display: inline-block;
    padding: 11px 27px;
    text-transform: capitalize;
    line-height: 16px;
    font-size: 13px;
    font-weight: 500;
    border-radius: 5px;
    background-color: #fff;
    white-space: nowrap;
    -webkit-transition: .5s;
    transition: .5s
}

.btn_3.border_color_1 {
    border: 1px solid #eee1e2
}

.btn_3:hover {
    background-color: #2e4765;
    border: 1px solid #2e4765;
    color: #fff
}

.btn_4 {
    display: inline-block;
    border: 1px solid #e4e8ec;
    border-radius: 5px;
    color: #7e7172;
    text-align: center;
    padding: 9px 15px;
    line-height: 20px;
    font-size: 13px;
    font-weight: 300;
    -webkit-transition: .5s;
    transition: .5s
}

.btn_4:hover {
    background-color: #2e4765;
    border: 1px solid #2e4765;
    color: #fff
}

.btn_5 {
    border: 1px solid #fff;
    display: inline-block;
    padding: 16px 26px!important;
    text-transform: capitalize;
    line-height: 16px;
    font-size: 13px;
    font-weight: 500;
    border-radius: 5px;
    background-color: #fff;
    white-space: nowrap;
    -webkit-transition: .5s;
    transition: .5s;
    background: #fff!important;
    text-shadow: none!important;
    opacity: 1;
    color: #222
}

.btn_5:hover {
    background-color: #2e4765!important;
    border: 1px solid #2e4765!important;
    color: #fff;
    opacity: 1!important
}

.btn_5.small_btn {
    padding: 11px 26px!important
}

@media(max-width: 575.98px) {
    .btn_5.small_btn {
        padding:11px 19px!important
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .btn_5.small_btn {
        padding:11px 19px!important
    }
}

.btn_6 {
    color: #14256a;
    border: 1px solid #eee1e2;
    display: inline-block;
    padding: 11px 25px;
    text-transform: capitalize;
    line-height: 16px;
    font-size: 13px;
    font-weight: 500;
    border-radius: 5px;
    background-color: #fff;
    white-space: nowrap;
    -webkit-transition: .5s;
    transition: .5s
}

.btn_6:hover {
    background-color: #2e4765;
    border: 1px solid #2e4765;
    color: #fff
}

.sm_btn {
    line-height: 15px;
    background-color: #fff;
    height: 34px;
    padding: 9px 20px;
    color: #212e40;
    width: 150px;
    text-transform: capitalize;
    border: 1px solid #eee1e2
}

.view_archive_btn {
    border: 1px solid #e4e8ec;
    color: #7e7172;
    padding: 16px 30px;
    display: inline-block;
    width: 100%;
    text-align: center;
    line-height: 16px;
    background-color: #fff;
    -webkit-transition: .5s;
    transition: .5s
}

.view_archive_btn i {
    margin-right: 15px
}

.view_archive_btn:hover {
    color: #2e4765;
    border: 1px solid #2e4765
}

.white_btn {
    display: inline-block;
    color: #7e7172;
    font-size: 12px;
    font-weight: 400;
    background: #fff;
    transition: .3s;
    padding: 6px 20px;
    border-radius: 3px
}

.white_btn:hover {
    background: #2d1967;
    color: #fff
}

.default_btn {
    display: inline-block;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    background: #2d1967;
    transition: .3s;
    padding: 15px 25px;
    border-radius: 3px
}

.default_btn:hover {
    color: #fff
}

.close.white_btn2 {
    border: 1px solid #fff;
    display: inline-block;
    padding: 16px 26px!important;
    text-transform: capitalize;
    line-height: 16px;
    font-size: 13px;
    font-weight: 500;
    border-radius: 5px;
    background-color: #fff;
    white-space: nowrap;
    -webkit-transition: .5s;
    transition: .5s;
    background: #fff!important;
    text-shadow: none!important;
    opacity: 1;
    color: #222;
    margin-right: 10px
}

.close.white_btn2:hover {
    background-color: #2e4765!important;
    border: 1px solid #2e4765!important;
    color: #fff;
    opacity: 1!important
}

.white_btn3 {
    border: 1px solid #fff;
    display: inline-block;
    padding: 14px 30px!important;
    text-transform: capitalize;
    line-height: 16px;
    font-size: 13px;
    font-weight: 500;
    border-radius: 5px;
    background-color: #fff;
    white-space: nowrap;
    -webkit-transition: .3s;
    transition: .3s;
    background: #fff!important;
    text-shadow: none!important;
    opacity: 1;
    color: #101038;
    box-shadow: 0 3px 11px rgba(0,0,0,.17)
}

.white_btn3:hover {
    background-color: #567aed!important;
    border: 1px solid #567aed!important;
    color: #fff;
    opacity: 1!important
}

.status_btn {
    display: inline-block;
    padding: 2px 15px;
    font-size: 11px;
    font-weight: 300;
    color: #fff!important;
    background: #05d34e;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    text-transform: capitalize;
    white-space: nowrap;
    min-width: 70px;
    text-align: center
}

.status_btn.yellow_btn {
    background: #ffba00
}

.status_btn:hover {
    color: #fff
}

.dropdown .dropdown-toggle.lms_drop_1 {
    background: #fff;
    padding: 4px 15px;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 300;
    text-transform: capitalize;
    text-align: left;
    color: #7e7172;
    display: inline-block;
    width: 102px;
    border: 0;
    border: 1px solid #eee1e2;
    position: relative;
    transition: .3s
}

.dropdown .dropdown-toggle.lms_drop_1::after {
    content: "\f0d7";
    font-family: "font awesome 5 free";
    position: absolute;
    right: 0;
    top: 12px;
    color: #cec1c2;
    font-size: 12px;
    font-weight: 900;
    margin: 0;
    padding: 0;
    border: 0;
    border: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 14px
}

.dropdown .dropdown-toggle.lms_drop_1.lms_drop_2 {
    min-width: 140px
}

.dropdown.show .dropdown-toggle.lms_drop_1 {
    background: #2d1967;
    padding: 4px 15px;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 300;
    text-transform: capitalize;
    text-align: left;
    color: #7e7172;
    display: inline-block;
    width: 102px;
    border: 0;
    color: #fff;
    border: 1px solid #2d1967
}

.dropdown.show .dropdown-toggle.lms_drop_1::after {
    content: "\f0d8"
}

.dropdown .dropdown-menu {
    border: 0;
    border: 1px solid #eee1e2;
    padding: 12px 0 20px;
    margin: 0;
    border-radius: 0!important
}

.dropdown .dropdown-menu .dropdown-item {
    font-size: 12px;
    font-weight: 300;
    padding: 4px 20px;
    color: #7f7778
}

.dropdown .dropdown-menu .dropdown-item:hover {
    color: #2d1967;
    background: 0 0
}

.dropdown .dropdown-menu.dropdown-menu-w140 {
    min-width: 140px
}

.white_btn_line {
    white-space: nowrap;
    height: 50px;
    background: 0 0;
    margin-left: 10px;
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    border: 0;
    padding: 0 19px;
    border-radius: 3px;
    border: 1px solid #eee1e2;
    color: #7e7172;
    transition: .3s
}

.white_btn_line i {
    font-size: 13px;
    color: #7e7172;
    margin-right: 6px
}

.white_btn_line:hover {
    background: #2d1967;
    color: #fff;
    border: 1px solid #2d1967
}

.white_btn_line:hover i {
    color: #fff;
    transition: .3s
}

.white_btn_line2 {
    white-space: nowrap;
    height: 30px;
    background: 0 0;
    font-size: 12px;
    font-weight: 300;
    display: inline-block;
    text-transform: capitalize;
    border: 0;
    border: 1px solid #eee1e2;
    color: #7e7172;
    transition: .3s;
    border-radius: 30px;
    line-height: 28px;
    padding: 0 18px
}

.white_btn_line2:hover {
    background: #2d1967;
    color: #fff!important;
    border: 1px solid #2d1967
}

.white_btn_line2:hover i {
    color: #fff;
    transition: .3s
}

.theme_text_btn {
    font-size: 14px;
    color: #46d293;
    font-weight: 700
}

.theme_text_btn:hover {
    color: #46d293
}

table.dataTable.dtr-inline.collapsed>tbody>tr[role=row]>td:first-child::before,table.dataTable.dtr-inline.collapsed>tbody>tr[role=row]>th:first-child::before {
    z-index: 9;
    top: 50%;
    transform: translateY(-50%);
    content: "\e61a";
    font-family: themify;
    font-size: 8px;
    line-height: 14px;
    font-weight: 600;
    background-color: #fef1f2;
    box-shadow: 6px 6px 12px rgba(0,0,0,.08),-6px -6px 12px #fff
}

table.dataTable.dtr-inline.collapsed>tbody>tr.parent>td:first-child::before,table.dataTable.dtr-inline.collapsed>tbody>tr.parent>th:first-child::before {
    content: "\e622";
    box-shadow: inset 6px 6px 12px rgba(0,0,0,.08),inset -6px -6px 12px #fff
}

.CRM_dropdown.dropdown .dropdown-toggle {
    background: 0 0;
    color: #415094;
    font-size: 13px;
    font-weight: 500;
    border: 1px solid #7c32ff;
    border-radius: 32px;
    padding: 5px 20px;
    text-transform: uppercase;
    overflow: hidden;
    transition: .3s
}

.CRM_dropdown.dropdown .dropdown-toggle:after {
    content: "\e62a";
    font-family: themify;
    border: none;
    border-top-color: currentcolor;
    border-top-style: none;
    border-top-width: medium;
    border-top: 0;
    font-size: 10px;
    position: relative;
    top: 3px;
    left: 0;
    font-weight: 600;
    transition: .3s
}

.CRM_dropdown.dropdown .dropdown-toggle:hover,.CRM_dropdown.dropdown .dropdown-toggle:focus {
    color: #fff;
    border: 1px solid transparent;
    box-shadow: none
}

.CRM_dropdown.dropdown .dropdown-menu {
    border-radius: 5px 5px 10px 10px;
    border: 0;
    padding: 15px 0;
    box-shadow: 0 10px 20px rgba(108,39,255,.3)
}

.CRM_dropdown.dropdown .dropdown-menu .dropdown-item {
    color: #828bb2;
    text-align: right;
    font-size: 12px;
    padding: 4px 1.5rem;
    text-transform: uppercase;
    cursor: pointer
}

.CRM_dropdown.dropdown .dropdown-menu .dropdown-item:hover {
    color: #2e4765
}

.dropdown-menu.option_width_8 {
    min-width: 150px
}

.header_iner {
    background-color: #fff;
    position: fixed;
    top: 0;
    z-index: 99;
    padding: 30px;
    position: relative;
    border-radius: 0;
    margin: 0;
    background: #fff;
    border-radius: 0
}

.header_iner.default_header {
    background: #64c5b1;
    border-radius: 0
}

@media(max-width: 575.98px) {
    .header_iner {
        justify-content:flex-end!important
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .header_iner {
        justify-content:flex-end!important
    }
}

@media(max-width: 991px) {
    .header_iner {
        padding:20px;
        margin: 0
    }
}

@media(max-width: 575.98px) {
    .header_iner {
        margin:0
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .header_iner {
        margin:0
    }
}

.header_iner .page_tittle h3 {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    color: #222;
    margin-bottom: 2px
}

@media(max-width: 991px) {
    .header_iner .page_tittle h3 {
        margin-right:15px
    }
}

.header_iner .page_tittle .page_subtitle {
    font-size: 12px;
    font-weight: 300;
    color: #7e7172;
    margin-bottom: 0
}

.header_iner .page_tittle .page_subtitle .page_subtitle_inenr {
    color: #7e7172
}

.header_iner .page_tittle .page_subtitle .page_subtitle_inenr.active_subcat {
    color: #fe1724;
    white-space: nowrap
}

.header_iner .page_tittle .page_subtitle .page_subtitle_inenr i {
    margin-left: 10px;
    margin-right: 7px;
    font-size: 12px
}

.header_iner .page_tittle .page_subtitle .page_subtitle_inenr svg {
    position: relative;
    margin: 0 7px 0 10px;
    top: -1px
}

@media(max-width: 575.98px) {
    .header_iner .page_tittle .page_subtitle .page_subtitle_inenr svg {
        margin:0 2px
    }
}

.header_iner .btn_1 {
    margin: 0 30px
}

@media(max-width: 991px) {
    .header_iner .notification {
        margin:0 10px
    }
}

.header_iner .notification i {
    color: #707070;
    position: relative;
    font-size: 20px
}

.header_iner .notification i:after {
    position: absolute;
    content: "";
    right: -1px;
    top: 0;
    height: 9px;
    width: 9px;
    background-color: #2e4765;
    border-radius: 50%
}

@media(max-width: 767.98px) {
    .header_iner .serach_field-area {
        display:none!important
    }
}

@media only screen and (min-width: 768px) and (max-width:991px) {
    .header_iner .serach_field-area {
        width:auto;
        left: 40px
    }
}

@media only screen and (min-width: 768px) and (max-width:991px) {
    .header_iner .serach_field-area {
        width:auto;
        margin-right: 70px
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .header_iner .serach_field-area {
        width:auto;
        margin-right: 70px
    }
}

.header_iner .header_right .header_notification_warp {
    margin-right: 50px;
    margin-left: 40px
}

@media(max-width: 575.98px) {
    .header_iner .header_right .header_notification_warp {
        margin-right:25px;
        margin-left: 20px
    }
}

@media only screen and (min-width: 768px) and (max-width:991px) {
    .header_iner .header_right .header_notification_warp {
        margin-right:35px;
        margin-left: 25px
    }
}

.header_iner .header_right .header_notification_warp li {
    display: inline-block;
    position: relative
}

.header_iner .header_right .header_notification_warp li:last-child a {
    margin-right: 0
}

.header_iner .header_right .header_notification_warp li>a {
    position: relative;
    margin-right: 29px
}

.header_iner .header_right .header_notification_warp li>a img {
    width: 17px
}

.header_iner .header_right .header_notification_warp li>a span {
    position: absolute;
    width: 16px;
    height: 16px;
    text-align: center;
    color: #fff;
    display: inline-block;
    background: #fff;
    font-size: 0;
    border-radius: 50%;
    right: -10px;
    top: -15px;
    text-indent: -9999999999999999999999px
}

@media(max-width: 575.98px) {
    .header_iner .header_right .select_style {
        display:none!important
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .header_iner .header_right .select_style {
        display:none!important
    }
}

.header_iner .nice_Select {
    color: #929bb5
}

.profile_info {
    position: relative
}

.profile_info img {
    max-width: 42px;
    max-height: 42px;
    border-radius: 50%;
    cursor: pointer
}

@media(max-width: 991px) {
    .profile_info img {
        max-width:30px
    }
}

.profile_info .profile_info_iner {
    position: absolute;
    right: 0;
    background-color: #fff;
    text-align: left;
    width: 215px;
    padding: 0;
    opacity: 0;
    visibility: hidden;
    top: 77px;
    -webkit-transition: .5s;
    transition: .5s;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px
}

.profile_info .profile_info_iner::before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    top: -10px;
    right: 15px;
    border-width: 0 11px 12px;
    border-color: transparent transparent #567aed transparent;
    z-index: 2
}

.profile_info .profile_info_iner .profile_author_name {
    padding: 20px 25px;
    background: #567aed;
    border-radius: 10px 15px 0 0
}

.profile_info .profile_info_iner a {
    display: block
}

.profile_info .profile_info_iner p {
    font-size: 16px;
    font-weight: 400;
    color: #fff
}

.profile_info .profile_info_iner h5 {
    font-size: 20px;
    color: #fff;
    font-weight: 600
}

.profile_info:hover .profile_info_iner {
    opacity: 1;
    visibility: visible;
    top: 77px
}

.profile_info .profile_info_details {
    padding: 20px 25px
}

.profile_info .profile_info_details a {
    color: #2e4765;
    font-size: 14px;
    display: block;
    padding: 10px 0;
    font-weight: 400
}

.profile_info .profile_info_details a:hover {
    color: #2e4765
}

.profile_info .profile_info_details a:hover i {
    color: #2e4765
}

.profile_info .profile_info_details i {
    color: #2e4765;
    font-size: 12px;
    margin-left: 20px;
    -webkit-transition: .5s;
    transition: .5s
}

.sidebar_icon {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: auto;
    left: 20px
}

@media(max-width: 575.98px) {
    .sidebar_icon {
        right:auto;
        left: 20px
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .sidebar_icon {
        right:auto;
        left: 20px
    }
}

.sidebar_icon i {
    font-size: 20px;
    color: #101038;
    cursor: pointer
}

.serach_field-area {
    width: 310px;
    position: relative
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .serach_field-area {
        width:310px
    }
}

.serach_field-area .search_inner {
    width: 100%
}

.serach_field-area .search_inner input {
    color: #86898e;
    font-size: 12px;
    height: 40px;
    width: 100%;
    padding-left: 50px;
    border: 0;
    padding-right: 15px;
    background: 0 0;
    border-radius: 30px;
    border: 0;
    border: 1px solid rgba(100,197,177,.6);
    font-weight: 400
}

.serach_field-area .search_inner input::placeholder {
    font-size: 12px;
    font-weight: 400;
    color: #86898e;
    font-family: nunito,sans-serif
}

.serach_field-area .search_inner input:focus {
    outline: none
}

.serach_field-area .search_inner button {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: 0 0;
    font-size: 12px;
    border: 0;
    padding-left: 20px;
    padding-right: 13px
}

.serach_field-area .search_inner button i {
    font-size: 14px;
    color: #818e94
}

.serach_field-area2 {
    width: 480px;
    position: relative
}

@media(max-width: 991px) {
    .serach_field-area2 {
        width:auto
    }
}

.serach_field-area2 .search_inner input {
    color: #000;
    font-size: 17px;
    height: 55px;
    width: 100%;
    padding-left: 82px;
    border: 0;
    padding-right: 15px;
    border-bottom: 1px solid #f4f7fc;
    background: #f5f7fd;
    border-radius: 30px
}

.serach_field-area2 .search_inner input::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #818e94;
    font-family: nunito,sans-serif
}

.serach_field-area2 .search_inner input:focus {
    outline: none
}

.serach_field-area2 .search_inner button {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: 0 0;
    font-size: 12px;
    border: 0;
    padding-left: 40px;
    padding-right: 11px
}

.serach_field-area2 .search_inner button i {
    font-size: 14px;
    color: #818e94
}

.serach_field_2 {
    width: 430px;
    position: relative;
    margin-right: 0
}

@media(max-width: 575.98px) {
    .serach_field_2 {
        width:100%
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .serach_field_2 {
        width:190px
    }
}

@media only screen and (min-width: 768px) and (max-width:991px) {
    .serach_field_2 {
        width:230px
    }
}

@media(min-width: 992px) and (max-width:1199.98px) {
    .serach_field_2 {
        width:300px
    }
}

.serach_field_2 .search_inner input {
    color: #000;
    font-size: 13px;
    height: 40px;
    width: 100%;
    border-radius: 5px;
    padding-left: 55px;
    border: 1px solid #2d1967;
    padding-right: 15px
}

.serach_field_2 .search_inner input::placeholder {
    font-size: 13px;
    font-weight: 300;
    color: #7e7172
}

.serach_field_2 .search_inner input:focus {
    outline: none
}

.serach_field_2 .search_inner button {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: 0 0;
    font-size: 12px;
    border: 0;
    padding-left: 19px;
    padding-right: 11px
}

.serach_field_2 .search_inner button i {
    font-size: 12px;
    color: #2d1967
}

.serach_field_2 .search_inner button::before {
    position: absolute;
    width: 1px;
    height: 24px;
    content: '';
    background: #2d1967;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 0
}

table.dataTable {
    width: 100%!important;
    margin: 0 auto;
    clear: both;
    border-collapse: separate;
    border-spacing: 0
}

.table td,.table th {
    padding: .75rem;
    vertical-align: top;
    border-top: 0!important
}

#calendar {
    width: 100%;
    height: 800px
}

.fc-day-grid-event .fc-content {
    white-space: nowrap;
    overflow: hidden;
    height: 25px;
    line-height: 25px;
    padding: 0 10px;
    color: #fff;
    font-size: 12px;
    text-transform: capitalize;
    font-weight: 700
}

.sidebar {
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 99;
    padding-bottom: 50px;
    position: fixed;
    width: 270px;
    z-index: 999;
    overflow: hidden;
    overflow-y: auto;
    transition: .5s;
    background: #fff;
    box-shadow: 0 12px 30px rgba(80,143,244,.1)
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .sidebar.hide_vertical_menu {
        left:-20%
    }
}

@media(min-width: 1201px) {
    .sidebar.hide_vertical_menu {
        left:-270px
    }
}

@media(max-width: 991px) {
    .sidebar {
        left:-280px;
        -webkit-transition: .5s;
        transition: .5s;
        top: 0;
        width: 280px;
        background: #fff
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .sidebar {
        width:20%
    }
}

.sidebar .logo {
    margin: 30px;
    background: #fff;
    border-radius: 7px;
    padding-bottom: 20px
}

.sidebar .logo img {
    width: 100%
}

@media(max-width: 991px) {
    .sidebar .logo {
        padding:30px
    }
}

.sidebar .single_sidebar_tittle i {
    font-size: 18px;
    margin-right: 12px;
    color: #f8dbdd;
    -webkit-transition: .5s;
    transition: .5s
}

.sidebar .single_sidebar_tittle a {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #222;
    padding: 10px 25px 10px 40px;
    width: 100%;
    display: flex;
    align-items: center;
    transition: .3s;
    position: relative;
    z-index: 0;
    border-top: 1px solid transparent;
    background: 0 0
}

.sidebar .single_sidebar_tittle a::before {
    position: absolute;
    right: 0;
    background: #2e4765;
    width: 0;
    top: 0;
    bottom: 0;
    content: '';
    opacity: 0;
    transition: .3s;
    right: 0;
    visibility: hidden
}

.sidebar .single_sidebar_tittle a.current_active i {
    color: #2e4765
}

.sidebar .single_sidebar_tittle a.current_active::before {
    opacity: 1;
    width: 3px;
    visibility: visible
}

.sidebar .single_sidebar_tittle a:hover::before {
    opacity: 1;
    right: 0;
    visibility: visible;
    width: 3px
}

.sidebar .single_sidebar_tittle a.normal_title {
    padding: 28px 25px 18px 40px;
    background: #fff7f8;
    border-top: 1px solid #eee1e2
}

.sidebar .single_sidebar_tittle a.normal_title:after {
    position: absolute;
    right: 40px;
    top: 55%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    content: "\f0d8";
    font-family: "font awesome 5 free";
    color: #cec1c2;
    font-weight: 600;
    font-size: 14px
}

.sidebar .single_sidebar_tittle a.normal_title.collapsed {
    padding: 10px 25px 10px 40px;
    background: #fff;
    border-top: 1px solid transparent
}

.sidebar .single_sidebar_tittle a.normal_title.collapsed:after {
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    content: "\f0d7";
    font-family: "font awesome 5 free";
    color: #cec1c2;
    font-weight: 600;
    font-size: 14px
}

.sidebar .single_sidebar_tittle:hover {
    background-color: #192434
}

.sidebar .single_sidebar_tittle:hover i {
    color: #2e4765
}

.sidebar .single_menu_item {
    padding-left: 36px;
    margin: 6px 0;
    line-height: 21px
}

.sidebar .single_menu_item:hover {
    padding-left: 55px!important
}

.sidebar .sidebar_iner ul li {
    list-style: none
}

.sidebar .sidebar_iner ul li .submenu {
    background: #fff7f8;
    padding: 0 0 0 70px!important;
    border-bottom: 1px solid #eee1e2
}

.sidebar .sidebar_iner ul li .submenu li a {
    font-size: 13px;
    line-height: 36px;
    color: #7e7172;
    font-weight: 400
}

.sidebar .sidebar_iner ul li .submenu li:last-child {
    padding-bottom: 18px
}

@media(max-width: 991px) {
    .active_sidebar {
        left:0;
        box-shadow: 0 5px 20px rgba(0,0,0,.2)
    }
}

.sidebar_close_icon i {
    width: 40px;
    height: 40px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    position: absolute;
    right: 30px;
    font-size: 25px;
    top: 29px;
    cursor: pointer;
    color: #222
}

.sidebar_widget .white_box {
    padding: 30px
}

@media(max-width: 991px) {
    .sidebar_widget .white_box {
        padding:25px 15px
    }
}

@media only screen and (min-width: 1200px) and (max-width:1439px) {
    .sidebar_widget .white_box {
        padding:15px
    }
}

@media only screen and (min-width: 1440px) and (max-width:1679px) {
    .sidebar_widget .white_box {
        padding:25px 15px
    }
}

.sidebar_widget .white_box .btn_2 {
    margin-top: 25px;
    width: 100%;
    text-align: center;
    padding: 16px 25px
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .sidebar_widget .white_box .btn_2 {
        padding:12px 7px
    }
}

@media only screen and (min-width: 1200px) and (max-width:1439px) {
    .sidebar_widget .white_box .btn_1 {
        padding:8px 10px;
        font-size: 11px
    }
}

.sidebar_widget .date_range {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6px 0 18px
}

.sidebar_widget .date_range .btn_3 {
    border-radius: 5px;
    font-size: 13px;
    font-weight: 300
}

.sidebar_widget .date_range i {
    display: none
}

.sidebar_widget .date_range .start_date,.sidebar_widget .date_range .end_date {
    width: 115px
}

.sidebar_widget .date_range .start_date input,.sidebar_widget .date_range .end_date input {
    width: 100%;
    border: 1px solid #e4e8ec;
    color: #7e7172;
    font-size: 13px;
    padding: 11px 20px;
    border-radius: 5px;
    font-weight: 300
}

.sidebar_widget .date_range .start_date ::placeholder,.sidebar_widget .date_range .end_date ::placeholder {
    color: #7e7172
}

.sidebar #sidebar_menu>li {
    margin-left: 0;
    margin-right: 20px
}

.sidebar #sidebar_menu>li a {
    font-size: 16px;
    font-weight: 400;
    color: #144339;
    padding: 0 25px 0 0;
    margin-left: 30px;
    background: #fff;
    transition: .3s;
    position: relative;
    z-index: 0;
    display: grid;
    grid-template-columns: 34px auto;
    grid-gap: 15px;
    align-items: center;
    position: relative;
    background: 0 0;
    color: #8890b5;
    margin-top: 25px;
    font-family: comfortaa,cursive
}

.sidebar #sidebar_menu>li a.active {
    color: #64c5b1
}

.sidebar #sidebar_menu>li a::after {
    color: #fff;
    transform: rotate(-90deg) translate(0,-50%);
    opacity: 1;
    font-size: 10px;
    right: 15px;
    color: #a1a4b9
}

.sidebar #sidebar_menu>li a i {
    font-size: 15px;
    margin-right: 12px;
    color: #a5adc6;
    -webkit-transition: .5s;
    transition: .5s
}

.sidebar #sidebar_menu>li a:hover::before {
    width: 6px;
    opacity: 1;
    visibility: visible
}

.sidebar #sidebar_menu>li>a {
    color: #144339
}

.sidebar #sidebar_menu>li.mm-active>a {
    background: #fff;
    border-radius: 30px;
    color: #144339;
    border-radius: 4px 4px 0 0;
    background: 0 0
}

.sidebar #sidebar_menu>li.mm-active>a::after {
    color: #8890b5;
    transform: rotate(0deg) translate(0,-50%);
    opacity: 1;
    font-size: 10px;
    right: 15px
}

.sidebar #sidebar_menu>li.mm-active.metis_dropmenu>a {
    padding-top: 29px;
    padding-bottom: 30px;
    color: #a5adc6
}

.sidebar #sidebar_menu>li.mm-active>a i {
    color: #a5adc6
}

.sidebar #sidebar_menu>li.mm-active>a::before {
    opacity: 1;
    width: 6px;
    visibility: visible
}

.sidebar #sidebar_menu>li ul {
    padding: 0 0 5px 40px;
    background: 0 0;
    border-radius: 0 0 4px 4px;
    margin-left: 30px
}

.sidebar #sidebar_menu>li ul li:last-child a {
    padding-bottom: 30px
}

.sidebar #sidebar_menu>li ul li a {
    font-size: 14px;
    color: #8890b5;
    font-weight: 400;
    padding: 0;
    white-space: nowrap;
    padding: 0;
    padding: 10px 0 10px 8px!important;
    margin-top: 0;
    margin-left: 0
}

.sidebar #sidebar_menu>li ul li a::before {
    display: none
}

.sidebar #sidebar_menu>li ul li a.active {
    color: #64c5b1
}

.sidebar #sidebar_menu>li ul li ul {
    padding-left: 5px
}

.admin_profile_Wrap {
    margin-bottom: 30px
}

.admin_profile_Wrap ul li {
    background: #fff7f8;
    border-top: 1px solid #eee1e2;
    border-bottom: 1px solid #eee1e2;
    padding: 30px 0 30px 30px
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .admin_profile_Wrap ul li {
        padding:30px 0 30px 20px
    }
}

.admin_profile_Wrap ul li a {
    display: block
}

.admin_profile_Wrap ul li a .admin_profile_inner .thumb img {
    width: 50px;
    height: 50px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%
}

.admin_profile_Wrap ul li a .admin_profile_inner .welcome_rext {
    margin-left: 15px
}

.admin_profile_Wrap ul li a .admin_profile_inner .welcome_rext h5 {
    font-size: 14px;
    font-weight: 500;
    color: #222;
    margin-bottom: 1px;
    white-space: nowrap
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .admin_profile_Wrap ul li a .admin_profile_inner .welcome_rext h5 {
        font-size:12px
    }
}

.admin_profile_Wrap ul li a .admin_profile_inner .welcome_rext span {
    display: block;
    font-size: 12px;
    color: #7e7172;
    font-weight: 300;
    white-space: nowrap
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .admin_profile_Wrap ul li a .admin_profile_inner .welcome_rext span {
        font-size:11px
    }
}

.admin_profile_Wrap ul li ul {
    padding-left: 70px
}

.admin_profile_Wrap ul li ul li {
    padding: 0;
    border: 0
}

.admin_profile_Wrap ul li ul li a {
    font-size: 13px;
    color: #7e7172;
    font-weight: 400;
    padding-bottom: 17px
}

.admin_profile_Wrap ul li ul li:last-child a {
    padding-bottom: 0
}

.admin_profile_Wrap ul li ul li:first-child a {
    margin-top: 29px
}

.admin_profile_Wrap .metismenu .has-arrow::after {
    top: 38%
}

.sidebar::-webkit-scrollbar-track,body::-webkit-scrollbar-track {
    background-color: #ddd
}

.sidebar::-webkit-scrollbar,body::-webkit-scrollbar {
    width: 6px;
    background-color: #ddd
}

.sidebar::-webkit-scrollbar-thumb,body::-webkit-scrollbar-thumb {
    background-color: #f8dbdd
}

body::-webkit-scrollbar {
    width: 8px
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .metismenu .has-arrow::after {
        right:25px
    }
}

.sidebar #sidebar_menu li a img {
    width: 14px;
    height: auto
}

.sidebar #sidebar_menu li a .icon_menu {
    width: 34px;
    height: 34px;
    text-align: center;
    line-height: 32px
}

.sidebar.dark_sidebar {
    background: #323246
}

.sidebar.dark_sidebar .logo {
    background: 0 0
}

.sidebar.dark_sidebar #sidebar_menu>li ul {
    background: #323246
}

.sidebar.dark_sidebar #sidebar_menu>li.mm-active>a {
    background: #323246;
    color: #64c5b1!important
}

.sidebar.dark_sidebar #sidebar_menu>li>a {
    color: #fff
}

.sidebar.dark_sidebar #sidebar_menu>li ul li a.active {
    color: #64c5b1
}

.sidebar.dark_sidebar #sidebar_menu>li ul li a {
    color: #fff
}

.sidebar.dark_sidebar #sidebar_menu>li {
    margin-left: 0;
    margin-right: 20px
}

.sidebar.dark_sidebar #sidebar_menu>li a::after {
    color: #fff
}

.body_content {
    display: flex
}

.main-title h3 {
    font-family: nunito,sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #101038
}

.main-title span {
    font-size: 12px;
    font-weight: 400;
    color: #a3a0fb;
    display: block;
    margin-top: 6px
}

.box_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    align-items: center
}

@media(max-width: 575.98px) {
    .box_header.box_header_block {
        flex-direction:column;
        align-items: flex-start!important
    }
}

@media(max-width: 575.98px) {
    .box_header.box_header_block .main-title {
        margin-bottom:15px
    }
}

.box_header .title_info p {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 0;
    color: #a3a0fb
}

.legend_style li {
    display: inline-block;
    font-size: 13px;
    font-weight: 400;
    text-transform: capitalize;
    margin-right: 10px
}

.legend_style li span {
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #4400eb;
    margin-right: 4px
}

.legend_style li.inactive {
    opacity: .29
}

.title_btn {
    margin-bottom: 20px
}

.title_btn ul li {
    display: inline-block
}

.title_btn ul li a {
    display: inline-block;
    padding: 4px;
    background: #fff;
    font-size: 11px;
    text-transform: capitalize;
    color: #706f9a;
    border-radius: 5px;
    line-height: 25px;
    padding: 0 10px;
    transition: .3s
}

.title_btn ul li a:hover {
    background: #a66dd4;
    color: #fff
}

.title_btn ul li a.active {
    background: #a66dd4;
    color: #fff
}

.radial_footer .radial_footer_inner .left_footer {
    padding-left: 10px;
    margin-bottom: 20px
}

.radial_footer .radial_footer_inner .left_footer h5 {
    font-size: 13px;
    color: #43425d;
    font-weight: 500;
    margin-bottom: 0;
    position: relative
}

.radial_footer .radial_footer_inner .left_footer h5 span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #a4a1fb;
    display: inline-block;
    position: absolute;
    left: -15px;
    top: 6px
}

.radial_footer .radial_footer_inner .left_footer p {
    font-size: 12px;
    color: #4d4f5c;
    opacity: .5;
    font-weight: 400;
    margin-bottom: 0
}

.radial_footer .radial_bottom {
    border-top: 1px solid #efefef;
    text-align: center;
    padding-top: 15px;
    margin-top: 4px
}

.radial_footer .radial_bottom p a {
    font-size: 12px;
    color: #3b86ff;
    font-weight: 600
}

.blud_card {
    background: #4567ee!important;
    background-repeat: no-repeat;
    background-position: bottom
}

.blud_card p {
    color: #bcd3ff;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
    margin-top: 10px
}

.blud_card img {
    width: 100%
}

.main_content {
    padding-left: 270px;
    width: 100%;
    padding-top: 0!important;
    transition: .5s;
    position: relative;
    min-height: 100vh;
    padding-bottom: 80px;
    overflow: hidden
}

.main_content.main_content_padding_hide {
    padding-left: 0;
    padding-top: 100px!important
}

@media(max-width: 991px) {
    .main_content {
        padding:90px 0 100px
    }
}

@media(max-width: 575.98px) {
    .main_content {
        padding:120px 0 100px
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .main_content {
        padding:120px 0 100px
    }
}

@media only screen and (min-width: 768px) and (max-width:991px) {
    .main_content {
        padding:120px 0 100px
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .main_content {
        padding-left:20%
    }
}

.main_content.default_content .main_content_iner {
    margin: 0;
    border-radius: 0
}

.main_content .main_content_iner {
    min-height: 68vh;
    transition: .5s;
    position: relative;
    background: #f3f4f3;
    margin: 0;
    z-index: 22;
    border-radius: 0;
    padding: 30px
}

.main_content .main_content_iner.default_main_contaner_iner {
    background: #fff
}

.main_content .main_content_iner.default_main_contaner_iner::before {
    display: none
}

.main_content .main_content_iner.overly_inner::before {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 160px;
    z-index: -1;
    background: #64c5b1;
    content: '';
    border-radius: 0;
    left: 0
}

@media(max-width: 991px) {
    .main_content .main_content_iner {
        margin:0;
        padding: 15px
    }
}

@media(min-width: 1200px) and (max-width:1500px) {
    .main_content .main_content_iner.main_content_iner_padding {
        padding:0 30px
    }
}

@media only screen and (min-width: 1440px) and (max-width:1679px) {
    .main_content .main_content_iner.main_content_iner_padding {
        padding:0 60px
    }
}

@media(min-width: 1680px) {
    .main_content .main_content_iner.main_content_iner_padding {
        padding:0 135px
    }
}

@media(max-width: 575.98px) {
    .main_content .main_content_iner {
        margin-bottom:20px
    }
}

.address_book_hint p {
    font-size: 14px;
    line-height: 26px;
    margin-bottom: 8px
}

.single_element h4 {
    margin-bottom: 30px
}

.single_element .quick_activity_wrap {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 30px;
    margin-bottom: 30px
}

@media(max-width: 575.98px) {
    .single_element .quick_activity_wrap {
        grid-template-columns:repeat(1,1fr);
        grid-gap: 15px;
        margin-bottom: 30px
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .single_element .quick_activity_wrap {
        grid-template-columns:repeat(2,1fr);
        grid-gap: 15px;
        margin-bottom: 30px
    }
}

@media(min-width: 768px) and (max-width:991.98px) {
    .single_element .quick_activity_wrap {
        grid-template-columns:repeat(2,1fr);
        grid-gap: 15px;
        margin-bottom: 30px
    }
}

@media(min-width: 992px) and (max-width:1199.98px) {
    .single_element .quick_activity_wrap {
        grid-template-columns:repeat(2,1fr);
        margin-bottom: 30px
    }
}

@media(min-width: 1200px) and (max-width:1500px) {
    .single_element .quick_activity_wrap {
        grid-template-columns:repeat(2,1fr)
    }
}

.single_element .single_quick_activity {
    background-color: #fff;
    border-radius: 10px;
    -webkit-transition: .5s;
    transition: .5s;
    padding: 20px;
    position: relative
}

.single_element .single_quick_activity .notification_btn {
    position: absolute;
    right: 22px;
    top: 32px
}

@media(max-width: 575.98px) {
    .single_element .single_quick_activity {
        padding:20px 15px
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .single_element .single_quick_activity {
        padding:20px 15px
    }
}

.single_element .single_quick_activity .count_content {
    position: relative;
    z-index: 9;
    margin-bottom: 40px
}

.single_element .single_quick_activity .count_content .blue_color {
    color: #20b1b9!important
}

.single_element .single_quick_activity .count_content .red_color {
    color: #ff4409!important
}

.single_element .single_quick_activity .count_content .deep_blue {
    color: #016dd8!important
}

.single_element .single_quick_activity .count_content .green_color {
    color: #01d874!important
}

.single_element .single_quick_activity h3 {
    font-size: 28px;
    margin-bottom: 0;
    font-weight: 700;
    -webkit-transition: .5s;
    transition: .5s;
    color: #14256a;
    margin-bottom: 0;
    font-family: nunito,sans-serif;
    line-height: 1
}

.single_element .single_quick_activity p {
    -webkit-transition: .5s;
    transition: .5s;
    font-size: 14px;
    font-weight: 700;
    color: #8890b5;
    font-family: nunito,sans-serif;
    line-height: 1;
    margin-bottom: 15px
}

.common_white_text {
    font-size: 18px;
    color: #fff;
    font-weight: 400
}

.text_white {
    color: #fff!important
}

.orange_bg {
    background: #ff4409!important
}

.blue_bg {
    background: #016dd8!important
}

.green_bg {
    background: #20b1b9!important
}

.datepickers-container {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1001
}

.serach_field-area.d-flex.align-items-center span {
    display: none
}

.page_title_box {
    padding-bottom: 30px
}

.breadcrumb.page_bradcam {
    padding-left: 0;
    background: 0 0;
    padding: 0
}

.breadcrumb.page_bradcam.default_bradcam li {
    color: #59748a
}

.breadcrumb.page_bradcam.default_bradcam li a {
    color: #59748a
}

.breadcrumb.page_bradcam.default_bradcam .breadcrumb-item+.breadcrumb-item::before {
    content: ">";
    color: #59748a
}

.breadcrumb.page_bradcam li {
    font-size: 13px;
    font-weight: 400;
    color: #fff
}

.breadcrumb.page_bradcam li a {
    font-size: 13px;
    font-weight: 400;
    color: #fff
}

.breadcrumb.page_bradcam .breadcrumb-item+.breadcrumb-item::before {
    content: ">";
    color: #fff
}

.dashboard_part .notification_tab {
    padding: 27px 25px;
    background-color: #f5ecec;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    -webkit-transition: .5s;
    transition: .5s
}

.dashboard_part .notification_tab p {
    font-size: 16px;
    color: #14256a
}

.dashboard_part .notification_tab p a {
    color: #2e4765
}

.dashboard_part .hide_icon {
    cursor: pointer
}

.dashboard_part .hide_icon i {
    color: #2e4765;
    font-size: 10px
}

.white_box {
    padding: 30px;
    background-color: #fff;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px
}

@media(max-width: 575.98px) {
    .white_box {
        padding:30px 25px
    }
}

.white_box .white_box_tittle h4 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0
}

@media(max-width: 991px) {
    .white_box .white_box_tittle h4 {
        margin-bottom:15px
    }
}

.white_card {
    background-color: #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px
}

.white_card .white_card_header {
    padding: 22px 30px
}

.white_card .white_card_body {
    padding: 5px 30px 30px
}

.white_box_50px {
    padding: 43px 45px 38px 50px;
    background-color: #fff;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px
}

@media(max-width: 575.98px) {
    .white_box_50px {
        padding:30px 25px
    }
}

.white_box_50px .white_box_tittle h4 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0
}

@media(max-width: 991px) {
    .white_box_50px .white_box_tittle h4 {
        margin-bottom:15px
    }
}

.white_box2 {
    padding: 40px 40px 25px;
    background-color: #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px
}

@media(max-width: 575.98px) {
    .white_box2 {
        padding:30px 25px
    }
}

.white_box2 .white_box_tittle h4 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0
}

@media(max-width: 991px) {
    .white_box2 .white_box_tittle h4 {
        margin-bottom:15px
    }
}

.chart_box .white_box_tittle {
    margin-bottom: 20px
}

.chart_box .white_box_tittle h4 {
    margin-bottom: 2px
}

@media(max-width: 991px) {
    .chart_box .white_box_tittle h4 {
        margin-bottom:15px
    }
}

.chart_box p {
    margin-bottom: 29px;
    color: #707070
}

.chart_box label {
    margin-bottom: 0
}

.chart_box .b {
    display: block!important
}

.chart_box .toggle {
    position: relative;
    width: 44px;
    height: 22px;
    border-radius: 50px;
    background-color: #222;
    border: 1px solid #222;
    overflow: hidden
}

.chart_box .check {
    position: absolute;
    display: block;
    cursor: pointer;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 6
}

.chart_box .check:checked~.switch {
    right: 5px;
    left: 57.5%;
    transition: .25s cubic-bezier(.785,.135,.15,.86);
    transition-property: left,right;
    transition-delay: .08s,0s
}

.chart_box .switch {
    position: absolute;
    left: 5px;
    top: 3px;
    bottom: 2px;
    right: 57.5%;
    background-color: #fff;
    border-radius: 50%;
    z-index: 1;
    transition: .25s cubic-bezier(.785,.135,.15,.86);
    transition-property: left,right;
    transition-delay: 0s,.08s;
    height: 13px;
    width: 13px;
    padding: 6px!important;
    margin-right: 0
}

.chart_box .switch:after {
    display: none
}

.chart_box .hide {
    display: none!important
}

.QA_section .QA_table .table {
    background: #fff;
    border-radius: 10px;
    margin-bottom: 35px;
    padding-top: 20px
}

.QA_section .QA_table th,.QA_section .QA_table td {
    font-weight: 400;
    padding: 10px 15px;
    vertical-align: middle
}

.QA_section .QA_table .question_content {
    color: #7e7172;
    font-size: 13px
}

.QA_section .QA_table .question_content:hover {
    color: #2e4765
}

.QA_section .QA_table thead {
    padding-bottom: 10px
}

.QA_section .QA_table thead th {
    white-space: nowrap;
    padding-left: 0;
    border-bottom: 1px solid rgba(130,139,178,.3)!important
}

.QA_section .QA_table tbody tr:first-child td {
    padding-top: 20px
}

.QA_section .QA_table tbody th {
    font-size: 14px;
    color: #415094;
    font-weight: 400!important
}

.QA_section .QA_table tbody .btn_1 {
    background: #65f9b3;
    color: #fff;
    border: 0;
    font-size: 8px;
    padding: 0;
    height: 18px;
    width: 26px;
    line-height: 18px;
    text-transform: uppercase;
    font-weight: 700
}

.QA_section .QA_table tbody img.user_thumb {
    width: 36px;
    height: 36px;
    border-radius: 3px
}

.QA_section .QA_table tbody img.check_status {
    width: 21px;
    height: 18px;
    border-radius: 3px
}

.QA_section .QA_table tbody th,.QA_section .QA_table tbody td {
    font-size: 14px;
    font-weight: 400;
    border-bottom: 0
}

.QA_section .QA_table tbody th.pending,.QA_section .QA_table tbody td.pending {
    color: #e09079;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500
}

.QA_section .QA_table tbody th.priority_hight,.QA_section .QA_table tbody td.priority_hight {
    font-size: 14px;
    color: #d7598f;
    font-weight: 400
}

.QA_section .QA_table tbody tr {
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -o-transition: .3s;
    transition: .3s
}

.QA_section .QA_table tbody tr:hover {
    background: #fff
}

.QA_section .QA_table .view_btn {
    color: #2e4765
}

.QA_section .QA_table .view_btn:hover {
    text-decoration: underline
}

.QA_section .QA_table .table {
    margin-bottom: 0!important
}

.QA_section .QA_table .table thead th {
    border-bottom: 0 solid transparent;
    padding: 13px 15px;
    border: 0 solid transparent;
    font-size: 13px;
    font-weight: 700;
    color: #64c5b1;
    white-space: nowrap;
    text-transform: capitalize;
    font-family: nunito,sans-serif;
    border: 0;
    background: #fff;
    border: 0!important;
    background: #f8faff
}

.QA_section .QA_table .table thead th:first-child {
    border-radius: 5px 0 0 5px
}

.QA_section .QA_table .table thead th:last-child {
    border-radius: 0 5px 5px 0
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .chart_box_1 .box_header {
        flex-direction:column
    }
}

.chart_box_1 .box_header .box_header_left {
    flex-basis: 50%
}

@media(min-width: 768px) and (max-width:991.98px) {
    .chart_box_1 .box_header .box_header_left {
        flex-basis:55%
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .chart_box_1 .box_header .box_header_left {
        flex-basis:55%
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .chart_box_1 .box_header .box_header_left {
        flex-basis:100%;
        width: 100%;
        margin-bottom: 20px
    }
}

.chart_box_1 .box_header .box_header_left ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap
}

.chart_box_1 .box_header .box_header_left ul li {
    display: inline-block;
    text-align: center
}

@media(max-width: 575.98px) {
    .chart_box_1 .box_header .box_header_left ul li {
        flex:50% 0 0;
        margin-bottom: 20px
    }
}

.chart_box_1 .box_header .box_header_left ul li h4 {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 0
}

.chart_box_1 .box_header .box_header_left ul li p {
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 0
}

.chart_box_1 .box_header .box_header_right .legend_circle ul li {
    color: #828bb2;
    font-size: 12px;
    font-weight: 400;
    margin-right: 30px;
    display: inline-block
}

@media(max-width: 575.98px) {
    .chart_box_1 .box_header .box_header_right .legend_circle ul li {
        margin-right:14px
    }
}

.chart_box_1 .box_header .box_header_right .legend_circle ul li:last-child {
    margin-right: 0
}

.chart_box_1 .box_header .box_header_right .legend_circle ul li span {
    width: 10px;
    height: 10px;
    display: inline-block;
    border-radius: 50%;
    margin-right: 10px
}

.dashboard_breadcam p {
    color: #6f658d;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0
}

.dashboard_breadcam p i {
    margin: 0 5px
}

.dashboard_breadcam p a {
    color: #6f658d;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0
}

.form_style .form-group label,.form_style .form-group p {
    font-size: 14px;
    font-weight: 300;
    text-transform: capitalize;
    margin-bottom: 13px;
    color: #7e7172
}

.form_style .form-group input {
    border: 1px solid #e4e8ec;
    font-size: 13px;
    font-weight: 300;
    color: #7e7172;
    padding: 15px 25px;
    background-color: #fef1f2;
    height: auto;
    line-height: 18px
}

.revenue_part .btn_2 {
    padding: 8px 13px;
    margin-left: 30px
}

.revenue_part .courses_price .btn_1 {
    padding: 13px 32px;
    line-height: 16px;
    height: auto;
    width: auto
}

.revenue_part .courses_details span {
    font-size: 16px;
    font-weight: 600;
    color: #7e7172;
    margin-top: 3px
}

.revenue_part .courses_duration {
    position: relative;
    padding-left: 25px
}

.revenue_part .courses_duration h6 {
    font-size: 14px;
    margin-bottom: 8px
}

.revenue_part .courses_duration h6 i {
    color: #2e4765;
    position: absolute;
    left: 0;
    top: 2px
}

.payment_methord h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px
}

.payment_methord .payment_mathord_content {
    background-color: #fff;
    padding: 30px
}

.payment_methord .payment_mathord_content h4 {
    font-size: 16px;
    font-weight: 600;
    margin: 28px 0 7px
}

.payment_methord .payment_mathord_content .btn_1 {
    margin-top: 28px
}

.payment_methord .nav-tabs {
    border-bottom: 0 solid transparent
}

.payment_methord .payment_methord_logo {
    display: flex;
    align-items: center
}

.payment_methord .payment_methord_logo .single_logo_iner {
    width: 188px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #bbc1c9;
    border-left: 0 solid transparent;
    -webkit-transition: .5s;
    transition: .5s
}

.payment_methord .payment_methord_logo .single_logo_iner:first-child {
    border-left: 1px solid #bbc1c9;
    border-radius: 5px 0 0 5px
}

.payment_methord .payment_methord_logo .single_logo_iner:last-child {
    border-radius: 0 5px 5px 0
}

.payment_methord .payment_methord_logo .single_logo_iner img {
    max-width: 100px
}

.payment_methord .payment_methord_logo .single_logo_iner.active {
    border: 1px solid #2e4765!important
}

.form_group {
    margin-top: 24px
}

.form_group input {
    width: 100%;
    background-color: #fef1f2;
    border-radius: 5px;
    border: 1px solid #f1f3f5;
    padding: 12px 20px
}

.form_group .single_form_item label {
    width: 100%;
    display: block
}

.form_group .single_form_item input {
    width: auto;
    display: inline-block;
    padding: 12px 20px;
    max-width: 85px;
    color: #9c9c9c
}

.form_group #CVV {
    max-width: 118px!important
}

.form_group .nice_Select {
    background-color: #fef1f2;
    margin-right: 10px;
    color: #9c9c9c
}

.checkbox label {
    margin-bottom: 0;
    margin-top: 25px;
    color: #9c9c9c;
    margin-left: 8px
}

.footer_part {
    text-align: center;
    padding-bottom: 0;
    padding-top: 6px;
    background: 0 0;
    padding-left: 270px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f3f4f3;
    background: #64c5b1
}

.footer_part.default_footer {
    background: #f5f6ff
}

.footer_part.default_footer .footer_iner {
    background: 0 0!important
}

@media only screen and (min-width: 320px) and (max-width:768px) {
    .footer_part {
        padding-left:0!important
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .footer_part {
        padding-left:20%
    }
}

.footer_part .footer_iner.text-center {
    background: #fff;
    padding: 27px 0;
    margin: 0 15px;
    border-radius: 5px;
    background: #64c5b1
}

.footer_part p {
    font-size: 12px;
    font-weight: 500;
    color: #fff
}

.footer_part p span {
    margin: 0 10px
}

.footer_part p a {
    color: #fff
}

.footer_part p a:hover {
    text-decoration: underline
}

.breadcrumb_content {
    background-color: #fff;
    padding: 19px 30px;
    line-height: 22px
}

@media(max-width: 991px) {
    .breadcrumb_content {
        padding:25px 15px
    }
}

@media only screen and (min-width: 768px) and (max-width:991px) {
    .breadcrumb_content {
        display:block!important
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .breadcrumb_content {
        display:block!important
    }
}

.breadcrumb_content .active {
    color: #2e4765
}

.breadcrumb_content h2 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 0
}

@media(max-width: 575.98px) {
    .breadcrumb_content h2 {
        margin-bottom:15px;
        padding: 0
    }
}

@media only screen and (min-width: 768px) and (max-width:991px) {
    .breadcrumb_content h2 {
        margin-bottom:15px
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .breadcrumb_content h2 {
        margin-bottom:15px
    }
}

.breadcrumb_content .sa_breadcrumb_iner a {
    position: relative;
    color: #7e7172;
    padding-left: 30px
}

.breadcrumb_content .sa_breadcrumb_iner a:after {
    content: "";
    position: absolute;
    left: 10px;
    top: 3px;
    clip-path: polygon(0 0,100% 55%,0 100%);
    background-color: #7e7172;
    width: 10px;
    height: 10px;
    -webkit-transition: .5s;
    transition: .5s
}

.breadcrumb_content .sa_breadcrumb_iner a:first-child {
    padding-left: 0
}

.breadcrumb_content .sa_breadcrumb_iner a:first-child:after {
    display: none
}

.breadcrumb_content .sa_breadcrumb_iner a:hover {
    color: #2e4765
}

.breadcrumb_content .sa_breadcrumb_iner a:hover:after {
    background-color: #2e4765
}

.breadcrumb_content .sa_breadcrumb_iner a:last-child {
    color: #2e4765
}

.breadcrumb_content .sa_breadcrumb_iner a:last-child:after {
    background-color: #2e4765
}

#morris_bar {
    height: 300px
}

#morris_bar_bold {
    height: 300px
}

tspan {
    font-size: 13px;
    font-weight: 300;
    color: #7e7172;
    text-transform: capitalize
}

.morris-hover.morris-default-style .morris-hover-point {
    white-space: nowrap;
    margin: .1em 0;
    font-size: 13px;
    color: #fff!important;
    font-size: 12px;
    font-weight: 500;
    font-family: nunito,sans-serif
}

.morris-hover.morris-default-style .morris-hover-row-label {
    font-weight: 700;
    margin: 0;
    font-size: 12px;
    font-weight: 300;
    color: #7e7172;
    line-height: 12px;
    font-family: nunito,sans-serif
}

.morris-hover.morris-default-style {
    font-family: roboto,sans-serif;
    font-size: 12px;
    text-align: center;
    background: #000!important;
    border: 0;
    padding: 7px 22px 5px!important;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    color: #fff;
    border-radius: 5px;
    font-weight: 500
}

.morris-hover.morris-default-style span {
    font-weight: 700;
    margin: 0;
    font-size: 12px;
    font-weight: 300;
    color: #7e7172;
    line-height: 12px;
    font-family: nunito,sans-serif
}

canvas#highlights {
    height: 300px!important;
    overflow: hidden
}

.lms_category_wrap {
    margin-bottom: 50px
}

.lms_category_wrap .category_header {
    background: #fef1f2;
    border-radius: 5px;
    padding: 17px 30px
}

.lms_category_wrap .category_header .category_left h4 {
    font-size: 16px;
    font-weight: 500;
    color: #222;
    margin-bottom: 0
}

.lms_category_wrap .category_header .category_left p {
    color: #7e7172;
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 0
}

@media(max-width: 575.98px) {
    .lms_category_wrap .category_header .category_right {
        margin-top:15px
    }
}

.lms_category_wrap ul li {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 15px 30px;
    background: #fff;
    align-items: center;
    border-bottom: 1px solid #eee1e2;
    transition: .3s
}

@media(max-width: 575.98px) {
    .lms_category_wrap ul li {
        padding:15px 20px
    }
}

.lms_category_wrap ul li .category_info p {
    font-size: 13px;
    font-weight: 300;
    color: #7e7172
}

.lms_category_wrap ul li:hover {
    background: #fff7f8
}

.income_servay .count_content {
    text-align: center;
    margin-bottom: 30px
}

.income_servay .count_content h3 {
    font-size: 30px;
    font-weight: 600;
    color: #2e4765;
    line-height: 1;
    margin-bottom: 5px
}

.income_servay .count_content h3 span {
    color: #2e4765;
    font-weight: 600;
    line-height: 1
}

.income_servay .count_content p {
    font-size: 14px;
    font-weight: 400;
    color: #b2b5c0;
    line-height: 1
}

.staf_list_wrapper .single_staf {
    background: #fff;
    box-shadow: 0 7px 15px rgba(80,143,244,.15);
    text-align: center;
    padding: 50px 0;
    margin-bottom: 30px;
    margin-top: 30px
}

.staf_list_wrapper .single_staf .staf_thumb {
    margin-bottom: 25px
}

.staf_list_wrapper .single_staf .staf_thumb img {
    margin: auto;
    width: 118px;
    height: 118px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%
}

.staf_list_wrapper .single_staf h4 {
    font-size: 22px;
    font-weight: 600;
    color: #2e4765;
    margin-bottom: 3px
}

.staf_list_wrapper .single_staf p {
    font-size: 14px;
    color: #818e94;
    font-weight: 500
}

.owl-carousel .owl-nav button {
    width: 39px;
    height: 39px;
    border-radius: 7px;
    background: #eff1f7;
    position: absolute;
    top: -89px;
    right: 0;
    font-size: 18px!important;
    background: #eff1f7!important;
    color: #141124
}

.owl-carousel .owl-nav button.owl-prev {
    right: 50px
}

.owl-carousel .owl-nav button:hover {
    background: #16bbe5!important;
    color: #fff
}

.Activity_timeline {
    position: relative
}

.Activity_timeline::before {
    content: '';
    left: -1px;
    height: 100%;
    top: 0;
    border-left: 1px dashed rgba(112,112,112,.3);
    position: absolute
}

.Activity_timeline ul li {
    position: relative;
    margin-bottom: 15px
}

.Activity_timeline ul li:last-child {
    margin-bottom: 0
}

.Activity_timeline ul li .activity_bell {
    background: #3bb0bd;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    left: -5.5px;
    top: 8px
}

.Activity_timeline ul li .activity_wrap {
    position: relative;
    padding-left: 27px
}

.Activity_timeline ul li .activity_wrap h6 {
    font-size: 18px;
    font-weight: 700;
    color: #2e4765;
    margin-right: 30px;
    margin-bottom: 0;
    line-height: 28px
}

.Activity_timeline ul li .activity_wrap p {
    font-size: 14px;
    line-height: 28px;
    color: #8890b5;
    font-weight: 400
}

.activity_progressbar .single_progressbar h6 {
    font-size: 12px;
    text-transform: capitalize;
    margin-bottom: 5px
}

.barfiller {
    width: 100%;
    height: 8px;
    background: #f8f9ff;
    position: relative;
    margin-bottom: 30px;
    border-radius: 30px
}

.barfiller .fill {
    display: block;
    position: relative;
    width: 0;
    height: 100%;
    z-index: 1;
    border-radius: 30px
}

.barfiller .tipWrap {
    display: none
}

.barfiller .tip {
    margin-top: -23px;
    padding: 2px 4px;
    font-size: 11px;
    color: #000;
    left: 0;
    position: absolute;
    z-index: 2
}

.barfiller#bar1 .tip {
    color: #508ff4
}

.barfiller#bar2 .tip {
    color: #ffbf43
}

.barfiller#bar3 .tip {
    color: #4be69d
}

.barfiller#bar4 .tip {
    color: #9267ff
}

.single_social_media {
    margin-bottom: 27px
}

.single_social_media .icon_media {
    width: 72px;
    height: 68px;
    background: #508ff4;
    font-size: 38px;
    text-align: center;
    line-height: 72px;
    border-radius: 10px;
    margin-right: 20px;
    flex: 72px 0 0;
    color: #fff
}

.single_social_media .icon_media.twitter_bg {
    background: #43ccff
}

.single_social_media .icon_media.youtube_bg {
    background: red
}

.single_social_media .icon_media.insta_bg {
    background: #ff72b9
}

.single_social_media .media_contet span {
    font-size: 16px;
    color: #8890b5;
    font-weight: 700;
    display: block;
    margin-bottom: 10px
}

.single_social_media .media_contet h4 {
    font-size: 35px;
    font-weight: 700;
    color: #14256a;
    margin-bottom: 0
}

.grid_4rap {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit,minmax(100%,1fr))
}

@media(min-width: 1600px) {
    .grid_4rap {
        grid-template-columns:repeat(auto-fit,minmax(40%,1fr))
    }
}

.note-editor.note-frame {
    border: 1px solid #eee1e2
}

.note-editor.note-frame .note-popover .note-popover-content,.note-editor.note-frame .note-toolbar {
    padding: 4px 15px 8px;
    margin: 0;
    border-radius: 5px 5px 0 0;
    background-color: #64c5b1
}

.note-editor.note-frame .note-btn i,.note-editor.note-frame .note-current-fontname {
    color: #7e7172;
    font-size: 12px
}

.note-editor.note-frame .note-btn {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.4;
    color: #7e7172;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 3px
}

.note-editor.note-frame .note-btn:hover {
    color: #fff;
    background: #4c6ef8
}

.note-editor.note-frame .note-btn:hover i {
    color: #fff;
    background: #4c6ef8
}

.note-editor.note-frame .note-btn .note-current-fontname:hover {
    color: #fff
}

.note-editor.note-frame .show .dropdown-toggle::after {
    transform: rotate(180deg);
    color: red
}

.note-editor.note-frame .note-icon-font.note-recent-color {
    background: 0 0!important;
    color: #7e7172!important
}

.note-editor.note-frame .show .dropdown-toggle::after {
    color: #7e7172!important
}

.note-editor.note-frame .note-btn:hover span {
    color: #fff!important
}

.note-editor.note-frame .note-btn:hover i {
    color: #fff!important
}

.note-editor.note-frame .note-editing-area .note-editable {
    background-color: #fff
}

.note-editor.note-frame .note-placeholder {
    padding: 18px 25px 0;
    font-size: 14px;
    color: #7e7172;
    line-height: 28px;
    font-weight: 300
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .lms_sm_block {
        display:block
    }
}

@media(max-width: 575.98px) {
    .lms_xs_small_btn a {
        padding:11px 20px
    }
}

@media(max-width: 575.98px) {
    .mb_xs_20px {
        margin-bottom:20px!important
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .mb_sm_20px {
        margin-bottom:20px
    }
}

.lms_supper_text {
    vertical-align: super!important
}

.gj-picker-md {
    border: 1px solid #fef1f2;
    padding: 10px
}

.gj-picker-md table tr td.today div {
    color: #fff;
    background: #ff4409;
    border-radius: 50%
}

.gj-picker-md table tr td.gj-cursor-pointer div:hover {
    border-radius: 50%;
    background: #ff4409;
    color: #fff
}

.gj-picker-md div[role=navigator] div:first-child,.gj-picker-md div[role=navigator] div:last-child {
    max-width: 42px;
    background: #fef1f2;
    color: #000;
    border-radius: 50%;
    font-size: 14px;
    line-height: 44px;
    height: 42px;
    font-weight: 900
}

.gj-picker-md div[role=navigator] div:first-child i,.gj-picker-md div[role=navigator] div:last-child i {
    font-weight: 900;
    font-size: 14px
}

.dropdown-menu.show .dropdown-toggle.lms_drop_1::after {
    color: #fff!important
}

.dropdown-menu.option_width {
    min-width: 102px
}

.dropdown.show .dropdown-toggle.lms_drop_1::after {
    color: #fff
}

.lms_common_header .lms_common_title h4 {
    margin-bottom: 3px
}

.lms_common_header .lms_common_title p {
    font-size: 12px;
    font-weight: 300;
    color: #7e7172;
    margin-bottom: 0
}

.common_line_separator {
    display: inline-block;
    width: 2px;
    height: 11px;
    background: #b9b3b3;
    margin: 0 7px
}

.h-120px {
    height: 120px!important
}

.h-260px {
    height: 260px!important
}

@media(max-width: 991px) {
    .h-260px {
        height:160px!important
    }
}

.h-230px {
    height: 230px!important
}

@media(max-width: 991px) {
    .h-230px {
        height:160px!important
    }
}

.discription_list_wrap p {
    font-size: 13px;
    font-weight: 300;
    color: #7e7172;
    line-height: 26px;
    margin-bottom: 17px
}

.discription_list_wrap h5 {
    font-size: 12px;
    font-weight: 400;
    color: #222;
    margin-top: 19px;
    margin-bottom: 14px
}

.common_list_style li {
    font-size: 13px;
    font-weight: 300;
    color: #7e7172;
    line-height: 26px;
    position: relative;
    padding-left: 15px
}

.common_list_style li:before {
    position: absolute;
    left: 0;
    top: 10px;
    width: 3px;
    height: 3px;
    background: #7e7172;
    content: '';
    border-radius: 50%
}

.result_modal_table_form .modal-body {
    margin: 30px 0;
    padding: 120px 100px 104px!important
}

@media(max-width: 991px) {
    .result_modal_table_form .modal-body {
        padding:30px!important
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .result_modal_table_form .modal-body {
        padding:50px!important
    }
}

.result_modal_table_form .table thead th {
    border-bottom: 0 solid transparent;
    background-color: #fef1f2;
    padding: 17px 30px;
    line-height: 16px;
    border: 0 solid transparent;
    border-top-color: transparent;
    border-top-style: solid;
    border-top-width: 0;
    font-size: 12px;
    font-weight: 400;
    color: #222;
    white-space: nowrap
}

.result_modal_table_form .table tbody th,.result_modal_table_form .table tbody td {
    color: #7e7172;
    font-size: 13px!important;
    color: #7e7172;
    font-weight: 300;
    border-bottom: 1px solid #eee1e2;
    padding: 10px 25px!important
}

.result_modal_table_form .result_header_modal {
    margin-bottom: 45px
}

.result_modal_table_form .result_header_modal h2 {
    font-size: 36px;
    font-weight: 500;
    color: #222;
    margin-bottom: 15px
}

@media(max-width: 575.98px) {
    .result_modal_table_form .result_header_modal h2 {
        font-size:20px
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .result_modal_table_form .result_header_modal h2 {
        font-size:20px
    }
}

.result_modal_table_form .result_header_modal p {
    font-size: 14px;
    font-weight: 300;
    color: #7e7172;
    line-height: 26px
}

.result_modal_table_form .result_header_modal .passed_text {
    display: block;
    font-size: 18px;
    font-weight: 500;
    margin-top: 29px;
    margin-bottom: 35px
}

@media(max-width: 575.98px) {
    .result_modal_table_form .result_header_modal .passed_text {
        margin-top:15px;
        margin-bottom: 15px
    }
}

@media only screen and (min-width: 576px) and (max-width:767px) {
    .result_modal_table_form .result_header_modal .passed_text {
        margin-top:15px;
        margin-bottom: 15px
    }
}

@media only screen and (min-width: 768px) and (max-width:991px) {
    .result_modal_table_form .result_header_modal .passed_text {
        margin-top:15px;
        margin-bottom: 15px
    }
}

.student_list_img img {
    width: 50px;
    height: 50px
}

.common_date_picker input {
    width: 100%;
    border: 1px solid #f1f3f5;
    border-radius: 3px;
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    color: #222;
    padding: 0 25px;
    font-weight: 500
}

.website_settings_wrap .modal-body {
    padding: 0!important
}

.input_form_persent {
    position: relative
}

.input_form_persent:before {
    content: "\f295";
    border-bottom: 0;
    border-right: 0;
    display: block;
    margin-top: 0;
    pointer-events: none;
    position: absolute;
    top: 50%;
    width: auto;
    right: 25px;
    border: 0;
    font-family: "font awesome 5 free";
    font-weight: 600;
    color: #cec1c2;
    transform: translateY(-50%);
    font-size: 13px
}

.tagInput_field {
    margin-bottom: 21px
}

.tagInput_field label {
    font-size: 12px;
    font-weight: 300;
    color: #222;
    text-align: left;
    margin: 0;
    margin-bottom: 0;
    display: block;
    margin-bottom: 8px
}

.tagInput_field .bootstrap-tagsinput {
    text-align: left;
    border: 1px solid #eee1e2;
    padding: 9px 25px 4px;
    box-shadow: none;
    border-radius: 3px;
    min-height: 50px
}

.tagInput_field .bootstrap-tagsinput input {
    border: none!important;
    width: auto!important;
    display: inline-block!important;
    background-color: transparent!important;
    height: 0;
    margin: 0;
    min-width: 20px;
    padding: 7px!important
}

.tagInput_field .bootstrap-tagsinput .badge {
    margin: 0 5px 5px 0;
    height: 30px;
    line-height: 30px;
    padding: 0 30px 0 20px;
    font-size: 12px;
    color: #ff4409;
    font-weight: 400;
    background: #ffff;
    border: 1px solid #ff4409;
    border-radius: 30px;
    position: relative
}

.tagInput_field .bootstrap-tagsinput .badge [data-role=remove]::after {
    font-size: 10px;
    font-family: themify;
    content: "\e646";
    background: 0 0;
    padding: 0;
    margin: 0;
    margin-left: 0;
    background: 0 0;
    margin-left: 5px;
    padding: 0;
    border: 1px solid transparent;
    padding: 2px
}

.tagInput_field .bootstrap-tagsinput .badge [data-role=remove]:hover::after {
    background: #ff4409;
    color: #fff;
    border-color: #ff4409
}

.tagInput_field span.badge.badge-info span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 8px
}

.custom_striped_progressbar .progress {
    height: 24px;
    background: 0 0;
    border-radius: 30px;
    width: 256px
}

.custom_striped_progressbar .progress-bar {
    position: relative;
    border-radius: 30px;
    text-align: left;
    font-size: 15px;
    padding-left: 15px;
    color: #fff;
    font-weight: 300;
    background: 0 0;
    background-size: 100% 100%;
    background-repeat: no-repeat
}

.custom_striped_progressbar .progress-bar.green_bar {
    background-image: url(../img/progress/progress-bg.png);
    background-size: cover
}

.custom_striped_progressbar .progress-bar.yellow_bar {
    background-image: url(../img/progress/design-progress-yellow.png);
    background-size: cover
}

.custom_striped_progressbar .progress-bar.red_bar {
    background-image: url(../img/progress/design-progress-red.png);
    background-size: cover
}

.custom_lms_radio_2 label {
    display: inline-block;
    cursor: pointer;
    position: relative;
    font-size: 13px;
    font-weight: 300;
    color: #7e7172;
    margin-left: 0;
    padding-bottom: 15px;
    margin-top: 0
}

.custom_lms_radio_2 label span {
    display: inline-block;
    position: relative;
    background-color: transparent;
    width: 20px;
    height: 20px;
    transform-origin: center;
    border: 1px solid #eee2e3;
    border-radius: 50%;
    vertical-align: -6px;
    margin-right: 15px;
    transition: background-color 150ms 200ms,transform 350ms cubic-bezier(.78,-1.22,.17,1.89)
}

.custom_lms_radio_2 label span:before {
    content: "";
    width: 0;
    height: 1px;
    border-radius: 2px;
    background: #ff4409;
    position: absolute;
    transform: rotate(38deg);
    top: 13px;
    left: 9px;
    transition: width 50ms ease 50ms;
    transform-origin: 0% 0%;
    top: 9.69px;
    left: 4.99px;
    border-radius: 0
}

.custom_lms_radio_2 label span:after {
    content: "";
    width: 0;
    height: 1px;
    border-radius: 2px;
    background: #ff4409;
    position: absolute;
    transform: rotate(305deg);
    top: 12.8px;
    left: 7.48px;
    transition: width 50ms ease;
    transform-origin: 0% 0%;
    border-radius: 0
}

.custom_lms_radio_2 label:hover span:before {
    width: 4px;
    transition: width 100ms ease
}

.custom_lms_radio_2 label:hover span:after {
    width: 10px;
    transition: width 150ms ease 100ms
}

.custom_lms_radio_2 input[type=radio] {
    display: none
}

.custom_lms_radio_2 input[type=radio]:checked+label span {
    background-color: #ff4409;
    transform: scale(1);
    border-color: #ff4409
}

.custom_lms_radio_2 input[type=radio]:checked+label span:after {
    width: 10px;
    background: #fff;
    transition: width 150ms ease 100ms
}

.custom_lms_radio_2 input[type=radio]:checked+label span:before {
    width: 4px;
    background: #fff;
    transition: width 150ms ease 100ms
}

.custom_lms_radio_2 input[type=radio]:checked+label:hover span {
    background-color: #ff4409;
    transform: scale(1.25);
    border-color: #ff4409
}

.custom_lms_radio_2 input[type=radio]:checked+label:hover span:after {
    width: 10px;
    background: #fff;
    transition: width 150ms ease 100ms
}

.custom_lms_radio_2 input[type=radio]:checked+label:hover span:before {
    width: 4px;
    background: #fff;
    transition: width 150ms ease 100ms
}

.import_topic_wrapper.modal_btn {
    display: grid!important;
    grid-gap: 10px;
    grid-template-columns: 3fr 9fr;
    align-items: end
}

.import_topic_wrapper.modal_btn .btn_1 {
    margin: 0!important
}

@media(max-width: 575.98px) {
    .import_topic_wrapper.modal_btn {
        grid-template-columns:repeat(1,1fr)
    }
}

.indvisual_form .btn_1.big_btn {
    padding: 16px 36px
}

.indvisual_form .chose_thumb_title {
    font-size: 12px;
    font-weight: 300;
    color: #222;
    text-align: left;
    margin: 0;
    margin-bottom: 0;
    display: block;
    margin-bottom: 8px
}

.indvisual_form .input_wrap label {
    font-size: 12px;
    font-weight: 300;
    color: #222;
    text-align: left;
    margin: 0;
    margin-bottom: 0;
    display: block;
    margin-bottom: 8px
}

.indvisual_form .input_wrap textarea {
    height: 100px;
    padding: 0;
    line-height: 28px;
    padding: 13px 25px
}

.indvisual_form .input_wrap textarea.max_textarea {
    height: 290px
}

.indvisual_form .nice_Select,.indvisual_form input,.indvisual_form textarea {
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border: 1px solid #eee1e2;
    padding: 10px 25px;
    color: #7e7172;
    font-weight: 500;
    font-size: 13px;
    width: 100%;
    display: block;
    margin-bottom: 21px;
    font-weight: 300;
    border-radius: 3px
}

.indvisual_form .nice_Select::placeholder,.indvisual_form input::placeholder,.indvisual_form textarea::placeholder {
    color: #7e7172;
    font-weight: 300;
    opacity: 1
}

.indvisual_form .nice_Select {
    line-height: 30px
}

.indvisual_form .nice_Select :after {
    left: 22px
}

.indvisual_form .nice-select.nice_Select2 {
    height: 30px;
    line-height: 30px;
    background-color: #fff;
    border: 1px solid #eee1e2;
    padding: 0 37px 0 20px;
    color: #7e7172;
    font-weight: 500;
    font-size: 13px;
    width: 100%;
    display: block;
    margin-bottom: 21px;
    font-weight: 300;
    border-radius: 3px;
    margin: 0;
    width: auto
}

.indvisual_form .nice-select.nice_Select2::after {
    top: 20%
}

.list_counter_wrapper .single_list_counter {
    border-bottom: 1px solid #f1f3f5;
    padding: 35px 0 26px 87px
}

.list_counter_wrapper .single_list_counter:last-child {
    border: 0
}

.list_counter_wrapper .single_list_counter h3 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 0
}

.list_counter_wrapper .single_list_counter h3 span {
    font-size: 30px;
    font-weight: 700
}

.list_counter_wrapper .single_list_counter p {
    font-size: 17px;
    color: #6f658d;
    margin-bottom: 0;
    padding-top: 15px
}

.green_color {
    color: #01d874!important
}

.blue_color {
    color: #20b1b9!important
}

.deep_blue {
    color: #016dd8!important
}

.deep_blue_2 {
    color: #4567ee!important
}

.red_color {
    color: #ff4409!important
}

.activity_progressbar .single_progressbar {
    display: grid!important;
    grid-template-columns: 150px auto;
    margin-bottom: 25px;
    align-items: center
}

.activity_progressbar .single_progressbar h6 {
    font-size: 16px;
    font-weight: 400;
    color: #2d1967
}

.activity_progressbar .single_progressbar .barfiller {
    margin-bottom: 0
}

.activity_progressbar .single_progressbar .barfiller .tip {
    color: #2d1967!important;
    font-size: 12px
}

.legend_style_grid {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    padding-left: 25px;
    margin-top: 50px
}

@media(max-width: 991px) {
    .legend_style_grid {
        grid-template-columns:repeat(1,1fr)
    }
}

.legend_style_grid li {
    display: flex!important;
    align-items: center!important;
    margin-bottom: 8px
}

.legend_style_grid li span {
    width: 18px;
    height: 18px;
    border-radius: 3px;
    display: inline-block
}

.assign_list li {
    display: inline-block;
    margin-right: 5px
}

.assign_list li:last-child {
    margin-right: 0
}

.assign_list li a img {
    width: 100%;
    border-radius: 50%;
    -webkit-transition: .2s;
    -moz-transition: .2s;
    -o-transition: .2s;
    transition: .2s;
    width: 23px;
    height: 23px;
    transform: translateY(0px)
}

.assign_list li a img:hover {
    transform: translateY(-2px)
}

.dataTables_paginate {
    margin-top: 0;
    margin-top: 30px
}

.dataTables_paginate a {
    width: 32px;
    height: 32px;
    background: #fff!important;
    border-radius: 3px!important;
    text-align: center!important;
    line-height: 32px;
    padding: 0!important;
    margin: 0!important;
    margin: 0 5px!important
}

.dataTables_paginate a.current {
    background: #4c6ef8!important;
    box-shadow: 0 5px 10px rgba(59,118,239,.3)!important;
    border: 0!important;
    color: #fff!important
}

.dataTables_paginate a:hover {
    background: #4c6ef8!important;
    box-shadow: 0 5px 10px rgba(59,118,239,.3);
    border: 0!important;
    color: #fff!important
}

.dataTables_paginate a:hover i {
    color: #fff!important
}

.dataTables_paginate a i {
    line-height: 32px;
    font-size: 12px;
    color: #415094
}

.dataTables_wrapper .dataTables_paginate .paginate_button.disabled,.dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover,.dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active {
    cursor: default;
    color: #fff!important;
    border: 0
}

#DataTables_Table_0_info {
    font-size: 14px;
    color: #415094;
    font-weight: 400;
    margin-top: 35px;
    padding-top: 0
}

.dataTables_wrapper .dataTables_paginate .paginate_button.current,.dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {
    color: #fff!important;
    border: 1px solid #4c6ef8;
    background-color: #4c6ef8!important
}

.min_400 {
    min-height: 380px
}

@media(min-width: 1900px) {
    .min_400 {
        min-height:450px
    }
}

.min_430 {
    min-height: 430px
}

@media(min-width: 1900px) {
    .min_430 {
        min-height:460px
    }
}

.mb-55 {
    margin-bottom: 55px
}

.profile_box_1 {
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,.25);
    position: relative;
    overflow: hidden
}

.profile_box_1 .profile-picture {
    position: absolute;
    top: 240px;
    left: 50%;
    margin-left: -55px
}

.profile_box_1 .profile-picture img {
    border: 5px solid #fff;
    border-radius: 100%;
    box-shadow: 0 0 4px rgba(0,0,0,.3);
    width: 100px;
    height: 100px
}

.profile_box_1 .profile-cover-image {
    height: 300px;
    overflow: hidden
}

.profile_box_1 .profile-cover-image img {
    width: 100%
}

.profile_box_1 .profile-content {
    padding: 40px 20px;
    text-align: center
}

.profile_box_1 .profile-content h1 {
    font-weight: 400;
    margin-bottom: .2em
}

.profile_box_1 .profile-content p {
    font-size: 1.1em;
    line-height: 1.6;
    color: #d2d2d2
}

.profile_box_1 .profile-content .socials a {
    color: #d2d2d2;
    margin: 0 15px;
    font-size: 1.6em;
    transform: translateY(4px)
}

.profile_box_1 .profile-content .socials a:hover {
    color: #aaa;
    transform: translateY(0)
}

.card-profile {
    background-color: #e6e5e1;
    border-radius: 0;
    border: 0;
    box-shadow: 1em 1em 2em rgba(0,0,0,.2)
}

.card-profile .card-img-top {
    border-radius: 0
}

.card-profile .card-img-profile {
    max-width: 100%;
    border-radius: 50%;
    margin-top: -95px;
    margin-bottom: 35px;
    border: 5px solid #e6e5e1
}

.card-profile .card-title {
    margin-bottom: 50px
}

.card-profile .card-title small {
    display: block;
    font-size: .6em;
    margin-top: .2em
}

.card-profile .card-links {
    margin-bottom: 25px
}

.card-profile .card-links .fa {
    margin: 0 1em;
    font-size: 1.6em
}

.card-profile .card-links .fa:focus,.card-profile .card-links .fa:hover {
    text-decoration: none
}

.card-profile .card-links .fa.fa-dribbble {
    color: #ea4b89;
    font-weight: 700
}

.card-profile .card-links .fa.fa-dribbble:hover {
    color: #e51d6b
}

.card-profile .card-links .fa.fa-twitter {
    color: #68aade
}

.card-profile .card-links .fa.fa-twitter:hover {
    color: #3e92d5
}

.card-profile .card-links .fa.fa-facebook {
    color: #3b5999
}

.card-profile .card-links .fa.fa-facebook:hover {
    color: #2d4474
}

.profile-card-4 {
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
    box-shadow: 0 2px 3px #222
}

.profile-card-4:hover .profile-img img {
    transform: scale(1.2)
}

.profile-card-4 .profile-img img {
    width: 100%;
    height: auto;
    transition: transform 1s
}

.profile-card-4 .profile-content::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 40%;
    border: 3px solid #333;
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transform: scale(1,1);
    transition: all .5s linear
}

.profile-card-4 .profile-content::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 40%;
    border: 3px solid #222;
    border-left: 3px solid transparent;
    border-top: 3px solid transparent;
    transition: all .5s linear
}

.profile-card-4:hover .profile-content:before {
    top: 20px;
    left: 20px
}

.profile-card-4:hover .profile-content:after {
    bottom: 20px;
    right: 20px
}

.profile-card-4 .profile-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 50% 4%;
    text-align: center
}

.profile-card-4 .profile-content:hover {
    background-color: rgba(255,43,131,.5)
}

.profile-card-4 .profile-content .title {
    font-size: 24px;
    color: #333;
    opacity: 0;
    letter-spacing: 2px;
    text-transform: uppercase;
    transform: translateY(-100px);
    transition: all 900ms cubic-bezier(.68,-.55,.265,1.55) .2s
}

.profile-card-4:hover .title {
    opacity: 1;
    transform: translateY(0)
}

.profile-card-4:hover .title::after {
    content: "";
    display: block;
    width: 50%;
    margin: 10px auto;
    border-bottom: 2px solid #222
}

.profile-card-4 .profile-content .title>span {
    display: block;
    margin: 5px 0;
    font-size: 14px;
    text-transform: capitalize
}

.profile-card-4 .profile-content .social-link {
    margin: 20px 0;
    padding: 0;
    opacity: 0;
    transform: translateY(100px);
    transition: all 600ms cubic-bezier(.68,-.55,.265,1.55) .2s
}

.profile-card-4:hover .social-link {
    opacity: 1;
    transform: translateY(0)
}

.profile-card-4 .profile-content .social-link li {
    display: inline-block;
    list-style: none;
    margin: 0 4px
}

.profile-card-4 .profile-content .social-link li a {
    color: #333;
    width: 30px;
    height: 25px;
    line-height: 24px;
    text-align: center;
    border-radius: 5px;
    background-color: #fff
}

.pCard_card {
    height: 615px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
    border-radius: 30px;
    background-color: #f6fcfe;
    -webkit-box-shadow: 0 20px 70px 0 rgba(0,0,0,.21);
    -moz-box-shadow: 0 20px 70px 0 rgba(0,0,0,.21);
    -ms-box-shadow: 0 20px 70px 0 rgba(0,0,0,.21);
    -o-box-shadow: 0 20px 70px 0 rgba(0,0,0,.21);
    box-shadow: 0 20px 70px 0 rgba(0,0,0,.21);
    position: relative;
    overflow: hidden
}

.pCard_card .pCard_back {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    margin-top: -139px;
    font-weight: 600;
    z-index: 1
}

.pCard_card .pCard_back a {
    text-decoration: none
}

.pCard_card .pCard_up {
    position: absolute;
    width: 100%;
    height: 437px;
    background-image: url(../img/card2.jpg);
    background-position: 50%;
    background-size: cover;
    z-index: 3;
    text-align: center;
    -webkit-border-top-left-radius: 30px;
    -moz-border-top-left-radius: 30px;
    -ms-border-top-left-radius: 30px;
    -o-border-top-left-radius: 30px;
    border-top-left-radius: 30px;
    -webkit-border-top-right-radius: 30px;
    -moz-border-top-right-radius: 30px;
    -ms-border-top-right-radius: 30px;
    -o-border-top-right-radius: 30px;
    border-top-right-radius: 30px;
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -ms-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out
}

.pCard_on .pCard_up {
    height: 100px;
    box-shadow: 0 0 30px #cfd8dc
}

.pCard_card .pCard_up .pCard_text {
    position: absolute;
    top: 319px;
    left: 0;
    right: 0;
    color: #f1f7f9;
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -ms-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out
}

.pCard_on .pCard_up .pCard_text {
    top: 20px
}

.pCard_card .pCard_up .pCard_text h2 {
    margin: 0;
    font-size: 25px;
    font-weight: 600;
    color: #fff
}

.pCard_card .pCard_up .pCard_text p {
    margin: 0;
    font-size: 16px;
    color: #e3f1f5
}

.pCard_card .pCard_up .pCard_add {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    background-color: #4567ee;
    -webkit-box-shadow: 0 5px 24px 0 rgba(0,0,0,.43);
    -moz-box-shadow: 0 5px 24px 0 rgba(0,0,0,.43);
    -ms-box-shadow: 0 5px 24px 0 rgba(0,0,0,.43);
    -o-box-shadow: 0 5px 24px 0 rgba(0,0,0,.43);
    box-shadow: 0 5px 24px 0 rgba(0,0,0,.43);
    position: absolute;
    top: 392px;
    left: 0;
    right: 0;
    margin: auto;
    width: 88px;
    height: 88px;
    cursor: pointer;
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -ms-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out
}

.pCard_on .pCard_up .pCard_add {
    -webkit-transform: rotate(360deg) scale(.5);
    -moz-transform: rotate(360deg) scale(.5);
    -ms-transform: rotate(360deg) scale(.5);
    -o-transform: rotate(360deg) scale(.5);
    transform: rotate(360deg) scale(.5);
    top: 470px
}

.pCard_card .pCard_down {
    background-color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 178px;
    z-index: 2;
    -webkit-border-bottom-left-radius: 30px;
    -moz-border-bottom-left-radius: 30px;
    -ms-border-bottom-left-radius: 30px;
    -o-border-bottom-left-radius: 30px;
    border-bottom-left-radius: 30px;
    -webkit-border-bottom-right-radius: 30px;
    -moz-border-bottom-right-radius: 30px;
    -ms-border-bottom-right-radius: 30px;
    -o-border-bottom-right-radius: 30px;
    border-bottom-right-radius: 30px;
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -ms-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out
}

.pCard_on .pCard_down {
    height: 100px;
    -webkit-box-shadow: 0 0 30px #cfd8dc;
    -moz-box-shadow: 0 0 30px #cfd8dc;
    -ms-box-shadow: 0 0 30px #cfd8dc;
    -o-box-shadow: 0 0 30px #cfd8dc;
    box-shadow: 0 0 30px #cfd8dc
}

.pCard_card .pCard_down div {
    width: 33.333%;
    float: left;
    text-align: center;
    margin-top: 50px;
    font-size: 18px;
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -ms-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out
}

.pCard_on .pCard_down div {
    margin-top: 10px
}

.pCard_card .pCard_down div p:first-of-type {
    color: #68818c;
    margin-bottom: 5px
}

.pCard_card .pCard_down div p:last-of-type {
    color: #334750;
    font-weight: 700;
    margin-top: 0
}

.pCard_card .pCard_back a i {
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 36px;
    margin: 10px;
    display: inline-block;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
    border-radius: 15px;
    -webkit-transition: .3s ease-in-out;
    -moz-transition: .3s ease-in-out;
    -ms-transition: .3s ease-in-out;
    -o-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
    font-size: 15px
}

.pCard_card .pCard_back a i:hover {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2)
}

.pCard_card .pCard_back a:nth-of-type(1) i {
    color: #3b5998;
    border: 2px solid #3b5998
}

.pCard_card .pCard_back a:nth-of-type(2) i {
    color: #0077b5;
    border: 2px solid #0077b5
}

.pCard_card .pCard_back a:nth-of-type(3) i {
    color: #1769ff;
    border: 2px solid #1769ff
}

.pCard_card .pCard_back a:nth-of-type(4) i {
    color: #000;
    border: 2px solid #000
}

.pCard_card .pCard_back a:nth-of-type(5) i {
    color: #eb5e95;
    border: 2px solid #eb5e95
}

.pCard_card .pCard_back a:nth-of-type(6) i {
    color: #3f729b;
    border: 2px solid #3f729b
}

.pCard_card .pCard_up .pCard_add i {
    color: #fff;
    font-size: 38px;
    line-height: 88px
}

.profile-cart_2 {
    min-height: 500px;
    box-shadow: 0 0 5px 1px rgba(52,52,52,.224);
    position: relative;
    border-radius: 20px;
    transition: 2s
}

.profile-cart_2:hover {
    box-shadow: 0 0 15px 1px rgba(52,52,52,.25)
}

.profile-cart_2::after {
    content: " ";
    background-image: linear-gradient(135deg,#4567EE 10%,#4567EE 100%);
    clip-path: circle(50% at 50% 1%);
    display: block;
    min-height: 500px;
    transition: 2s;
    border-radius: 20px
}

.profile-cart_2:hover::after {
    content: " ";
    clip-path: circle(100% at 50% 170%);
    transition: 2s;
    display: block;
    min-height: 500px;
    transition: 2s;
    border-radius: 20px
}

.profile-cart_2 img {
    width: 100px!important;
    height: 100px!important;
    position: absolute;
    top: 78px;
    left: 37%;
    z-index: 99999999;
    transition: 2s;
    border-radius: 100%
}

.profile-cart_2 :hover img {
    transform: scale(1.3) translateY(20px);
    transition: 2s
}

.profile-cart_2 h1 {
    z-index: 999;
    position: absolute;
    justify-content: center;
    display: flex;
    width: 100%;
    font-family: poppins bold;
    color: rgba(30,29,29,.85);
    letter-spacing: 2px
}

.profile-cart_2 p {
    position: absolute;
    z-index: 999;
    display: flex;
    align-items: center;
    text-align: center;
    top: 50%;
    font-family: poppins;
    font-weight: 500;
    margin: 0 20px;
    color: rgba(30,29,29,.85)
}

.profile-cart_2 .social-area {
    position: absolute;
    bottom: 30px;
    z-index: 999;
    justify-content: center;
    display: flex;
    width: 100%
}

.profile-cart_2 .social-area a {
    color: rgba(30,29,29,.85)
}

.profile-cart_2 .social-area a {
    margin: 15px 15px 0;
    font-size: 20px;
    transition: 4s
}

.profile-cart_2 :hover .social-area svg {
    color: #fff;
    transition: 1s
}

.profile-cart_2 .social-area svg:hover {
    transform: scale(1.5)
}

.profile_card_5 .cover-photo {
    background: url(https://images.unsplash.com/photo-1540228232483-1b64a7024923?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80);
    height: 160px;
    width: 100%;
    border-radius: 5px 5px 0 0
}

.profile_card_5 .profile {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    position: relative;
    border: 1px solid #1f1a32;
    padding: 7px;
    background: #292343;
    margin-top: 80px;
    margin-left: 10px
}

.profile_card_5 .profile-name {
    font-size: 25px;
    font-weight: 700;
    margin: 27px 0 0 120px
}

.profile_card_5 .about {
    margin-top: 35px;
    line-height: 21px
}

.profile_card_5 button {
    margin: 10px 0 40px
}

.profile_card_5 .msg-btn,.profile_card_5 .follow-btn {
    background: #4567ee;
    border: 1px solid #4567ee;
    padding: 10px 25px;
    color: #231e39;
    border-radius: 3px;
    font-family: Montserrat,sans-serif;
    cursor: pointer
}

.profile_card_5 .follow-btn {
    margin-left: 10px;
    background: 0 0;
    color: #02899c
}

.profile_card_5 .follow-btn:hover {
    color: #231e39;
    background: #4567ee;
    transition: .5s
}

.profile_card_5 i {
    padding-left: 20px;
    font-size: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: .5s
}

.profile_card_5 i:hover {
    color: #4567ee
}

.widget-chart {
    text-align: center;
    padding: 1rem;
    position: relative
}

.widget-chart .rounded {
    border-radius: .25rem!important
}

.widget-chart .icon-wrapper {
    width: 54px;
    height: 54px;
    margin: 0 auto;
    position: relative;
    overflow: hidden
}

.widget-chart .icon-wrapper .icon-wrapper-bg {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 3;
    opacity: .2
}

.widget-chart .icon-wrapper i {
    margin: 0 auto;
    font-size: 1.7rem;
    position: relative;
    z-index: 5;
    line-height: 54px
}

.widget-chart .widget-numbers {
    font-weight: 700;
    font-size: 2.5rem;
    display: block;
    line-height: 1;
    margin: 1rem auto
}

.widget-chart .widget-numbers span {
    font-weight: 700;
    font-size: 2.5rem
}

.widget-chart .widget-subheading {
    margin-top: -.5rem
}

.widget-chart .widget-description {
    margin: 1rem 0 0
}

.bg-light {
    background-color: #eee!important
}

.icon-wrapper .icon-wrapper-bg.bg-light {
    opacity: .08
}

.bg-focus {
    background-color: #444054!important
}

.bg-primary {
    background-color: #3f6ad8!important
}

.accordion_custom h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 40px
}

.accordion_custom .card {
    margin-bottom: 15px;
    border: 0;
    overflow: visible
}

.accordion_custom .card .card-header {
    border: 0;
    padding: 0;
    border-radius: 10px!important
}

.accordion_custom .card .card-header h2 {
    padding: 0
}

.accordion_custom .card .card-header h2 a {
    padding: 0;
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    text-align: left;
    position: relative;
    position: relative;
    padding: 13px 20px;
    background: #4c6ef8;
    box-shadow: 0 5px 10px rgba(76,110,248,.3);
    color: #fff;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    border: 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px
}

.accordion_custom .card .card-header h2 a::before {
    content: "\e64b";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-family: themify;
    font-size: 14px;
    right: 30px;
    color: #fff
}

.accordion_custom .card .card-header h2 a.collapsed {
    background: #f5f6ff;
    color: #415094;
    box-shadow: none;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px
}

.accordion_custom .card .card-header h2 a.collapsed::before {
    content: "\e648";
    color: #415094
}

.accordion_custom .card .card-header h2 a:focus {
    text-decoration: none
}

.accordion_custom .card .card-body {
    padding: 24px 20px 30px
}

@media(max-width: 575.98px) {
    .accordion_custom .card .card-body {
        padding:15px
    }
}

.accordion_custom .card .card-body p {
    font-size: 14px;
    line-height: 26px;
    color: #555;
    font-weight: 300;
    margin-bottom: 28px
}

.accordion_custom .card .card-body p:last-child {
    margin-bottom: 0
}

.accordion_custom2 h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 40px
}

.accordion_custom2 .card {
    margin-bottom: 15px;
    border: 0;
    overflow: visible
}

.accordion_custom2 .card .card-header {
    border: 0;
    padding: 0;
    border-radius: 0!important
}

.accordion_custom2 .card .card-header h2 {
    padding: 0
}

.accordion_custom2 .card .card-header h2 a {
    padding: 0;
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    text-align: left;
    position: relative;
    position: relative;
    padding: 13px 20px;
    background: #4c6ef8;
    box-shadow: 0 5px 10px rgba(76,110,248,.3);
    color: #fff;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    border: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0
}

.accordion_custom2 .card .card-header h2 a::before {
    content: "\e627";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-family: themify;
    font-size: 14px;
    right: 30px;
    color: #fff
}

.accordion_custom2 .card .card-header h2 a.collapsed {
    background: #f5f6ff;
    color: #415094;
    box-shadow: none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0
}

.accordion_custom2 .card .card-header h2 a.collapsed::before {
    content: "\e62a";
    color: #415094
}

.accordion_custom2 .card .card-header h2 a:focus {
    text-decoration: none
}

.accordion_custom2 .card .card-body {
    padding: 24px 20px 30px;
    background: #f5f6ff
}

.accordion_custom2 .card .card-body p {
    font-size: 14px;
    line-height: 26px;
    color: #555;
    font-weight: 300;
    margin-bottom: 28px
}

.accordion_custom2 .card .card-body p:last-child {
    margin-bottom: 0
}

.messages_box_area {
    display: grid;
    grid-template-columns: 4fr 8fr;
    grid-gap: 30px
}

@media(max-width: 575.98px) {
    .messages_box_area {
        grid-template-columns:1fr
    }
}

@media(max-width: 991px) {
    .messages_box_area {
        grid-template-columns:1fr
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .messages_box_area {
        grid-template-columns:1fr
    }
}

@media(min-width: 1200px) and (max-width:1500px) {
    .messages_box_area {
        grid-template-columns:6fr 6fr
    }
}

@media only screen and (min-width: 1440px) and (max-width:1679px) {
    .messages_box_area {
        grid-template-columns:5fr 7fr
    }
}

.messages_box_area .messages_list .serach_field_2 {
    width: 100%
}

.messages_box_area .messages_list ul {
    margin-top: 30px;
    margin-bottom: 30px
}

.messages_box_area .messages_list ul li a {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid #eee1e2;
    padding: 20px 0;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -o-transition: .3s;
    transition: .3s
}

.messages_box_area .messages_list ul li a .message_pre_left {
    display: flex;
    align-items: center
}

.messages_box_area .messages_list ul li a .message_pre_left .message_preview_thumb img {
    width: 50px;
    height: 50px
}

.messages_box_area .messages_list ul li a .message_pre_left .messges_info {
    padding-left: 20px
}

.messages_box_area .messages_list ul li a .message_pre_left h4 {
    font-size: 14px;
    font-weight: 500;
    color: #222;
    margin-bottom: 6px
}

.messages_box_area .messages_list ul li a .message_pre_left p {
    font-size: 13px;
    font-weight: 300;
    color: #676b84;
    margin-bottom: 0
}

.messages_box_area .messages_list ul li a .messge_time span {
    font-size: 12px;
    font-weight: 300;
    color: #cec1c2;
    white-space: nowrap
}

.messages_box_area .messages_list ul li:hover a {
    padding-left: 10px;
    padding-right: 10px;
    background: rgba(255,247,248,.6)
}

.messages_box_area .messages_chat .messge_time span {
    white-space: nowrap
}

.messages_box_area .messages_chat .single_message_chat {
    margin-bottom: 50px;
    padding-right: 20%
}

@media(max-width: 575.98px) {
    .messages_box_area .messages_chat .single_message_chat {
        padding-right:0%;
        margin-bottom: 30px
    }
}

@media(max-width: 991px) {
    .messages_box_area .messages_chat .single_message_chat {
        padding-right:0%;
        margin-bottom: 30px
    }
}

@media(min-width: 1200px) and (max-width:1500px) {
    .messages_box_area .messages_chat .single_message_chat {
        padding-right:0%;
        margin-bottom: 30px
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .messages_box_area .messages_chat .single_message_chat {
        padding-right:0%;
        margin-bottom: 30px
    }
}

.messages_box_area .messages_chat .single_message_chat .message_content_view {
    background: #f5f6ff;
    border-radius: 10px;
    padding: 30px
}

.messages_box_area .messages_chat .single_message_chat .message_content_view.red_border {
    border: 1px solid #4c6ef8;
    background: #4c6ef8
}

.messages_box_area .messages_chat .single_message_chat .message_content_view.red_border span,.messages_box_area .messages_chat .single_message_chat .message_content_view.red_border p {
    color: #fff
}

.messages_box_area .messages_chat .single_message_chat .message_content_view span {
    display: block;
    margin: 17px 0
}

.messages_box_area .messages_chat .single_message_chat .message_content_view p {
    font-size: 13px;
    font-weight: 300;
    color: #676b84;
    line-height: 26px
}

.messages_box_area .messages_chat .single_message_chat .message_pre_left {
    margin-bottom: 20px;
    display: flex;
    align-items: center
}

.messages_box_area .messages_chat .single_message_chat .message_pre_left .message_preview_thumb img {
    width: 50px;
    height: 50px
}

.messages_box_area .messages_chat .single_message_chat .message_pre_left .messges_info {
    padding-left: 20px
}

.messages_box_area .messages_chat .single_message_chat .message_pre_left h4 {
    font-size: 16px;
    font-weight: 500;
    color: #222;
    margin-bottom: 2px
}

.messages_box_area .messages_chat .single_message_chat .message_pre_left p {
    font-size: 12px;
    font-weight: 300;
    color: #676b84;
    margin-bottom: 0
}

.messages_box_area .messages_chat .single_message_chat.sender_message {
    padding-right: 0%;
    padding-left: 20%
}

@media(max-width: 575.98px) {
    .messages_box_area .messages_chat .single_message_chat.sender_message {
        padding-right:0%;
        padding-left: 0%;
        margin-bottom: 30px
    }
}

@media(max-width: 991px) {
    .messages_box_area .messages_chat .single_message_chat.sender_message {
        padding-right:0%;
        padding-left: 0%;
        margin-bottom: 30px
    }
}

@media(min-width: 1200px) and (max-width:1500px) {
    .messages_box_area .messages_chat .single_message_chat.sender_message {
        padding-right:0%;
        padding-left: 0%;
        margin-bottom: 30px
    }
}

@media only screen and (min-width: 992px) and (max-width:1200px) {
    .messages_box_area .messages_chat .single_message_chat.sender_message {
        padding-right:0%;
        padding-left: 0%;
        margin-bottom: 30px
    }
}

.messages_box_area .messages_chat .single_message_chat.sender_message .message_pre_left {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end
}

.messages_box_area .messages_chat .single_message_chat.sender_message .messges_info {
    padding-left: 0;
    padding-right: 20px;
    text-align: right
}

.messages_box_area .messages_chat .message_send_field {
    padding-top: 50px;
    display: grid;
    grid-template-columns: auto 110px;
    grid-gap: 10px
}

@media(max-width: 575.98px) {
    .messages_box_area .messages_chat .message_send_field {
        grid-template-columns:1fr;
        margin-top: 20px
    }
}

.messages_box_area .messages_chat .message_send_field input {
    color: #676b84;
    font-size: 13px;
    height: 40px;
    width: 100%;
    border-radius: 5px;
    padding-left: 25px;
    border: 1px solid #eee1e2;
    padding-right: 15px
}

.messages_box_area .messages_chat .message_send_field input::placeholder {
    color: #676b84;
    font-weight: 300;
    opacity: 1
}

.email-sidebar {
    background: #fff;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.1);
    position: relative;
    z-index: 6;
    padding: 15px;
    height: calc(100% - 3.9375rem)
}

.email-sidebar h4 {
    font-weight: 600;
    font-size: .875rem;
    color: #333;
    padding: 2.5rem 0 3.125rem 1.5625rem
}

.email-sidebar ul {
    margin-bottom: 3.125rem
}

.email-sidebar ul li {
    display: block
}

.email-sidebar ul li a {
    display: block;
    padding: 10px 0;
    transition: all .5s ease-in-out;
    font-weight: 600;
    font-size: .875rem;
    color: #333
}

.email-sidebar ul li a:hover i {
    color: #4c6ef8
}

.email-sidebar ul li a i {
    margin-right: .7rem
}

.primary_checkbox {
    display: inline-block;
    position: relative;
    width: 18px;
    height: 18px;
    margin: 0;
    flex: 18px 0 0;
    line-height: 18px
}

.primary_checkbox .checkmark {
    position: relative;
    width: 18px;
    height: 18px;
    top: 0;
    left: 0;
    display: block;
    cursor: pointer;
    line-height: 18px;
    flex: 18px 0 0;
    border-radius: 50%
}

.primary_checkbox input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden
}

.primary_checkbox input:checked~.checkmark:after {
    width: 100%;
    height: 100%;
    border: 0;
    transition: .3s;
    transform: scale(0)
}

.primary_checkbox input:checked~.checkmark {
    background: #4c6ef8!important;
    box-shadow: 0 5px 10px rgba(59,118,239,.3)!important;
    transition: .3s
}

.primary_checkbox input:checked~.checkmark::before {
    content: "\e64c";
    font-family: themify;
    position: absolute;
    display: block;
    top: 0;
    left: 3px;
    text-indent: 1px;
    color: #828bb2;
    background-color: transparent;
    border: 0;
    -webkit-transform: rotate(8deg);
    -moz-transform: rotate(8deg);
    -ms-transform: rotate(8deg);
    -o-transform: rotate(8deg);
    transform: rotate(8deg);
    font-size: 10px;
    font-weight: 600;
    line-height: 18px;
    z-index: 99;
    color: #fff;
    transition: .3s
}

.primary_checkbox .checkmark:after {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    content: "";
    width: 18px;
    height: 18px;
    background: 0 0;
    border-radius: 50px;
    border: 1px solid #828bb2;
    transition: .3s;
    transform: scale(1)
}

.bayer_table tr {
    margin-bottom: 18px
}

.bayer_table tr td {
    padding-left: 0;
    padding-right: 0;
    vertical-align: middle;
    padding: 0;
    padding-bottom: 24px
}

.bayer_table tr td:first-child {
    width: 100px
}

.bayer_table tr td .byder_thumb {
    width: 81px;
    height: 81px;
    border-radius: 50%
}

.bayer_table tr td .byder_thumb.wh_56 {
    width: 56px;
    height: 56px;
    border-radius: 50%
}

.bayer_table tr td .byer_name {
    margin-bottom: 0;
    white-space: nowrap
}

.bayer_table2 tr td {
    padding-left: 0;
    padding-right: 0;
    vertical-align: middle;
    padding: 0;
    padding-bottom: 25px
}

.bayer_table2 tr td:first-child {
    width: 70px!important
}

.bayer_table2 tr td .byder_thumb {
    width: 56px;
    height: 56px;
    border-radius: 50%
}

.bayer_table2 tr td .byer_name {
    margin-bottom: 0
}

.blue_button {
    font-size: 12px;
    font-weight: 600;
    color: #2f90f7;
    background: #e7f3fe;
    display: inline-block;
    padding: 4px 16px;
    border-radius: 30px
}

.notification_btn {
    font-size: 10px;
    font-weight: 400;
    color: #fff;
    background: #508ff4;
    display: inline-block;
    border-radius: 3px;
    padding: 4px 14px
}

.notification_btn:hover {
    color: #fff
}

.notification_btn.yellow_btn {
    background: #ffbf43;
    color: #fff
}

.notification_btn.green_btn {
    background: #4be69d;
    color: #fff
}

.notification_btn.violate_btn {
    background: #9267ff;
    color: #fff
}

.f_w_100 {
    font-weight: 100
}

.f_w_200 {
    font-weight: 200
}

.f_w_300 {
    font-weight: 300
}

.f_w_400 {
    font-weight: 400
}

.f_w_500 {
    font-weight: 500
}

.f_w_600 {
    font-weight: 600
}

.f_w_700 {
    font-weight: 700
}

.f_w_800 {
    font-weight: 800
}

.f_w_900 {
    font-weight: 900
}

.f_15 {
    font-size: 15px
}

.f_16 {
    font-size: 16px
}

.color_blue {
    color: #2f90f7
}

.color_blue2 {
    color: #8ac6fb
}

.color_parpel {
    color: #833cdf
}

.color_pink {
    color: #fe80b2
}

.color_yellow {
    color: #ffcb24
}

.theme_bg_1 {
    background: #2d1967!important
}

.theme_color_1 {
    color: #2d1967!important
}

.theme_color_2 {
    color: #833cdf!important
}

.theme_color_3 {
    color: #fe80b2!important
}

.theme_color_4 {
    color: #fe80b2!important
}

.theme_color_5 {
    color: #2ff0f7!important
}

.mb_40 {
    margin-bottom: 40px
}

.box_shadow {
    box-shadow: 0 12px 30px rgba(46,71,101,.1)
}

.primary-color ul li {
    padding: 10px 15px
}

.primary-color ul li:nth-child(1) {
    background-color: #8a75dd
}

.primary-color ul li:nth-child(1)::before {
    content: "#8a75dd";
    display: block;
    color: #fff;
    text-align: center
}

.primary-color ul li:nth-child(2) {
    background-color: #846edb
}

.primary-color ul li:nth-child(2)::before {
    content: "#8a75dd";
    display: block;
    color: #fff;
    text-align: center
}

.primary-color ul li:nth-child(3) {
    background-color: #7f68da
}

.primary-color ul li:nth-child(3)::before {
    content: "#7f68da";
    display: block;
    color: #fff;
    text-align: center
}

.primary-color ul li:nth-child(4) {
    background-color: #7a62d8
}

.primary-color ul li:nth-child(4)::before {
    content: "#7a62d8";
    display: block;
    color: #fff;
    text-align: center
}

.primary-color ul li:nth-child(5) {
    background-color: #755cd7
}

.primary-color ul li:nth-child(5)::before {
    content: "#755cd7";
    display: block;
    color: #fff;
    text-align: center
}

.primary-color ul li:nth-child(6) {
    background-color: #7056d5
}

.primary-color ul li:nth-child(6)::before {
    content: "#7056d5";
    display: block;
    color: #fff;
    text-align: center
}

.primary-color ul li:nth-child(7) {
    background-color: #6a50d4
}

.primary-color ul li:nth-child(7)::before {
    content: "#6a50d4";
    display: block;
    color: #fff;
    text-align: center
}

.primary-color ul li:nth-child(8) {
    background-color: #654ad2
}

.primary-color ul li:nth-child(8)::before {
    content: "#654ad2";
    display: block;
    color: #fff;
    text-align: center
}

.secondary-color ul li {
    padding: 10px 15px
}

.secondary-color ul li:nth-child(1) {
    background-color: #69b9ec
}

.secondary-color ul li:nth-child(1)::before {
    content: "#69b9ec";
    display: block;
    color: #fff;
    text-align: center
}

.secondary-color ul li:nth-child(2) {
    background-color: #64b6eb
}

.secondary-color ul li:nth-child(2)::before {
    content: "#64b6eb";
    display: block;
    color: #fff;
    text-align: center
}

.secondary-color ul li:nth-child(3) {
    background-color: #60b4ea
}

.secondary-color ul li:nth-child(3)::before {
    content: "#60b4ea";
    display: block;
    color: #fff;
    text-align: center
}

.secondary-color ul li:nth-child(4) {
    background-color: #5bb2ea
}

.secondary-color ul li:nth-child(4)::before {
    content: "#5bb2ea";
    display: block;
    color: #fff;
    text-align: center
}

.secondary-color ul li:nth-child(5) {
    background-color: #57b0e9
}

.secondary-color ul li:nth-child(5)::before {
    content: "#57b0e9";
    display: block;
    color: #fff;
    text-align: center
}

.secondary-color ul li:nth-child(6) {
    background-color: #52aee9
}

.secondary-color ul li:nth-child(6)::before {
    content: "#52aee9";
    display: block;
    color: #fff;
    text-align: center
}

.secondary-color ul li:nth-child(7) {
    background-color: #4eace8
}

.secondary-color ul li:nth-child(7)::before {
    content: "#4eace8";
    display: block;
    color: #fff;
    text-align: center
}

.secondary-color ul li:nth-child(8) {
    background-color: #49aae8
}

.secondary-color ul li:nth-child(8)::before {
    content: "#49aae8";
    display: block;
    color: #fff;
    text-align: center
}

.success-color ul li {
    padding: 10px 15px
}

.success-color ul li:nth-child(1) {
    background-color: #d7ff97
}

.success-color ul li:nth-child(1)::before {
    content: "#d7ff97";
    display: block;
    color: #fff;
    text-align: center
}

.success-color ul li:nth-child(2) {
    background-color: #d1ff88
}

.success-color ul li:nth-child(2)::before {
    content: "#d1ff88";
    display: block;
    color: #fff;
    text-align: center
}

.success-color ul li:nth-child(3) {
    background-color: #ccff78
}

.success-color ul li:nth-child(3)::before {
    content: "#ccff78";
    display: block;
    color: #fff;
    text-align: center
}

.success-color ul li:nth-child(4) {
    background-color: #c6ff69
}

.success-color ul li:nth-child(4)::before {
    content: "#c6ff69";
    display: block;
    color: #fff;
    text-align: center
}

.success-color ul li:nth-child(5) {
    background-color: #c0ff5a
}

.success-color ul li:nth-child(5)::before {
    content: "#c0ff5a";
    display: block;
    color: #fff;
    text-align: center
}

.success-color ul li:nth-child(6) {
    background-color: #b4ff3b
}

.success-color ul li:nth-child(6)::before {
    content: "#b4ff3b";
    display: block;
    color: #fff;
    text-align: center
}

.success-color ul li:nth-child(7) {
    background-color: #aeff2c
}

.success-color ul li:nth-child(7)::before {
    content: "#aeff2c";
    display: block;
    color: #fff;
    text-align: center
}

.success-color ul li:nth-child(8) {
    background-color: #a9ff1d
}

.success-color ul li:nth-child(8)::before {
    content: "#a9ff1d";
    display: block;
    color: #fff;
    text-align: center
}

.ui-sortable-handle {
    cursor: move
}

.chart_height_300px {
    height: 400px
}

.amcharts-export-menu.amcharts-export-menu-top-right.amExportButton {
    display: none
}

.single_update_news {
    border-bottom: 1px solid #f3f4f3;
    padding: 15px 0 17px
}

.single_update_news:first-child {
    border-top: 1px solid #f3f4f3
}

.single_update_news h5 {
    margin-bottom: 0
}

.single_update_news p {
    margin-bottom: 0
}

.monthly_plan_wraper .single_plan {
    margin-bottom: 20px
}

.monthly_plan_wraper .total_blance {
    background: #f8faff;
    border-radius: 5px;
    padding: 18px 30px
}

.sales_renew_btns a {
    color: #303e67
}

.sales_renew_btns a.active {
    color: #1c2d41;
    background-color: #f1f5fa
}

.white_card_body.renew_report_card {
    padding: 39px 50px
}

.dashboard_w_map {
    height: 270px
}

.dashboard_w_map .jvectormap-zoomin,.dashboard_w_map .jvectormap-zoomout {
    width: 20px;
    height: 20px
}

.dashboard_w_map .jvectormap-zoomin {
    top: 10px
}

.dashboard_w_map .jvectormap-zoomin,.dashboard_w_map .jvectormap-zoomout,.dashboard_w_map .jvectormap-goback {
    position: absolute;
    left: auto;
    right: 0;
    display: inline-block;
    border-radius: 50%;
    background: #f8f8fc;
    padding: 5px;
    color: #435177;
    cursor: pointer;
    line-height: 20px;
    text-align: center;
    -webkit-box-sizing: content-box;
    box-sizing: content-box
}

.single_progressbar h6 {
    font-size: 14px;
    font-weight: 400;
    color: #14256a
}

.single_progressbar .barfiller span {
    color: #8890b5!important;
    font-size: 11px
}

.card_container {
    padding: 20px
}

.sales_unit_footer {
    background: #323246;
    border-radius: 0 0 5px 5px;
    padding: 26px 38px
}

.sales_unit_footer .single_sales.disable_sales {
    opacity: .31
}

.sales_unit_footer .single_sales p {
    font-size: 11px;
    color: #c2e6df;
    font-weight: 400
}

.sales_unit_footer .single_sales p span {
    color: #64c5b1;
    margin-right: 5px;
    margin-left: 3px
}

.sales_unit_footer .single_sales p i {
    color: #64c5b1
}

.sales_unit_footer .single_sales h3 {
    font-size: 26px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    margin: 0 0
}

.notification_wrapper .single_notification {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px
}

.notification_wrapper .single_notification .notification_info h4 {
    color: #2e4765;
    margin-bottom: 0
}

.notification_wrapper .single_notification .notification_info p {
    font-size: 13px;
    font-weight: 400;
    color: #7f8b9f
}

.color_bg {
    width: 27px;
    height: 28px;
    border-radius: 5px;
    background: #c9f7f5;
    flex: 27px 0 0
}

.color_bg.color_lite_pink {
    background: #ffe2e5
}

.color_bg.color_lite_violate {
    background: #e2e4ff
}

.color_bg.color_lite_green {
    background: #e2fff0
}

.color_bg.color_lite_yellow {
    background: #fdffe2
}

.mr_15 {
    margin-right: 15px;
    margin-top: 7px
}

.property_wrapper .single_property {
    display: flex;
    align-items: center;
    margin-bottom: 22px;
    flex-wrap: wrap
}

@media(max-width: 575.98px) {
    .property_wrapper .single_property {
        flex-wrap:wrap
    }
}

.property_wrapper .single_property .property_thumb {
    margin-right: 40px;
    position: relative
}

.property_wrapper .single_property .property_thumb .img_up {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    cursor: pointer
}

.property_wrapper .single_property .property_thumb img {
    width: 190px;
    height: 173px;
    border-radius: 5px
}

.property_wrapper .single_property .property_content {
    margin: 10px 0
}

.property_wrapper .single_property .property_content a h4 {
    font-size: 29px;
    color: #2e4765;
    font-weight: 700;
    margin-bottom: 0
}

@media(max-width: 575.98px) {
    .property_wrapper .single_property .property_content a h4 {
        font-size:20px
    }
}

.property_wrapper .single_property .property_content a h4.Up_name {
    color: #d1d1d1
}

.property_wrapper .single_property .property_content a.property_location {
    font-size: 14px;
    color: #2f90f7;
    background: #e7f3fe;
    display: inline-block;
    padding: 10px 14px;
    display: inline-flex;
    align-items: center;
    margin-top: 24px;
    margin-bottom: 10px;
    border-radius: 5px
}

.property_wrapper .single_property .property_content a.property_location img {
    margin-right: 10px
}

.property_wrapper .single_property .property_content p {
    font-size: 14px;
    color: #7f8b9f;
    font-weight: 400
}

.property_wrapper .single_property .property_content p span {
    margin-right: 30px
}

.property_wrapper .single_property .property_content p span:last-child {
    margin: 0
}

.weather_box {
    background: #0090ff
}

.weather_box .weather_header {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center
}

.weather_box .weather_header .thumb {
    top: 0;
    right: 0
}

.weather_box .weather_header .thumb img {
    width: 160px
}

@media(max-width: 575.98px) {
    .weather_box .weather_header .thumb img {
        width:100%
    }
}

.weather_box .weather_header .weather_info {
    display: inline-block
}

.weather_box .weather_header .weather_info h4 {
    font-size: 22px;
    color: #fff;
    font-weight: 700;
    margin-right: 25px;
    display: inline-block;
    vertical-align: top
}

.weather_box .weather_header .weather_info p {
    font-size: 22px;
    display: inline-block;
    color: #fff;
    vertical-align: top;
    font-weight: 400
}

.weather_box .weather_content ul {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap
}

@media(max-width: 575.98px) {
    .weather_box .weather_content ul {
        margin-top:10px
    }
}

.weather_box .weather_content ul li span.selcias {
    font-size: 71px;
    font-weight: 700;
    color: #ffdc7b;
    text-transform: uppercase
}

@media(max-width: 991px) {
    .weather_box .weather_content ul li span.selcias {
        font-size:30px
    }
}

.weather_box .weather_content ul li.weather_percent {
    font-size: 37px;
    font-weight: 400;
    color: #fff;
    display: flex;
    align-items: center
}

@media(max-width: 991px) {
    .weather_box .weather_content ul li.weather_percent {
        font-size:28px
    }
}

.weather_box .weather_content ul li.weather_percent .thumb {
    margin-right: 22px
}

.weather_box .weather_content p {
    font-size: 28px;
    color: #fff;
    font-weight: 400
}

@media(max-width: 991px) {
    .weather_box .weather_content p {
        font-size:18px
    }
}

.weather_box .weather_content p .eql {
    display: inline-block
}

.weather_box .weather_content p span span {
    font-size: 21px
}

.option_icon {
    cursor: pointer
}

.default-datepicker .datepicker-inline .datepicker .datepicker--nav .datepicker--nav-action {
    display: none
}

.default-datepicker .datepicker-inline .datepicker .datepicker--content .datepicker--days .datepicker--days-names {
    margin: 30px 0 0;
    padding: 15px 0
}

.default-datepicker .datepicker-inline .datepicker {
    width: auto;
    background: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding: 0
}

.default-datepicker .datepicker-inline .datepicker .datepicker--content .datepicker--days .datepicker--days-names .datepicker--day-name {
    font-size: 14px;
    font-family: nunito,sans-serif;
    color: #2b2b2b;
    font-size: 14px
}

.default-datepicker .datepicker-inline .datepicker .datepicker--content .datepicker--days .datepicker--cells .datepicker--cell-day.-other-month- {
    color: #2b2b2b
}

.default-datepicker .datepicker-inline .datepicker .datepicker--content .datepicker--days .datepicker--cells .datepicker--cell {
    font-weight: 700
}

.default-datepicker .datepicker-inline .datepicker .datepicker--content .datepicker--days .datepicker--cells .datepicker--cell-day {
    height: 51px;
    color: #2b2b2b
}

.default-datepicker .datepicker-inline .datepicker .datepicker--content .datepicker--days .datepicker--cells .datepicker--cell-day:hover {
    background: #64c5b1;
    border: 2px solid #64c5b1;
    color: #fff
}

.default-datepicker .datepicker-inline .datepicker .datepicker--nav-title {
    color: #2b2b2b;
    font-size: 22px;
    font-weight: 600;
    font-family: nunito,sans-serif
}

.default-datepicker .datepicker-inline .datepicker .datepicker--nav-title {
    border-radius: 8px;
    padding: 0 8px
}

.default-datepicker .datepicker-inline .datepicker .datepicker--nav {
    border-bottom: none;
    padding: 0;
    text-transform: capitalize;
    margin-top: -12px
}

.default-datepicker .datepicker-inline .datepicker .datepicker--nav-title i {
    margin-left: 10px;
    font-weight: 400;
    font-size: 22px;
    color: #2b2b2b;
    font-family: nunito,sans-serif
}

.default-datepicker .datepicker-inline .datepicker .datepicker--day-name {
    color: #000;
    font-weight: 700
}

.default-datepicker .datepicker--days-names {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 8px 0 3px
}

.default-datepicker .datepicker--cells {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.default-datepicker .datepicker--cell-day {
    width: 14.28571%;
    height: 34px
}

.default-datepicker .datepicker--cell {
    border-radius: 38%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 32px;
    z-index: 1
}

.default-datepicker .datepicker--nav-title,.default-datepicker .datepicker--nav-action {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    cursor: pointer;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.default-datepicker .datepicker--cell.-current- {
    color: #fff!important;
    border-radius: 38%;
    font-weight: 700;
    border: 2px solid #64c5b1;
    background: #64c5b1
}

.default-datepicker .datepicker--cell.-focus- {
    background: #64c5b1;
    border: 2px solid #64c5b1;
    color: #fff
}

.datepicker--cell-day.-other-month-,.datepicker--cell-year.-other-decade- {
    color: #dedede
}

.date_picker_wrapper {
    padding: 0;
    padding: 45px 50px;
    border-radius: 15px;
    background: #fff
}

.datepicker--cell.-selected- {
    border: none;
    background: #64c5b1;
    color: #fff
}

.datepicker--cell.-selected-.-current- {
    border: none;
    background: #64c5b1;
    color: #fff
}

.default-datepicker .datepicker-inline .datepicker .datepicker--content .datepicker--days .datepicker--cells .datepicker--cell.-selected- {
    background: #64c5b1;
    color: #fff;
    border-radius: 38%;
    position: relative
}

.datepicker--cell.-focus- {
    background: #64c5b1;
    color: #fff
}

.datepicker--cell.-current- {
    color: #000;
    border-radius: 5px;
    font-weight: 700;
    border: 2px solid #64c5b1
}

.default-datepicker .datepicker-inline .datepicker .datepicker--content .datepicker--days .datepicker--cells .datepicker--cell-day.-other-month- {
    color: #8890b5
}

.erroe_page_wrapper .errow_wrap {
    display: flex;
    padding: 40px 0;
    align-items: center;
    justify-content: center
}

.erroe_page_wrapper .errow_wrap img {
    width: 100px;
    margin: auto
}

.erroe_page_wrapper .errow_wrap .error_heading {
    margin-top: 60px
}

.erroe_page_wrapper .errow_wrap .error_heading h3.headline {
    font-size: 200px;
    font-weight: 800;
    line-height: 1
}

@media(max-width: 991px) {
    .erroe_page_wrapper .errow_wrap .error_heading h3.headline {
        font-size:120px
    }
}

.erroe_page_wrapper .errow_wrap p {
    font-size: 18px;
    letter-spacing: 1px;
    color: #000;
    font-weight: 400;
    margin-top: 30px;
    line-height: 35px;
    margin-bottom: 30px
}

.card_box {
    border-radius: 15px
}

.card_box .white_box_tittle {
    background-color: #fff;
    padding: 50px;
    border-bottom: 1px solid #f2f4ff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    position: relative;
    overflow: hidden
}

.card_box .box_body {
    padding: 50px
}

.card_box .box_body .card {
    margin-bottom: 40px;
    border: 0;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    letter-spacing: .5px;
    border-radius: 40px;
    -webkit-box-shadow: 0 0 25px 0 rgba(126,55,216,.05);
    box-shadow: 0 0 25px 0 rgba(126,55,216,.05)
}

.card_box .box_body .card:last-child {
    margin-bottom: 0
}

.card_box .box_body .card .card-header {
    background-color: #fff;
    padding: 50px;
    border-bottom: 1px solid #f2f4ff;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    position: relative;
    overflow: hidden;
    padding: .75rem 1.25rem
}

.card_box .box_body .card .card-header h5 {
    margin-bottom: 0;
    text-transform: capitalize;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 2px
}

.card_box .box_body .card .card-header h5 button {
    font-weight: 600;
    color: #1b3155
}

.card_box .box_body .card .card-body {
    padding: 50px;
    background-color: transparent
}

.default-according.arrow_style button::before {
    right: 25px;
    position: absolute;
    -webkit-transition: .4s;
    transition: .4s;
    content: "\e648";
    font-family: themify;
    font-size: 14px
}

.default-according.arrow_style button.collapsed::before {
    right: 25px;
    position: absolute;
    -webkit-transition: .4s;
    transition: .4s;
    content: "\e64b";
    font-family: themify;
    font-size: 14px
}

.typography small {
    padding-left: 10px;
    color: #2c323f
}

/*!PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license*/
.pswp__button {
    width: 44px;
    height: 44px;
    position: relative;
    background: 0;
    cursor: pointer;
    overflow: visible;
    -webkit-appearance: none;
    display: block;
    border: 0;
    padding: 0;
    margin: 0;
    float: right;
    opacity: .75;
    -webkit-transition: opacity .2s;
    transition: opacity .2s;
    -webkit-box-shadow: none;
    box-shadow: none
}

.pswp__button:focus,.pswp__button:hover {
    opacity: 1
}

.pswp__button:active {
    outline: 0;
    opacity: .9
}

.pswp__button::-moz-focus-inner {
    padding: 0;
    border: 0
}

.pswp__ui--over-close .pswp__button--close {
    opacity: 1
}

.pswp__button,.pswp__button--arrow--left:before,.pswp__button--arrow--right:before {
    background: url(../img/default-skin/default-skin.png) 0 0 no-repeat;
    background-size: 264px 88px;
    width: 44px;
    height: 44px
}

@media(-webkit-min-device-pixel-ratio: 1.1),(-webkit-min-device-pixel-ratio:1.09375),(min-resolution:105dpi),(min-resolution:1.1dppx) {
    .pswp--svg .pswp__button,.pswp--svg .pswp__button--arrow--left:before,.pswp--svg .pswp__button--arrow--right:before {
        background-image:url(../img/default-skin/default-skin.svg)
    }

    .pswp--svg .pswp__button--arrow--left,.pswp--svg .pswp__button--arrow--right {
        background: 0
    }
}

.pswp__button--close {
    background-position: 0 -44px
}

.pswp__button--share {
    background-position: -44px -44px
}

.pswp__button--fs {
    display: none
}

.pswp--supports-fs .pswp__button--fs {
    display: block
}

.pswp--fs .pswp__button--fs {
    background-position: -44px 0
}

.pswp__button--zoom {
    display: none;
    background-position: -88px 0
}

.pswp--zoom-allowed .pswp__button--zoom {
    display: block
}

.pswp--zoomed-in .pswp__button--zoom {
    background-position: -132px 0
}

.pswp--touch .pswp__button--arrow--left,.pswp--touch .pswp__button--arrow--right {
    visibility: hidden
}

.pswp__button--arrow--left,.pswp__button--arrow--right {
    background: 0;
    top: 50%;
    margin-top: -50px;
    width: 70px;
    height: 100px;
    position: absolute
}

.pswp__button--arrow--left {
    left: 0
}

.pswp__button--arrow--right {
    right: 0
}

.pswp__button--arrow--left:before,.pswp__button--arrow--right:before {
    content: '';
    top: 35px;
    background-color: rgba(0,0,0,.3);
    height: 30px;
    width: 32px;
    position: absolute
}

.pswp__button--arrow--left:before {
    left: 6px;
    background-position: -138px -44px
}

.pswp__button--arrow--right:before {
    right: 6px;
    background-position: -94px -44px
}

.pswp__counter,.pswp__share-modal {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.pswp__share-modal {
    display: block;
    background: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 10px;
    position: absolute;
    z-index: 1600;
    opacity: 0;
    -webkit-transition: opacity .25s ease-out;
    transition: opacity .25s ease-out;
    -webkit-backface-visibility: hidden;
    will-change: opacity
}

.pswp__share-modal--hidden {
    display: none
}

.pswp__share-tooltip {
    z-index: 1620;
    position: absolute;
    background: #fff;
    top: 56px;
    border-radius: 2px;
    display: block;
    width: auto;
    right: 44px;
    -webkit-box-shadow: 0 2px 5px rgba(0,0,0,.25);
    box-shadow: 0 2px 5px rgba(0,0,0,.25);
    -webkit-transform: translateY(6px);
    transform: translateY(6px);
    -webkit-transition: -webkit-transform .25s;
    transition: -webkit-transform .25s;
    transition: transform .25s;
    transition: transform .25s,-webkit-transform .25s;
    -webkit-backface-visibility: hidden;
    will-change: transform
}

.pswp__share-tooltip a {
    display: block;
    padding: 8px 12px;
    color: #000;
    text-decoration: none;
    font-size: 14px;
    line-height: 18px
}

.pswp__share-tooltip a:hover {
    text-decoration: none;
    color: #000
}

.pswp__share-tooltip a:first-child {
    border-radius: 2px 2px 0 0
}

.pswp__share-tooltip a:last-child {
    border-radius: 0 0 2px 2px
}

.pswp__share-modal--fade-in {
    opacity: 1
}

.pswp__share-modal--fade-in .pswp__share-tooltip {
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

.pswp--touch .pswp__share-tooltip a {
    padding: 16px 12px
}

a.pswp__share--facebook:before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: -12px;
    right: 15px;
    border: 6px solid transparent;
    border-bottom-color: #fff;
    -webkit-pointer-events: none;
    -moz-pointer-events: none;
    pointer-events: none
}

a.pswp__share--facebook:hover {
    background: #3e5c9a;
    color: #fff
}

a.pswp__share--facebook:hover:before {
    border-bottom-color: #3e5c9a
}

a.pswp__share--twitter:hover {
    background: #55acee;
    color: #fff
}

a.pswp__share--pinterest:hover {
    background: #ccc;
    color: #ce272d
}

a.pswp__share--download:hover {
    background: #ddd
}

.pswp__counter {
    position: absolute;
    left: 0;
    top: 0;
    height: 44px;
    font-size: 13px;
    line-height: 44px;
    color: #fff;
    opacity: .75;
    padding: 0 10px
}

.pswp__caption {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    min-height: 44px
}

.pswp__caption small {
    font-size: 11px;
    color: #bbb
}

.pswp__caption__center {
    text-align: center;
    max-width: 420px;
    margin: 0 auto;
    font-size: 13px;
    padding: 10px;
    line-height: 20px;
    color: #ccc
}

.pswp__caption--empty {
    display: none
}

.pswp__caption--fake {
    visibility: hidden
}

.pswp__preloader {
    width: 44px;
    height: 44px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -22px;
    opacity: 0;
    -webkit-transition: opacity .25s ease-out;
    transition: opacity .25s ease-out;
    will-change: opacity;
    direction: ltr
}

.pswp__preloader__icn {
    width: 20px;
    height: 20px;
    margin: 12px
}

.pswp__preloader--active {
    opacity: 1
}

.pswp__preloader--active .pswp__preloader__icn {
    background: url(preloader.gif) 0 0 no-repeat
}

.pswp--css_animation .pswp__preloader--active {
    opacity: 1
}

.pswp--css_animation .pswp__preloader--active .pswp__preloader__icn {
    -webkit-animation: clockwise 500ms linear infinite;
    animation: clockwise 500ms linear infinite
}

.pswp--css_animation .pswp__preloader--active .pswp__preloader__donut {
    -webkit-animation: donut-rotate 1000ms cubic-bezier(.4,0,.22,1) infinite;
    animation: donut-rotate 1000ms cubic-bezier(.4,0,.22,1) infinite
}

.pswp--css_animation .pswp__preloader__icn {
    background: 0;
    opacity: .75;
    width: 14px;
    height: 14px;
    position: absolute;
    left: 15px;
    top: 15px;
    margin: 0
}

.pswp--css_animation .pswp__preloader__cut {
    position: relative;
    width: 7px;
    height: 14px;
    overflow: hidden
}

.pswp--css_animation .pswp__preloader__donut {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    border: 2px solid #fff;
    border-radius: 50%;
    border-left-color: transparent;
    border-bottom-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    background: 0;
    margin: 0
}

@media screen and (max-width: 1024px) {
    .pswp__preloader {
        position:relative;
        left: auto;
        top: auto;
        margin: 0;
        float: right
    }
}

@-webkit-keyframes clockwise {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@keyframes clockwise {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@-webkit-keyframes donut-rotate {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    50% {
        -webkit-transform: rotate(-140deg);
        transform: rotate(-140deg)
    }

    100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }
}

@keyframes donut-rotate {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    50% {
        -webkit-transform: rotate(-140deg);
        transform: rotate(-140deg)
    }

    100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }
}

.pswp__ui {
    -webkit-font-smoothing: auto;
    visibility: visible;
    opacity: 1;
    z-index: 1550
}

.pswp__top-bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 44px;
    width: 100%
}

.pswp__caption,.pswp__top-bar,.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right {
    -webkit-backface-visibility: hidden;
    will-change: opacity;
    -webkit-transition: opacity 333ms cubic-bezier(.4,0,.22,1);
    transition: opacity 333ms cubic-bezier(.4,0,.22,1)
}

.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right {
    visibility: visible
}

.pswp__top-bar,.pswp__caption {
    background-color: rgba(0,0,0,.5)
}

.pswp__ui--fit .pswp__top-bar,.pswp__ui--fit .pswp__caption {
    background-color: rgba(0,0,0,.3)
}

.pswp__ui--idle .pswp__top-bar {
    opacity: 0
}

.pswp__ui--idle .pswp__button--arrow--left,.pswp__ui--idle .pswp__button--arrow--right {
    opacity: 0
}

.pswp__ui--hidden .pswp__top-bar,.pswp__ui--hidden .pswp__caption,.pswp__ui--hidden .pswp__button--arrow--left,.pswp__ui--hidden .pswp__button--arrow--right {
    opacity: .001
}

.pswp__ui--one-slide .pswp__button--arrow--left,.pswp__ui--one-slide .pswp__button--arrow--right,.pswp__ui--one-slide .pswp__counter {
    display: none
}

.pswp__element--disabled {
    display: none!important
}

.pswp--minimal--dark .pswp__top-bar {
    background: 0
}

/*!PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license*/
.pswp {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    -ms-touch-action: none;
    touch-action: none;
    z-index: 1500;
    -webkit-text-size-adjust: 100%;
    -webkit-backface-visibility: hidden;
    outline: 0
}

.pswp * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.pswp img {
    max-width: none
}

.pswp--animate_opacity {
    opacity: .001;
    will-change: opacity;
    -webkit-transition: opacity 333ms cubic-bezier(.4,0,.22,1);
    transition: opacity 333ms cubic-bezier(.4,0,.22,1)
}

.pswp--open {
    display: block
}

.pswp--zoom-allowed .pswp__img {
    cursor: -webkit-zoom-in;
    cursor: zoom-in
}

.pswp--zoomed-in .pswp__img {
    cursor: -webkit-grab;
    cursor: grab
}

.pswp--dragging .pswp__img {
    cursor: -webkit-grabbing;
    cursor: grabbing
}

.pswp__bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
    -webkit-backface-visibility: hidden;
    will-change: opacity
}

.pswp__scroll-wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden
}

.pswp__container,.pswp__zoom-wrap {
    -ms-touch-action: none;
    touch-action: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0
}

.pswp__container,.pswp__img {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none
}

.pswp__zoom-wrap {
    position: absolute;
    width: 100%;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    -webkit-transition: -webkit-transform 333ms cubic-bezier(.4,0,.22,1);
    transition: -webkit-transform 333ms cubic-bezier(.4,0,.22,1);
    transition: transform 333ms cubic-bezier(.4,0,.22,1);
    transition: transform 333ms cubic-bezier(.4,0,.22,1),-webkit-transform 333ms cubic-bezier(.4,0,.22,1)
}

.pswp__bg {
    will-change: opacity;
    -webkit-transition: opacity 333ms cubic-bezier(.4,0,.22,1);
    transition: opacity 333ms cubic-bezier(.4,0,.22,1)
}

.pswp--animated-in .pswp__bg,.pswp--animated-in .pswp__zoom-wrap {
    -webkit-transition: none;
    transition: none
}

.pswp__container,.pswp__zoom-wrap {
    -webkit-backface-visibility: hidden
}

.pswp__item {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden
}

.pswp__img {
    position: absolute;
    width: auto;
    height: auto;
    top: 0;
    left: 0
}

.pswp__img--placeholder {
    -webkit-backface-visibility: hidden
}

.pswp__img--placeholder--blank {
    background: #222
}

.pswp--ie .pswp__img {
    width: 100%!important;
    height: auto!important;
    left: 0;
    top: 0
}

.pswp__error-msg {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    font-size: 14px;
    line-height: 16px;
    margin-top: -8px;
    color: #ccc
}

.pswp__error-msg a {
    color: #ccc;
    text-decoration: underline
}

.my-gallery {
    padding-right: 0
}

.my-gallery img {
    width: 100%
}

.my-gallery figure {
    margin-bottom: 30px
}

.my-gallery figcaption {
    display: none
}

.my-gallery.gallery-with-description img {
    padding: 10px!important;
    border: 1px solid #ddd!important;
    border-bottom: none!important;
    border-radius: 15px 15px 0 0!important
}

.my-gallery.gallery-with-description a>div {
    border-top: none!important;
    margin-bottom: 0;
    padding: 5px 10px 10px
}

.my-gallery.gallery-with-description h4 {
    margin-top: 0
}

.my-gallery.gallery figure.img-hover a>div {
    overflow: hidden;
    border-radius: 15px
}

.my-gallery.gallery figure.img-hover.hover-12 a>div {
    background: #7e37d8
}

.my-gallery.gallery figure.img-hover.hover-12 a>div:hover img {
    opacity: .7
}

#aniimated-thumbnials figure:nth-child(12),#aniimated-thumbnials figure:nth-child(11),#aniimated-thumbnials figure:nth-child(10),#aniimated-thumbnials figure:nth-child(9) {
    margin-bottom: 30px
}

.photo_gallery img {
    border-radius: 10px
}

.Menu_NOtification_Wrap {
    background: #fff;
    box-shadow: 0 10px 15px rgba(6,0,8,.22);
    border-radius: 10px;
    position: absolute;
    right: 0;
    width: 350px;
    transform: translateY(30px) translateX(20px);
    opacity: 0;
    visibility: hidden;
    transition: .3s
}

@media(max-width: 575.98px) {
    .Menu_NOtification_Wrap {
        width:300px;
        transform: translateY(30px) translateX(55px)
    }
}

.Menu_NOtification_Wrap.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(20px) translateX(20px)
}

@media(max-width: 575.98px) {
    .Menu_NOtification_Wrap.active {
        transform:translateY(16px) translateX(55px)
    }
}

.Menu_NOtification_Wrap .notification_Header {
    padding: 15px 20px;
    border-radius: 10px 10px 0 0;
    background: #64c5b1
}

.Menu_NOtification_Wrap .notification_Header h4 {
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 0
}

.Menu_NOtification_Wrap .Notification_body {
    padding: 20px;
    height: 300px;
    overflow: auto
}

.Menu_NOtification_Wrap .Notification_body .single_notify {
    margin-bottom: 10px
}

.Menu_NOtification_Wrap .Notification_body .single_notify:last-child {
    margin-bottom: 0
}

.Menu_NOtification_Wrap .Notification_body .single_notify .notify_thumb {
    margin-right: 15px
}

.Menu_NOtification_Wrap .Notification_body .single_notify .notify_thumb img {
    width: 40px;
    height: 40px;
    border-radius: 5px
}

.Menu_NOtification_Wrap .Notification_body .single_notify .notify_content a h5 {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 500
}

.Menu_NOtification_Wrap .Notification_body .single_notify .notify_content p {
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 0
}

.Menu_NOtification_Wrap .nofity_footer {
    padding: 13px 20px;
    background: #f5f7f9;
    border-radius: 0 0 10px 10px
}

.Menu_NOtification_Wrap .nofity_footer .submit_button a {
    font-size: 12px
}

.CHAT_MESSAGE_POPUPBOX {
    width: 360px;
    background: #fff;
    border-radius: 5px;
    position: fixed;
    bottom: 40px;
    right: 30px;
    z-index: 99999;
    opacity: 0;
    visibility: hidden;
    transform: translateX(50%);
    transition: .5s
}

.CHAT_MESSAGE_POPUPBOX.active {
    opacity: 1;
    visibility: visible;
    transform: translateX(0%)
}

@media(max-width: 575.98px) {
    .CHAT_MESSAGE_POPUPBOX {
        width:300px;
        right: 15px;
        bottom: 15px
    }
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_HEADER {
    background: #64c5b1;
    border-radius: 5px 5px 0 0;
    padding: 27px 20px;
    position: relative
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_HEADER .MSEESAGE_CHATBOX_CLOSE {
    position: absolute;
    right: 20px;
    top: 25px;
    cursor: pointer
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_HEADER h3 {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 12px
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_HEADER ul {
    display: flex;
    align-items: center
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_HEADER ul li {
    margin-right: 5.5px
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_HEADER ul li a .member_thumb img {
    width: 27px;
    height: 27px;
    transition: .3s;
    border-radius: 50%
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_HEADER ul li a .member_thumb .more_member_count {
    background: rgba(255,255,255,.2);
    width: 27px;
    height: 27px;
    border-radius: 50%;
    text-align: center;
    line-height: 27px
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_HEADER ul li a .member_thumb .more_member_count span {
    font-size: 12px;
    font-weight: 400;
    color: #fff
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_HEADER ul li a:hover img {
    transform: translateY(-5px)
}

.CHAT_MESSAGE_POPUPBOX .chat_input_box {
    background: #f5f7fb;
    border-radius: 0 0 5px 5px;
    padding-right: 10px
}

.CHAT_MESSAGE_POPUPBOX .chat_input_box input {
    background: #f5f7fb;
    height: 50px;
    border: 0;
    padding-left: 20px;
    font-size: 13px
}

.CHAT_MESSAGE_POPUPBOX .chat_input_box input::placeholder {
    color: #707db7;
    font-size: 13px;
    font-weight: 400
}

.CHAT_MESSAGE_POPUPBOX .chat_input_box .input-group-append {
    border-radius: 0 0 10px 10px
}

.CHAT_MESSAGE_POPUPBOX .chat_input_box .input-group-append .btn {
    background: #f5f7fb;
    font-size: 20px;
    color: #a0a7c9;
    padding: 0;
    line-height: 40px;
    position: relative;
    height: 50px
}

.CHAT_MESSAGE_POPUPBOX .chat_input_box .input-group-append .btn input {
    position: absolute;
    height: 100%;
    width: 100%;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
    cursor: pointer
}

.CHAT_MESSAGE_POPUPBOX .chat_input_box .input-group-append .btn input::placeholder {
    color: #707db7;
    font-size: 13px;
    font-weight: 400
}

.CHAT_MESSAGE_POPUPBOX .chat_input_box .input-group-append .btn i {
    font-size: 20px
}

.CHAT_MESSAGE_POPUPBOX .chat_input_box .input-group-append .btn:last-child {
    padding-right: 11px;
    padding-left: 11px;
    border-radius: 0 10px 10px 0
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_BODY {
    padding: 20px;
    height: 354px;
    overflow: auto
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_BODY .mesaged_send_date {
    font-size: 13px;
    font-weight: 400;
    color: #415094;
    text-align: center;
    margin-bottom: 12px;
    line-height: 1
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_BODY .CHATING_SENDER {
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;
    padding-right: 70px
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_BODY .CHATING_SENDER.CHATING_RECEIVEr {
    justify-content: flex-end;
    padding-right: 0;
    padding-left: 60px
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_BODY .CHATING_SENDER.CHATING_RECEIVEr .SMS_thumb {
    margin-right: 0;
    margin-left: 9.55px
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_BODY .CHATING_SENDER.CHATING_RECEIVEr .SEND_SMS_VIEW {
    background: #ff606d
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_BODY .CHATING_SENDER .SMS_thumb {
    margin-right: 9.55px
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_BODY .CHATING_SENDER .SMS_thumb img {
    width: 30px;
    height: 30px;
    border-radius: 50%
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_BODY .CHATING_SENDER .SEND_SMS_VIEW {
    background: #4567ee;
    border-radius: 5px;
    padding: 10px 15px
}

.CHAT_MESSAGE_POPUPBOX .CHAT_POPUP_BODY .CHATING_SENDER .SEND_SMS_VIEW p {
    font-size: 13px;
    color: #fff;
    font-weight: 400;
    line-height: 23px
}

.theme_loder_1 div::after {
    background: #2d1967!important
}

.blue_loder div::after {
    background: #2f90f7!important
}

.perpel_loder div::after {
    background: #833cdf!important
}

.pink_loder div::after {
    background: #fe80b2!important
}

.yellow_loder div::after {
    background: #ffcb24!important
}

.green_loder div::after {
    background: #2ff0f7!important
}

.Ring_1 div {
    border-color: #2d1967 transparent transparent transparent!important
}

.Ring_2 div {
    border-color: #2f90f7 transparent transparent transparent!important
}

.Ring_3 div {
    border-color: #833cdf transparent transparent transparent!important
}

.Ring_4 div {
    border-color: #fe80b2 transparent transparent transparent!important
}

.Ring_5 div {
    border-color: #ffcb24 transparent transparent transparent!important
}

.Ring_6 div {
    border-color: #2ff0f7 transparent transparent transparent!important
}

.colord_bg_1 div {
    background-color: #2d1967!important
}

.colord_bg_2 div {
    background-color: #2f90f7!important
}

.colord_bg_3 div {
    background-color: #833cdf!important
}

.colord_bg_4 div {
    background-color: #fe80b2!important
}

.colord_bg_5 div {
    background-color: #ffcb24!important
}

.colord_bg_6 div {
    background-color: #2ff0f7!important
}

.loader--spinner {
    display: inline-block;
    position: relative;
    color: official;
    height: 60px;
    width: 60px
}

.loader--spinner div {
    animation: loader--spinner 1.2s linear infinite;
    transform-origin: 30px 30px
}

.loader--spinner div:after {
    display: block;
    position: absolute;
    top: 3px;
    left: 27px;
    border-radius: 20%;
    content: " ";
    height: 10px;
    width: 5px
}

.loader--spinner div:nth-child(1) {
    animation-delay: -1.1s;
    transform: rotate(0deg)
}

.loader--spinner div:nth-child(2) {
    animation-delay: -1s;
    transform: rotate(30deg)
}

.loader--spinner div:nth-child(3) {
    animation-delay: -.9s;
    transform: rotate(60deg)
}

.loader--spinner div:nth-child(4) {
    animation-delay: -.8s;
    transform: rotate(90deg)
}

.loader--spinner div:nth-child(5) {
    animation-delay: -.7s;
    transform: rotate(120deg)
}

.loader--spinner div:nth-child(6) {
    animation-delay: -.6s;
    transform: rotate(150deg)
}

.loader--spinner div:nth-child(7) {
    animation-delay: -.5s;
    transform: rotate(180deg)
}

.loader--spinner div:nth-child(8) {
    animation-delay: -.4s;
    transform: rotate(210deg)
}

.loader--spinner div:nth-child(9) {
    animation-delay: -.3s;
    transform: rotate(240deg)
}

.loader--spinner div:nth-child(10) {
    animation-delay: -.2s;
    transform: rotate(270deg)
}

.loader--spinner div:nth-child(11) {
    animation-delay: -.1s;
    transform: rotate(300deg)
}

.loader--spinner div:nth-child(12) {
    animation-delay: 0s;
    transform: rotate(330deg)
}

@keyframes loader--spinner {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
}

.loader--ring {
    display: inline-block;
    position: relative;
    height: 64px;
    width: 64px
}

.loader--ring div {
    display: block;
    position: absolute;
    animation: loader--ring 1.2s cubic-bezier(.5,0,.5,1) infinite;
    border: 6px solid #fff;
    border-radius: 50%;
    box-sizing: border-box;
    margin: 6px;
    height: 51px;
    width: 51px
}

.loader--ring div:nth-child(1) {
    animation-delay: -.45s
}

.loader--ring div:nth-child(2) {
    animation-delay: -.3s
}

.loader--ring div:nth-child(3) {
    animation-delay: -.15s
}

@keyframes loader--ring {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}

.loader--roller {
    display: inline-block;
    position: relative;
    height: 64px;
    width: 64px
}

.loader--roller div {
    animation: loader--roller 1.2s cubic-bezier(.5,0,.5,1) infinite;
    transform-origin: 32px 32px
}

.loader--roller div:after {
    display: block;
    position: absolute;
    border-radius: 50%;
    content: " ";
    margin: -3px 0 0 -3px;
    height: 6px;
    width: 6px
}

.loader--roller div:nth-child(1) {
    animation-delay: -.036s
}

.loader--roller div:nth-child(1):after {
    top: 50px;
    left: 50px
}

.loader--roller div:nth-child(2) {
    animation-delay: -.072s
}

.loader--roller div:nth-child(2):after {
    top: 54px;
    left: 45px
}

.loader--roller div:nth-child(3) {
    animation-delay: -.108s
}

.loader--roller div:nth-child(3):after {
    top: 57px;
    left: 39px
}

.loader--roller div:nth-child(4) {
    animation-delay: -.144s
}

.loader--roller div:nth-child(4):after {
    top: 58px;
    left: 32px
}

.loader--roller div:nth-child(5) {
    animation-delay: -.18s
}

.loader--roller div:nth-child(5):after {
    top: 57px;
    left: 25px
}

.loader--roller div:nth-child(6) {
    animation-delay: -.216s
}

.loader--roller div:nth-child(6):after {
    top: 54px;
    left: 19px
}

.loader--roller div:nth-child(7) {
    animation-delay: -.252s
}

.loader--roller div:nth-child(7):after {
    top: 50px;
    left: 14px
}

.loader--roller div:nth-child(8) {
    animation-delay: -.288s
}

.loader--roller div:nth-child(8):after {
    top: 45px;
    left: 10px
}

@keyframes loader--roller {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}

.loader--default {
    display: inline-block;
    position: relative;
    height: 64px;
    width: 64px
}

.loader--default div {
    position: absolute;
    animation: loader--default 1.2s linear infinite;
    border-radius: 50%;
    height: 5px;
    width: 5px
}

.loader--default div:nth-child(1) {
    animation-delay: 0s;
    top: 29px;
    left: 53px
}

.loader--default div:nth-child(2) {
    animation-delay: -.1s;
    top: 18px;
    left: 50px
}

.loader--default div:nth-child(3) {
    animation-delay: -.2s;
    top: 9px;
    left: 41px
}

.loader--default div:nth-child(4) {
    animation-delay: -.3s;
    top: 6px;
    left: 29px
}

.loader--default div:nth-child(5) {
    animation-delay: -.4s;
    top: 9px;
    left: 18px
}

.loader--default div:nth-child(6) {
    animation-delay: -.5s;
    top: 18px;
    left: 9px
}

.loader--default div:nth-child(7) {
    animation-delay: -.6s;
    top: 29px;
    left: 6px
}

.loader--default div:nth-child(8) {
    animation-delay: -.7s;
    top: 41px;
    left: 9px
}

.loader--default div:nth-child(9) {
    animation-delay: -.8s;
    top: 50px;
    left: 18px
}

.loader--default div:nth-child(10) {
    animation-delay: -.9s;
    top: 53px;
    left: 29px
}

.loader--default div:nth-child(11) {
    animation-delay: -1s;
    top: 50px;
    left: 41px
}

.loader--default div:nth-child(12) {
    animation-delay: -1.1s;
    top: 41px;
    left: 50px
}

@keyframes loader--default {
    0%,20%,80%,100% {
        transform: scale(1)
    }

    50% {
        transform: scale(1.5)
    }
}

.loader--ellipsis {
    display: inline-block;
    position: relative;
    height: 64px;
    width: 64px
}

.loader--ellipsis div {
    position: absolute;
    top: 27px;
    animation-timing-function: cubic-bezier(0,1,1,0);
    border-radius: 50%;
    height: 11px;
    width: 11px
}

.loader--ellipsis div:nth-child(1) {
    left: 6px;
    animation: loader--ellipsis1 .6s infinite
}

.loader--ellipsis div:nth-child(2) {
    left: 6px;
    animation: loader--ellipsis2 .6s infinite
}

.loader--ellipsis div:nth-child(3) {
    left: 26px;
    animation: loader--ellipsis2 .6s infinite
}

.loader--ellipsis div:nth-child(4) {
    left: 45px;
    animation: loader--ellipsis3 .6s infinite
}

@keyframes loader--ellipsis1 {
    0% {
        transform: scale(0)
    }

    100% {
        transform: scale(1)
    }
}

@keyframes loader--ellipsis3 {
    0% {
        transform: scale(1)
    }

    100% {
        transform: scale(0)
    }
}

@keyframes loader--ellipsis2 {
    0% {
        transform: translate(0,0)
    }

    100% {
        transform: translate(19px,0)
    }
}

.loader--grid {
    display: inline-block;
    position: relative;
    height: 64px;
    width: 64px
}

.loader--grid div {
    position: absolute;
    animation: loader--grid 1.2s linear infinite;
    border-radius: 50%;
    height: 13px;
    width: 13px
}

.loader--grid div:nth-child(1) {
    top: 6px;
    left: 6px;
    animation-delay: 0s
}

.loader--grid div:nth-child(2) {
    top: 6px;
    left: 26px;
    animation-delay: -.4s
}

.loader--grid div:nth-child(3) {
    top: 6px;
    left: 45px;
    animation-delay: -.8s
}

.loader--grid div:nth-child(4) {
    top: 26px;
    left: 6px;
    animation-delay: -.4s
}

.loader--grid div:nth-child(5) {
    top: 26px;
    left: 26px;
    animation-delay: -.8s
}

.loader--grid div:nth-child(6) {
    top: 26px;
    left: 45px;
    animation-delay: -1.2s
}

.loader--grid div:nth-child(7) {
    top: 45px;
    left: 6px;
    animation-delay: -.8s
}

.loader--grid div:nth-child(8) {
    top: 45px;
    left: 26px;
    animation-delay: -1.2s
}

.loader--grid div:nth-child(9) {
    top: 45px;
    left: 45px;
    animation-delay: -1.6s
}

@keyframes loader--grid {
    0%,100% {
        opacity: 1
    }

    50% {
        opacity: .5
    }
}

.loader--ripple {
    display: inline-block;
    position: relative;
    height: 64px;
    width: 64px
}

.loader--ripple div {
    position: absolute;
    animation: loader--ripple 1s cubic-bezier(0,.2,.8,1) infinite;
    border: 4px solid;
    border-radius: 50%;
    opacity: 1
}

.loader--ripple div:nth-child(2) {
    animation-delay: -.5s
}

@keyframes loader--ripple {
    0% {
        top: 28px;
        left: 28px;
        opacity: 1;
        height: 0;
        width: 0
    }

    100% {
        top: -1px;
        left: -1px;
        opacity: 0;
        height: 58px;
        width: 58px
    }
}

.loader--dual-ring {
    display: inline-block;
    height: 64px;
    width: 64px
}

.loader--dual-ring:after {
    display: block;
    animation: loader--dual-ring 1.2s linear infinite;
    border: 5px solid #fff;
    border-radius: 50%;
    content: " ";
    margin: 1px;
    height: 46px;
    width: 46px
}

@keyframes loader--dual-ring {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}

.loader--facebook {
    display: inline-block;
    position: relative;
    height: 64px;
    width: 64px
}

.loader--facebook div {
    display: inline-block;
    position: absolute;
    left: 6px;
    animation: loader--facebook 1.2s cubic-bezier(0,.5,.5,1) infinite;
    width: 13px
}

.loader--facebook div:nth-child(1) {
    left: 6px;
    animation-delay: -.24s
}

.loader--facebook div:nth-child(2) {
    left: 26px;
    animation-delay: -.12s
}

.loader--facebook div:nth-child(3) {
    left: 45px;
    animation-delay: 0
}

@keyframes loader--facebook {
    0% {
        top: 6px;
        height: 51px
    }

    50%,100% {
        top: 19px;
        height: 26px
    }
}

.section--white {
    color: #00539f;
    background: #fff
}

.section--white .loader--spinner div:after,.section--white .loader--roller div:after,.section--white .loader--default div,.section--white .loader--ellipsis div,.section--white .loader--grid div,.section--white .loader--facebook div {
    background: #00539f
}

.section--white .loader--ripple div {
    border-color: #00539f
}

.section--white .loader--ring div {
    border-color: #00539f transparent transparent transparent
}

.section--white .loader--dual-ring:after {
    border-color: #00539f transparent #00539f transparent
}

.section--blue {
    color: #fff;
    background: #00539f
}

.section--blue .loader--spinner div:after,.section--blue .loader--roller div:after,.section--blue .loader--default div,.section--blue .loader--ellipsis div,.section--blue .loader--grid div,.section--blue .loader--facebook div {
    background: #fff
}

.section--blue .loader--ripple div {
    border-color: #fff
}

.section--blue .loader--ring div {
    border-color: #fff transparent transparent transparent
}

.section--blue .loader--dual-ring:after {
    border-color: #fff transparent #fff transparent
}

.btn-outline-light {
    color: #ddd!important;
    border-color: #ddd!important
}

.icon-lists div {
    cursor: pointer;
    line-height: 60px;
    white-space: nowrap;
    border-radius: 4px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.icon-lists div i {
    margin: 0 15px 0 10px;
    font-size: 24px
}

.row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -12px;
    margin-left: -12px
}

.thumb_34 {
    width: 34px;
    height: 34px
}

.thumb_62 {
    width: 62px;
    height: 62px
}

.radius_50 {
    border-radius: 50%
}

.color_text_1 {
    color: #bda5f8!important
}

.color_text_2 {
    color: #ffb98a!important
}

.color_text_3 {
    color: #64c5b1!important
}

.color_text_4 {
    color: #97c0ff!important
}

.badge_btn_1 {
    font-size: 11px;
    font-weight: 700;
    background: #fff0eb;
    display: inline-block;
    border-radius: 2px;
    padding: 5px 17px;
    color: #ff7f57
}

.badge_btn_1:hover {
    color: #ff7f57
}

.badge_btn_2 {
    font-size: 11px;
    font-weight: 700;
    background: #fdebff;
    display: inline-block;
    border-radius: 2px;
    padding: 5px 17px;
    color: #c85ed4
}

.badge_btn_2:hover {
    color: #c85ed4
}

.badge_btn_3 {
    font-size: 11px;
    font-weight: 700;
    background: #e6f8ff;
    display: inline-block;
    border-radius: 2px;
    padding: 5px 17px;
    color: #0893c8
}

.badge_btn_3:hover {
    color: #0893c8
}

.badge_btn_4 {
    font-size: 11px;
    font-weight: 700;
    background: #e8ffeb;
    display: inline-block;
    border-radius: 2px;
    padding: 5px 17px;
    color: #50d863
}

.badge_btn_4:hover {
    color: #50d863
}

.badge_btn_5 {
    font-size: 14px;
    font-weight: 700;
    background: #e8ffeb;
    display: inline-block;
    border-radius: 4px;
    padding: 2px 10px;
    background: #d1eee7;
    color: #7bca9e
}

.badge_btn_5:hover {
    color: #7bca9e
}

.badge_btn_6 {
    font-size: 10px;
    font-weight: 700;
    background: #e8ffeb;
    display: inline-block;
    border-radius: 2px;
    padding: 6px 17px;
    background: #f16060;
    color: #fff;
    transition: .3s
}

.badge_btn_6:hover {
    color: #fff;
    box-shadow: 0 4px 7px rgba(255,0,0,.31)
}

.badge_btn_7 {
    font-size: 10px;
    font-weight: 700;
    background: #e8ffeb;
    display: inline-block;
    border-radius: 2px;
    padding: 6px 17px;
    background: #567aed;
    color: #fff;
    transition: .3s
}

.badge_btn_7:hover {
    color: #fff;
    box-shadow: 0 4px 7px rgba(86,122,237,.31)
}

.badge_btn_semi {
    font-size: 11px;
    font-weight: 700;
    background: #567aed;
    display: inline-block;
    border-radius: 2px;
    padding: 11px 70px;
    font-size: 14px;
    color: #fff;
    border-radius: 5px
}

.badge_btn_semi:hover {
    color: #fff;
    box-shadow: 0 3px 11px #508ff4
}

.text_color_1 {
    font-size: 11px;
    font-weight: 700;
    color: #ff6d6d!important
}

.text_color_2 {
    font-size: 11px;
    font-weight: 700;
    color: #62d45e!important
}

.text_color_3 {
    font-size: 11px;
    font-weight: 700;
    color: #6fa5ec!important
}

.text_color_4 {
    color: #e64b55!important
}

.text_color_5 {
    color: #4be69d!important
}

.text_color_6 {
    color: #706f9a!important
}

.text_color_7 {
    color: #59748a!important
}

.board_wrapper {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    white-space: nowrap;
    overflow-x: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.board_wrapper .single_board {
    width: auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    max-height: 100%;
    padding-right: 12px;
    padding-bottom: 12px;
    outline: none!important;
    position: relative
}

.board_wrapper .single_board .main_board_card {
    max-height: 100%;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    margin-bottom: 12px;
    border-radius: 4px;
    padding: 20px;
    background: #f1f5fa
}

.board_wrapper .single_board .main_board_card .board_card_list .card {
    -webkit-box-shadow: 0 2px 4px rgba(31,30,47,.03);
    box-shadow: 0 2px 4px rgba(31,30,47,.03);
    margin-bottom: 24px;
    background-color: #fff;
    border: 1px solid #eceff5
}

.board_wrapper .single_board .main_board_card .board_card_list .card .card-body {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem
}

.font-16 {
    font-size: 16px!important
}

.text-warning {
    color: #ffb822!important
}

.col-auto {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%
}

.total-payment .payment-title {
    color: #303e67;
    font-weight: 500
}

.total-payment {
    border: 1px solid #f1f5fa;
    background-color: #fff;
    border-radius: 3px
}

.total-payment .table tbody td,.total-payment table tbody td,.shopping-cart .table tbody td,.shopping-cart table tbody td {
    padding: 20px 10px;
    border-top: 0!important;
    border-bottom: 1px solid #f1f5fa
}

.shopping-cart .table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #eaf0f7
}

.text-muted {
    color: #a4abc5!important
}

.ribbon1 {
    position: absolute;
    top: -6.1px;
    right: 10px
}

.ribbon1 span {
    display: block;
    padding: 6px 4px 0;
    border-top-right-radius: 6px;
    width: 60px;
    font-size: 11px;
    font-weight: 500
}

.ribbon1 span.rib1-primary::before,.ribbon1 span.rib1-primary {
    background: #1761fd
}

.ribbon1.rib1-primary::after {
    border-top-color: #1761fd
}

.ribbon1::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 10px solid;
    border-top-color: currentcolor
}

.ribbon1 span.rib1-primary::before,.ribbon1 span.rib1-primary {
    background: #1761fd
}

.ribbon1 span::before {
    height: 6px;
    width: 4px;
    left: -4px;
    top: 0
}

.ribbon1 span::before,.ribbon1 span::after {
    position: absolute;
    content: ""
}

.ribbon1 span.rib1-primary::after {
    background: #0249df
}

.ribbon1 span::after {
    height: 6px;
    width: 6px;
    left: -6px;
    top: 0;
    border-radius: 8px 8px 0 0
}

.ribbon1 span::before,.ribbon1 span::after {
    position: absolute;
    content: ""
}

.single-pro-detail .pro-price span {
    font-size: 14px;
    color: #8997bd
}

.single-pro-detail .quantity input {
    width: 14%;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    height: calc(24px + 12px)
}

.single-pro-detail .custom-border {
    width: 60px;
    height: 2px;
    background-color: #1d2c48
}

.single-pro-detail .product-review li {
    margin: 0
}

.single-pro-detail .product-review li i {
    font-size: 16px
}

.single-pro-detail .pro-price {
    color: #303e67;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 0
}

.single-pro-detail .pro-features {
    margin-bottom: 20px
}

.single-pro-detail .pro-features li {
    line-height: 26px;
    color: #a4abc5
}

.single-pro-detail .pro-features li:before {
    content: "\f00c"!important;
    font-family: 'font awesome 5 free'!important;
    font-weight: 600;
    font-size: 12px;
    color: #03d87f!important;
    display: inline-block;
    margin-right: 8px
}

</style>