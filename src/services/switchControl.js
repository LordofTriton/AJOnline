// export const ScrollControl = (e, pageControl, toggle) => {
//     let element = e.target;
//     let top = false;
//     let bottom = false;

//     if (e.target.scrollHeight > e.target.clientHeight) {
//         top = element.scrollTop === 0;
//         bottom = element.scrollHeight - element.scrollTop === element.clientHeight;
//     }
//     else {
        
//     }

//     if (bottom) pageControl(Math.min(7, toggle + 1));
//     if (top) pageControl(Math.max(0, toggle - 1));
// }

export const ScrollControl = (element, pageControl, toggle) => {
    alert("Scrolled");
    let top = false;
    let bottom = false;

    top = element.scrollTop === 0;
    bottom = element.scrollHeight - element.scrollTop === element.clientHeight;

    if (bottom) pageControl(Math.min(7, toggle + 1));
    if (top) pageControl(Math.max(0, toggle - 1));
}

export const WheelControl = (e, pageControl, toggle) => {
    alert("Wheeled");
    let top = false;
    let bottom = false;

    if (e.nativeEvent.wheelDelta < 0) {
        top = true;
    }
    else {
        bottom = true;
    }

    if (bottom) pageControl(Math.min(7, toggle + 1));
    if (top) pageControl(Math.max(0, toggle - 1));
}