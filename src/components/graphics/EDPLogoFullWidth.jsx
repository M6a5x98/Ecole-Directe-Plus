import "./EDPLogoFullWidth.css"

export default function EDPLogoFullWidth({ className="", id="", alt }) {

    return (
        <svg className={"edp-logo-full-width " + className} id={id} viewBox="0 0 427 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>{alt}</title>
            <g id="EDP-logo">
                <path fill={"url(#gradient-logo-" + id + ")"} d="M89.9985 24V0H31.9985C21.3319 0.833333 0 7.3 0 38.5C5.50049 26.5 17.499 24 21.4985 24H89.9985Z" />
                <path fill={"url(#gradient-logo-" + id + ")"} d="M90.0017 55V31.5H27.0016C-9.00047 31.5 -9.00055 86 27.0016 86H90.0017V62.5H27.0016C22.0011 62.5 22.0013 55 27.0016 55H90.0017Z" />
            </g>
            <g id="text">
                <path style={{ "--order": 1 }} fill={"url(#gradient-ecole-" + id + ")"} id="Ecole" d="M115.582 59V32.8182H132.611V36.794H120.325V43.902H131.729V47.8778H120.325V55.0241H132.713V59H115.582ZM145.81 59.3835C143.85 59.3835 142.167 58.9531 140.761 58.0923C139.363 57.2315 138.285 56.0426 137.526 54.5256C136.776 53 136.401 51.2443 136.401 49.2585C136.401 47.2642 136.785 45.5043 137.552 43.9787C138.319 42.4446 139.401 41.2514 140.799 40.3991C142.205 39.5384 143.867 39.108 145.785 39.108C147.379 39.108 148.789 39.402 150.016 39.9901C151.252 40.5696 152.237 41.392 152.969 42.4574C153.702 43.5142 154.12 44.75 154.222 46.1648H149.799C149.62 45.2187 149.194 44.4304 148.521 43.7997C147.856 43.1605 146.965 42.8409 145.849 42.8409C144.903 42.8409 144.072 43.0966 143.356 43.608C142.64 44.1108 142.082 44.8352 141.681 45.7812C141.289 46.7273 141.093 47.8608 141.093 49.1818C141.093 50.5199 141.289 51.6705 141.681 52.6335C142.073 53.5881 142.623 54.3253 143.33 54.8452C144.046 55.3565 144.886 55.6122 145.849 55.6122C146.531 55.6122 147.14 55.4844 147.677 55.2287C148.222 54.9645 148.678 54.5852 149.045 54.0909C149.411 53.5966 149.663 52.9957 149.799 52.2884H154.222C154.112 53.6776 153.702 54.9091 152.995 55.983C152.288 57.0483 151.325 57.8835 150.106 58.4886C148.887 59.0852 147.455 59.3835 145.81 59.3835ZM166.588 59.3835C164.67 59.3835 163.008 58.9616 161.602 58.1179C160.196 57.2741 159.105 56.0937 158.329 54.5767C157.562 53.0597 157.179 51.2869 157.179 49.2585C157.179 47.2301 157.562 45.4531 158.329 43.9276C159.105 42.402 160.196 41.2173 161.602 40.3736C163.008 39.5298 164.67 39.108 166.588 39.108C168.505 39.108 170.167 39.5298 171.574 40.3736C172.98 41.2173 174.066 42.402 174.833 43.9276C175.609 45.4531 175.997 47.2301 175.997 49.2585C175.997 51.2869 175.609 53.0597 174.833 54.5767C174.066 56.0937 172.98 57.2741 171.574 58.1179C170.167 58.9616 168.505 59.3835 166.588 59.3835ZM166.613 55.6761C167.653 55.6761 168.522 55.3906 169.221 54.8196C169.92 54.2401 170.44 53.4645 170.781 52.4929C171.13 51.5213 171.305 50.4389 171.305 49.2457C171.305 48.044 171.13 46.9574 170.781 45.9858C170.44 45.0057 169.92 44.2259 169.221 43.6463C168.522 43.0668 167.653 42.777 166.613 42.777C165.548 42.777 164.662 43.0668 163.954 43.6463C163.255 44.2259 162.731 45.0057 162.382 45.9858C162.041 46.9574 161.87 48.044 161.87 49.2457C161.87 50.4389 162.041 51.5213 162.382 52.4929C162.731 53.4645 163.255 54.2401 163.954 54.8196C164.662 55.3906 165.548 55.6761 166.613 55.6761ZM184.553 32.8182V59H179.925V32.8182H184.553ZM198.005 59.3835C196.036 59.3835 194.336 58.9744 192.904 58.1562C191.48 57.3295 190.385 56.1619 189.618 54.6534C188.851 53.1364 188.468 51.3509 188.468 49.2969C188.468 47.277 188.851 45.5043 189.618 43.9787C190.394 42.4446 191.476 41.2514 192.865 40.3991C194.255 39.5384 195.887 39.108 197.762 39.108C198.972 39.108 200.114 39.304 201.188 39.696C202.27 40.0795 203.225 40.6761 204.051 41.4858C204.887 42.2955 205.543 43.3267 206.02 44.5795C206.498 45.8239 206.736 47.3068 206.736 49.0284V50.4474H190.641V47.3281H202.3C202.292 46.4418 202.1 45.6534 201.725 44.9631C201.35 44.2642 200.826 43.7145 200.152 43.3139C199.488 42.9134 198.712 42.7131 197.826 42.7131C196.88 42.7131 196.049 42.9432 195.333 43.4034C194.617 43.8551 194.059 44.4517 193.658 45.1932C193.266 45.9261 193.066 46.7315 193.057 47.6094V50.3324C193.057 51.4744 193.266 52.4545 193.684 53.2727C194.101 54.0824 194.685 54.7045 195.435 55.1392C196.185 55.5653 197.063 55.7784 198.069 55.7784C198.742 55.7784 199.351 55.6847 199.897 55.4972C200.442 55.3011 200.915 55.0156 201.316 54.6406C201.716 54.2656 202.019 53.8011 202.223 53.2472L206.544 53.733C206.272 54.875 205.752 55.8722 204.985 56.7244C204.226 57.5682 203.255 58.2244 202.07 58.6932C200.885 59.1534 199.53 59.3835 198.005 59.3835Z" />
                <path style={{ "--order": 2 }} fill={"url(#gradient-directe-" + id + ")"} id="Directe" d="M229.455 59H220.582V32.8182H229.634C232.233 32.8182 234.466 33.3423 236.332 34.3906C238.207 35.4304 239.648 36.9261 240.653 38.8778C241.659 40.8295 242.162 43.1648 242.162 45.8835C242.162 48.6108 241.655 50.9545 240.641 52.9148C239.635 54.875 238.182 56.3793 236.281 57.4276C234.389 58.4759 232.114 59 229.455 59ZM225.325 54.8963H229.224C231.048 54.8963 232.57 54.5639 233.788 53.8991C235.007 53.2259 235.923 52.2244 236.537 50.8949C237.151 49.5568 237.457 47.8864 237.457 45.8835C237.457 43.8807 237.151 42.2187 236.537 40.8977C235.923 39.5682 235.016 38.5753 233.814 37.919C232.621 37.2543 231.138 36.9219 229.365 36.9219H225.325V54.8963ZM246.464 59V39.3636H251.092V59H246.464ZM248.79 36.5767C248.058 36.5767 247.427 36.3338 246.898 35.848C246.37 35.3537 246.106 34.7614 246.106 34.071C246.106 33.3722 246.37 32.7798 246.898 32.294C247.427 31.7997 248.058 31.5526 248.79 31.5526C249.532 31.5526 250.163 31.7997 250.683 32.294C251.211 32.7798 251.475 33.3722 251.475 34.071C251.475 34.7614 251.211 35.3537 250.683 35.848C250.163 36.3338 249.532 36.5767 248.79 36.5767ZM255.85 59V39.3636H260.338V42.6364H260.542C260.9 41.5028 261.514 40.6293 262.383 40.0156C263.261 39.3935 264.262 39.0824 265.387 39.0824C265.643 39.0824 265.929 39.0952 266.244 39.1207C266.568 39.1378 266.836 39.1676 267.049 39.2102V43.4673C266.853 43.3991 266.542 43.3395 266.116 43.2884C265.699 43.2287 265.294 43.1989 264.902 43.1989C264.058 43.1989 263.299 43.3821 262.626 43.7486C261.961 44.1065 261.437 44.6051 261.054 45.2443C260.67 45.8835 260.478 46.6207 260.478 47.456V59H255.85ZM278.009 59.3835C276.04 59.3835 274.339 58.9744 272.908 58.1562C271.484 57.3295 270.389 56.1619 269.622 54.6534C268.855 53.1364 268.472 51.3509 268.472 49.2969C268.472 47.277 268.855 45.5043 269.622 43.9787C270.398 42.4446 271.48 41.2514 272.869 40.3991C274.259 39.5384 275.891 39.108 277.766 39.108C278.976 39.108 280.118 39.304 281.192 39.696C282.274 40.0795 283.229 40.6761 284.055 41.4858C284.891 42.2955 285.547 43.3267 286.024 44.5795C286.501 45.8239 286.74 47.3068 286.74 49.0284V50.4474H270.645V47.3281H282.304C282.295 46.4418 282.104 45.6534 281.729 44.9631C281.354 44.2642 280.83 43.7145 280.156 43.3139C279.491 42.9134 278.716 42.7131 277.83 42.7131C276.884 42.7131 276.053 42.9432 275.337 43.4034C274.621 43.8551 274.063 44.4517 273.662 45.1932C273.27 45.9261 273.07 46.7315 273.061 47.6094V50.3324C273.061 51.4744 273.27 52.4545 273.688 53.2727C274.105 54.0824 274.689 54.7045 275.439 55.1392C276.189 55.5653 277.067 55.7784 278.072 55.7784C278.746 55.7784 279.355 55.6847 279.901 55.4972C280.446 55.3011 280.919 55.0156 281.32 54.6406C281.72 54.2656 282.023 53.8011 282.227 53.2472L286.548 53.733C286.276 54.875 285.756 55.8722 284.989 56.7244C284.23 57.5682 283.259 58.2244 282.074 58.6932C280.889 59.1534 279.534 59.3835 278.009 59.3835ZM299.221 59.3835C297.26 59.3835 295.577 58.9531 294.171 58.0923C292.773 57.2315 291.695 56.0426 290.936 54.5256C290.186 53 289.811 51.2443 289.811 49.2585C289.811 47.2642 290.195 45.5043 290.962 43.9787C291.729 42.4446 292.811 41.2514 294.209 40.3991C295.615 39.5384 297.277 39.108 299.195 39.108C300.789 39.108 302.199 39.402 303.426 39.9901C304.662 40.5696 305.647 41.392 306.38 42.4574C307.113 43.5142 307.53 44.75 307.632 46.1648H303.209C303.03 45.2187 302.604 44.4304 301.931 43.7997C301.266 43.1605 300.375 42.8409 299.259 42.8409C298.313 42.8409 297.482 43.0966 296.766 43.608C296.05 44.1108 295.492 44.8352 295.091 45.7812C294.699 46.7273 294.503 47.8608 294.503 49.1818C294.503 50.5199 294.699 51.6705 295.091 52.6335C295.483 53.5881 296.033 54.3253 296.74 54.8452C297.456 55.3565 298.296 55.6122 299.259 55.6122C299.941 55.6122 300.55 55.4844 301.087 55.2287C301.632 54.9645 302.088 54.5852 302.455 54.0909C302.821 53.5966 303.073 52.9957 303.209 52.2884H307.632C307.522 53.6776 307.113 54.9091 306.405 55.983C305.698 57.0483 304.735 57.8835 303.516 58.4886C302.297 59.0852 300.865 59.3835 299.221 59.3835ZM321.238 39.3636V42.9432H309.95V39.3636H321.238ZM312.737 34.6591H317.364V53.0938C317.364 53.7159 317.458 54.1932 317.646 54.5256C317.842 54.8494 318.097 55.071 318.413 55.1903C318.728 55.3097 319.077 55.3693 319.461 55.3693C319.751 55.3693 320.015 55.348 320.254 55.3054C320.501 55.2628 320.688 55.2244 320.816 55.1903L321.596 58.8082C321.349 58.8935 320.995 58.9872 320.535 59.0895C320.083 59.1918 319.529 59.2514 318.873 59.2685C317.714 59.3026 316.67 59.1278 315.741 58.7443C314.812 58.3523 314.075 57.7472 313.529 56.929C312.992 56.1108 312.728 55.0881 312.737 53.8608V34.6591ZM333.591 59.3835C331.622 59.3835 329.922 58.9744 328.49 58.1562C327.066 57.3295 325.971 56.1619 325.204 54.6534C324.437 53.1364 324.054 51.3509 324.054 49.2969C324.054 47.277 324.437 45.5043 325.204 43.9787C325.98 42.4446 327.062 41.2514 328.451 40.3991C329.841 39.5384 331.473 39.108 333.348 39.108C334.558 39.108 335.7 39.304 336.774 39.696C337.856 40.0795 338.811 40.6761 339.637 41.4858C340.473 42.2955 341.129 43.3267 341.606 44.5795C342.083 45.8239 342.322 47.3068 342.322 49.0284V50.4474H326.227V47.3281H337.886C337.877 46.4418 337.686 45.6534 337.311 44.9631C336.936 44.2642 336.412 43.7145 335.738 43.3139C335.074 42.9134 334.298 42.7131 333.412 42.7131C332.466 42.7131 331.635 42.9432 330.919 43.4034C330.203 43.8551 329.645 44.4517 329.244 45.1932C328.852 45.9261 328.652 46.7315 328.643 47.6094V50.3324C328.643 51.4744 328.852 52.4545 329.27 53.2727C329.687 54.0824 330.271 54.7045 331.021 55.1392C331.771 55.5653 332.649 55.7784 333.654 55.7784C334.328 55.7784 334.937 55.6847 335.483 55.4972C336.028 55.3011 336.501 55.0156 336.902 54.6406C337.302 54.2656 337.605 53.8011 337.809 53.2472L342.13 53.733C341.858 54.875 341.338 55.8722 340.571 56.7244C339.812 57.5682 338.841 58.2244 337.656 58.6932C336.471 59.1534 335.116 59.3835 333.591 59.3835Z" />
                <path style={{ "--order": 3 }} fill={"url(#gradient-plus-" + id + ")"} id="Plus" d="M354.582 59V32.8182H364.401C366.412 32.8182 368.099 33.1932 369.463 33.9432C370.835 34.6932 371.871 35.7244 372.57 37.0369C373.277 38.3409 373.631 39.8239 373.631 41.4858C373.631 43.1648 373.277 44.6562 372.57 45.9602C371.862 47.2642 370.818 48.2912 369.438 49.0412C368.057 49.7827 366.357 50.1534 364.337 50.1534H357.83V46.2543H363.697C364.874 46.2543 365.837 46.0497 366.587 45.6406C367.337 45.2315 367.891 44.669 368.249 43.9531C368.615 43.2372 368.798 42.4148 368.798 41.4858C368.798 40.5568 368.615 39.7386 368.249 39.0312C367.891 38.3239 367.332 37.7741 366.574 37.3821C365.824 36.9815 364.857 36.7812 363.672 36.7812H359.325V59H354.582ZM382.174 32.8182V59H377.546V32.8182H382.174ZM399.448 50.7415V39.3636H404.076V59H399.589V55.5099H399.384C398.941 56.6094 398.212 57.5085 397.198 58.2074C396.192 58.9062 394.952 59.2557 393.478 59.2557C392.191 59.2557 391.053 58.9702 390.065 58.3991C389.085 57.8196 388.317 56.9801 387.763 55.8807C387.21 54.7727 386.933 53.4347 386.933 51.8665V39.3636H391.56V51.1506C391.56 52.3949 391.901 53.3835 392.583 54.1165C393.265 54.8494 394.16 55.2159 395.268 55.2159C395.95 55.2159 396.61 55.0497 397.249 54.7173C397.888 54.3849 398.413 53.8906 398.822 53.2344C399.239 52.5696 399.448 51.7386 399.448 50.7415ZM424.355 44.554L420.136 45.0142C420.017 44.5881 419.808 44.1875 419.51 43.8125C419.22 43.4375 418.828 43.1349 418.333 42.9048C417.839 42.6747 417.234 42.5597 416.518 42.5597C415.555 42.5597 414.745 42.7685 414.089 43.1861C413.441 43.6037 413.122 44.1449 413.13 44.8097C413.122 45.3807 413.331 45.8452 413.757 46.2031C414.191 46.5611 414.907 46.8551 415.904 47.0852L419.254 47.8011C421.112 48.2017 422.493 48.8366 423.396 49.706C424.308 50.5753 424.768 51.7131 424.777 53.1193C424.768 54.3551 424.406 55.446 423.69 56.392C422.983 57.3295 421.998 58.0625 420.737 58.5909C419.475 59.1193 418.027 59.3835 416.39 59.3835C413.987 59.3835 412.052 58.8807 410.586 57.875C409.12 56.8608 408.247 55.4503 407.966 53.6435L412.478 53.2088C412.683 54.0952 413.118 54.7642 413.782 55.2159C414.447 55.6676 415.312 55.8935 416.377 55.8935C417.477 55.8935 418.359 55.6676 419.024 55.2159C419.697 54.7642 420.034 54.206 420.034 53.5412C420.034 52.9787 419.816 52.5142 419.382 52.1477C418.956 51.7812 418.291 51.5 417.387 51.304L414.038 50.6009C412.154 50.2088 410.761 49.5483 409.858 48.6193C408.954 47.6818 408.507 46.4972 408.515 45.0653C408.507 43.8551 408.835 42.8068 409.5 41.9205C410.173 41.0256 411.106 40.3352 412.299 39.8494C413.501 39.3551 414.886 39.108 416.454 39.108C418.755 39.108 420.566 39.598 421.887 40.5781C423.217 41.5582 424.039 42.8835 424.355 44.554Z" />
            </g>
            <defs className="gradients">
                <linearGradient className="gradient-logo" id={"gradient-logo-" + id} >
                    <stop className="start" offset="0%" />
                    <stop className="end" offset="100%" />
                </linearGradient>
                <linearGradient className="gradient-ecole" id={"gradient-ecole-" + id} >
                    <stop className="start" offset="0%" stopColor="#B4C9FF" />
                    <stop className="end" offset="100%" stopColor="#B8C4FF" />
                </linearGradient>
                <linearGradient className="gradient-directe" id={"gradient-directe-" + id} >
                    <stop className="start" offset="0%" stopColor="#B8C3FF" />
                    <stop className="end" offset="100%" stopColor="#BDBCFF" />
                </linearGradient>
                <linearGradient className="gradient-plus" id={"gradient-plus-" + id} >
                    <stop className="start" offset="0%" stopColor="#BEBBFF" />
                    <stop className="end" offset="100%" stopColor="#C1B7FF" />
                </linearGradient>
            </defs>
        </svg>

    )
}
