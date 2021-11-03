const ScrollControl = (e, pageControl, toggle) => {
    let element = e.target;
    if (e.nativeEvent.wheelDelta < 0) {
        if (Math.ceil(element.scrollTop) <= 0) pageControl(Math.min(7, toggle + 1));
    }
    else {
        if (element.scrollHeight - Math.ceil(element.scrollTop) === element.clientHeight) pageControl(Math.max(0, toggle - 1));
    }
}

// const ScrollControl = (e, pageControl, toggle) => {
//     let element = e.target;
//     if (e.nativeEvent.wheelDelta < 0) {
//         if (Math.ceil(element.scrollTop) <= 0) alert("Top")
//     }
//     else {
//         if (element.getBoundingClientRect().bottom <= window.innerHeight) alert("Bottom")
//     }
// }

export default ScrollControl;